import { Component, OnInit } from '@angular/core';
import { MatRadioChange, MatDatepickerInputEvent, MatSelectChange, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertMessages, Constants } from '../app.constant';
import { FdService } from './fd.service';
import { DataService } from '../services/data.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';


@Component({
  selector: 'app-fd',
  templateUrl: './fd.component.html',
  styleUrls: ['./fd.component.scss']
})
export class FdComponent implements OnInit {

  loading = false;
  disabled = true;
  checked = false;
  min_amount = 10000;
  max_amount = 20000000;
  min_length = 5;
  max_length = 7;
  color = 'primary';
  no_month: any = [];
  no_days: any = [];
  no_years: any = [];
  fbSchemes = [];
  year = 0;
  sweep_In = false;
  NA_BANK_MSG = AlertMessages.NA_BANK_MSG;
  confirmation_screen: boolean = false;
  balance: any = null;
  customLoadingTemplate: any;
  multi_accounts = [
    { value: '0', viewValue: 'Account_1' },
    { value: '1', viewValue: 'Account_2' }
  ];
  fd_form = new FormGroup({
    get_amount: new FormControl('', [Validators.required, Validators.pattern(Constants.VALIDATION_REGX_NUMBER), Validators.max(this.max_amount), Validators.min(this.min_amount)]),
    scheme_val: new FormControl('', [Validators.required]),
    year_val: new FormControl(0, [Validators.required]),
    FD_days: new FormControl(0, [Validators.required]),
    FD_month: new FormControl(0, [Validators.required]),
    FD_product: new FormControl('', [Validators.required]),
    principal_Instruction: new FormControl('', [Validators.required]),
    maturity_instruction: new FormControl('', [Validators.required]),
    interest_instruction: new FormControl('', [Validators.required]),
    // selectAccount_principle: new FormControl('', [Validators.required]),
    // selectAccount_Interest: new FormControl('', [Validators.required]),
    relationToAccHolderLabel: new FormControl(''),
    relationToNomineeLabel: new FormControl(''),
    isNomineeShown: new FormControl(null, [Validators.required]),
    isExistingOrNewNominee: new FormControl(''), // Value 1=Existing, 2=New
    // pan_no: new FormControl('', [Validators.maxLength(10), Validators.pattern(Constants.VALIDATION_REGX_PAN_NUMBER)]),
    nomineeCountryLabel: new FormControl(''),
    guardianCountryLabel: new FormControl('')
  });

  fd_staff = new FormGroup({
    staf_id: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  nominee_form = new FormGroup({
    staf_id: new FormControl('', [Validators.required, Validators.minLength(40)]),
  })
  selected_acc: any = null;
  getBal_arry: any = [];
  branch_code: any = null;
  branch_name: any = null;
  getProdetails: any = [];
  prod_code: any;
  min_amount_for__non_pan = '49999'
  filter_product_details: any = [];
  days = 28;
  confirm_details_obj: any = [];
  product_label: any;
  select_month: any = 0;
  less_than_11_months: any;
  product_name: any;
  pan_exist: any;
  account_type: any
  selected: any;
  mdmEmail: any;
  mdmCustName: any;
  mdmcustID: any;
  mdmmobileNumber: any;
  arrPrincipal_Instruction: Array<any>;
  arrInterest_Instruction: any = [];
  arrMaturity_intruction: any = [];
  interest_instruction_disable: boolean = false;

  // nomine variables
  pointer: number;
  rdNomineeFormGroup: FormGroup;
  rdGuardianFormGroup: FormGroup;
  nomineeAge: number;
  arrCountriesLovs: Array<{ code: string, label: string }> = [];
  arrNomineeRelationLovs: Array<{ code: string, label: string }> = [];
  arrGuardianRelationLovs: Array<{ code: string, label: string }> = [];
  acc_relation: any;
  quickBookRes: Array<any>;
  selected_index: any;
  selectedQuickBook: any;
  acc_number: any;
  month = (new Date()).getMonth() + 1;
  date = (new Date()).getDate();
  current_yr = (new Date()).getFullYear();

  dob_month = (new Date()).getMonth();
  dates = (new Date()).getDate() - 1;
  maxsDate = new Date(this.current_yr, this.dob_month, this.dates);
  // for Min max set in datepicker
  minDate = new Date(1930, 0, 1);
  baseAPIService: any;
  maxDate = new Date(this.current_yr, this.month, this.date);
  res: any;
  constructor(private tokenStorage: TokenStorage, private dataService: DataService, private service: FdService, private datePipe: DatePipe, private route: Router, private router: Router, private _snackBar: MatSnackBar) {


    this.rdNomineeFormGroup = new FormGroup({
      relationToAccHolder: new FormControl('', [Validators.required]),
      nomineeName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_letters_only)]),
      addressLine1: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_address_regex)]),
      addressLine2: new FormControl('', [Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_address_regex)]),
      addressLine3: new FormControl('', [Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_address_regex)]),
      displayNomineeNameFlag: new FormControl(''),
      mobileNumber: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]),
      nomineeRegistrationNumber: new FormControl(''),
      sharePercentage: new FormControl(''),
      dateOfBirth: new FormControl('', [Validators.required]),
      // emailId: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.Validation_letters_only)]),
      townOrCity: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.Validation_letters_only)]),
      zipCode: new FormControl('', [Validators.maxLength(6), Validators.minLength(6), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)])
    });

    this.rdGuardianFormGroup = new FormGroup({
      relationToNominee: new FormControl('', [Validators.required]),
      guardianName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_letters_only)]),
      addressLine1: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_address_regex)]),
      addressLine2: new FormControl('', [Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_address_regex)]),
      addressLine3: new FormControl('', [Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_address_regex)]),
      phoneNumber: new FormControl('', [Validators.maxLength(10), Validators.minLength(10)]),
      mobileNumber: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.Validation_letters_only)]),
      townOrCity: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.Validation_letters_only)]),
      zipCode: new FormControl('', [Validators.maxLength(6), Validators.minLength(6), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]),
      emailId: new FormControl('', [Validators.maxLength(50), Validators.minLength(5), Validators.pattern(Constants.VALIDATION_REGX_EMAIL)])
    });

    // this.fd_form.valueChanges.subscribe(val => {
    //   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>", val);
    // });
    this.rdNomineeFormGroup.get('relationToAccHolder').valueChanges.subscribe(val => {
      this.fd_form.get('relationToAccHolderLabel').setValue(this.arrNomineeRelationLovs.some(e => e.code == val) ? this.arrNomineeRelationLovs.find(e => e.code == val)['label'] : null);
    });

    this.rdGuardianFormGroup.get('relationToNominee').valueChanges.subscribe(val => {
      this.fd_form.get('relationToNomineeLabel').setValue(this.arrGuardianRelationLovs.some(e => e.code == val) ? this.arrGuardianRelationLovs.find(e => e.code == val)['label'] : null);
    });

    this.rdNomineeFormGroup.get('country').valueChanges.subscribe(val => {
      this.fd_form.get('nomineeCountryLabel').setValue(this.arrCountriesLovs.some(e => e.code == val) ? this.arrCountriesLovs.find(e => e.code == val)['label'] : null);
    });

    this.rdGuardianFormGroup.get('country').valueChanges.subscribe(val => {
      this.fd_form.get('guardianCountryLabel').setValue(this.arrCountriesLovs.some(e => e.code == val) ? this.arrCountriesLovs.find(e => e.code == val)['label'] : null);
    });

    this.fd_form.valueChanges.subscribe(val => {
      console.log("FD FORM: ", val);
    });
  }


  ngOnInit() {
    setTimeout(() => {
      this.loading = true;
    });
    this.loading = true;

    this.getMonths();
    this.getDays();
    this.getYears();
    // get session detail for Account balance dropdown
    if (this.dataService.customerDetails) {
      this.res = this.dataService.customerDetails['ProcessVariables'];
      console.log(this.res, 'got');
      this.processData();
    } else {
      this.loading = true;
      let apiUniqueKey = new Date().getTime().toString();
      this.dataService.cust(apiUniqueKey).subscribe(
        res => {
          this.loading = false;
          this.res = res['ProcessVariables'];
          this.dataService.customerDetails = this.res;
          console.log(res, 'res FD');
          this.loading = false;
          this.processData();
        },
      );
    }

  }

  processData() {
    this.fbSchemes = this.res['schemeDetails'];
    this.arrPrincipal_Instruction = this.res['principleInstructions'];
    this.arrInterest_Instruction = this.res['interestInstructions']
    this.arrMaturity_intruction = this.res['maturityInstructions'];
    this.fd_form.controls.principal_Instruction.setValue(this.arrPrincipal_Instruction.find(e => e.isSelected == true)['code']);
    this.fd_form.controls.maturity_instruction.setValue(this.arrMaturity_intruction.find(e => e.isSelected == true)['code']);
    this.fd_form.controls.interest_instruction.setValue(this.arrInterest_Instruction.find(e => e.isSelected == true)['code']);
    console.log(this.fd_form.controls.maturity_instruction.value, 'principe inst');
    this.getBal_arry = this.res['accountDetails'];
    this.account_type = this.getBal_arry[0]['accountType'];
    this.selected_acc = this.getBal_arry[0]['accountNumber'];
    if (this.account_type) {
      this.account_balance_Fnc(0)
    }
    this.getProdetails = this.res['productDetails'];
    console.log(this.getProdetails, 'prodct details')
    this.balance = this.getBal_arry[0]['balance'];
    this.branch_code = this.getBal_arry[0]['branchCode'];
    console.log(this.branch_code, 'brancg code')
    this.branch_name = this.getBal_arry[0]['branchName'];
    this.pan_exist = this.getBal_arry[0]['panExist'];
    // if (!this.fd_form.controls.scheme_val.value) {
    this.fd_form.controls['FD_product'].disable();
    // }
    this.arrCountriesLovs = this.res['countryData'].map(e => ({ code: e.code + '', label: e.label }));
    this.arrNomineeRelationLovs = this.res['nomineeRelationData'].map(e => ({ code: e.code + '', label: e.label }));
    this.arrGuardianRelationLovs = this.res['guardianRelationData'].map(e => ({ code: e.code + '', label: e.label }));
  }

  // check if PAN is not exist and enter amount more than Rs.49999
  panAmount_check() {
    if (this.pan_exist == false && this.fd_form.controls.get_amount.value > this.min_amount_for__non_pan) {
      this._snackBar.open(AlertMessages.non_pan_message_FD);
      this.loading = false;
      return
    }
  }

  // On select principle instruction
  select_principle() {
    console.log(this.fd_form.controls.scheme_val.value, 'ahh');
    if (this.fd_form.controls.principal_Instruction.value == 'Account Transfer') {
      this.fd_form.addControl('selectAccount_principle', new FormControl('', [Validators.required]));
    } else {
      this.fd_form.removeControl('selectAccount_principle');
    }
    if (this.fd_form.controls.scheme_val.value == 'C' && this.fd_form.controls.principal_Instruction.value == 'Account Transfer') {
      this.fd_form.controls.interest_instruction.setValue(this.arrPrincipal_Instruction.find(e => e.label == 'Account Transfer')['code']);
      this.fd_form.controls.interest_instruction.disable();
      this.selectInterest()
    } else if (this.fd_form.controls.scheme_val.value == 'C' && this.fd_form.controls.principal_Instruction.value == 'Auto Renew') {
      this.fd_form.controls.interest_instruction.setValue(this.arrInterest_Instruction.find(e => e.isSelected == true)['code']);
      // this.fd_form.controls.interest_instruction.disable();
      this.selectInterest()
    }
    console.log(this.fd_form.controls.principal_Instruction.value, 'hshs');
  }

  selectInterest() {
    console.log(this.fd_form.controls.interest_instruction.value, 'error')
    if (this.fd_form.controls.interest_instruction.value == 'Account Transfer') {
      this.fd_form.addControl('selectAccount_Interest', new FormControl('', [Validators.required]));
    } else {
      this.fd_form.removeControl('selectAccount_Interest');
    }
  }

  // Get no of Months for displaying months
  getMonths() {
    for (let i = 0; i <= 11; i++) {
      this.no_month.push(i)
    }
  }

  // Get no of Days for displaying months
  getDays() {
    this.no_days = [];
    for (let i = 0; i <= this.days; i++) {
      this.no_days.push(i)
    }
  }
  getYears() {
    for (let i = 0; i <= 10; i++) {
      this.no_years.push(i)
    }
  }
  // selected Year
  selectYear(yr) {
    yr = this.fd_form.controls.year_val.value
    console.log(yr);
    if (yr != 0) {
      this.days = 28;
      this.getDays();
    } else {
      this.days = 30;
      this.getDays();
    }
    this.year = yr * 12;
    console.log(yr)
  }
  // on paste No allowed function
  onPaste(event: ClipboardEvent) {
    event.preventDefault();
  }

  spcChar(event) {
    var k;
    k = event.charCode;  //         k = event.keyCode;  (Both can be used)
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || k == 45 || (k >= 47 && k <= 57));
  }
  // on Account No. selection function
  onSelect_Account(i: any) {
    console.log(i);
    this.account_type = this.getBal_arry[i]['accountType'];
    this.acc_relation = this.getBal_arry[i]['accountRelation'];
    this.acc_number = this.getBal_arry[i]['accountNumber'];
    console.log(this.acc_relation, 'acc_relation')
    this.loading = true;
    console.log(this.selected_acc);
    this.pointer = this.getBal_arry.findIndex(e => e.accountNumber == this.getBal_arry[i]['accountNumber']);

    this.account_balance_Fnc(i);
  }


  // On inside Dropdown
  selectAccount_principleInstr(i: any) {
    console.log(i);
    let account_type = this.getBal_arry[i]['accountType'];
    console.log(account_type)
    // console.log(this.selected_acc)
    // this.account_balance_Fnc(i);
  }

  selectAccount_interest_Instruction(i: any) {
    console.log(i);
    let account_type = this.getBal_arry[i]['accountType'];
    console.log(account_type)
    // console.log(this.selected_acc)
    // this.account_balance_Fnc(i);
  }


  account_balance_Fnc(i) {
    console.log('balance func')
    this.loading = true;
    this.rdNomineeFormGroup.reset();
    this.rdGuardianFormGroup.reset();
    this.fd_form.removeControl('rdNomineeFormGroup');
    this.fd_form.removeControl('rdGuardianFormGroup');
    this.fd_form.controls.isNomineeShown.reset();
    let apiUniqueKey = new Date().getTime().toString();
    this.service.get_Acc_Balanec(apiUniqueKey, this.selected_acc, this.account_type).subscribe(res => {
      console.log(res, 'acc bal res')
      console.log(res['ProcessVariables']['balance'], 'oii');
      this.balance = res['ProcessVariables']['balance'];
      this.branch_code = this.getBal_arry[i]['branchCode'];
      this.branch_name = this.getBal_arry[i]['branchName'];
      this.acc_relation = this.getBal_arry[i]['accountRelation'];
      console.log(this.acc_relation, 'acc_relation')
      this.getBal_arry = this.getBal_arry.map(e => {
        let f = e;
        if (e.accountNumber == this.selected_acc) {
          f.balance = res['ProcessVariables']['balance'];
          f.nomineeDetails = res['ProcessVariables']['nomineeDetails'] ? res['ProcessVariables']['nomineeDetails'] : null;
          f.guardianDetails = res['ProcessVariables']['guardianDetails'] ? res['ProcessVariables']['guardianDetails'] : null;
          f.isExistingOrNewNominee = res['ProcessVariables']['nomineeDetails'] ? true : false;
          f.isNomineePresent = res['ProcessVariables']['nomineeDetails'] ? true : false;
          f.isGuardianPresent = res['ProcessVariables']['guardianDetails'] ? true : false;
          this.fd_form.controls.isExistingOrNewNominee.setValue(f.isExistingOrNewNominee ? 1 : 2);

          return f;
        }

        return e;
      });

      this.pointer = this.getBal_arry.findIndex(e => e.accountNumber == this.selected_acc);
      console.log("[RecurringDepositComponent] getBal_arry: ", this.getBal_arry);
      console.log("[RecurringDepositComponent] in getAccountBalance pointer: ", this.pointer);

      if (this.getBal_arry[this.pointer]['nomineeDetails']) {
        this.nomineeAge = this.getAge(this.getBal_arry[this.pointer]['nomineeDetails']['dateOfBirth']);
      } else {
        this.nomineeAge = null;
      }

      if (this.getBal_arry[this.pointer].isExistingOrNewNominee) {
        this.rdNomineeFormGroup.disable();
        this.rdGuardianFormGroup.disable();
      } else {
        this.rdNomineeFormGroup.enable();
        this.rdGuardianFormGroup.enable();
      }

      if (res['ProcessVariables']['fdrdQuickBookData']) {
        this.quickBookRes = res['ProcessVariables']['fdrdQuickBookData'].map((e, i) => ({
          amount: e['amount'],
          tenure: e['tenure'],
          schemeName: e['schemeName'],
          interestRate: e['interestRate'],
          years: e['maxYear'],
          months: e['maxMonths'],
          days: e['maxDays'],
          index: i
        }));
      }

      console.log("[FdComponent] quickBookRes: ", this.quickBookRes);

      this.loading = false;
    }, err => {
      if (this.getBal_arry[this.pointer].isExistingOrNewNominee) {
        this.rdNomineeFormGroup.disable();
        this.rdGuardianFormGroup.disable();
      } else {
        this.rdNomineeFormGroup.enable();
        this.rdGuardianFormGroup.enable();
      }
      this.loading = false;
    })
  }

  // scheme selection function
  on_Scheme_Select(code: any) {
    this.fd_form.controls.FD_product.reset();
    this.prod_code = '';
    this.filter_product_details = [];
    let scheme_label = this.fd_form.controls.scheme_val.value;
    console.log(code);
    this.fd_form.controls.interest_instruction.setValue(this.arrInterest_Instruction.find(e => e.isSelected == true)['code']);
    this.fd_form.controls.interest_instruction.enable()
    this.fd_form.controls.principal_Instruction.setValue(this.arrPrincipal_Instruction.find(e => e.isSelected == true)['code']);
    if (this.fd_form.controls.scheme_val.value == 'P') {
      this.fd_form.controls.interest_instruction.setValue(this.arrPrincipal_Instruction.find(e => e.label == 'Account Transfer')['code']);
      this.fd_form.controls.interest_instruction.disable()
    } else if (this.fd_form.controls.scheme_val.value == 'C') {
      console.log('C')
      this.fd_form.controls.principal_Instruction.setValue(this.arrPrincipal_Instruction.find(e => e.isSelected == true)['code']);
      this.fd_form.controls.interest_instruction.enable()
    }
    this.select_principle();
    this.selectInterest()
    // for (var i = 0; i < this.getProdetails.length; i++) {
    //   if (this.getProdetails[i].type == code) {
    //     this.filter_product_details.push(this.getProdetails[i])
    //   }
    // }

    this.filter_product_details = this.getProdetails.filter(e => e.type == code);

    // if (!this.fd_form.controls.scheme_val.value) {
    //   this.fd_form.controls['FD_product'].disable();
    // } else {
    //   this.fd_form.controls['FD_product'].enable();
    // } 
    console.log(this.filter_product_details);
    this.fd_form.controls['FD_product'].setValue(this.filter_product_details[0].code);
    this.selectProduct(this.filter_product_details[0].code,
      this.filter_product_details[0].type,
      this.filter_product_details[0].label);
    // this.selected = this.filter_product_details[0].code;
    //console.log(this.selected,'dgdg')
  }

  // selectedCardScheme(i:any){
  //   this.selected_index = i;
  //   console.log(this.quickBoookRes[i])
  // }

  selectMonth(month) {
    this.select_month = month;
    console.log(month)
  }

  // on Product selection, get code of it 
  selectProduct(prod_code: any, proudct_label: any, product_name: any) {
    this.product_name = product_name;
    this.product_label = proudct_label;
    console.log(prod_code);
    this.prod_code = prod_code;
  }

  // back to main page (Form field)
  back_screen() {
    this.confirmation_screen = false;
    this.checked = false;
  }


  // confirm screen function
  confirm() {
    this.confirm_details_obj = [];
    this.selectYear(this.fd_form.controls.year_val.value);
    console.log(this.fd_form.controls.get_amount.value, this.balance)
    if (parseInt(this.fd_form.controls.get_amount.value) > parseInt(this.balance) || this.balance <= 0) {
      console.log(this.fd_form.controls.get_amount.value > this.balance, 'why');
      this._snackBar.open('You do not have sufficient Balance');
      return;
    }
    // to check PAN exist or not and amount is greater than 49999
    if (this.pan_exist == false && this.fd_form.controls.get_amount.value > this.min_amount_for__non_pan) {
      this._snackBar.open(AlertMessages.non_pan_message_FD);
      this.loading = false;
      return
    }

    if (this.filter_product_details[0]['type'] == 'C') {
      if (this.year == 0 && this.fd_form.controls.FD_month.value < 5) {
        this._snackBar.open('Quaterly Compunding Scheme should be atleast 183 days or More');
        return;
      }
    }
    else if (this.filter_product_details[0]['type'] == 'P') {
      console.log(this.year, this.fd_form.controls.FD_month.value, this.fd_form.controls.FD_days.value)
      if (this.year == 0 && this.fd_form.controls.FD_month.value < 1 && this.fd_form.controls.FD_days.value < 7) {
        this._snackBar.open('Quaterly Payout Scheme should be atleast 7 days or More');
        return;
      }
    }
    if (this.fd_form.controls.FD_month.value <= 11 && this.fd_form.controls.year_val.value == 0) {
      this.less_than_11_months = 0;
      console.log('Got less than 11 months');
      this.less_than_11_months = Math.round(this.fd_form.controls.FD_month.value * 30.4167) + this.fd_form.controls.FD_days.value;
      console.log(this.less_than_11_months, 'days')
    }
    let principle_acc = null;
    let interest_acc = null;
    if (this.fd_form.controls.selectAccount_principle) {
      principle_acc = this.fd_form.controls.selectAccount_principle.value;
    }
    if (this.fd_form.controls.selectAccount_Interest) {
      interest_acc = this.fd_form.controls.selectAccount_Interest.value
    }
    console.log(this.prod_code, 'proceed')
    if (this.fd_form.valid) {
      console.log(this.fd_form.value, 'get dis');
      console.log(this.fd_form.value)
      let apiUniqueKey = new Date().getTime().toString();
      this.rdNomineeFormGroup.enable();
      this.rdGuardianFormGroup.enable();
      this.loading = true;
      this.service.get_Products_details(apiUniqueKey, this.fd_form.controls.FD_product.value, this.fd_form.controls.get_amount.value, this.fd_form.controls.FD_month.value + this.year, this.fd_form.controls.FD_days.value, this.branch_code).subscribe(res => {
        console.log(res);
        if (res['ErrorCode'] == 200) {

          console.log("FD Component rdNomineeFormGroup in get_product_details: ", this.fd_form);

          // this.confirm_details_obj.push();
          this.confirm_details_obj.push({
            'deposit_amount': this.fd_form.controls.get_amount.value,
            'product_label': this.product_label,
            'deposit_product': this.fd_form.controls.FD_product.value,
            'months': this.fd_form.controls.FD_month.value + this.year,
            'day': this.fd_form.controls.FD_days.value,
            'interestRate': res['ProcessVariables']['interestRate'],
            'interestFrequency': res['ProcessVariables']['interestFrequency'],
            'jointHolder': res['ProcessVariables']['jointHolder'],
            'maturityAmount': res['ProcessVariables']['maturityAmount'],
            'maturityDate': res['ProcessVariables']['maturityDate'],
            'tenure': res['ProcessVariables']['tenure'],
            'account': this.selected_acc,
            'deposit_start_date': this.datePipe.transform(new Date(), "yyyy-MM-dd").toString(),
            'balance': this.balance,
            'branch_code': this.branch_code,
            'prod_code': this.prod_code,
            'jointAccount': false,
            'sweepIn': this.sweep_In,
            'principal_Instruction': this.fd_form.controls.principal_Instruction.value,
            'maturity_instruction': this.fd_form.controls.maturity_instruction.value,
            'interest_instruction': this.fd_form.controls.interest_instruction.value,
            'selectAccount_principle': principle_acc,
            'selectAccount_Interest': interest_acc,
            'schemeType': this.fd_form.controls.scheme_val.value,
            'accountRelation': this.acc_relation,
            'nomineeDetails': this.fd_form.value.rdNomineeFormGroup,
            'guardianDetails': this.fd_form.value.rdGuardianFormGroup
          });
          if (this.filter_product_details[0]['type'] == 'P') {
            this.confirm_details_obj.push({
              'Frequency': res['ProcessVariables']['payOutFrequency'],
              'FrequencyCode': res['ProcessVariables']['payoutFrequencyCode'],
            })
          } else if (this.filter_product_details[0]['type'] == 'C') {
            this.confirm_details_obj.push({
              'Frequency': res['ProcessVariables']['compoundingFrequency'],
              'FrequencyCode': res['ProcessVariables']['compoundingFrequencyCode'],
            })
          }

          this.confirmation_screen = true;
          console.log(this.confirm_details_obj)
          this.loading = false;
        }
        else if (res['ErrorCode'] == 400) {
          this._snackBar.open(AlertMessages.SOMETHING_WRONG);
          this.loading = false;
        }
        this.loading = false;

        if (this.getBal_arry[this.pointer].isExistingOrNewNominee) {
          this.rdNomineeFormGroup.disable();
          this.rdGuardianFormGroup.disable();
        } else {
          this.rdNomineeFormGroup.enable();
          this.rdGuardianFormGroup.enable();
        }
      }, err => {
        if (this.getBal_arry[this.pointer].isExistingOrNewNominee) {
          this.rdNomineeFormGroup.disable();
          this.rdGuardianFormGroup.disable();
        } else {
          this.rdNomineeFormGroup.enable();
          this.rdGuardianFormGroup.enable();
        }
      })
    }
    else {
      this._snackBar.open('Please fill Empty Field');
    }
  }

  // Confrirm page function
  proceed() {
    console.log(this.confirm_details_obj, 'objs')
    if (this.checked && !this.fd_staff.valid) {
      this._snackBar.open('Please enter Valid Employee ID');
      return;
    }
    if (!this.checked) {
      this.fd_staff.reset();
    }
    console.log(this.confirm_details_obj)
    setTimeout(() => {
      this.loading = true;
    });
    this.service.update_Sr(this.confirm_details_obj[0], this.confirm_details_obj[1], this.fd_staff.value, this.checked).subscribe(res => {
      console.log(res);
      if (res['ErrorCode'] == 200) {
        let accpetReject = true;
        this.dataService.accptRejct = accpetReject;
        this.service.capture_customerApproval(accpetReject).subscribe(res => {
          this.loading = false;
          console.log(res);
          if (res['ErrorCode'] == 200) {
            this.loading = false;
            this.dataService.srId = this.tokenStorage.getSrId(),
              this.router.navigate(['result']);
            this._snackBar.open('Fixed Deposit Created');
            return;
          }
          else if (res['ErrorCode'] == 101) {
            this.loading = false;
            this._snackBar.open('You can not take this action on service request.');
            return;
          } else {
            this.loading = false;
            this.errorPage();
            return;
          }
        })
      } else {
        this._snackBar.open(AlertMessages.SOMETHING_WRONG);
        this.loading = false;
        this.errorPage();
        return;
      }
    })
  }
  errorPage() {
    this.loading = false;
    this.router.navigate(['error']);
    this.tokenStorage.clear();
  }

  // Nominee and guardian
  /**
 * 
 * @param event 
 */
  onNomineeYesNoChange(event: MatRadioChange) {
    console.log("[RecurringDepositComponent] MatRadioChange: ", event);

    this.fd_form.controls.isNomineeShown.setValue(event.value);

    if (event.value) {

      /*******************************************************
       * If Nominee data is present then prefill the form
      *******************************************************/
      if (this.getBal_arry[this.pointer].isNomineePresent) {
        this.fd_form.controls.isExistingOrNewNominee.setValue(1);
        this.nomineeAge = this.getAge(this.getBal_arry[this.pointer]['nomineeDetails']['dateOfBirth']);

        if (this.fd_form.controls.rdNomineeFormGroup) {
          this.fd_form.removeControl('rdNomineeFormGroup');
        }
        this.fd_form.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);
        this.fd_form.controls.rdNomineeFormGroup.reset();
        this.fd_form.controls.rdNomineeFormGroup.patchValue(this.getBal_arry[this.pointer]['nomineeDetails']);
        this.rdNomineeFormGroup.disable();

        if (this.getBal_arry[this.pointer].isGuardianPresent && this.nomineeAge < 18) {
          if (this.fd_form.controls.rdGuardianFormGroup) {
            this.fd_form.removeControl('rdGuardianFormGroup');
          }
          this.fd_form.addControl('rdGuardianFormGroup', this.rdGuardianFormGroup);
          this.fd_form.controls.rdGuardianFormGroup.reset();
          this.fd_form.controls.rdGuardianFormGroup.patchValue(this.getBal_arry[this.pointer]['guardianDetails']);
          this.rdGuardianFormGroup.disable();
        } else {
          // This scenario will be handled by API
        }
      }
      else {
        this.fd_form.controls.isExistingOrNewNominee.setValue(2);
        this.nomineeAge = null;

        if (this.fd_form.controls.rdNomineeFormGroup) {
          this.fd_form.removeControl('rdNomineeFormGroup');
        }

        this.rdNomineeFormGroup.enable();
        this.rdNomineeFormGroup.reset();
        this.fd_form.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);
        this.rdGuardianFormGroup.enable();
        this.rdGuardianFormGroup.reset();

        if (this.fd_form.controls.rdGuardianFormGroup) {
          this.fd_form.removeControl('rdGuardianFormGroup');
        }
      }
    } else {
      this.nomineeAge = null;
      if (this.fd_form.controls.rdNomineeFormGroup) {
        this.fd_form.controls.rdNomineeFormGroup.reset();
      }

      if (this.fd_form.controls.rdGuardianFormGroup) {
        this.fd_form.controls.rdGuardianFormGroup.reset();
      }

      this.fd_form.removeControl('rdNomineeFormGroup');
      this.fd_form.removeControl('rdGuardianFormGroup');
    }
  }

  /**
   * Called On Selecting Use Existing/Add New Radio Change
   * 
   * @param event: MatRadioChange
   */
  onExistingOrNewNomineeChange(event: MatRadioChange) {
    console.log("[RecurringDepositComponent] onExistingOrNew MatRadioChange: ", event);
    console.log("[RecurringDepositComponent] onExistingOrNewNomineeChange fd_form: ", this.fd_form);

    /**********************************
     * If Use Existing selected than
     * use available nominee details
    **********************************/
    if (event.value == 1) {

      this.rdNomineeFormGroup.disable();
      this.rdGuardianFormGroup.disable();
      /*******************************************************
       * If Nominee data is present then prefill the form
      *******************************************************/
      if (this.getBal_arry[this.pointer].isNomineePresent) {

        this.nomineeAge = this.getAge(this.getBal_arry[this.pointer]['nomineeDetails']['dateOfBirth']);

        if (this.fd_form.controls.rdNomineeFormGroup) {
          this.fd_form.removeControl('rdNomineeFormGroup');
        }
        this.fd_form.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);
        this.fd_form.controls.rdNomineeFormGroup.reset();
        this.fd_form.controls.rdNomineeFormGroup.patchValue(this.getBal_arry[this.pointer]['nomineeDetails']);

        if (this.getBal_arry[this.pointer].isGuardianPresent && this.nomineeAge < 18) {
          if (this.fd_form.controls.rdGuardianFormGroup) {
            this.fd_form.removeControl('rdGuardianFormGroup');
          }
          this.fd_form.addControl('rdGuardianFormGroup', this.rdGuardianFormGroup);
          this.fd_form.controls.rdGuardianFormGroup.reset();
          this.fd_form.controls.rdGuardianFormGroup.patchValue(this.getBal_arry[this.pointer]['guardianDetails']);
        } else {
          // This scenario will be handled by API
        }
      }
      else {
        // Will never come here because button will be disabled.
        if (this.fd_form.controls.rdNomineeFormGroup) {
          this.fd_form.removeControl('rdNomineeFormGroup');

          if (this.fd_form.controls.rdGuardianFormGroup) {
            this.fd_form.removeControl('rdGuardianFormGroup');
          }
        }
      }

    }
    /**********************************
     * Add New Nominee Details
    **********************************/
    else if (event.value == 2) {
      this.rdGuardianFormGroup.enable();
      this.rdNomineeFormGroup.enable();
      /*******************************************************
       * If Nominee data is present then prefill the form
      *******************************************************/

      this.nomineeAge = null;

      if (this.fd_form.controls.rdNomineeFormGroup) {
        this.fd_form.removeControl('rdNomineeFormGroup');
      }
      this.fd_form.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);
      this.fd_form.controls.rdNomineeFormGroup.reset();

      if (this.fd_form.controls.rdGuardianFormGroup) {
        this.fd_form.removeControl('rdGuardianFormGroup');
      }

    }

  }

  /**
   * Date of birth picker changing date
   * 
   * @param event: MatDatepickerInputEvent<Date>
   */
  onDateOfBirthChange(event: MatDatepickerInputEvent<Date>) {

    console.log("[RecurringDepositComponent] getBal_arry: ", this.getBal_arry);
    console.log("[RecurringDepositComponent] Date of Birth: ", event);
    console.log("[RecurringDepositComponent] For Backend Date of Birth: ", `${event.value.getFullYear()}-${event.value.getMonth() + 1}-${event.value.getDate()}`);
    let dateOfBirth = `${event.value.getFullYear()}-${event.value.getMonth() + 1}-${event.value.getDate()}`;

    /***************************************
     * Set Age of Nominee for Guardian form
    ***************************************/
    this.nomineeAge = this.getAge(dateOfBirth);


    /*************************************
     * If age is below 18 then add
     * Guardian form
    *************************************/
    if (this.nomineeAge < 18) {
      this.fd_form.addControl('rdGuardianFormGroup', this.rdGuardianFormGroup);

      let _guardianDetails = this.getBal_arry.find(e => e.accountNumber == this.selected_acc)['guardianDetails'];
      console.log("[RecurringDepositComponent] _guardianDetails: ", _guardianDetails);
      if (_guardianDetails && this.fd_form.get('isExistingOrNewNominee').value == 1) {
        this.fd_form.controls.rdGuardianFormGroup.setValue(_guardianDetails);
      } else {
        this.fd_form.controls.rdGuardianFormGroup.reset();
      }
    }
    /*************************************
     * If age is 18 and above then remove
     * guardian form
    *************************************/
    else {
      if (this.fd_form.controls.rdGuardianFormGroup) {
        this.fd_form.controls.rdGuardianFormGroup.reset();
      }
      this.fd_form.removeControl('rdGuardianFormGroup');
    }
  }

  /**
   * Get Age
   * 
   * If Today is 2020-2-11 and DOB is 2002-2-11 then age is 18
   * If Today is 2020-2-11 and DOB is 2002-2-10 then age is 17
   * 
   * @param DOB:string - Format yyyy-mm-dd
  */
  getAge(dateOfBirth: string) {
    let today = new Date();
    let birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m <= 0 && today.getDate() > birthDate.getDate()) {
      age--;
    }

    return age;
  }

  onQuickBookSelection(data: any) {
    console.log("Data: ", data);
    this.fd_form.controls.scheme_val.setValue(this.fbSchemes[0]['code']);
    this.on_Scheme_Select(this.fbSchemes[0]['code']);
    this.fd_form.controls.selectAccount_Interest.setValue(this.getBal_arry[0]['accountNumber']);
    this.selectAccount_interest_Instruction(0);
    this.fd_form.controls.get_amount.setValue(data['amount']);
    this.fd_form.controls.FD_month.setValue(data['months']);
    this.fd_form.controls.year_val.setValue(data['years']);
    if (data['months'] >= 12) {
      this.fd_form.controls.year_val.setValue(1);
      this.fd_form.controls.FD_month.setValue(0);
    }
    this.selectMonth(data['months'])

    this.selectYear(data['years'])
    this.fd_form.controls.FD_days.setValue(data['days']);

    this.selectedQuickBook = data;
  }

  onInputKeyPress(event: KeyboardEvent, spcl: boolean) {
    /***************************************
     * Only single space allowed & restric spcl character
    ***************************************/
    if (spcl) {
      var k;
      k = event.charCode;  //         k = event.keyCode;  (Both can be used)
      return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
    }
    if (event.target['value'].charAt(event.target['value'].length - 1) == ' ' && event.key == ' ') {
      return false;
    } else {
      return true;
    }
  }
}
