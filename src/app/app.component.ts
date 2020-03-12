import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { CommonFunctions } from './core/utils/common-functions';
import { TokenStorage } from './core/services/auth/token-storage.service';
import { Subject } from 'rxjs';
import { APP_VERSION } from './app.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  readonly APP_VERSION = APP_VERSION;

  isLocationChanged: boolean = false;
  userInactive: Subject<any> = new Subject();
  constructor(private location: LocationStrategy, private commonFunctions: CommonFunctions) {
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
      // set isBackButtonClicked to true.
      this.isLocationChanged = true;
      this.setError();
      return false;
    });
  }

  setError(){
    if(this.isLocationChanged){
        setTimeout(() => this.commonFunctions.showErrorPage());
    }
  }
}
