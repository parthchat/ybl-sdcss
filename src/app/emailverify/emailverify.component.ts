import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { EmailverifyService } from './emailverify.service';

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
  constructor(private emailverifyService: EmailverifyService, private tokenStorage: TokenStorage, private service: DataService, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) {
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

  errorPage() {
    this.router.navigate(['error']);
    this.tokenStorage.clear();
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
    this.emailverifyService.authEmail(this.apiUniqueKey).subscribe(res => {
      console.log(res);
      if (res['payload']['error']['code'] == 2001) {
        this.errorPage();
        return;
      }
      if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
        this._snackBar.open('Invalid Authentication', 'Error', {
          duration: 4000,
        });
        return;
      }
      if (res['payload']['error']['code'] == 2001) {
        this.errorPage();
        return;
      }
      if (res['login_required'] == true) {
        this.errorPage();
        return;
      }
      if (!res['status']) {
        this.errorPage();
        return;
      }
      this.refId = res['payload']['processResponse']['ProcessVariables']['authRefId'];
      this.emailVerify()
    }, error => {
      this.error = error.status;
      this.loading = false;
    })
  }

  emailVerify() {
    this.apiUniqueKey = new Date().getTime().toString();
    this.emailverifyService.verifyemail(this.refId, this.apiUniqueKey).subscribe(res => {
      if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
        this._snackBar.open('Invalid', 'Error', {
          duration: 4000,
        });
        return;
      }
      this.tokenStorage.setAccessToken(res['payload']['processResponse']['authentication-token']);
      if (res['payload']['processResponse']['ProcessVariables']['isAuthValidated'] && res['payload']['processResponse']['authentication-token']) {
        this.verified();
      } else {
        this.errorPage();
        return;
      }

    }, error => {
      this.errorPage();
      return
    })
  }

  verified() {
    this.apiUniqueKey = new Date().getTime().toString();
    this.service.completeSR(this.apiUniqueKey).subscribe(res => {
      if (res['ErrorCode'] == 200) {
        this.Showstatus = true;
        this.loading = false;
        return;
      } else {
        this.loading = false;
        this.emailResult = true;
        return;
      }

    }, error => {
      this.loading = false;
      this.emailResult = true;
      return;
    })
  }

}
