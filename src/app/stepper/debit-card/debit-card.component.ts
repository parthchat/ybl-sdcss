import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { StepperService } from '../stepper.service';
import { CommonFunctions } from 'src/app/core/utils/common-functions';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AlertMessages } from 'src/app/app.constant';

@Component({
  selector: 'app-debit-card',
  templateUrl: './debit-card.component.html',
  styleUrls: ['./debit-card.component.css']
})
export class DebitCardComponent implements OnInit {
  hide = true;
  dcLoginForm: FormGroup;
  cardPinNumber: any;
  cardNumber: any;
  loading: boolean;
  apiUniqueKey: string;
  customLoadingTemplate: any;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private commonFunctions: CommonFunctions, private stepperService: StepperService, private tokenStorage: TokenStorage, private router: Router) { }

  ngOnInit() {
    this.dcLoginForm = this.formBuilder.group({
      cardNumber: [
        '',[
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16)
        ]
      ],
      transPIN: [
        '',[
          Validators.required,
          Validators.maxLength(4),
          Validators.minLength(4)
        ]
      ]
    });
  }

  public inputValidator(event: any) {
    const pattern = /^[0-9]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9]/g, "");
      // invalid character, prevent input
    }
  }

  getDCLoginErrorMessage() {
    const formCntrl = this.dcLoginForm.controls;
    return formCntrl.cardNumber.hasError('required') ? 'This field is required.' :
      formCntrl.cardNumber.hasError('minlength') ? 'Enter 16 digit number.' :
      formCntrl.cardNumber.hasError('maxlength') ? 'Only 16 digit number allowed.' :
        '';
  }

  getDCLoginPINErrorMessage() {
    const formCntrl = this.dcLoginForm.controls;
    return formCntrl.transPIN.hasError('required') ? 'This field is required.' :
      formCntrl.transPIN.hasError('minlength') ? 'Enter 4 digit pin number.' :
      formCntrl.transPIN.hasError('maxlength') ? 'Only 4 digit pin number allowed.' :
        '';
  }

  pinEncrption(pin: any, cardno: any) {
    var PINHexavalue = "0" + pin.toString().length + pin.toString();
    for (var i = 1; i <= (16 - (pin.toString().length) - 2); i++) {
      PINHexavalue += "F";
    }
    var AccountHexavalue = "0000" + cardno.toString().substring(3, 15);
    var encryptedPin = this.xoR_hex(PINHexavalue, AccountHexavalue);
    return (encryptedPin).substr(1, 15);
  }

  xoR_hex(a: any, b: any) {
    var res = '';
    var i = a.length;
    var j = b.length;
    while (i-- > 0 && j-- > 0) {
      res = (parseInt(a.charAt(i), 16) ^ parseInt(b.charAt(j), 16)).toString(16) + res;
    }
    return res;
  }

  dcLogin() {
    this.cardNumber = this.dcLoginForm.controls.cardNumber.value;
    this.cardPinNumber = this.dcLoginForm.controls.transPIN.value;
    let encPass = this.pinEncrption(this.cardPinNumber, this.cardNumber);
    encPass = '0'+encPass;
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.stepperService.verifyDetails(2, '', '', this.cardNumber, encPass, '', '', this.apiUniqueKey).subscribe(
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
