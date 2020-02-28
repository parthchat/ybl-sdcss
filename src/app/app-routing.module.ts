import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { CustomerComponent } from './customer/customer.component';
import { AcceptRejectComponent } from './accept-reject/accept-reject.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { MobileVerifyComponent } from './mobile-verify/mobile-verify.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { StepperComponent } from './stepper/stepper.component';
import { RetailNetBankingComponent } from './stepper/retail-net-banking/retail-net-banking.component';
import { DebitCardComponent } from './stepper/debit-card/debit-card.component';
import { OtpLoginComponent } from './stepper/otp-login/otp-login.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CreditCardComponent } from './stepper/credit-card/credit-card.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AuthGuard } from './auth-guard/auth.guard';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';


const routes: Routes = [
  // { path: '', component: OtpPageComponent },   // OLD
  { path: '', component: StepperComponent },     // NEW
  { path: 't', component: OtpPageComponent },
  { path: 'rnbLogin', component: RetailNetBankingComponent,canActivate: [AuthGuard]},
  { path: 'dcLogin', component: DebitCardComponent,canActivate: [AuthGuard]},
  { path: 'otpLogin', component: OtpLoginComponent},
  { path: 'credit_card', component: CreditCardComponent,canActivate: [AuthGuard]},
  { path: 'profile_update', component: ProfileUpdateComponent,canActivate: [AuthGuard]},
  { path: 'customer', component: CustomerComponent,canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent },
  { path: 'result', component: AcceptRejectComponent },
  { path: 'emailverify', component: EmailverifyComponent },
  { path: 'error', component: ErrorpageComponent },
  { path: 'mobileverify', component: MobileVerifyComponent,canActivate: [AuthGuard] },
  { path: 'confirm-request', component: AuthorizationComponent,canActivate: [AuthGuard] },
  { path: 'under_construction', component: UnderConstructionComponent },
  { path: '**', redirectTo: '404' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
