import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { DashboardComponent } from './dashboard.component';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from '../core/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { LayoutModule } from '../layout/layout.module';
import { FilterInterceptor } from '../core/utils/filter.interceptor';
import { CommonFunctions } from '../core/utils/common-functions';
import { NgModule } from '@angular/core';
import { SelectServiceComponent } from './components/select-service/select-service.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { ServicesStepperComponent } from './components/services-stepper/services-stepper.component';
import { SelectServicesComponent } from './components/services-stepper/select-services/select-services.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    NotFoundComponent,
    DashboardComponent,
    SelectServiceComponent,
    NewCustomerComponent,
    ServicesStepperComponent,
    SelectServicesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
  ],
  exports: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FilterInterceptor,
      multi: true,
    },
    DatePipe,
    CommonFunctions
  ],
  entryComponents: [
  ]
})
export class DashboardModule {}
