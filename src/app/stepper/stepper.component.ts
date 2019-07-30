import { Component, OnInit } from '@angular/core';
import { StepperService } from './stepper.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonFunctions } from '../core/utils/common-functions';
import { AuthService } from '../core/services/auth/auth.service';
import { AlertMessages } from '../app.constant';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isRNBL: boolean = false;
  isDCL: boolean = false;
  isOTPL: boolean = false;
  apiUniqueKey: string;
  getsession: any;
  loading: boolean;
  arrLoginType: any;
  index: any;
  isShowSubmitBtn: boolean = false;
  selectedOption: string;
  customLoadingTemplate: any;
  constructor(private router: Router, private authService: AuthService, private commonFunctions: CommonFunctions, private stepperService: StepperService, private tokenStorage: TokenStorage, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.getSessiondetails();
  }

  getSessiondetails() {
    this.route.queryParamMap.subscribe(params => {
      let details = { ...params.keys, ...params };
      this.getsession = details['params'];
      if (!this.getsession['sessionId']) {
        this.commonFunctions.showErrorPage();
        return
      }
      this.tokenStorage.setSessionId(this.getsession['sessionId']);
      this.getAuth(); // 1st call 
    });
  }

  getAuth() {
    this.apiUniqueKey = new Date().getTime().toString();
    this.stepperService.getAuth(this.apiUniqueKey).subscribe(
      response => {
        this.loading = false;
        if(response['status']){
          if(response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200'){
            if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
              if(response['payload']['processResponse']['ProcessVariables']['validMols']) {
                this.arrLoginType = response['payload']['processResponse']['ProcessVariables']['validMols'];
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
        } else {
          this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
          this.commonFunctions.showErrorPage()
        }
    }, 
    error => {
      this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
      this.commonFunctions.showErrorPage();
      return;
    })
  }

  selected(i:any){
    this.index = i;
    this.isShowSubmitBtn = true;

    if(this.index == 0) {
      this.selectedOption = "Retail Net Banking Login";
    }
    if(this.index == 1) {
      this.selectedOption = "Debit Card Login";
    }
    if(this.index == 2) {
      this.selectedOption = "OTP Login";
    }
    
  }

  submit() {
    if(this.index == 0) {
      this.router.navigate(['rnbLogin']);
    }
    if(this.index == 1) {
      this.router.navigate(['dcLogin']);
    }
    if(this.index == 2) {
      this.generateOtp();
    }
  }

  generateOtp() {
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.stepperService.auth_reinit(this.apiUniqueKey, 3, '').subscribe(
      response => {
        this.loading = false;
        if(response['status']){
          if(response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200'){
            if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
              if(response['payload']['processResponse']['ProcessVariables']['authRefId']) {
                this.stepperService.otpAuthRefId = response['payload']['processResponse']['ProcessVariables']['authRefId'];
                this.router.navigate(['otpLogin']);
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
