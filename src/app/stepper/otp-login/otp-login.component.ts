import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CommonFunctions } from 'src/app/core/utils/common-functions';
import { StepperService } from '../stepper.service';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { Router } from '@angular/router';
import { AlertMessages } from 'src/app/app.constant';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit {
  hide = true;
  otpLoginForm: FormGroup;
  otpPattern = /^[0-9]{6}$/
  subscriptions: Subscription;
  apiUniqueKey: string;
  loading: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private commonFunctions: CommonFunctions, private stepperService: StepperService, private tokenStorage: TokenStorage, private router: Router) { }

  ngOnInit() {
    this.otpLoginForm = this.formBuilder.group({
      mobileOTP: [
        '',
        [
          Validators.required,
          Validators.maxLength(6),
          Validators.minLength(6),
          Validators.pattern(this.otpPattern)
        ]
      ]
    });
  }

  public inputValidator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input
    } else {
      if(event.target.value.length == 6){
        this.otpLogin();
      }
    }
  }

  getMobileOTPErrorMessage() {
    const formCntrl = this.otpLoginForm.controls;
    return formCntrl.mobileOTP.hasError('required') ? 'Please enter the OTP sent on your registered mobile.' : 
      formCntrl.mobileOTP.hasError('maxlength') ? 'Only 6 digit OTP allowed.' : 
      formCntrl.mobileOTP.hasError('minlength') ? 'Enter 6 digit OTP.' : 
      '';
  }

  otpLogin() {
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    if(this.stepperService.otpAuthRefId){
      this.subscriptions = this.stepperService.verifyDetails(3, '', '', '', '', this.stepperService.otpAuthRefId, this.otpLoginForm.controls.mobileOTP.value, this.apiUniqueKey).subscribe(
        response => {
          this.loading = false;
          if(response['status']){
            if(response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200'){
              if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
                if(response['payload']['processResponse']['authentication-token']) { // set auth token
                  this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
                  this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
                  this.router.navigate(['customer']);
                } else {
                  this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
                  this.commonFunctions.showErrorPage();
                }
              } else {
                this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
                this.commonFunctions.showErrorPage();
              }
            } else {
              this.authService.alertToUser(response['payload']['processResponse']['ErrorMessage']);
              this.commonFunctions.showErrorPage();
            }  
          } else {
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            this.commonFunctions.showErrorPage();
          }
      }, 
      error => {
        this.loading = false;
        this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
        this.commonFunctions.showErrorPage();
        return;
      })
    } else {
      this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
      this.commonFunctions.showErrorPage();
    }
  }
}
