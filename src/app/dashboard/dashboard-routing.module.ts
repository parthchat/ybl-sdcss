import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { AuthGuard } from '../core/guard/auth.guard';
import { ServicesStepperComponent } from './components/services-stepper/services-stepper.component';

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
        path: 'services-stepper/financial',
        component: ServicesStepperComponent,
        data: {title: "Services Stepper"},
        canActivate: [AuthGuard]
      },
      {
        path: 'services-stepper/regulatory',
        component: ServicesStepperComponent,
        data: {title: "Services Stepper"},
        canActivate: [AuthGuard]
      },
      {
        path: 'services-stepper/non-financial',
        component: ServicesStepperComponent,
        data: {title: "Services Stepper"},
        canActivate: [AuthGuard]
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
