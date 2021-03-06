import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CommonFunctions } from 'src/app/core/utils/common-functions';
import { StepperService } from '../stepper.service';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { Router } from '@angular/router';
import { AlertMessages } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-otp-login',
  templateUrl: './otp-login.component.html',
  styleUrls: ['./otp-login.component.css']
})
export class OtpLoginComponent implements OnInit {
  hide = true;
  otpLoginForm: FormGroup;
  otpPattern = /^[0-9]{6}$/;
  apiUniqueKey: string;
  loading: boolean;
  customLoadingTemplate: any;
  constructor(private service: DataService, private formBuilder: FormBuilder, private authService: AuthService, private commonFunctions: CommonFunctions, private stepperService: StepperService, private tokenStorage: TokenStorage, private router: Router) { }

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
      if (event.target.value.length == 6) {
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
    // If user in Authorization Page  i.e when user uploads pic and submits
    if (this.stepperService.detect_auth == 1) {
      this.otpLogin_for_authorization()
    }
    // If user in Authentication Page i.e when user in links on link
    else {
      this.apiUniqueKey = new Date().getTime().toString();
      if (this.stepperService.otpAuthRefId) {
        this.stepperService.verifyDetails(3, '', '', '', '', this.stepperService.otpAuthRefId, this.otpLoginForm.controls.mobileOTP.value, this.apiUniqueKey).subscribe(
          response => {
            this.loading = false;
            if (response['status']) {
              if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
                if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
                  if (response['payload']['processResponse']['authentication-token']) { // set auth token
                    this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
                    console.log(response['payload']['processResponse']['authentication-token'], 'token')
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

  // For Authorization OTP Options  
  otpLogin_for_authorization() {
    let apiUniqueKey = new Date().getTime().toString();
    if (this.stepperService.otpAuthRefId) {
      this.stepperService.OtpAuthorization(3, '', '', '', '', this.stepperService.otpAuthRefId, this.otpLoginForm.controls.mobileOTP.value, apiUniqueKey).subscribe(
        response => {
          this.loading = false;
          if (response['Error'] == '0' && response['ErrorCode'] == '200') {
            if (response['ProcessVariables']['apiUniqueReqId'] == apiUniqueKey) {
              this.upload_doc_service();
              // this.router.navigate(['result']);
            } else {
              this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
              this.commonFunctions.showErrorPage();
            }
          } else {
            this.authService.alertToUser(response['ErrorMessage']);
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
  upload_doc_service() {
    this.loading = true;
    this.service.acceptApi(this.service.objc_details)
      .subscribe(
        res => {
          this.loading = false;
          if (res['ErrorCode'] == 200) {
            console.log('Got 200')
            this.tokenStorage.clear();
            this.router.navigate(['result']);
            return;
          }
          else if (res['login_required'] == true || res['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey || res['Error'] == 1) {
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            this.commonFunctions.showErrorPage();
            console.log('Got 600')
            return;
          }
          else {
            console.log('Got 400')
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            this.commonFunctions.showErrorPage();
            return;
          }

        }, error => {
          this.loading = false;
          this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
          this.commonFunctions.showErrorPage();
        }
      )
  }
}
