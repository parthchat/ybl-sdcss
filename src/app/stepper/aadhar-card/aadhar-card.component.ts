import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-aadhar-card',
  templateUrl: './aadhar-card.component.html',
  styleUrls: ['./aadhar-card.component.scss']
})
export class AadharCardComponent implements OnInit {

  constructor() { }
  hide = true;
  formAadhar = new FormGroup({
    aadhar: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]*$')])
  })
  otpForm = new FormGroup({
    otp: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("^[0-9]*$")]),
  });
  ngOnInit() {
  }

  // validate and submit
  onSubmit() {
    if (this.formAadhar.valid) {
      console.log('hello');
      this.hide = false;
    } else {
      console.log('bello');
      this.hide = true;
    }
  }

  getOTP() {
    if (this.otpForm.valid) {
    console.log('success');
    return;
    }
  }

}
