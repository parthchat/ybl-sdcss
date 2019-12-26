import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CommonFunctions } from '../core/utils/common-functions';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth/auth.service';
import { AlertMessages } from '../app.constant';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  active_option: any = 0;
  authroization_options = [];
  loading: boolean;
  index: any;
  selected_authorization_name: any;
  constructor(private authService: AuthService, private router: Router, private service: DataService, private commonFunctions: CommonFunctions) { }

  ngOnInit() {
    this.loading = true
    let apiUniqueKey = new Date().getTime().toString();
    this.service.getAuth(apiUniqueKey).subscribe(res => {
      this.loading = false;
      if (res['ErrorCode'] == 200) {
        this.loading = false;
        console.log(res, 'auth options');
        this.authroization_options = res['ProcessVariables']['validMols'];
        // for(var i=0;i<=this.authroization_options[i].length;i++){
        //   if(this.authroization_options[i]['id']==1){
        //     this.authroization_options[i].push({'icon':'computer'});
        //   }
        // }
        console.log(this.authroization_options);
      } else {
        this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
        this.commonFunctions.showErrorPage();
        return;
      }
    },
      error => {
        this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
        this.commonFunctions.showErrorPage();
        return;
      })
  }
  authorization(option_val, i, name: any) {
    this.index = i
    this.active_option = option_val;
    console.log(this.active_option, option_val)
    this.selected_authorization_name = name;
    console.log(this.selected_authorization_name);
  }

  submit() {
    if (this.active_option == 1) {
      this.router.navigate(['rnbLogin']);
    }
    if (this.active_option == 2) {
      this.router.navigate(['dcLogin']);
    }
    if (this.active_option == 3) {
      this.router.navigate(['otpLogin']);
    }
    if (this.active_option == 4) {
      this.router.navigate(['credit_card']);
    }
    if (this.active_option == 6) {
      this.router.navigate(['under_construction']);
    }
  }
}
