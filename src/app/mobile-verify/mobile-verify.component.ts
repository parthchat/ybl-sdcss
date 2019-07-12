import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { MobileVerifyService } from './mobile-verify.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Component({
  selector: 'app-mobile-verify',
  templateUrl: './mobile-verify.component.html',
  styleUrls: ['./mobile-verify.component.css']
})
export class MobileVerifyComponent implements OnInit {
  loading = true;
  otp: string;
  getsession: any;
  Showstatus: any = false;
  refId: any;
  successMsg = false;
  errorMsg = false;
  error: any;
  errorstatus = false;
  customLoadingTemplate: any;
  apiUniqueKey = "";
  constructor(private tokenStorage: TokenStorage, private mobileVerifyService: MobileVerifyService, private router: Router, private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {
    this.getSessiondetails()
  }

  // this gets from url
  getSessiondetails() {
    this.route.queryParamMap.subscribe(params => {
      let details = { ...params.keys, ...params };
      this.getsession = details['params'];
      if(!this.getsession['sessionId']){
        this.router.navigate(['404']);
        return
      }
      this.tokenStorage.setSessionId(this.getsession['sessionId']);
      this.getAuth(); // 1st call 
    });
  }

  sendError() {
    this.Showstatus = false;
    this.error = '401';
  }

  succes(){
    this.successMsg = true;
    this.Showstatus = false;
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
    this.mobileVerifyService.getAuthMobile(this.apiUniqueKey).subscribe(res => {
      if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
        this.sendError();
        this.loading = false;
        return;
      }
      if (res['login_required'] == true) {
        this.sendError();
        this.loading = false;
        return;
      }
      this.Showstatus = res['status'];
      if (!this.Showstatus || res['login_required'] == true) {
        this.sendError();
        this.loading = false;
        return;
      }
      this.loading = false;
      this.refId = res['payload']['processResponse']['ProcessVariables']['authRefId'];
    }, error => {
      this.error = error.status;
      this.loading = false;
    })
  }


  submitOtp() {
    if (this.otp.length !== 6) {
      this.errorstatus = true;
      return;
    }
    this.loading = true;
    this.otp.toString();
    this.apiUniqueKey = new Date().getTime().toString();
    this.mobileVerifyService.verifyMobileOtp(this.refId, this.otp, this.apiUniqueKey).subscribe(
      res => {
        if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
          this.sendError();
          this.loading = false;
          return;
        }
        if (res['login_required'] == true) {
          this.sendError();
          this.loading = false;
          return;
        }
        if (!res['payload']['processResponse']['ProcessVariables']['isAuthValidated']) {
          this.errorstatus = true;
          this.loading = false;
          this.otp = '';
          return;
        }
        this.tokenStorage.setAccessToken(res['payload']['processResponse']['authentication-token']);
        if(res['payload']['processResponse']['authentication-token']){
          this.mobileTokenVerify();
        }
      }, error => {
        this.loading = false;
        console.log(error);
        this.sendError();
      }
    )
  }

  mobileTokenVerify(){
    this.apiUniqueKey = new Date().getTime().toString();
    this.service.completeSR(this.apiUniqueKey).subscribe(res => {
      if (res['ErrorCode'] == 200) {
        this.succes();
        this.loading = false;
        return;
      } else {
        this.sendError();
        this.loading = false;
        return;
      }
    }, error => {
      this.sendError();
      this.loading = false;
      return;
    })
  }

}
