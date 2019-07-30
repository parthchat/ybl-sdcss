import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { EmailverifyService } from './emailverify.service';
import { CommonFunctions } from '../core/utils/common-functions';
import { AuthService } from '../core/services/auth/auth.service';
import { AlertMessages } from '../app.constant';

@Component({
  selector: 'app-emailverify',
  templateUrl: './emailverify.component.html',
  styleUrls: ['./emailverify.component.css']
})
export class EmailverifyComponent implements OnInit {
  online: Observable<boolean>;
  apiUniqueKey = "";
  getsession: any;
  loading = true;
  error: any;
  Showstatus: boolean = false;
  refId: any;
  check: boolean;
  token: any;
  emailResult: boolean;
  customLoadingTemplate: any;
  constructor(private authService: AuthService, private commonFunctions: CommonFunctions, private emailverifyService: EmailverifyService, private tokenStorage: TokenStorage, private service: DataService, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) {
    this.online = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
  }

  ngOnInit() {
    this.getSessiondetails();
  }
  sendError() {
    this.Showstatus = false;
    this.error = '401';
    this.loading = false;
    return;
  }

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

  getAuth() {
    this.apiUniqueKey = new Date().getTime().toString();
    this.emailverifyService.authEmail(this.apiUniqueKey).subscribe(response => {
      this.loading = false;
      if(response['status']){
        if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
          if(response['payload']['processResponse']['ProcessVariables']['authRefId']) { // set auth token
            this.refId = response['payload']['processResponse']['ProcessVariables']['authRefId'];
            this.emailVerify()
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

  emailVerify() {
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.emailverifyService.verifyemail(this.refId, this.apiUniqueKey).subscribe(
      response => {
        this.loading = false;
        if(response['status']){
          if(response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == this.apiUniqueKey) {
            if(response['payload']['processResponse']['authentication-token']) { // set auth token
              this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
              this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
              this.verified();
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

  verified() {
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.service.completeSR(this.apiUniqueKey).subscribe(res => {
      this.loading = false;
      if (res['ErrorCode'] == 200) {
        this.Showstatus = true;
        this.loading = false;
        return;
      } else {
        this.loading = false;
        this.emailResult = true;
        return;
      }
    }, 
    error => {
      this.loading = false;
      // this.emailResult = true;
      this.commonFunctions.showErrorPage();
      return;
    })
  }

}
