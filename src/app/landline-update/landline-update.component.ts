import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from 'src/app/app.constant';
import { LandlineUpdateService } from './landline-update.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AlertMessages } from 'src/app/app.constant';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-landline-update',
  templateUrl: './landline-update.component.html',
  styleUrls: ['./landline-update.component.scss']
})
export class LandlineUpdateComponent implements OnInit {

  form_group = new FormGroup({
    std_form: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(2), Validators.pattern(Constants.VALIDATION_REGX_STD_NUMBER)]),
    landline_number: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(7), Validators.pattern(Constants.VALIDATION_REGX_NUMBER), Validators.pattern(Constants.VALIDATION_REGEX_LANDLINE_NUMBER)]),
    verify_std: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(2), Validators.pattern(Constants.VALIDATION_REGX_STD_NUMBER)]),
    verify_landline: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(7), Validators.pattern(Constants.VALIDATION_REGX_NUMBER), Validators.pattern(Constants.VALIDATION_REGEX_LANDLINE_NUMBER)]),
  });
  landline_no: any = '';
  old_landline:any = '';
  constructor(private commonService: CommonService, private authService: AuthService, private service: LandlineUpdateService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // get old landline number from server
    this.oldLandline_number();
  }


  // after input fields proceed 
  proceed() {
    this.spinner.show();
    if (this.form_group.controls.std_form.value.length == 2 && this.form_group.controls.landline_number.value.length == 8 || this.form_group.controls.std_form.value.length == 3 && this.form_group.controls.landline_number.value.length == 7) {
      if (this.form_group.controls.std_form.value.toString() != this.form_group.controls.verify_std.value.toString() || this.form_group.controls.landline_number.value.toString() != this.form_group.controls.verify_landline.value.toString()) {
        this.authService.alertToUser(AlertMessages.not_equal_landline_number);
        this.spinner.hide();
        return;
      }
      else {
        // call API to get old landline number from server
        this.getValofInputNumber();
        // check if the old landline is number or just a text message from server
        if (this.landline_no.toString() == this.old_landline.toString()) {
          this.authService.alertToUser('New and Old Landline No. is same');
          this.spinner.hide()
          return;
        }
        this.service.createSR(this.landline_no, this.old_landline).subscribe(res => {
          this.spinner.hide();
          console.log(res, 'landline');
          if (res['ErrorCode'] == 200) {
            sessionStorage.setItem('sr_val', res['ProcessVariables']['srId']);
            this.commonService.getOptions();
            // this.service_stepper.OnconfrmDetails()
            // this.service_stepper.onUpload();
            return
          }
          else if (res['ErrorCode'] == 400) {
            this.authService.alertToUser(AlertMessages.invalid_email);
          }
          else if (res['ErrorCode'] == 401) {
            this.authService.alertToUser(AlertMessages.EXECUTAION_FAILD);
          }
          else if (res['ErrorCode'] == 402) {
            this.authService.alertToUser(AlertMessages.SR_IN_PROGRESS_ERROR);
          }
          else {
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
          }
        },
          error => {
            this.spinner.hide();
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            return
          })

      }

    }
    else {
      this.authService.alertToUser(AlertMessages.invalid_landline);
      this.spinner.hide();
    }
  }

  getValofInputNumber() {

    if (this.form_group.controls.std_form.value.length == 2) {
      var std = '0' + this.form_group.controls.std_form.value;
      this.landline_no = std + '-' + this.form_group.controls.landline_number.value;
      console.log(this.landline_no, 'added 0')
    }
    if (this.form_group.controls.std_form.value.length == 3) {
      this.landline_no = this.form_group.controls.std_form.value + '-' + this.form_group.controls.landline_number.value;
      console.log(this.landline_no, 'without 0')
    }


  }


  onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  // get Old Landline Number
  oldLandline_number() {
    // this.baseAPIService.details.subscribe(
    //   res => {
    //     if (res['landLineUpdate']) {
    //       this.old_landline = res['landLineUpdate']['oldNumber']
    //       console.log(this.old_landline, 'res Landline');
    //     }
    //   })
  }

}
