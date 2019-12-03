import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {
  current_yr = (new Date()).getFullYear();
  month = (new Date()).getMonth() - 1;
  date = (new Date()).getDate() - 1;
  // for Min max set in datepicker
  minDate = new Date(1930, 0, 1);
  maxDate = new Date(this.current_yr, this.month, this.date);
  // /
  ccLoginForm = new FormGroup({
    creditCard_no: new FormControl('', [Validators.required, Validators.minLength(16), Validators.maxLength(16), Validators.pattern('^[0-9]*$')]),
    dob: new FormControl('', [Validators.required]),
    expiry_month: new FormControl('',[Validators.required,Validators.pattern('^(0?[1-9]|1[012])$')]),
    expiry_year: new FormControl('',[Validators.required,Validators.pattern('(?:(?:19|20)[0-9]{2})')]),
  });
  constructor() { }

  ngOnInit() {
  }
  auth(){
    alert('Success');
    return
  }

}
