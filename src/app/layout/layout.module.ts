import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardNavComponent],

  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild([])
  ],
  exports: [DashboardNavComponent]
})
export class LayoutModule { }
