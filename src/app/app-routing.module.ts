import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { CustomerComponent } from './customer/customer.component';
import { AcceptRejectComponent } from './accept-reject/accept-reject.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { MobileVerifyComponent } from './mobile-verify/mobile-verify.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


const routes: Routes = [
  { path: '', component: OtpPageComponent },
  { path: 't', component: OtpPageComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'result', component: AcceptRejectComponent },
  { path: 'emailverify', component: EmailverifyComponent },
  { path: 'error', component: ErrorpageComponent },
  { path: 'mobileverify', component: MobileVerifyComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
