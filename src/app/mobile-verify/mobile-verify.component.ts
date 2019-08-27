import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MobileVerifyService } from './mobile-verify.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonFunctions } from '../core/utils/common-functions';
import { AuthService } from '../core/services/auth/auth.service';
import { AlertMessages } from '../app.constant';

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.component.html',
  styleUrls: ['./mobile-verify.component.css']
})
export class MobileVerifyComponent implements OnInit {
  loading = true;
  otpLoginForm: FormGroup;
  otpPattern = /^[0-9]{6}$/;
  getsession: any;
  refId: any;
  successMsg = false;
  errorMsg = false;
  error: any;
  errorstatus = false;
  customLoadingTemplate: any;
  apiUniqueKey = "";
  constructor(private authService: AuthService, private commonFunctions: CommonFunctions, private formBuilder: FormBuilder, private tokenStorage: TokenStorage, private mobileVerifyService: MobileVerifyService, private router: Router, private route: ActivatedRoute, private service: DataService) { }

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
    this.getSessiondetails()
  }

  // this gets from url
  getSessiondetails() {
    this.route.queryParamMap.subscribe(params => {
      let details = { ...params.keys, ...params };
      this.getsession = details['params'];
      if (!this.getsession['sessionId']) {
        this.router.navigate(['404']);
        return
      }
      this.tokenStorage.setSessionId(this.getsession['sessionId']);
      this.getAuth(); // 1st call 
    });
  }

  sendError() {
    this.error = '401';
  }

  succes() {
    this.successMsg = true;
  }
  // On OTP validation
  keyPress(event: any) {
    this.errorstatus = false;
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 6 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  // 1st call auth call
  getAuth() {
    this.apiUniqueKey = new Date().getTime().toString();
    this.mobileVerifyService.getAuthMobile(this.apiUniqueKey).subscribe(response => {
      this.loading = false;
      if(response['status']){
        if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
          if(response['payload']['processResponse']['ProcessVariables']['authRefId']) { // set auth token
            this.refId = response['payload']['processResponse']['ProcessVariables']['authRefId'];
          } else {
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            this.commonFunctions.showErrorPage();
          }
        } else {
          this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
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
    });
  }

  public inputValidator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input
    } else {
      if(event.target.value.length == 6){
        this.submitOtp();
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


  submitOtp() {
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.mobileVerifyService.verifyMobileOtp(this.refId, this.otpLoginForm.controls.mobileOTP.value, this.apiUniqueKey).subscribe(
      response => {
        this.loading = false;
        if(response['status']){
          if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
            if(response['payload']['processResponse']['authentication-token']) { // set auth token
              this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
              this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
              this.mobileTokenVerify();
              // this.router.navigate(['customer']);
            } else {
              this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
              this.commonFunctions.showErrorPage();
            }
          } else {
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
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
  }

  mobileTokenVerify() {
    this.apiUniqueKey = new Date().getTime().toString();
    this.loading = true;
    this.service.completeSR(this.apiUniqueKey).subscribe(res => {
      this.loading = false;
      if (res['ErrorCode'] == 200) {
        this.succes();
        return;
      } else {
        this.commonFunctions.showErrorPage();
        return;
      }
    }, error => {
      this.loading = true;
      this.commonFunctions.showErrorPage();
      return;
    })
  }

}
