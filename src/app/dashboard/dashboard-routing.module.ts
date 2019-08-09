import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { AuthGuard } from '../core/guard/auth.guard';
import { ServicesStepperComponent } from './components/services-stepper/services-stepper.component';
import { SelectServicesComponent } from './components/services-stepper/select-services/select-services.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children : [
      {
        path: '',
        component: DashboardComponent,
        data: {title: "My Dashboard"},
      },
      {
        path: 'services-stepper',
        component: ServicesStepperComponent,
        data: {title: "Services Stepper"},
        canActivate: [AuthGuard],
        children : [
          {
            path: 'financial',
            component: SelectServicesComponent
          },
          {
            path: 'non-financial',
            component: SelectServicesComponent
          },
          {
            path: 'regulatory',
            component: SelectServicesComponent
          }
          
        ]
      },
      {
        path: 'newCust',
        component: NewCustomerComponent,
        data: {title: "New Customer"},
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'notfound',
    component: NotFoundComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
