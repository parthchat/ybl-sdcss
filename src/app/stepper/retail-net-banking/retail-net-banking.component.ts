import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Constants, AlertMessages } from 'src/app/app.constant';
import { Router } from '@angular/router';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { StepperService } from '../stepper.service';
import { CommonFunctions } from 'src/app/core/utils/common-functions';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import * as CryptoJS from 'crypto-js';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-retail-net-banking',
  templateUrl: './retail-net-banking.component.html',
  styleUrls: ['./retail-net-banking.component.css']
})
export class RetailNetBankingComponent implements OnInit {
  hide: boolean = true;
  isShowPasswordField: boolean = false;
  isNextButton: boolean = true;
  isLoginButton: boolean = false;
  custIdPattern = /^[a-zA-Z0-9]$/;
  rnbLoginForm: FormGroup;
  loading: boolean;
  apiUniqueKey: string;
  salt: any;
  customLoadingTemplate: any;
  constructor(private service: DataService, private formBuilder: FormBuilder, private authService: AuthService, private commonFunctions: CommonFunctions, private stepperService: StepperService, private tokenStorage: TokenStorage, private router: Router) { }

  ngOnInit() {
    this.rnbLoginForm = this.formBuilder.group({
      custId: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(7),
          Validators.pattern("^[0-9]*$"),
          // Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(10),
          Validators.pattern(Constants.VALIDATION_PASSWORD)
        ]
      ]
    });
  }

  getCustIdErrorMessage() {
    const formCntrl = this.rnbLoginForm.controls;
    return formCntrl.custId.hasError('required') ? 'This field is required.' :
      formCntrl.custId.hasError('minlength') ? 'Minimum limit 7 characters.' :
        formCntrl.custId.hasError('maxlength') ? 'Maximum limit 20 characters.' :
          '';
  }

  getPasswordErrorMessage() {
    const formCntrl = this.rnbLoginForm.controls;
    return formCntrl.password.hasError('required') ? 'This field is required.' :
      formCntrl.password.hasError('pattern') ? 'Password should contains at least 1 uppercase, 1 lowercase, 1 numeric & 1 special characters.' :
        formCntrl.password.hasError('minlength') ? 'Minimum limit 10 characters.' :
          formCntrl.password.hasError('maxlength') ? 'Maximum limit 14 characters.' :
            '';
  }

  showPassField() {
    this.loading = true;
    if (this.stepperService.detect_auth == 1) {
      this.authorization_RNB();
    } else {
      this.apiUniqueKey = new Date().getTime().toString();
      this.stepperService.auth_reinit(this.apiUniqueKey, 1, this.rnbLoginForm.controls.custId.value).subscribe(
        response => {
          this.loading = false;
          if (response['status']) {
            if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
              if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
                if (response['payload']['processResponse']['ProcessVariables']['iSalt']) {
                  this.salt = response['payload']['processResponse']['ProcessVariables']['iSalt'];
                  this.isShowPasswordField = true;
                  this.isNextButton = false;
                  this.isLoginButton = true;
                  this.rnbLoginForm.controls.custId.disable();
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
            this.commonFunctions.showErrorPage()
          }

        },
        error => {
          this.loading = false;
          this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
          this.commonFunctions.showErrorPage();
          return;
        })
    }
  }

  authorization_RNB() {
    let apiUniqueKey = new Date().getTime().toString();
    if (this.stepperService.otpAuthRefId) {
      this.stepperService.auth_reinit2(apiUniqueKey, 1, this.rnbLoginForm.controls.custId.value).subscribe(
        response => {
          this.loading = false;
          if (response['Error'] == '0' && response['ErrorCode'] == '200') {
            if (response['ProcessVariables']['apiUniqueReqId'] == apiUniqueKey) {
              if (response['ProcessVariables']['iSalt']) {
                this.salt = response['ProcessVariables']['iSalt'];
                this.isShowPasswordField = true;
                this.isNextButton = false;
                this.isLoginButton = true;
                this.rnbLoginForm.controls.custId.disable();
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
  }

  addPrefix(val) {
    console.log("len", val.length)
    if (val.length == 1) {
      this.rnbLoginForm.controls.custId.setValue('000000' + val);
    }
    if (val.length == 2) {
      this.rnbLoginForm.controls.custId.setValue('00000' + val);
    }
    if (val.length == 3) {
      this.rnbLoginForm.controls.custId.setValue('0000' + val);
    }
    if (val.length == 4) {
      this.rnbLoginForm.controls.custId.setValue('000' + val);
    }
    if (val.length == 5) {
      this.rnbLoginForm.controls.custId.setValue('00' + val);
    }
    if (val.length == 6) {
      this.rnbLoginForm.controls.custId.setValue('0' + val);
    }
    if (val.length > 6) {
      this.rnbLoginForm.controls.custId.setValue(val);
    }
  }

  public inputValidator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input
    } else {
      let val = event.target.value.replace(/^0+/, '');
      // console.log("val", val, event.target.value);
      this.addPrefix(val);
    }
  }

  rnbLogin() {
    // old keysize -> { keySize: 512 / 32, iterations: 600 }
    if (this.stepperService.detect_auth == 1) {
      this.rnbLogin_for_authorization();
    } else {
      var key512Bits1000Iterations = CryptoJS.PBKDF2(this.rnbLoginForm.controls.password.value, this.salt, { keySize: 256 / 32, iterations: 500 });
      var encryptedPassword = key512Bits1000Iterations.toString();
      this.loading = true;
      this.apiUniqueKey = new Date().getTime().toString();
      this.stepperService.verifyDetails(1, this.rnbLoginForm.controls.custId.value, encryptedPassword, '', '', '', '', this.apiUniqueKey).subscribe(
        response => {
          this.loading = false;
          if (response['status']) {
            if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
              if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
                if (response['payload']['processResponse']['authentication-token']) { // set auth token
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
    }
  }


  rnbLogin_for_authorization() {
    var key512Bits1000Iterations = CryptoJS.PBKDF2(this.rnbLoginForm.controls.password.value, this.salt, { keySize: 256 / 32, iterations: 500 });
    var encryptedPassword = key512Bits1000Iterations.toString();
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.stepperService.OtpAuthorization(1, this.rnbLoginForm.controls.custId.value, encryptedPassword, '', '', '', '', this.apiUniqueKey).subscribe(
      response => {
        this.loading = false;
        if (response['Error'] == '0' && response['ErrorCode'] == '200') {
          if (response['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
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
  }

  upload_doc_service() {
    this.loading = true;
    this.service.acceptApi(this.service.objc_details)
      .subscribe(
        res => {
          this.loading = false;
          if (res['ProcessVariables']['response'][0]['statusCode'] == 200) {
            this.tokenStorage.clear();
            this.router.navigate(['result']);
            return;
          }
          else if (res['login_required'] == true || res['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey || res['Error'] == 1) {
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            this.commonFunctions.showErrorPage();
            return;
          }
          else {
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
