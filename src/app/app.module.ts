import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { CommonFunctions } from './core/utils/common-functions';
import { FilterInterceptor } from './core/utils/filter.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth/auth.service';
import { NgModule } from '@angular/core';
import { OtpPageComponent } from './otp-page/otp-page.component';
import { CustomerComponent } from './customer/customer.component';
import { AcceptRejectComponent } from './accept-reject/accept-reject.component';
import { EmailverifyComponent } from './emailverify/emailverify.component';
import { MobileVerifyComponent } from './mobile-verify/mobile-verify.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { MydirectDirective } from './directives/mydirect.directive';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { StepperComponent } from './stepper/stepper.component';
import { RetailNetBankingComponent } from './stepper/retail-net-banking/retail-net-banking.component';
import { DebitCardComponent } from './stepper/debit-card/debit-card.component';
import { OtpLoginComponent } from './stepper/otp-login/otp-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CreditCardComponent } from './stepper/credit-card/credit-card.component';
import { AadharCardComponent } from './stepper/aadhar-card/aadhar-card.component';
import { DialogBoxComponent } from './core/components/dialog-box/dialog-box.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpPageComponent,
    CustomerComponent,
    AcceptRejectComponent,
    EmailverifyComponent,
    MobileVerifyComponent,
    NotFoundComponent,
    MydirectDirective,
    ErrorpageComponent,
    StepperComponent,
    RetailNetBankingComponent,
    DebitCardComponent,
    OtpLoginComponent,
    CreditCardComponent,
    AadharCardComponent,
    DialogBoxComponent,
    AuthorizationComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    NgxLoadingModule.forRoot({}),
  ],
  entryComponents: [DialogBoxComponent],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FilterInterceptor,
      multi: true
    },
    DatePipe,
    CommonFunctions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }