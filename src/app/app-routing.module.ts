import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', component: OtpPageComponent },   // OLD

// updated new phase
  // { path: '', component: StepperComponent },     // NEW
  // { path: 't', component: OtpPageComponent },
  // { path: 'rnbLogin', component: RetailNetBankingComponent},
  // { path: 'dcLogin', component: DebitCardComponent},
  // { path: 'otpLogin', component: OtpLoginComponent},
  // { path: 'customer', component: CustomerComponent },
  // { path: '404', component: NotFoundComponent },
  // { path: 'result', component: AcceptRejectComponent },
  // { path: 'emailverify', component: EmailverifyComponent },
  // { path: 'error', component: ErrorpageComponent },
  // { path: 'mobileverify', component: MobileVerifyComponent },
  // { path: '**', redirectTo: '404' },

  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
