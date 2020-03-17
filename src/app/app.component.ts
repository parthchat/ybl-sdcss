import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { CommonFunctions } from './core/utils/common-functions';
import { TokenStorage } from './core/services/auth/token-storage.service';
import { Subject } from 'rxjs';
import { DataService } from './services/data.service';
import { AlertMessages } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  loading: boolean;
  responses: any = [];
  customLoadingTemplate: any;
  isLocationChanged: boolean = false;
  userInactive: Subject<any> = new Subject();
  res_: any;
  sr_type: any;
  constructor(private tokenStorage: TokenStorage,private location: LocationStrategy, private commonFunctions: CommonFunctions, private serive: DataService) {
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
      // set isBackButtonClicked to true.
      this.isLocationChanged = true;
      this.setError();
      return false;
    });
  }

  ngOnInit() {
    if(this.serive.customerDetails || this.tokenStorage.getSrId()){
      this.res_ = this.serive.customerDetails;
    }else{
      if(this.tokenStorage.getSrId()){
        let apiUniqueKey = new Date().getTime().toString();
        this.serive.cust(apiUniqueKey).subscribe(res => {
          console.log(res, 'app Cmp');
          if (res['ErrorCode'] == 200) {
            this.res_ = res;
            this.sr_type = this.res_['ProcessVariables']['srDetails']['srType'];
            let cust_details = this.res_['ProcessVariables']['custDetails'];
            let cust_id = cust_details['maskedCustId'];
            let srType_name = this.res_['ProcessVariables']['srDetails']['srName'];
            let old_pan_number = this.res_['ProcessVariables']['panUpdate']['oldPan'] ? this.res_['ProcessVariables']['panUpdate']['oldPan'] : AlertMessages.NA_BANK_MSG;
            let new_pan_number = this.res_['ProcessVariables']['panUpdate']['newPan'] ? this.res_['ProcessVariables']['panUpdate']['newPan'] : AlertMessages.NA_BANK_MSG;
            this.responses.push({ 'cust_id': cust_id, 'srType_name': srType_name, 'old_pan_number': old_pan_number, 'new_pan_number': new_pan_number });
          }
          else{
            this.commonFunctions.showErrorPage();
            return;
          }
        })
      }
   
    }

  }

  setError() {
    if (this.isLocationChanged) {
      setTimeout(() => this.commonFunctions.showErrorPage());
    }
  }
}
