import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'src/app/app.constant';
import { BaseAPIService } from 'src/app/core/services/base-api-service.service';
import { AlertMessages } from 'src/app/app.constant';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { RecurringDepositService } from './recurring-deposit.service';
import { MatSelectChange, MatRadioChange, MatDatepickerInputEvent } from '@angular/material';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { Subscription, combineLatest } from 'rxjs';
import { CustomerService } from '../customer/customer.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Component({
  selector: 'app-recurring-deposit',
  templateUrl: './recurring-deposit.component.html',
  styleUrls: ['./recurring-deposit.component.css']
})
export class RecurringDepositComponent implements OnInit {

  disabled = true;
  checked: boolean = false;
  min_amount = 1000;
  max_amount = 19999999;
  min_length = 5;
  max_length = 7;
  color = 'primary';
  // no_month: any = [];
  // no_days: any = [];
  // no_years: any = [];
  // year = 0;
  confirmation_screen: boolean = false;
  balance: string = '0';
  multi_accounts = [
    { value: '0', viewValue: 'Account_1' },
    { value: '1', viewValue: 'Account_2' }
  ];
  // allValidators: Array<any> = [];
  rdFormGroup: FormGroup;

  rdStaff = new FormGroup({
    staffId: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  /*********************************
   * Nominee Form Group
  *********************************/
  rdNomineeFormGroup: FormGroup;

  /*********************************
   * Guardian Form Group
  *********************************/
  rdGuardianFormGroup: FormGroup;


  selectedAccountNumber: string = null;
  arrAccountDetails: Array<any> = [];
  branchCode: any = null;
  branchName: any = null;
  arrProductDetails: any = [];
  // prod_code: any;
  // filter_product_details: any = [
  //   { value: '0', viewValue: 'Product1' },
  //   { value: '1', viewValue: 'Product2' }
  // ];
  // days = 30;
  // confirm_details_obj: any = [];
  // product_label: any;
  // select_month: any = 0;

  /************************
   *  New Implementation
  ************************/
  selectedProduct: {code?: string, label?: string, type?: string} = null;

  subs: Array<Subscription> = [];
  months: Array<number> = [];
  years: Array<number> = [];

  arrCountriesLovs: Array<any> = [];
  arrGuardianRelationLovs: Array<{code: string, label: string}> = [];
  arrNomineeRelationLovs: Array<{code: string, label: string}> = [];

  dateOfBirthMinDate: Date = new Date(1900, 0, 1);
  dateOfBirthMaxDate: Date = new Date();
  nomineeAge: number;
  panExist: boolean;
  pointer: number;
  selectedTabIndex: number = 1;
  quickBooks: Array<any>;
  selectedQuickBook: any;

  loading: boolean;
  customLoadingTemplate: any;

  constructor(
    private datePipe: DatePipe,
    private route: Router,
    private router: Router,
    private authService: AuthService,
    // private spinner: NgxSpinnerService,
    private baseAPIService: BaseAPIService,
    private service: RecurringDepositService,
    private tokenStorage: TokenStorage,
    private customerService: CustomerService) {

      // this.allValidators = [Validators.required, Validators.max(this.max_amount), Validators.min(this.min_amount), CustomValidators.shouldBeMultiplesOf100, CustomValidators.shouldBeLessThanEqualToNumber(this.balance) ];

    this.rdFormGroup = new FormGroup({
      amount: new FormControl('', [Validators.required, Validators.max(this.max_amount), Validators.min(this.min_amount), CustomValidators.shouldBeMultiplesOf100, CustomValidators.shouldBeLessThanEqualToNumber(this.balance) ]),
      rdYear: new FormControl(''),
      rdMonth: new FormControl(''),
      rdProduct: new FormControl('', [Validators.required]),
      // panNo: new FormControl('', [Validators.requiredTrue]),
      panNo: new FormControl('', [Validators.requiredTrue]),
      isNomineeShown: new FormControl(null, [Validators.required]),

      // Extra Meta Fields not used in user form but for API purpose.
      isExistingOrNewNominee: new FormControl(''), // Value 1=Existing, 2=New,
      custId: new FormControl(''),
      custName: new FormControl(''),
      custType: new FormControl(''),
      months: new FormControl(''),
      accountRelation: new FormControl(''),
      accountType: new FormControl(''),
      rdProductLabel: new FormControl(''),
      interestIndexCode: new FormControl(''),
      interestRate: new FormControl(''),
      jointHolder: new FormControl(''),
      maturityAmount: new FormControl(''),
      maturityDate: new FormControl(''),
      depositDate: new FormControl(''),
      joinAccount: new FormControl(''),
      taxCode: new FormControl(''),
      tenure: new FormControl(''),
      branchCode: new FormControl(''),
      compoundingFrequency: new FormControl(''),
      compoundingFrequencyCode: new FormControl(''),
      payOutFrequency: new FormControl(''),
      payoutFrequencyCode: new FormControl(''),
      relationToAccHolderLabel: new FormControl(''),
      relationToNomineeLabel: new FormControl(''),
      nomineeCountryLabel: new FormControl(''),
      guardianCountryLabel: new FormControl(''),
      srId: new FormControl('', Validators.required)
    });

    this.rdNomineeFormGroup = new FormGroup({
      relationToAccHolder: new FormControl('', [Validators.required]),
      nomineeName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_letters_only)]),
      addressLine1: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      addressLine2: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      addressLine3: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      displayNomineeNameFlag: new FormControl(''),
      mobileNumber: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]),
      nomineeRegistrationNumber: new FormControl(''),
      sharePercentage: new FormControl(''),
      dateOfBirth: new FormControl('', [Validators.required]),
      // emailId: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      townOrCity: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      zipCode: new FormControl('', [Validators.maxLength(6), Validators.minLength(6), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)])
    });

    this.rdGuardianFormGroup = new FormGroup({
      relationToNominee: new FormControl('', [Validators.required]),
      guardianName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.Validation_letters_only)]),
      addressLine1: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      addressLine2: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      addressLine3: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(1), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      mobileNumber: new FormControl('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      townOrCity: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(2), Validators.pattern(Constants.VALIDATION_ALPHANUMERIC)]),
      zipCode: new FormControl('', [Validators.maxLength(6), Validators.minLength(6), Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]),
      emailId: new FormControl('', [Validators.required,Validators.maxLength(50),Validators.minLength(5), Validators.pattern(Constants.VALIDATION_REGX_EMAIL)])
    });

    this.subs.push(this.rdFormGroup.valueChanges.subscribe(val => {
      console.log("[RecurringDepositComponent] rdFormgroupval: ", val);
      console.log("[RecurringDepositComponent] rdFormgroupval: ", this.rdFormGroup);
    }));

    this.rdNomineeFormGroup.get('relationToAccHolder').valueChanges.subscribe(val => {
      this.rdFormGroup.get('relationToAccHolderLabel').setValue(this.arrNomineeRelationLovs.some(e => e.code == val) ? this.arrNomineeRelationLovs.find(e => e.code == val)['label']: null);
    });

    this.rdGuardianFormGroup.get('relationToNominee').valueChanges.subscribe(val => {
      this.rdFormGroup.get('relationToNomineeLabel').setValue(this.arrGuardianRelationLovs.some(e => e.code == val) ? this.arrGuardianRelationLovs.find(e => e.code == val)['label']: null);
    });

    this.rdNomineeFormGroup.get('country').valueChanges.subscribe(val => {
      this.rdFormGroup.get('nomineeCountryLabel').setValue(this.arrCountriesLovs.some(e => e.code == val) ? this.arrCountriesLovs.find(e => e.code == val)['label']: null);
    });

    this.rdGuardianFormGroup.get('country').valueChanges.subscribe(val => {
      this.rdFormGroup.get('guardianCountryLabel').setValue(this.arrCountriesLovs.some(e => e.code == val) ? this.arrCountriesLovs.find(e => e.code == val)['label']: null);
    });

    /***********************************************************************
     * Manually Validate Year and Month as they are dependent on each other
    ***********************************************************************/
    combineLatest(
      this.rdFormGroup.get('rdYear').valueChanges,
      this.rdFormGroup.get('rdMonth').valueChanges
    ).subscribe(([_rdYear, _rdMonth]) => {
      if(_rdYear == 0 && _rdMonth == 0) {
        this.rdFormGroup.controls.rdYear.setErrors({invalidTenure: false});
        this.rdFormGroup.controls.rdMonth.setErrors({invalidTenure: false});
      } else if(_rdYear == null && _rdMonth == null) {
        this.rdFormGroup.controls.rdYear.setErrors({required: true});
        this.rdFormGroup.controls.rdMonth.setErrors({required: true});
      } else if(_rdYear == null && _rdMonth != null) {
        this.rdFormGroup.controls.rdYear.setErrors({required: true});
      } else if(_rdMonth == null && _rdYear != null) {
        this.rdFormGroup.controls.rdMonth.setErrors({required: true});
      } else {
        this.rdFormGroup.controls.rdMonth.setErrors(null);
      }
    });
  }

  
  ngOnInit() {

    this.setMonths();
    this.setYears();

    // setTimeout(() => this.spinner.show());
    this.loading = true;

    
    /**************************************************
     * // dummy
     *  Comment this block of code on Testing/UAT/PROD
    **************************************************/ 
    // this.tokenStorage.setAccessToken('RR2Q4guNBuaDi6xnuVzyWsjBPkeyfbyuEa2PLc09C/EfXZJCEMLuKFgxM9RtZPcl');
    // this.tokenStorage.setSrId('SR20200305105186GN');
    // this.subs.push(this.customerService.cust(new Date().getTime().toString()).subscribe(res => {
    //   this.service.setSessionDetails(res);
    // }));
    /************************************************/


    // get session details for Account balance dropdown
    this.subs.push(this.service.getSessionDetails().subscribe(
      res => {
        console.log("[RecurringDepositComponent] Get Session Details response: ", res);

        this.arrProductDetails = res['ProcessVariables']['productDetails'];

        // this.rdFormGroup.patchValue({
        //   rdProduct: res['ProcessVariables']['productDetails'][0]['code']
        // });

        console.log("[RecurringDepositComponent] arrProductDetails: ", this.arrProductDetails);

        this.panExist = res['ProcessVariables']['custDetails']['panExist'];
        this.rdFormGroup.get('srId').setValue(res['ProcessVariables']['srDetails']['srId']);

        this.arrAccountDetails = res['ProcessVariables']['accountDetails'];

        /*************************************
         * Set Customer RD Details if present
        *************************************/
        if(res['ProcessVariables']['rdDetails']) {
          if(res['ProcessVariables']['rdDetails']['sourceAccount']) {
            this.selectedAccountNumber = res['ProcessVariables']['rdDetails']['sourceAccount'];
          } else {
            this.selectedAccountNumber = this.arrAccountDetails[0]['accountNumber'];
          }

          this.rdFormGroup.controls.amount.setValue(res['ProcessVariables']['rdDetails']['depositAmount']);

          /**********************************************************
           * Check if amount more than 50,000 and panExist=true
          **********************************************************/
          if(!!this.rdFormGroup.controls.amount.value) {
            if(this.rdFormGroup.controls.amount.value >= 50000) {
              this.rdFormGroup.controls.panNo.setValue(this.panExist ? true: false);
            } else {
              this.rdFormGroup.controls.panNo.setValue(true);
            }
          }

          this.rdFormGroup.controls.rdProduct.setValue(res['ProcessVariables']['rdDetails']['depositProduct']+'');

          if(res['ProcessVariables']['rdDetails']['tenureMonths']) {
            let _year = parseInt(res['ProcessVariables']['rdDetails']['tenureMonths']+'') >= 12 ? parseInt((parseInt(res['ProcessVariables']['rdDetails']['tenureMonths']+'')/12).toFixed(0)) : parseInt(res['ProcessVariables']['rdDetails']['tenureMonths']+'');
            let _months = parseInt(res['ProcessVariables']['rdDetails']['tenureMonths']+'') >= 12 ? (parseInt(res['ProcessVariables']['rdDetails']['tenureMonths']+'')%12) : parseInt(res['ProcessVariables']['rdDetails']['tenureMonths']+'');

            this.rdFormGroup.controls.rdYear.setValue(_year);
            this.rdFormGroup.controls.rdMonth.setValue(_months);
          }
        }

        this.pointer = this.arrAccountDetails.findIndex(e => e.accountNumber == this.selectedAccountNumber);
        this.getAccountBalance(this.selectedAccountNumber);

        /**************************************
         * Set Validators when balance changes
        **************************************/
        //  console.log("[RecurringDepositComponent] allValidators: ", this.allValidators);
        this.rdFormGroup.controls.amount.setValidators([Validators.required, Validators.max(this.max_amount), Validators.min(this.min_amount), CustomValidators.shouldBeMultiplesOf100, CustomValidators.shouldBeLessThanEqualToNumber(this.balance) ]);
        this.rdFormGroup.controls.amount.updateValueAndValidity();
        //  this.rdFormGroup.controls.amount = new FormControl('', [Validators.required, Validators.max(this.max_amount), Validators.min(this.min_amount), CustomValidators.shouldBeMultiplesOf100, CustomValidators.shouldBeLessThanEqualToNumber(this.balance) ]);

        /*************************************/

        this.branchCode = this.arrAccountDetails[0]['branchCode'];
        this.branchName = this.arrAccountDetails[0]['branchName'];
        // if (!this.fd_form.controls.scheme_val.value) {
        //   this.fd_form.controls['FD_product'].disable();
        // }

        this.arrCountriesLovs = res['ProcessVariables']['countryData'].map(e => ({code: e.code+'', label: e.label}));
        this.arrNomineeRelationLovs = res['ProcessVariables']['nomineeRelationData'].map(e => ({code: e.code+'', label: e.label}));
        this.arrGuardianRelationLovs = res['ProcessVariables']['guardianRelationData'].map(e => ({code: e.code+'', label: e.label}));

        this.rdFormGroup.controls.custId.setValue(res['ProcessVariables']['custId']);
        this.rdFormGroup.controls.custType.setValue(res['ProcessVariables']['custType']);
        this.rdFormGroup.controls.custName.setValue(res['ProcessVariables']['custName']);  
      }, err => {
        // this.spinner.hide();
        this.loading = false;
        this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
      }
    ))
  }

  /**
   * Get no of Months for displaying months, multiple of 3 , e.g: 3,6,9,12...120
   */
  setMonths() {
    let _arrMonths = new Array(10).fill(0);
    // this.months = _arrMonths.map((e,i) => (i)%3 == 0 ? i: 0).filter(e => e!=0);
    this.months = _arrMonths.map((_,i) => i%3 == 0 ? i: -1).filter(e => e!=-1);

    /********************************************************
     * Check year or month has been set for atleast 3 months
    ********************************************************/
    if(parseInt(this.rdFormGroup.controls.rdYear.value) == 0) {
      if(parseInt(this.rdFormGroup.controls.rdMonth.value) < 3) {
        this.rdFormGroup.controls.rdYear.setErrors({'incorrect': true});
      } else {
        this.rdFormGroup.controls.rdMonth.setErrors(null);
      }
    } else {
      this.rdFormGroup.controls.rdYear.setErrors(null);
    }
  }

  setYears() {
    let _arrYears = new Array(10).fill(0);
    this.years = _arrYears.map((e, i) => i);
    
    /********************************************************
     * Check year or month has been set for atleast 3 months
    ********************************************************/
    if(parseInt(this.rdFormGroup.controls.rdYear.value) == 0) {
      if(parseInt(this.rdFormGroup.controls.rdMonth.value) < 3)
      this.rdFormGroup.controls.rdYear.setErrors({'incorrect': true});
    } else {
      this.rdFormGroup.controls.rdYear.setErrors(null);
    }
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


  /**
   * Called on loan Account number select value is changed.
   * 
   * @param accountNumber: MatSelectChange
   */
  onSelectionChange(accountNumber: MatSelectChange) {

    this.pointer = this.arrAccountDetails.findIndex(e => e.accountNumber == accountNumber.value);
    console.log("[RecurringDepositComponent] Pointer: ", this.pointer);

    this.getAccountBalance(accountNumber.value);
  }

  /**
   * Get Account Balance API and fill balance,
   * nominee and guardian data.
   * 
   * @param accountNumberValue: string
   */
  getAccountBalance(accountNumberValue: string) {

    this.loading = true;

    this.rdFormGroup.controls.isNomineeShown.setValue(null);
    this.rdFormGroup.removeControl('rdNomineeFormGroup');
    this.rdFormGroup.removeControl('rdGuardianFormGroup');
    
    // this.rdNomineeFormGroup.reset();
    // this.rdGuardianFormGroup.reset();

    console.log("[RecurringDepositComponent] accountNumber: ", accountNumberValue);

    this.rdFormGroup.controls.accountRelation.setValue(this.arrAccountDetails.find(e => e.accountNumber == accountNumberValue)['accountRelation']);
    this.rdFormGroup.controls.accountType.setValue(this.arrAccountDetails.find(e => e.accountNumber == accountNumberValue)['accountType']);

    let apiUniqueKey = new Date().getTime().toString();
    let _accountType: string = this.arrAccountDetails.find(e => e.accountNumber == accountNumberValue)['accountType'];

    // dummy
    this.subs.push(this.service.getAccountDetails(apiUniqueKey, accountNumberValue, _accountType).subscribe(res => {

      if(res['ErrorCode'] == '200' || res['ErrorCode'] == '401') {
        this.arrAccountDetails = this.arrAccountDetails.map(e => {
          let f = e;
          if(e.accountNumber == accountNumberValue) {
            f.balance = res['ProcessVariables']['balance'];
            f.nomineeDetails = res['ProcessVariables']['nomineeDetails'] ? res['ProcessVariables']['nomineeDetails']: null;
            f.guardianDetails = res['ProcessVariables']['guardianDetails'] ? res['ProcessVariables']['guardianDetails']: null;
            f.isExistingOrNewNominee = res['ProcessVariables']['nomineeDetails'] ? true: false;
            f.isNomineePresent = res['ProcessVariables']['nomineeDetails'] ? true: false;
            f.isGuardianPresent = res['ProcessVariables']['guardianDetails'] ? true: false;
  
            this.rdFormGroup.controls.isExistingOrNewNominee.setValue(f.isExistingOrNewNominee ? 1: 2);
  
  
            if(res['ProcessVariables']['nomineeDetails']) {
              // this.rdFormGroup.controls.rdNomineeFormGroup.patchValue(this.arrAccountDetails[this.pointer]['nomineeDetails']);
              // this.rdNomineeFormGroup.disable();
              if(res['ProcessVariables']['guardianDetails']) {
                // this.rdFormGroup.controls.rdGuardianFormGroup.patchValue(this.arrAccountDetails[this.pointer]['guardianDetails']);
                // this.rdGuardianFormGroup.disable();
              }
            } else {
              this.rdNomineeFormGroup.enable();
              this.rdGuardianFormGroup.enable();
            }
  
            return f;
          }
  
          return e;
        });
  
        this.pointer = this.arrAccountDetails.findIndex(e => e.accountNumber == accountNumberValue);
  
        console.log("[RecurringDepositComponent] arrAccountDetails: ", this.arrAccountDetails);
        console.log("[RecurringDepositComponent] in getAccountBalance pointer: ", this.pointer);
  
        this.balance = res['ProcessVariables']['balance'];
  
        if(this.arrAccountDetails[this.pointer]['nomineeDetails']) {
          this.nomineeAge = this.getAge(this.arrAccountDetails[this.pointer]['nomineeDetails']['dateOfBirth']);
        } else {
          this.nomineeAge = null;
        }
  
        /**************************************
         * Set Validators when balance changes
        **************************************/
         this.rdFormGroup.controls.amount.setValidators([Validators.required, Validators.max(this.max_amount), Validators.min(this.min_amount), CustomValidators.shouldBeMultiplesOf100, CustomValidators.shouldBeLessThanEqualToNumber(this.balance) ]);
         this.rdFormGroup.controls.amount.updateValueAndValidity();
  
        /*************************************/
  
        let _selectedAccountNumber = this.arrAccountDetails[this.pointer];
        this.branchCode = _selectedAccountNumber['branchCode'];
        this.branchName = _selectedAccountNumber['branchName'];
  
        if(this.arrAccountDetails[this.pointer].isExistingOrNewNominee) {
          this.rdNomineeFormGroup.disable();
          this.rdGuardianFormGroup.disable();
        } else {
          this.rdNomineeFormGroup.enable();
          this.rdGuardianFormGroup.enable();
        }

        
        /*************************
         * Quick Book
        *************************/
        if(res['ProcessVariables']['fdrdQuickBookData']) {
          console.log("[RecurringDepositComponent]: Response fdrdQuickBookData: ", res['ProcessVariables']['fdrdQuickBookData']);
          this.quickBooks = res['ProcessVariables']['fdrdQuickBookData'].map((e, i) => ({
            amount: e['amount'],
            tenure: e['tenure'] ? e['tenure']: e['schemeName'],
            interestRate: e['interestRate'],
            years: e['maxYear'],
            months: e['maxMonths'],
            index: i
          }));

        }
      }

      // this.spinner.hide();
      this.loading = false;
    }, err => {
      if(this.arrAccountDetails[this.pointer].isExistingOrNewNominee) {
        this.rdNomineeFormGroup.disable();
        this.rdGuardianFormGroup.disable();
      } else {
        this.rdNomineeFormGroup.enable();
        this.rdGuardianFormGroup.enable();
      }
      // this.spinner.hide();
      this.loading = false;
    }));
  }



  selectMonth(month) {
    // this.select_month = month;
  }

  /**
   * On Product selection, get code of it 
   * 
   * @param productCode : string
   * @param productLabel : string
   * @param productType : string
   */
  onSelectProduct(productCode: string, productLabel: string, productType: string) {
    let _selectedProduct: {code?: string, label?: string, type?: string} = {};
    _selectedProduct.code = productCode;
    _selectedProduct.label = productLabel;
    _selectedProduct.type = productType;

    this.selectedProduct = _selectedProduct;
    this.rdFormGroup.controls.rdProduct.setValue(productCode);
  }

  // back to main page (Form field)
  back_screen() {
    this.confirmation_screen = false;
  }


  // confirm screen function
  confirm() {
    console.log("[RecurringDepositComponent] in confirm() rdFormGroup: ", this.rdFormGroup);

    console.log("[RecurringDepositComponent] in confirm() months: ", (parseInt(this.rdFormGroup.controls.rdYear.value+"")*12)+parseInt(this.rdFormGroup.controls.rdMonth.value+""));

    let _months = (parseInt(this.rdFormGroup.controls.rdYear.value+"")*12)+parseInt(this.rdFormGroup.controls.rdMonth.value+"");
    this.rdFormGroup.controls.months.setValue(_months);

    if (this.rdFormGroup.valid) {
      // this.spinner.show();
      this.loading = true;
      let apiUniqueKey = new Date().getTime().toString();
      // dummy
      this.subs.push(this.service.getProductDetails(
        apiUniqueKey,
        this.rdFormGroup.controls.rdProduct.value,
        this.rdFormGroup.controls.amount.value,
        _months,
        this.rdFormGroup.controls.srId.value
      ).subscribe(
          res => {
        if (res['ErrorCode'] == '200') {
          
          this.rdFormGroup.controls.rdProductLabel.setValue(this.arrProductDetails.find(e => e.code == this.rdFormGroup.controls.rdProduct.value)['label']);
          this.rdFormGroup.controls.interestIndexCode.setValue(res['ProcessVariables']['interestIndexCode']);
          this.rdFormGroup.controls.interestRate.setValue(res['ProcessVariables']['interestRate']);
          this.rdFormGroup.controls.jointHolder.setValue(res['ProcessVariables']['jointHolder']);
          this.rdFormGroup.controls.maturityAmount.setValue(res['ProcessVariables']['maturityAmount']);
          this.rdFormGroup.controls.maturityDate.setValue(res['ProcessVariables']['maturityDate']);
          this.rdFormGroup.controls.depositDate.setValue(res['ProcessVariables']['depositDate']);
          this.rdFormGroup.controls.joinAccount.setValue(res['ProcessVariables']['joinAccount']);
          this.rdFormGroup.controls.taxCode.setValue(res['ProcessVariables']['taxCode']);
          this.rdFormGroup.controls.tenure.setValue(res['ProcessVariables']['tenure']);
          this.rdFormGroup.controls.branchCode.setValue(this.branchCode);

          // this.rdFormGroup.controls.compoundingFrequency.setValue(res['ProcessVariables']['compoundingFrequency']);
          // this.rdFormGroup.controls.compoundingFrequencyCode.setValue(res['ProcessVariables']['compoundingFrequencyCode']);
          // this.rdFormGroup.controls.payOutFrequency.setValue(res['ProcessVariables']['payOutFrequency']);
          // this.rdFormGroup.controls.payoutFrequencyCode.setValue(res['ProcessVariables']['payoutFrequencyCode']);


          // this.confirm_details_obj.push({
            // 'deposit_amount': this.rdFormGroup.controls.amount.value,
            // 'product_label': this.selectedProduct.label,
            // 'deposit_product': this.rdFormGroup.controls.FD_product.value,
            // 'months': this.rdFormGroup.controls.rdMonth.value + this.rdFormGroup.controls.rdYear.value,
            // 'day': this.rdFormGroup.controls.FD_days.value,
            // 'compoundingFrequency': res['ProcessVariables']['compoundingFrequency'],
            // 'compoundingFrequencyCode': res['ProcessVariables']['compoundingFrequencyCode'],
            // 'interestRate': res['ProcessVariables']['interestRate'],
            // 'interestFrequency': res['ProcessVariables']['interestFrequency'],
            // 'jointHolder': res['ProcessVariables']['jointHolder'],
            // 'maturityAmount': res['ProcessVariables']['maturityAmount'],
            // 'maturityDate': res['ProcessVariables']['maturityDate'],
            // 'payOutFrequency': res['ProcessVariables']['payOutFrequency'],

            // 'payoutFrequencyCode': res['ProcessVariables']['payoutFrequencyCode'],
            // 'account': this.selectAccountNumber,
            // 'deposit_start_date': this.datePipe.transform(new Date(), "yyyy-MM-dd").toString(),
            // 'balance': this.balance,
            // 'branch_code': this.branchCode,
            // 'prod_code': this.rdFormGroup.controls.rdProduct.value,
            // 'jointAccount': true,
            // 'sweepIn': true,
          // });


          this.confirmation_screen = true;
          // this.spinner.hide();
          this.loading = false;
        }
        else if (res['ErrorCode'] == '400') {
          this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
        }
        // this.spinner.hide();
        this.loading = false;
      }, err => {
        // this.spinner.hide();
        this.loading = false;
      }));
    }
    else {
      this.authService.alertToUser('Please fill Empty Field');
    }
  }

  // Confrirm page function
  proceed() {
    if(this.checked && !this.rdStaff.valid) {
      this.authService.alertToUser('Please enter Staff ID');
      return;
    } 
    if (!this.checked) {
      this.rdStaff.reset();
    }

    // this.spinner.show();
    this.loading = true;

    // dummy
    this.subs.push(
      this.service.updateSR(this.selectedAccountNumber+'',
      this.rdFormGroup.value,
      this.rdFormGroup.controls.rdNomineeFormGroup ? this.rdFormGroup.controls.rdNomineeFormGroup.value: null,
      this.rdFormGroup.controls.rdGuardianFormGroup ? this.rdFormGroup.controls.rdGuardianFormGroup.value: null,
      this.rdStaff.value,
      this.checked
    ).subscribe(res => {
      if (res['ErrorCode'] == '200') {
        let srId = res['ProcessVariables']['srId']
        if (srId) {
          sessionStorage.setItem('sr_val', srId);
          // dummy
          this.subs.push(this.service.sr_submit().subscribe(res => {
            if (res['ErrorCode'] == '200') {
              // this.spinner.hide()
              // this.baseAPIService.srId = srId;
              this.router.navigate(['serviceRequest']);
              this.authService.alertToUser('Fixed Deposit Created');
            }
            else if (res['ErrorCode'] == '400') {
              // this.spinner.hide()
              this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            }
          }))
        }
      } else if (res['ErrorCode'] == '400') {
        // this.spinner.hide()
        this.authService.alertToUser('execution failed, in-sufficient data/ missing mandatroy data');
      } else {
        // this.spinner.hide()
        this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
      }
      
      this.loading = false;

      })
    )
  }


  /**
   * Input Amount
   */
  onAmountInput(event: InputEvent) {
    let _val = event.target['value'];

    console.log("[RecurringDepositComponent] Input event: ", _val);

    /**********************************************************
     * Check if amount more than 50,000 and panExist=true
    **********************************************************/
    if(_val >= 50000) {
      this.rdFormGroup.controls.panNo.setValue(this.panExist ? true: false);
    } else {
      this.rdFormGroup.controls.panNo.setValue(true);
    }

    
    // console.log("[RecurringDepositComponent] Amount should be allowed: ", parseFloat(_val) <= parseFloat(this.selectAccountNumber));
  }


  /**
   * Called on keypress in amount
   */
  onAmountInputKeyPress(event: KeyboardEvent) {
    console.log("[RecurringDepositComponent] charCode: ", event.charCode);

    /*********************
     * Allow Only numbers
    *********************/
    return (event.charCode >= 48 && event.charCode <= 57);
  }

  onPanNoInput(event: any) {
    console.log(event);
  }

  /**
   * 
   * @param event 
   */
  onNomineeYesNoChange(event: MatRadioChange) {
    console.log("[RecurringDepositComponent] MatRadioChange: ", event);

    this.rdFormGroup.controls.isNomineeShown.setValue(event.value);

    if(event.value) {

      /*******************************************************
       * If Nominee data is present then prefill the form
      *******************************************************/
      if(this.arrAccountDetails[this.pointer].isNomineePresent) {
        this.rdFormGroup.controls.isExistingOrNewNominee.setValue(1);
        this.nomineeAge = this.getAge(this.arrAccountDetails[this.pointer]['nomineeDetails']['dateOfBirth']);

        if(this.rdFormGroup.controls.rdNomineeFormGroup) {
          this.rdFormGroup.removeControl('rdNomineeFormGroup');
        }
        this.rdFormGroup.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);
        this.rdFormGroup.controls.rdNomineeFormGroup.reset();
        this.rdFormGroup.controls.rdNomineeFormGroup.patchValue(this.arrAccountDetails[this.pointer]['nomineeDetails']);

        if(this.arrAccountDetails[this.pointer].isGuardianPresent && this.nomineeAge < 18) {
          if(this.rdFormGroup.controls.rdGuardianFormGroup) {
            this.rdFormGroup.removeControl('rdGuardianFormGroup');
          }
          this.rdFormGroup.addControl('rdGuardianFormGroup', this.rdGuardianFormGroup);
          this.rdFormGroup.controls.rdGuardianFormGroup.reset();
          this.rdFormGroup.controls.rdGuardianFormGroup.patchValue(this.arrAccountDetails[this.pointer]['guardianDetails']);
        } else {
          // This scenario will be handled by API
        }
      }
      else {
        /***************************************************************
         * If Yes is selected and no data is present of Nominee/Guardian
         * then reset, remove and then add the form control.
        ***************************************************************/
        this.rdFormGroup.controls.isExistingOrNewNominee.setValue(2);
        this.nomineeAge = null;

        if(this.rdFormGroup.controls.rdNomineeFormGroup) {
          this.rdFormGroup.removeControl('rdNomineeFormGroup');
        }
        
        this.rdNomineeFormGroup.reset();
        this.rdFormGroup.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);

        this.rdGuardianFormGroup.reset();

        if(this.rdFormGroup.controls.rdGuardianFormGroup) {
          this.rdFormGroup.removeControl('rdGuardianFormGroup');
        }
      }
    } else {
      this.nomineeAge = null;
      if(this.rdFormGroup.controls.rdNomineeFormGroup) {
        this.rdFormGroup.controls.rdNomineeFormGroup.reset();
      }

      if(this.rdFormGroup.controls.rdGuardianFormGroup) {
        this.rdFormGroup.controls.rdGuardianFormGroup.reset();
      }

      this.rdFormGroup.removeControl('rdNomineeFormGroup');
      this.rdFormGroup.removeControl('rdGuardianFormGroup');
    }
  }

  /**
   * Called On Selecting Use Existing/Add New Radio Change
   * 
   * @param event: MatRadioChange
   */
  onExistingOrNewNomineeChange(event: MatRadioChange) {
    console.log("[RecurringDepositComponent] onExistingOrNew MatRadioChange: ", event);
    console.log("[RecurringDepositComponent] onExistingOrNewNomineeChange rdFormGroup: ", this.rdFormGroup);

    /**********************************
     * If Use Existing selected than
     * use available nominee details
    **********************************/
    if(event.value == 1) {

      /*******************************************************
       * If Nominee data is present then prefill the form
      *******************************************************/
      if(this.arrAccountDetails[this.pointer].isNomineePresent) {

        this.nomineeAge = this.getAge(this.arrAccountDetails[this.pointer]['nomineeDetails']['dateOfBirth']);

        if(this.rdFormGroup.controls.rdNomineeFormGroup) {
          this.rdFormGroup.removeControl('rdNomineeFormGroup');
        }
        this.rdFormGroup.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);
        this.rdFormGroup.controls.rdNomineeFormGroup.reset();
        this.rdFormGroup.controls.rdNomineeFormGroup.patchValue(this.arrAccountDetails[this.pointer]['nomineeDetails']);
        this.rdNomineeFormGroup.disable();

        if(this.arrAccountDetails[this.pointer].isGuardianPresent && this.nomineeAge < 18) {
          if(this.rdFormGroup.controls.rdGuardianFormGroup) {
            this.rdFormGroup.removeControl('rdGuardianFormGroup');
          }
          this.rdFormGroup.addControl('rdGuardianFormGroup', this.rdGuardianFormGroup);
          this.rdFormGroup.controls.rdGuardianFormGroup.reset();
          this.rdFormGroup.controls.rdGuardianFormGroup.patchValue(this.arrAccountDetails[this.pointer]['guardianDetails']);
          this.rdGuardianFormGroup.disable();
        } else {
          // This scenario will be handled by API
        }
      }
      else {
        // Will never come here because button will be disabled.
        if(this.rdFormGroup.controls.rdNomineeFormGroup) {
          this.rdFormGroup.removeControl('rdNomineeFormGroup');

          if(this.rdFormGroup.controls.rdGuardianFormGroup) {
            this.rdFormGroup.removeControl('rdGuardianFormGroup');
          }
        }
      }

    }
    /**********************************
     * Add New Nominee Details
    **********************************/
    else if(event.value == 2) {
      /*******************************************************
       * If Nominee data is present then prefill the form
      *******************************************************/

     this.nomineeAge = null;

      if(this.rdFormGroup.controls.rdNomineeFormGroup) {
        this.rdFormGroup.removeControl('rdNomineeFormGroup');
      }
      this.rdNomineeFormGroup.enable();
      this.rdNomineeFormGroup.reset();
      this.rdFormGroup.addControl('rdNomineeFormGroup', this.rdNomineeFormGroup);

      if(this.rdFormGroup.controls.rdGuardianFormGroup) {
        this.rdFormGroup.removeControl('rdGuardianFormGroup');
      }

    }
    
  }

  /**
   * Date of birth picker changing date
   * 
   * @param event: MatDatepickerInputEvent<Date>
   */
  onDateOfBirthChange(event: MatDatepickerInputEvent<Date>) {

    console.log("[RecurringDepositComponent] arrAccountDetails: ", this.arrAccountDetails);
    console.log("[RecurringDepositComponent] Date of Birth: ", event);
    console.log("[RecurringDepositComponent] For Backend Date of Birth: ", `${event.value.getFullYear()}-${event.value.getMonth()+1}-${event.value.getDate()}`);
    let dateOfBirth = `${event.value.getFullYear()}-${event.value.getMonth()+1}-${event.value.getDate()}`;

    /***************************************
     * Set Age of Nominee for Guardian form
    ***************************************/
    this.nomineeAge = this.getAge(dateOfBirth);


    /*************************************
     * If age is below 18 then add
     * Guardian form
    *************************************/
    if(this.nomineeAge < 18) {
      this.rdFormGroup.addControl('rdGuardianFormGroup', this.rdGuardianFormGroup);

      let _guardianDetails = this.arrAccountDetails.find(e => e.accountNumber == this.selectedAccountNumber)['guardianDetails'];
      console.log("[RecurringDepositComponent] _guardianDetails: ", _guardianDetails);
      if(_guardianDetails && this.rdFormGroup.get('isExistingOrNewNominee').value == 1) {
        this.rdFormGroup.controls.rdGuardianFormGroup.setValue(_guardianDetails);
      } else {
        this.rdFormGroup.controls.rdGuardianFormGroup.reset();
      }
    }
    /*************************************
     * If age is 18 and above then remove
     * guardian form
    *************************************/
    else {
      if(this.rdFormGroup.controls.rdGuardianFormGroup) {
        this.rdFormGroup.controls.rdGuardianFormGroup.reset();
      }
      this.rdFormGroup.removeControl('rdGuardianFormGroup');
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
    this.rdFormGroup.controls.amount.setValue(data['amount']);
    this.rdFormGroup.controls.rdMonth.setValue(data['months']);
    this.rdFormGroup.controls.rdYear.setValue(data['years']);

    if(data['amount'] >= 50000) {
      this.rdFormGroup.controls.panNo.setValue(this.panExist ? true: false);
    } else {
      this.rdFormGroup.controls.panNo.setValue(true);
    }

    this.selectedQuickBook = data;
  }

  ngOnDestroy() {
    if(this.subs) this.subs.forEach(e => e.unsubscribe);
  }
}
