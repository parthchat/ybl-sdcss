import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { OtpPageService } from './otp-page.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent implements OnInit {
  otp: string;
  getsession: any;
  refId: any;
  error: any;
  Showstatus: any = false;
  customLoadingTemplate: any;
  loading = true;
  errorstatus = false;
  refIdfail = false;
  public href: string = "";
  apiUniqueKey = "";
  mobileRoute = false;
  constructor(private otpPageService: OtpPageService, private tokenStorage: TokenStorage, private router: Router, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    // FOR LOCALHOST

    // if (window.location.pathname == '/t') {
    //   this.mobileRoute = true;
    // }

    //FOR UAT or PROD
    if(window.location.pathname=='/sdcss/d/t'){
      this.mobileRoute = true;
    }
    this.getSessiondetails(); //get session id and all
  }

  getSessiondetails() {
    this.route.queryParamMap.subscribe(params => {
      let details = { ...params.keys, ...params };
      this.getsession = details['params'];
      if (!this.getsession['sessionId']) {
        this.errorPage();
        return
      }
      this.tokenStorage.setSessionId(this.getsession['sessionId']);
      this.getAuth(); // 1st call 
    });
  }

  resendOtp(){
    this.getAuth();
    this._snackBar.open('OTP has been sent you', 'Resend OTP', {
      duration: 4000,
    });
    return;
  }

  sendError() {
    this.tokenStorage.clear();
    this.Showstatus = false;
    this.error = '401';
    this.loading = false;
  }

  errorPage() {
    this.router.navigate(['error']);
    this.tokenStorage.clear();
  }


  // 1st call auth call
  getAuth() {
    this.apiUniqueKey = new Date().getTime().toString();
    this.otpPageService.getAuth(this.apiUniqueKey).subscribe(res => {
      if (!res['status']) {
        this.errorPage();
        return;
      }
      if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
        this._snackBar.open('Invalid Authentication', 'Error', {
          duration: 4000,
        });
        return;
      }
      this.Showstatus = res['status'];
      if (!this.Showstatus || res['login_required'] == true) {
        this.errorPage();
        return;
      }
      if (res['payload']['processResponse']['ProcessVariables']['authRefId']) {
        this.refId = res['payload']['processResponse']['ProcessVariables']['authRefId'];
      } else {
        this.errorPage();
        return;
      }
      this.loading = false;
    }, error => {
      this.errorPage();
      return;
    })
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

  // Validate Opt with RefID
  submitOtp() {
    this.loading = true;
    if (this.otp.length !== 6) {
      this.errorstatus = true;
      this.loading = false;
      return;
    }
    this.otp.toString();
    this.apiUniqueKey = new Date().getTime().toString();
    this.otpPageService.verifyOtp(this.refId, this.otp, this.apiUniqueKey).subscribe(
      res => {
        if (!res['status']) {
          this.errorPage();
          this.loading = false;
          return;
        }
        if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
          this.sendError();
          this.loading = false;
          return;
        }
        if (res['login_required'] == true) {
          this.errorPage();
          return;
        }
        if (!res['payload']['processResponse']['ProcessVariables']['isAuthValidated']) {
          this.errorstatus = true;
          this.loading = false;
          this.otp = '';
          return;
        }
        if (res['payload']['processResponse']['authentication-token']) {
          this.tokenStorage.setAccessToken(res['payload']['processResponse']['authentication-token']);
          this.tokenStorage.setSrId(res['payload']['processResponse']['ProcessVariables']['srId']);
          this.router.navigate(['customer']);
          this.loading = false;
        } else {
          this.errorPage();
          return
        }
      }, error => {
        this.errorPage();
      }
    )
  }
}
