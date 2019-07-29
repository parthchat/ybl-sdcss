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
  custIdPattern =  /^[a-zA-Z0-9]$/;
  rnbLoginForm: FormGroup;
  subscriptions: Subscription;
  loading: boolean;
  apiUniqueKey: string;
  salt: any;
  customLoadingTemplate: any;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private commonFunctions: CommonFunctions, private stepperService: StepperService, private tokenStorage: TokenStorage, private router: Router) { }

  ngOnInit() {
    this.rnbLoginForm = this.formBuilder.group({
      custId: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(6),
          Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)
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
      formCntrl.custId.hasError('pattern') ? 'Special characters not allowed.' :
      formCntrl.custId.hasError('minlength') ? 'Minimum limit 6 characters.' :
      formCntrl.custId.hasError('maxlength') ? 'Maximum limit 20 characters.' :
        '';
  }

  getPasswordErrorMessage() {
    const formCntrl = this.rnbLoginForm.controls;
    return  formCntrl.password.hasError('required') ? 'This field is required.' :
      formCntrl.password.hasError('pattern') ? 'Password should contains at least 1 uppercase, 1 lowercase, 1 numeric & 1 special characters.' :
      formCntrl.password.hasError('minlength') ? 'Minimum limit 10 characters.' :
      formCntrl.password.hasError('maxlength') ? 'Maximum limit 14 characters.' :
        '';
  }

  showPassField() {
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.subscriptions = this.stepperService.auth_reinit(this.apiUniqueKey, 1, this.rnbLoginForm.controls.custId.value).subscribe(
      response => {
        this.loading = false;
        if(response['status']){
          if(response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200'){
            if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
              if(response['payload']['processResponse']['ProcessVariables']['iSalt']) {
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

  rnbLogin() {
    var key512Bits1000Iterations = CryptoJS.PBKDF2(this.rnbLoginForm.controls.password.value, this.salt, { keySize: 512 / 32, iterations: 600 });
    var encryptedPassword = key512Bits1000Iterations.toString();
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.stepperService.verifyDetails(1, this.rnbLoginForm.controls.custId.value, encryptedPassword, '', '', '', '', this.apiUniqueKey).subscribe(
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
  }

}
