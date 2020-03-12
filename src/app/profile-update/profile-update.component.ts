import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Constants, AlertMessages } from 'src/app/app.constant';
import { Subscription, of } from 'rxjs';
import { MatAutocompleteSelectedEvent, MatSelectChange } from '@angular/material';
import { startWith, map, tap } from 'rxjs/operators';
import { ProfileUpdateService } from './profile-update.service';
import { CommonService } from '../core/services/common.service';
import { AuthService } from '../core/services/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.scss']
})
export class ProfileUpdateComponent implements OnInit {

  serviceHeading:string

  NA_BANK_MSG = AlertMessages.NA_BANK_MSG;
  REQUIRED_FIELD_MSG = AlertMessages.REQUIRED_FIELD_MSG;

  @Output() profileDetailsEvent = new EventEmitter<string>();
  // @Output() nextEvnt = new EventEmitter<string>();
  //  oldProfileData: any;
  // Raw profile data
  oldProfileData = {
    maritalStatus: {id: '', text: ''},
    otherMaritalStatus: {id: '', text: ''},
    residenceType: {id: '', text: ''},
    residenceTypeOther: '',
    educationalQualification: {id: '', text: ''},
    educationalQualificationOther: '',
    occupationType: {id: '', text: ''},
    occupationTypeOther: '',
    annualIncome: {id: '', text: ''},
    sourceOfFund_1: [{id: '', text: ''}],
    sourceOfFundOther_1: '',

    // if salaried
    employmentDetails: {id: '', text: ''},
    employmentDetailsOther: '',
    employerName: '',
    currentEmpPeriodYear: '',
    currentEmpPeriodMonth: '',
    employeeId: '',
    companyCode: '',

    //self emp
    typeOfCompany: {id: '', text: ''},
    typeOfCompanyOther: '',
    nameOfCompany: '',
    currentBusinessPeriodYear: '',
    currentBusinessPeriodMonth: '',
    profession: {id: '', text: ''},
    professionOther: '',

    //if business
    natureOfBusiness_1: [{id: '', text: ''}],
    // natureOfBusiness_2: '',
    // natureOfBusiness_3: '',
    natureOfBusinessOther_1: '',
    // natureOfBusinessOther_2: '',
    // natureOfBusinessOther_3: '',
    natureOfIndustry_1: [{id: '', text: ''}],
    // natureOfIndustry_2: '',
    // natureOfIndustry_3: '',
    natureOfIndustryOther_1: '',
    // natureOfIndustryOther_2: '',
    // natureOfIndustryOther_3: '',

    cashDeposit: {id: '', text: ''},
    cashWithdrawal:  {id: '', text: ''},
    inwardRemittance:  {id: '', text: ''},
    outwardRemittance:  {id: '', text: ''},
    noOfTransaction: {id: '', text: ''},
    politicalExposure:  {id: '', text: ''},
  };


  //FOrm Group
  profileUpdateForm = new FormGroup({
    //Basic Profile
    maritalStatus: new FormControl(''),
    residenceType: new FormControl(''),
    educationalQualification: new FormControl(''),
    occupationType: new FormControl(''),
    annualIncome: new FormControl(''),
    sourceOfFund_1 : new FormControl(''),
    sourceOfFund_1Search: new FormControl(''),
    // Transaction Pattern
    cashDeposit: new FormControl(''),
    cashWithdrawal: new FormControl(''),
    inwardRemittance: new FormControl(''),
    outwardRemittance: new FormControl(''),
    noOfTransaction: new FormControl(''),
    politicalExposure: new FormControl(''),

    natureOfBusiness_1Search: new FormControl(''),
    natureOfIndustry_1Search: new FormControl('')
  });

  arrMaritalStatusList: { 'id': string; 'text': string; }[];
  arrResidenceTypeList: { 'id': string; 'text': string; }[];
  arrEducationalQualificationList: { 'id': string; 'text': string; }[];
  arrOccupationTypeList: { 'id': string; 'text': string; }[];
  arrAnnualIncomeList: { 'id': string; 'text': string; }[];
  arrSourceOfFundList: { 'id': string; 'text': string; }[];
  arrEmploymentDetailsList: { 'id': string; 'text': string; }[];
  arrCashDepositList: { 'id': string; 'text': string; }[];
  arrCashWithdrawalList: { 'id': string; 'text': string; }[];
  arrInwardRemittanceList: { 'id': string; 'text': string; }[];
  arrOutwardRemittanceList: { 'id': string; 'text': string; }[];
  arrNoOfTransactionList: { 'id': string; 'text': string; }[];
  arrPoliticalExposureList: { 'id': string; 'text': string; }[];
  arrTypeOfCompanyList: { 'id': string; 'text': string; }[];
  arrProfessionList: { 'id': string; 'text': string; }[];
  arrNatureOfBusinessList: { 'id': string; 'text': string; }[];
  arrNatureOfIndustryList: { 'id': string; 'text': string; }[];
  arrOtherMaritalStatusList: { 'id': string; 'text': string; }[];

  isSalaried: boolean;
  isSelfEmployeed: boolean;
  isBusiness: boolean;
  isResidenceTypeOther: boolean;
  isEducationalQualificationOther: boolean;
  isOccupationTypeOther: boolean;
  isSourceOfFundOther_1: boolean;
  isEmploymentDetailsOther: boolean;
  isTypeOfCompanyOther: boolean;
  isProfessionOther: boolean;
  viewPanelState: boolean;
  updatePanelState: boolean;
  isMaritalStatusOther: boolean;

  arrMaritalStatusListFilter: any;
  arrOtherMaritalStatusListFilter: any;
  arrResidenceTypeListFilter: any;
  arrEducationalQualificationListFilter: any;
  arrOccupationTypeListFilter: any;
  arrAnnualIncomeListFilter: any;
  isSourceOfFundOther_3: boolean;
  isSourceOfFundOther_2: boolean;
  arrSourceOfFundListFilter_3: any;
  arrSourceOfFundListFilter_2: any;
  arrSourceOfFundListFilter_1: any;
  arrEmploymentDetailsListFilter: any;
  arrTypeOfCompanyListFilter: any;
  arrProfessionListFilter: any;
  arrNatureOfBusinessListFilter_1: any;
  isNatureOfBusinessOther_3: boolean;
  isNatureOfBusinessOther_2: boolean;
  isNatureOfBusinessOther_1: boolean;
  arrNatureOfBusinessListFilter_3: any;
  arrNatureOfBusinessListFilter_2: any;
  isNatureOfIndustryOther_1: boolean;
  isNatureOfIndustryOther_2: boolean;
  isNatureOfIndustryOther_3: boolean;
  arrNatureOfIndustryListFilter_3: any;
  arrNatureOfIndustryListFilter_2: any;
  arrNatureOfIndustryListFilter_1: any;
  arrCashDepositListFilter: any;
  arrCashWithdrawalListFilter: any;
  arrPoliticalExposureListFilter: any;
  arrNoOfTransactionListFilter: any;
  arrOutwardRemittanceListFilter: any;
  arrInwardRemittanceListFilter: any;
  mes: any;
  custId: any;
  mySubscription: Subscription;
  serviceType: any;
  max_length = 120;
  min_month = 0;
  max_month = 11;
  sourceofFunds = [];
  natureOfBusinesses = [];
  natureOfIndustries = [];

  multipleSourceOfFund = [];
  multipleNatureofBusiness = [];
  multipleNatureOfIndustry = [];

  constructor(private profileService: ProfileUpdateService, private commonService: CommonService, private authService: AuthService, public spinner: NgxSpinnerService, private dataService: DataService, private router: Router) { }

  onMaritalStatusOptionSelectChanged(event?: MatAutocompleteSelectedEvent) {
    
    console.log('Test', this.profileUpdateForm.controls['maritalStatus'].value, this.profileUpdateForm.controls['maritalStatus'].value['text']);
    if ((this.profileUpdateForm.controls['maritalStatus'].value['text']).toLowerCase().includes('other')) {
      this.isMaritalStatusOther = true;
      console.log('status', this.profileUpdateForm.controls['maritalStatus'].value['id']);
    } else {
      console.log('other', this.profileUpdateForm.controls['maritalStatus'].value['id']);
      this.isMaritalStatusOther = false;
    }

    console.log('event: ', event);
    let val = event.option.value;
    if(val && this.isMaritalStatusOther == true) {
      this.profileUpdateForm.addControl('otherMaritalStatus',  new FormControl('', [Validators.required]));
      this.arrOtherMaritalStatusListFilter = this.profileUpdateForm.controls.otherMaritalStatus.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterOtherMaritalStatus(data) : this._filterOtherMaritalStatus(data.text))
      );
      this.profileUpdateForm.controls['otherMaritalStatus'].markAsTouched();
    } else {
      if(this.profileUpdateForm.contains('otherMaritalStatus')) {
        this.profileUpdateForm.removeControl('otherMaritalStatus');
      }
    }
  }

  onResidentialStatusOptionSelectChanged(event: MatAutocompleteSelectedEvent) {
    
    console.log(this.profileUpdateForm.controls['residenceType'].value, this.profileUpdateForm.controls['residenceType'].value['text']);
    if ((this.profileUpdateForm.controls['residenceType'].value['text']).toLowerCase().includes('other')) {
      this.isResidenceTypeOther = true;
    } else {
      this.isResidenceTypeOther = false;
    }

    console.log('event: ', event);
    let val = event.option.value;
    if(val && this.isResidenceTypeOther == true) {
      this.profileUpdateForm.addControl('residenceTypeOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
      this.profileUpdateForm.controls['residenceTypeOther'].markAsTouched();
    } else {
      if(this.profileUpdateForm.contains('residenceTypeOther')) {
        this.profileUpdateForm.removeControl('residenceTypeOther');
      }
    }
  }

  onEducationalStatusOptionSelectChanged(event: MatAutocompleteSelectedEvent) {
    
    console.log(this.profileUpdateForm.controls['educationalQualification'].value, this.profileUpdateForm.controls['educationalQualification'].value['text']);
    if ((this.profileUpdateForm.controls['educationalQualification'].value['text']).toLowerCase().includes('other')) {
      this.isEducationalQualificationOther = true;
    } else {
      this.isEducationalQualificationOther = false;
    }

    console.log('event: ', event);
    let val = event.option.value;
    if(val && this.isEducationalQualificationOther == true) {
      this.profileUpdateForm.addControl('educationalQualificationOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
      this.profileUpdateForm.controls['educationalQualificationOther'].markAsTouched();
    } else {
      if(this.profileUpdateForm.contains('educationalQualificationOther')) {
        this.profileUpdateForm.removeControl('educationalQualificationOther');
      }
    }
  }

  onOccupationalStatusOptionSelectChanged(event: MatAutocompleteSelectedEvent) {
    
    console.log('Occupation type',this.profileUpdateForm.controls['occupationType'].value, this.profileUpdateForm.controls['occupationType'].value['text']);
    if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('salaried')){
      this.isSalaried = true;
    } else {
      this.isSalaried = false;
    }

    if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('self employed')){
      this.isSelfEmployeed = true;
    } else {
      this.isSelfEmployeed = false;
    }

    if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('business')){
      this.isBusiness = true;
    } else {
      this.isBusiness = false;
    }

    if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('other')){
      this.isOccupationTypeOther = true;
    } else {
      this.isOccupationTypeOther = false;
    }
    // }

    console.log('occupatio type - salaried - ', this.isSalaried, 'Business - ', this.isBusiness, 'Self Employed - ', this.isSelfEmployeed, 'Other - ', this.isOccupationTypeOther)

    console.log('event: ', event);
    let val = event.option.value;

    if(val && this.isOccupationTypeOther == true) {
      this.profileUpdateForm.addControl('occupationTypeOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
      this.profileUpdateForm.controls['occupationTypeOther'].markAsTouched();
    } 
    else {
      if(this.profileUpdateForm.contains('occupationTypeOther')) {
        this.profileUpdateForm.removeControl('occupationTypeOther');
      }
    }
     //For Salaried
    if(this.isSalaried == true){
      this.profileUpdateForm.addControl('employmentDetails',  new FormControl('',[Validators.required]));
      this.arrEmploymentDetailsListFilter = this.profileUpdateForm.controls.employmentDetails.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterEmploymentDetails(data) : this._filterEmploymentDetails(data.text))
      );
      this.profileUpdateForm.controls['employmentDetails'].markAsTouched();
      if(val && this.isEmploymentDetailsOther == true) {
        this.profileUpdateForm.addControl('employmentDetailsOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
        this.profileUpdateForm.controls['employmentDetailsOther'].markAsTouched();
      } else {
        if(this.profileUpdateForm.contains('employmentDetailsOther')) {
          this.profileUpdateForm.removeControl('employmentDetailsOther');
        }
      }
      this.profileUpdateForm.addControl('employerName',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
      this.profileUpdateForm.controls['employerName'].markAsTouched();
      this.profileUpdateForm.addControl('currentEmpPeriodYear',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
      this.profileUpdateForm.controls['currentEmpPeriodYear'].markAsTouched();
      this.profileUpdateForm.addControl('currentEmpPeriodMonth',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.max(this.max_month), Validators.min(this.min_month) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
      this.profileUpdateForm.controls['currentEmpPeriodMonth'].markAsTouched();
      this.profileUpdateForm.addControl('employeeId',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
      this.profileUpdateForm.controls['employeeId'].markAsTouched();
      this.profileUpdateForm.addControl('companyCode',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
      this.profileUpdateForm.controls['companyCode'].markAsTouched();
    }
    else{
      this.profileUpdateForm.removeControl('employmentDetails');
      this.oldProfileData.employmentDetails = {id: '', text: ''},
      this.profileUpdateForm.removeControl('employmentDetailsOther');
      this.profileUpdateForm.removeControl('employerName');
      this.profileUpdateForm.removeControl('currentEmpPeriodYear');
      this.profileUpdateForm.removeControl('currentEmpPeriodMonth');
      this.profileUpdateForm.removeControl('employeeId');
      this.profileUpdateForm.removeControl('companyCode');
    }
    //For Self Employed or Business
    if(this.isSelfEmployeed == true || this.isBusiness == true){
      this.profileUpdateForm.addControl('typeOfCompany',  new FormControl('',[Validators.required]));
      this.arrTypeOfCompanyListFilter = this.profileUpdateForm.controls.typeOfCompany.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterTypeOfCompany(data) : this._filterTypeOfCompany(data.text))
      );
      this.profileUpdateForm.controls['typeOfCompany'].markAsTouched();
      this.profileUpdateForm.addControl('nameOfCompany',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
      this.profileUpdateForm.controls['nameOfCompany'].markAsTouched();
      this.profileUpdateForm.addControl('currentBusinessPeriodYear',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
      this.profileUpdateForm.controls['currentBusinessPeriodYear'].markAsTouched();
      this.profileUpdateForm.addControl('currentBusinessPeriodMonth',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.max(this.max_month), Validators.min(this.min_month) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
      this.profileUpdateForm.controls['currentBusinessPeriodMonth'].markAsTouched();
    }
    else{
      this.profileUpdateForm.removeControl('typeOfCompany');
      this.oldProfileData.typeOfCompany = {id: '', text: ''},
      this.profileUpdateForm.removeControl('typeOfCompanyOther');
      this.profileUpdateForm.removeControl('nameOfCompany');
      this.profileUpdateForm.removeControl('currentBusinessPeriodYear');
      this.profileUpdateForm.removeControl('currentBusinessPeriodMonth');
    }
    //For self employed profession column
    if(this.isSelfEmployeed == true){
      this.profileUpdateForm.addControl('profession',  new FormControl('',[Validators.required]));
      this.arrProfessionListFilter = this.profileUpdateForm.controls.profession.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterProfession(data) : this._filterProfession(data.text))
      );
      this.profileUpdateForm.controls['profession'].markAsTouched();
    }
    else{
      this.profileUpdateForm.removeControl('profession');
      this.oldProfileData.profession = {id: '', text: ''},
      this.profileUpdateForm.removeControl('professionOther');
    }
  //For Business 
    if(this.isBusiness == true){
      this.profileUpdateForm.addControl('natureOfBusiness_1',  new FormControl('',[Validators.required]));
      this.arrNatureOfBusinessListFilter_1 = this.profileUpdateForm.controls.natureOfBusiness_1Search.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterNatureOfBusiness(data) : this._filterNatureOfBusiness(data.text))
      );
      this.profileUpdateForm.controls['natureOfBusiness_1'].markAsTouched();

      this.profileUpdateForm.addControl('natureOfIndustry_1',  new FormControl('',[Validators.required]));
      this.arrNatureOfIndustryListFilter_1 = this.profileUpdateForm.controls.natureOfIndustry_1Search.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterNatureOfIndustry(data) : this._filterNatureOfIndustry(data.text))
      );
      this.profileUpdateForm.controls['natureOfIndustry_1'].markAsTouched();
    }
    else{
      this.profileUpdateForm.removeControl('natureOfBusiness_1');
      this.oldProfileData.natureOfBusiness_1 = [{id: '', text: ''}],
      this.profileUpdateForm.removeControl('natureOfBusinessOther_1');
      this.profileUpdateForm.removeControl('natureOfIndustry_1');
      this.oldProfileData.natureOfIndustry_1 = [{id: '', text: ''}],
      this.profileUpdateForm.removeControl('natureOfIndustryOther_1');
    }
  }

  onSourcesOfFundOptionSelectChanged(event: MatSelectChange){
      console.log(this.profileUpdateForm.controls['sourceOfFund_1'].value);
      if (this.profileUpdateForm.value.sourceOfFund_1.length > 0 && this.profileUpdateForm.value.sourceOfFund_1.length < 4) {
        this.profileUpdateForm.value.sourceOfFund_1.filter(
          option => option.toLowerCase().includes('other') ? this.isSourceOfFundOther_1 = true : this.isSourceOfFundOther_1 = false
        );
      } else {
        this.profileUpdateForm.controls.sourceOfFund_1.setErrors({
          'invalidSourceOfFund_1': true
        });
        this.isSourceOfFundOther_1 = false;
        this.profileUpdateForm.updateValueAndValidity();
      }

      console.log('event: ', event);
      let val = event.value;
      if(val && this.isSourceOfFundOther_1 == true) {
        this.profileUpdateForm.addControl('sourceOfFundOther_1',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
        this.profileUpdateForm.controls['sourceOfFundOther_1'].markAsTouched();
      } else {
        if(this.profileUpdateForm.contains('sourceOfFundOther_1')) {
          this.profileUpdateForm.removeControl('sourceOfFundOther_1');
        }
      }
  }

  onEmploymentDetailsStatusChange(event: MatAutocompleteSelectedEvent){
      console.log(this.profileUpdateForm.controls['employmentDetails'].value, this.profileUpdateForm.controls['employmentDetails'].value['text']);
      if ((this.profileUpdateForm.controls['employmentDetails'].value['text']).toLowerCase().includes('other')) {
        this.isEmploymentDetailsOther = true;
      } else {
        this.isEmploymentDetailsOther = false;
      }

      console.log('event: ', event);
      let val = event.option.value;
      if(val && this.isEmploymentDetailsOther == true) {
        this.profileUpdateForm.addControl('employmentDetailsOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
        this.profileUpdateForm.controls['employmentDetailsOther'].markAsTouched();
      } else {
        if(this.profileUpdateForm.contains('employmentDetailsOther')) {
          this.profileUpdateForm.removeControl('employmentDetailsOther');
        }
      }
  }

  onTypeOfCompanyStatusChange(event: MatAutocompleteSelectedEvent){
      console.log(this.profileUpdateForm.controls['typeOfCompany'].value, this.profileUpdateForm.controls['typeOfCompany'].value['text']);
      if ((this.profileUpdateForm.controls['typeOfCompany'].value['text']).toLowerCase().includes('other')) {
        this.isTypeOfCompanyOther = true;
      } else {
        this.isTypeOfCompanyOther = false;
      }

      console.log('event: ', event);
      let val = event.option.value;
      if(val && this.isEmploymentDetailsOther == true) {
        this.profileUpdateForm.addControl('typeOfCompanyOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
        this.profileUpdateForm.controls['typeOfCompanyOther'].markAsTouched();
      } else {
        if(this.profileUpdateForm.contains('typeOfCompanyOther')) {
          this.profileUpdateForm.removeControl('typeOfCompanyOther');
        }
      }
  }

  onProfessionStatusChanged(event: MatAutocompleteSelectedEvent){
      console.log(this.profileUpdateForm.controls['profession'].value, this.profileUpdateForm.controls['profession'].value['text']);
      if ((this.profileUpdateForm.controls['profession'].value['text']).toLowerCase().includes('other')) {
        this.isProfessionOther = true;
      } else {
        this.isProfessionOther = false;
      }

      console.log('event: ', event);
      let val = event.option.value;
      if(val && this.isProfessionOther == true) {
        this.profileUpdateForm.addControl('professionOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
        this.profileUpdateForm.controls['professionOther'].markAsTouched();
      } else {
        if(this.profileUpdateForm.contains('professionOther')) {
          this.profileUpdateForm.removeControl('professionOther');
        }
      }      
  }

  onNatureOfBusinessOptionSelectChanged(event: MatSelectChange){
    console.log("Business change event", event)
    console.log(this.profileUpdateForm.controls['natureOfBusiness_1'].value);
    // if (this.profileUpdateForm.value.natureOfBusiness_1.length > 0 && this.profileUpdateForm.value.natureOfBusiness_1.length < 4) {
    //   this.profileUpdateForm.value.natureOfBusiness_1.filter(
    //     option => option.toLowerCase().includes('other') ? this.isNatureOfBusinessOther_1 = true : this.isNatureOfBusinessOther_1 = false
    //   );
    // } else {
    //   this.profileUpdateForm.controls.natureOfBusiness_1.setErrors({
    //     'invalidnatureOfBusiness_1': true
    //   });
    //   this.isNatureOfBusinessOther_1 = false;
    //   this.profileUpdateForm.updateValueAndValidity();
    // }

    // console.log('event: ', event);
    // let val = event.value;
    // if(val && this.isNatureOfBusinessOther_1 == true) {
    //   this.profileUpdateForm.addControl('natureOfBusinessOther_1',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
    //   this.profileUpdateForm.controls['natureOfBusinessOther_1'].markAsTouched();
    // } else {
    //   this.profileUpdateForm.removeControl('natureOfBusinessOther_1');
    // }
  }

  onNatureOfIndustryOptionSelectChanged(event: MatSelectChange){
    console.log(this.profileUpdateForm.controls['natureOfIndustry_1'].value);
    // if (this.profileUpdateForm.value.natureOfIndustry_1.length > 0 && this.profileUpdateForm.value.natureOfIndustry_1.length < 4) {
    //   this.profileUpdateForm.value.natureOfIndustry_1.filter(
    //     option => option.toLowerCase().includes('other') ? this.isNatureOfIndustryOther_1 = true : this.isNatureOfIndustryOther_1 = false
    //   );
    // } else {
    //   this.profileUpdateForm.controls.natureOfIndustry_1.setErrors({
    //     'invalidNatureOfIndustry_1': true
    //   });
    //   this.isNatureOfIndustryOther_1 = false;
    //   this.profileUpdateForm.updateValueAndValidity();
    // }

    // console.log('event: ', event);
    // let val = event.value;
    // if(val && this.isNatureOfIndustryOther_1 == true) {
    //   this.profileUpdateForm.addControl('natureOfIndustryOther_1',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
    //   this.profileUpdateForm.controls['natureOfIndustryOther_1'].markAsTouched();
    // } else {
    //   this.profileUpdateForm.removeControl('natureOfIndustryOther_1');
    // }
  }

  ngOnInit() {
    setTimeout(() => {
      this.spinner.show();
    });
    this.serviceHeading = "Profile Update";
    this.getMasterData();
    this.profileUpdateForm.patchValue(this.oldProfileData);
  }

  getMasterData() {
    // //this.spinner.show();
    //Hard Coded Repsonse

    // this.arrMaritalStatusList = ServicesConstants.maritalStatus;
    // this.arrOtherMaritalStatusList = ServicesConstants.otherMaritalStatus;
    // this.arrResidenceTypeList = ServicesConstants.residenceTypes;
    // this.arrEducationalQualificationList = ServicesConstants.eduQualification;
    // this.arrOccupationTypeList = ServicesConstants.occupationTypes;
    // this.arrAnnualIncomeList = ServicesConstants.annualIncome;
    // this.arrSourceOfFundList = ServicesConstants.sourceOfFunds;

    // //salaried
    // this.arrEmploymentDetailsList = ServicesConstants.employmentDetails;

    // //Transaction pattern
    // this.arrCashDepositList = ServicesConstants.cashDeposite;
    // this.arrCashWithdrawalList = ServicesConstants.cashWithdraw;
    // this.arrInwardRemittanceList = ServicesConstants.inwardForeignRemittance;
    // this.arrOutwardRemittanceList = ServicesConstants.outwardForeignRemittance;
    // this.arrNoOfTransactionList = ServicesConstants.expectedTransaction;
    // this.arrPoliticalExposureList = ServicesConstants.politicalExposure;

    // //if self emp
    // this.arrTypeOfCompanyList = ServicesConstants.businessDetails;
    // this.arrProfessionList = ServicesConstants.employedProfession;

    // //if business
    // this.arrNatureOfBusinessList = ServicesConstants.businessDetails;
    // this.arrNatureOfIndustryList = ServicesConstants.typeOfIndustry;

    //LOV Api
   
    //Working API
    this.mySubscription = this.commonService.getProfileMaster().subscribe(res => {
    //this.spinner.show();
       // dummy
    // this.mySubscription = this.commonService.dummygetProfileMaster().subscribe(res => {
      // console.log("master data",res)
    if(res['ErrorCode'] == '200'){
      this.arrMaritalStatusList = res['ProcessVariables']['maritalStatus'];
      this.arrOtherMaritalStatusList = res['ProcessVariables']['otherMaritalStatus'];
      this.arrResidenceTypeList = res['ProcessVariables']['residenceType'];
      this.arrEducationalQualificationList = res['ProcessVariables']['qualification'];
      this.arrOccupationTypeList = res['ProcessVariables']['occupation'];
      this.arrAnnualIncomeList = res['ProcessVariables']['annualIncome'];
      this.arrSourceOfFundList = res['ProcessVariables']['sourceOfFunds'];
  
      //salaried
      this.arrEmploymentDetailsList = res['ProcessVariables']['employmentDetails'];
  
      //Transaction pattern
      this.arrCashDepositList = res['ProcessVariables']['cashDeposit'];
      this.arrCashWithdrawalList = res['ProcessVariables']['cashWithdrawal'];
      this.arrInwardRemittanceList = res['ProcessVariables']['inwardRemittance'];
      this.arrOutwardRemittanceList = res['ProcessVariables']['outwardRemittance'];
      this.arrNoOfTransactionList = res['ProcessVariables']['expectedTransactions'];
      this.arrPoliticalExposureList = res['ProcessVariables']['politicalExposure'];
  
      //if self emp
      this.arrTypeOfCompanyList = res['ProcessVariables']['companyType'];
      this.arrProfessionList = res['ProcessVariables']['profession'];
  
      //if business
      this.arrNatureOfBusinessList = res['ProcessVariables']['natureOfBusiness'];
      this.arrNatureOfIndustryList = res['ProcessVariables']['natureOfIndustry'];
      
      this.getSessionDetail();
      
      this.arrMaritalStatusListFilter = this.profileUpdateForm.controls.maritalStatus.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterMaritalStatus(data) : this._filterMaritalStatus(data.text))
      );
    
      this.arrResidenceTypeListFilter = this.profileUpdateForm.controls.residenceType.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterResidenceType(data) : this._filterResidenceType(data.text))
      );
  
      this.arrEducationalQualificationListFilter = this.profileUpdateForm.controls.educationalQualification.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterEducationalQualification(data) : this._filterEducationalQualification(data.text))
      );
  
      this.arrOccupationTypeListFilter = this.profileUpdateForm.controls.occupationType.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterOccupationType(data) : this._filterOccupationType(data.text))
      );

      this.arrAnnualIncomeListFilter = this.profileUpdateForm.controls.annualIncome.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterAnnualIncome(data) : this._filterAnnualIncome(data.text))
      );

      this.arrSourceOfFundListFilter_1 = this.profileUpdateForm.controls.sourceOfFund_1Search.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterSourceOfFunds(data) : this._filterSourceOfFunds(data.text)),
        tap(e => console.log('tap: ', e)),
      );
  
      this.arrCashDepositListFilter = this.profileUpdateForm.controls.cashDeposit.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterCashDeposit(data) : this._filterCashDeposit(data.text))
      );
  
      this.arrCashWithdrawalListFilter = this.profileUpdateForm.controls.cashWithdrawal.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterCashWithdrawal(data) : this._filterCashWithdrawal(data.text))
      );
  
      this.arrInwardRemittanceListFilter = this.profileUpdateForm.controls.inwardRemittance.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterInwardRemittance(data) : this._filterInwardRemittance(data.text))
      );
  
      this.arrOutwardRemittanceListFilter = this.profileUpdateForm.controls.outwardRemittance.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterOutwardRemittance(data) : this._filterOutwardRemittance(data.text))
      );
  
      this.arrNoOfTransactionListFilter = this.profileUpdateForm.controls.noOfTransaction.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterNoOfTransaction(data) : this._filterNoOfTransaction(data.text))
      );
  
      this.arrPoliticalExposureListFilter = this.profileUpdateForm.controls.politicalExposure.valueChanges.pipe(
        startWith(''),
        map(data => typeof data === 'string' ? this._filterPoliticalExposure(data) : this._filterPoliticalExposure(data.text))
      );
  
    }
    else{
      this.spinner.hide();
      this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
      return;
    }
  },
  error => {
    this.spinner.hide();
    this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
    return;
  }
  );
 }

 getSessionDetail(){
  // Dummy API
  // this.profileService.dummyGetSession().subscribe(res => {

  //Working API  
  this.profileService.getSR().subscribe(res => {

    if(res['ErrorCode'] == "200"){
      console.log("respu", res)
     
      //Basic Profile
      if(res["ProcessVariables"]["profileUpdate"]["maritalStatus"] &&
        this.arrMaritalStatusList.some(e => e.text == res["ProcessVariables"]["profileUpdate"]["maritalStatus"])) {
          this.oldProfileData.maritalStatus = this.arrMaritalStatusList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["maritalStatus"]);
          this.profileUpdateForm.controls.maritalStatus.setValue(this.oldProfileData.maritalStatus);
          if ((this.profileUpdateForm.controls['maritalStatus'].value['text']).toLowerCase().includes('other')) {
            this.isMaritalStatusOther = true;
            this.profileUpdateForm.addControl('otherMaritalStatus',  new FormControl('',[Validators.required]));
            if(res["ProcessVariables"]["profileUpdate"]["otherMaritalStatus"] &&
              this.arrOtherMaritalStatusList.some(e => e.text == res["ProcessVariables"]["profileUpdate"]["otherMaritalStatus"])) {
                this.oldProfileData.otherMaritalStatus = this.arrOtherMaritalStatusList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["otherMaritalStatus"]);
                this.profileUpdateForm.controls.otherMaritalStatus.setValue(this.oldProfileData.otherMaritalStatus);              
            }
            this.arrOtherMaritalStatusListFilter = this.profileUpdateForm.controls.otherMaritalStatus.valueChanges.pipe(
              startWith(''),
              map(data => typeof data === 'string' ? this._filterOtherMaritalStatus(data) : this._filterOtherMaritalStatus(data.text))
            );
            this.profileUpdateForm.controls['otherMaritalStatus'].markAsTouched();
          }
      }
      else {
        this.profileUpdateForm.controls.maritalStatus.setValue("");
      }

      if(res["ProcessVariables"]["profileUpdate"]["residenceType"] &&
        this.arrResidenceTypeList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["residenceType"])){
          this.oldProfileData.residenceType = this.arrResidenceTypeList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["residenceType"]);
          this.profileUpdateForm.controls.residenceType.setValue(this.oldProfileData.residenceType);
          if ((this.profileUpdateForm.controls['residenceType'].value['text']).toLowerCase().includes('other')) {
            this.isResidenceTypeOther = true;
            this.profileUpdateForm.addControl('residenceTypeOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
            this.profileUpdateForm.controls['residenceTypeOther'].markAsTouched();
            this.oldProfileData.residenceTypeOther = res["ProcessVariables"]["profileUpdate"]["otherResidence"]
            this.profileUpdateForm.controls.residenceTypeOther.setValue(res["ProcessVariables"]["profileUpdate"]["otherResidence"]);
          }
      }
      else{
        this.profileUpdateForm.controls.residenceType.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["educationalQualification"] &&
        this.arrEducationalQualificationList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["educationalQualification"])){
          this.oldProfileData.educationalQualification = this.arrEducationalQualificationList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["educationalQualification"]);
          this.profileUpdateForm.controls.educationalQualification.setValue(this.oldProfileData.educationalQualification);
          if ((this.profileUpdateForm.controls['educationalQualification'].value['text']).toLowerCase().includes('other')) {
            this.isEducationalQualificationOther = true;
            this.profileUpdateForm.addControl('educationalQualificationOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
            this.profileUpdateForm.controls['educationalQualificationOther'].markAsTouched();
            this.oldProfileData.educationalQualificationOther = res["ProcessVariables"]["profileUpdate"]["otherEducationalQualification"]
            this.profileUpdateForm.controls.educationalQualificationOther.setValue(res["ProcessVariables"]["profileUpdate"]["otherEducationalQualification"]);
          }
      }
      else{
        this.profileUpdateForm.controls.educationalQualification.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["occupationType"] &&
        this.arrOccupationTypeList.some(e => e.text == res["ProcessVariables"]["profileUpdate"]["occupationType"])){
          this.oldProfileData.occupationType = this.arrOccupationTypeList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["occupationType"]);
          this.profileUpdateForm.controls.occupationType.setValue(this.oldProfileData.occupationType);
          
          //For Salaried
          if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('salaried')){
            this.isSalaried = true;
            
            this.profileUpdateForm.addControl('employmentDetails',  new FormControl('',[Validators.required]));
            if(res["ProcessVariables"]["profileUpdate"]["employmentDetails"] &&
              this.arrEmploymentDetailsList.some(e => e.text == res["ProcessVariables"]["profileUpdate"]["employmentDetails"])) {
                this.oldProfileData.employmentDetails = this.arrEmploymentDetailsList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["employmentDetails"]);
                this.profileUpdateForm.controls.employmentDetails.setValue(this.oldProfileData.employmentDetails);  
                if ((this.profileUpdateForm.controls['employmentDetails'].value['text']).toLowerCase().includes('other')){
                  this.isEmploymentDetailsOther = true;
                  this.profileUpdateForm.addControl('employmentDetailsOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
                  this.oldProfileData.employmentDetailsOther = res["ProcessVariables"]["profileUpdate"]["otherEmploymentDetails"]
                  this.profileUpdateForm.controls.employmentDetailsOther.setValue(res["ProcessVariables"]["profileUpdate"]["otherEmploymentDetails"]);
                  this.profileUpdateForm.controls['employmentDetailsOther'].markAsTouched();
                }            
            }
            this.arrEmploymentDetailsListFilter = this.profileUpdateForm.controls.employmentDetails.valueChanges.pipe(
              startWith(''),
              map(data => typeof data === 'string' ? this._filterEmploymentDetails(data) : this._filterEmploymentDetails(data.text))
            );
            this.profileUpdateForm.controls['employmentDetails'].markAsTouched();

            this.profileUpdateForm.addControl('employerName',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
            this.oldProfileData.employerName = res["ProcessVariables"]["profileUpdate"]["employerName"]
            this.profileUpdateForm.controls.employerName.setValue(res["ProcessVariables"]["profileUpdate"]["employerName"]);
            this.profileUpdateForm.controls['employerName'].markAsTouched();

            this.profileUpdateForm.addControl('currentEmpPeriodYear',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
            this.oldProfileData.currentEmpPeriodYear = res["ProcessVariables"]["profileUpdate"]["currentEmploymentYears"]
            this.profileUpdateForm.controls.currentEmpPeriodYear.setValue(res["ProcessVariables"]["profileUpdate"]["currentEmploymentYears"]);
            this.profileUpdateForm.controls['currentEmpPeriodYear'].markAsTouched();

            this.profileUpdateForm.addControl('currentEmpPeriodMonth',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.max(this.max_month), Validators.min(this.min_month) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
            this.oldProfileData.currentEmpPeriodMonth = res["ProcessVariables"]["profileUpdate"]["currentEmploymentMonths"]
            this.profileUpdateForm.controls.currentEmpPeriodMonth.setValue(res["ProcessVariables"]["profileUpdate"]["currentEmploymentMonths"]);
            this.profileUpdateForm.controls['currentEmpPeriodMonth'].markAsTouched();

            this.profileUpdateForm.addControl('employeeId',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
            this.oldProfileData.employeeId = res["ProcessVariables"]["profileUpdate"]["employeeId"]
            this.profileUpdateForm.controls.employeeId.setValue(res["ProcessVariables"]["profileUpdate"]["employeeId"]);
            this.profileUpdateForm.controls['employeeId'].markAsTouched();
            
            this.profileUpdateForm.addControl('companyCode',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
            this.oldProfileData.companyCode = res["ProcessVariables"]["profileUpdate"]["companyCode"]
            this.profileUpdateForm.controls.companyCode.setValue(res["ProcessVariables"]["profileUpdate"]["companyCode"]);
            this.profileUpdateForm.controls['companyCode'].markAsTouched();
          }

          //For Self Employed or Business
          if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('self employed') || (this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('business')){
            this.isSelfEmployeed = this.profileUpdateForm.controls['occupationType'].value['text'].toLowerCase().includes('self employed') ? true : false;
            // this.isBusiness = this.profileUpdateForm.controls['occupationType'].value['text'].toLowerCase().includes('business') ? true : false;

            this.profileUpdateForm.addControl('typeOfCompany',  new FormControl('',[Validators.required]));
            if(res["ProcessVariables"]["profileUpdate"]["companyType"] &&
              this.arrTypeOfCompanyList.some(e => e.text == res["ProcessVariables"]["profileUpdate"]["companyType"])) {
                this.oldProfileData.typeOfCompany = this.arrTypeOfCompanyList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["companyType"]);
                this.profileUpdateForm.controls.typeOfCompany.setValue(this.oldProfileData.typeOfCompany);
                if ((this.profileUpdateForm.controls['typeOfCompany'].value['text']).toLowerCase().includes('other')) {
                  this.isTypeOfCompanyOther = true;
                  this.profileUpdateForm.addControl('typeOfCompanyOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
                  this.oldProfileData.typeOfCompanyOther = res["ProcessVariables"]["profileUpdate"]["otherCompanyType"]
                  this.profileUpdateForm.controls.typeOfCompanyOther.setValue(res["ProcessVariables"]["profileUpdate"]["otherCompanyType"]);
                  this.profileUpdateForm.controls['typeOfCompanyOther'].markAsTouched();
                }             
            }
            this.arrTypeOfCompanyListFilter = this.profileUpdateForm.controls.typeOfCompany.valueChanges.pipe(
              startWith(''),
              map(data => typeof data === 'string' ? this._filterTypeOfCompany(data) : this._filterTypeOfCompany(data.text))
            );
            this.profileUpdateForm.controls['typeOfCompany'].markAsTouched();

            this.profileUpdateForm.addControl('nameOfCompany',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
            this.oldProfileData.nameOfCompany = res["ProcessVariables"]["profileUpdate"]["companyName"]
            this.profileUpdateForm.controls.nameOfCompany.setValue(res["ProcessVariables"]["profileUpdate"]["companyName"]);
            this.profileUpdateForm.controls['nameOfCompany'].markAsTouched();

            this.profileUpdateForm.addControl('currentBusinessPeriodYear',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
            this.oldProfileData.currentBusinessPeriodYear = res["ProcessVariables"]["profileUpdate"]["currentBusinessYears"]
            this.profileUpdateForm.controls.currentBusinessPeriodYear.setValue(res["ProcessVariables"]["profileUpdate"]["currentBusinessYears"]);
            this.profileUpdateForm.controls['currentBusinessPeriodYear'].markAsTouched();

            this.profileUpdateForm.addControl('currentBusinessPeriodMonth',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length), Validators.max(this.max_month), Validators.min(this.min_month) ,Validators.pattern(Constants.VALIDATION_REGX_NUMBER)]));
            this.oldProfileData.currentBusinessPeriodMonth = res["ProcessVariables"]["profileUpdate"]["currentBusinessMonths"]
            this.profileUpdateForm.controls.currentBusinessPeriodMonth.setValue(res["ProcessVariables"]["profileUpdate"]["currentBusinessMonths"]);
            this.profileUpdateForm.controls['currentBusinessPeriodMonth'].markAsTouched();
          }

          // For Self Employed
          if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('self employed')){
            this.profileUpdateForm.addControl('profession',  new FormControl('',[Validators.required]));
            if(res["ProcessVariables"]["profileUpdate"]["profession"] &&
              this.arrProfessionList.some(e => e.text == res["ProcessVariables"]["profileUpdate"]["profession"])) {
                this.oldProfileData.profession = this.arrProfessionList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["profession"]);
                this.profileUpdateForm.controls.profession.setValue(this.oldProfileData.profession);
                if ((this.profileUpdateForm.controls['profession'].value['text']).toLowerCase().includes('other')) {
                  this.isProfessionOther = true;
                  this.profileUpdateForm.addControl('professionOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
                  this.oldProfileData.professionOther = res["ProcessVariables"]["profileUpdate"]["otherProfession"]
                  this.profileUpdateForm.controls.professionOther.setValue(res["ProcessVariables"]["profileUpdate"]["otherProfession"]);
                  this.profileUpdateForm.controls['professionOther'].markAsTouched();
                }              
            }
            this.arrProfessionListFilter = this.profileUpdateForm.controls.profession.valueChanges.pipe(
              startWith(''),
              map(data => typeof data === 'string' ? this._filterProfession(data) : this._filterProfession(data.text))
            );
            this.profileUpdateForm.controls['profession'].markAsTouched();
          }

          //For Business
          if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('business')){
            this.isBusiness = true;

            this.profileUpdateForm.addControl('natureOfBusiness_1',  new FormControl('',[Validators.required]));

            this.multipleNatureofBusiness = res["ProcessVariables"]["profileUpdate"]["natureOfBusiness"];
            this.profileUpdateForm.controls.natureOfBusiness_1.setValue(this.multipleNatureofBusiness);
            this.oldProfileData.natureOfBusiness_1 = this.multipleNatureofBusiness
            console.log("Value of Get API business", this.multipleNatureofBusiness);
            console.log("Oldprofilesofdata business", this.oldProfileData.natureOfBusiness_1)
            console.log("this.profileUpdateForm.controls.natureOfBusiness_1",this.profileUpdateForm.controls.natureOfBusiness_1)
            // this.profileUpdateForm.value.natureOfBusiness_1.filter(
            //   option => option.toLowerCase().includes('other') ? this.isNatureOfBusinessOther_1 = true : this.isNatureOfBusinessOther_1 = false
            // );

            this.arrNatureOfBusinessListFilter_1= this.profileUpdateForm.controls.natureOfBusiness_1Search.valueChanges.pipe(
              startWith(''),
              map(data => typeof data === 'string' ? this._filterNatureOfBusiness(data) : this._filterNatureOfBusiness(data.text))
            );
            // this.profileUpdateForm.controls['natureOfBusiness_1'].markAsTouched();


            this.profileUpdateForm.addControl('natureOfIndustry_1',  new FormControl('',[Validators.required]));

            this.multipleNatureOfIndustry = res["ProcessVariables"]["profileUpdate"]["natureOfIndustry"];
            this.profileUpdateForm.controls.natureOfIndustry_1.setValue(this.multipleNatureOfIndustry);
            this.oldProfileData.natureOfIndustry_1 = this.multipleNatureOfIndustry
            console.log("Value of Get API industry", this.multipleNatureOfIndustry)
            console.log("Oldprofilesofdata industry", this.oldProfileData.natureOfIndustry_1)
            console.log("this.profileUpdateForm.controls.natureOfIndustry_1", this.profileUpdateForm.controls.natureOfIndustry_1)
            this.arrNatureOfIndustryListFilter_1 = this.profileUpdateForm.controls.natureOfIndustry_1Search.valueChanges.pipe(
              startWith(''),
              map(data => typeof data === 'string' ? this._filterNatureOfIndustry(data) : this._filterNatureOfIndustry(data.text))
            );
            // this.profileUpdateForm.controls['natureOfIndustry_1'].markAsTouched();
          }

          //For Others
          if((this.profileUpdateForm.controls['occupationType'].value['text']).toLowerCase().includes('other')){
            this.isOccupationTypeOther = true;

            this.profileUpdateForm.addControl('occupationTypeOther',  new FormControl('',[Validators.required, Validators.maxLength(this.max_length) ,Validators.pattern(Constants.VALIDATION_REGX_TEXTFIELD)]));
            this.oldProfileData.occupationTypeOther = res["ProcessVariables"]["profileUpdate"]["otherOccupation"]
            this.profileUpdateForm.controls.occupationTypeOther.setValue(res["ProcessVariables"]["profileUpdate"]["otherOccupation"]);
            this.profileUpdateForm.controls['occupationTypeOther'].markAsTouched();
          }
      }
      else{
        this.profileUpdateForm.controls.occupationType.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["annualIncome"] &&
      this.arrAnnualIncomeList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["annualIncome"])){
        this.oldProfileData.annualIncome = this.arrAnnualIncomeList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["annualIncome"]);
        this.profileUpdateForm.controls.annualIncome.setValue(this.oldProfileData.annualIncome);
      }
      else{
        this.profileUpdateForm.controls.annualIncome.setValue("")
      }



      //For Sourceoffunds

      if(res["ProcessVariables"]["profileUpdate"]["sourceOfFunds"]){
        this.multipleSourceOfFund = res["ProcessVariables"]["profileUpdate"]["sourceOfFunds"];
        this.profileUpdateForm.controls.sourceOfFund_1.setValue(this.multipleSourceOfFund);
        this.oldProfileData.sourceOfFund_1 = this.multipleSourceOfFund
        console.log("Oldprofilesofdata", this.oldProfileData.sourceOfFund_1)
        //     this.profileUpdateForm.controls.sourceOfFund_1.setValue(this.oldProfileData.sourceOfFund_1);
        console.log("Value of Get API", this.multipleSourceOfFund);
      }
      else{
        this.profileUpdateForm.controls.sourceOfFund_1.setValue([]);
      }

      //For Transaction Pattern
      if(res["ProcessVariables"]["profileUpdate"]["cashDeposit"] &&
      this.arrCashDepositList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["cashDeposit"])){
        this.oldProfileData.cashDeposit = this.arrCashDepositList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["cashDeposit"]);
        this.profileUpdateForm.controls.cashDeposit.setValue(this.oldProfileData.cashDeposit);
      }

      else{
        this.profileUpdateForm.controls.cashDeposit.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["cashWithdrawal"] &&
      this.arrCashWithdrawalList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["cashWithdrawal"])){
        this.oldProfileData.cashWithdrawal = this.arrCashWithdrawalList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["cashWithdrawal"]);
        this.profileUpdateForm.controls.cashWithdrawal.setValue(this.oldProfileData.cashWithdrawal);
      }
      else{
        this.profileUpdateForm.controls.cashWithdrawal.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["inwardForeignRemittance"] &&
      this.arrInwardRemittanceList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["inwardForeignRemittance"])){
        this.oldProfileData.inwardRemittance = this.arrInwardRemittanceList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["inwardForeignRemittance"]);
        this.profileUpdateForm.controls.inwardRemittance.setValue(this.oldProfileData.inwardRemittance);
      }
      else{
        this.profileUpdateForm.controls.inwardRemittance.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["outwardForeignRemittance"] &&
      this.arrOutwardRemittanceList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["outwardForeignRemittance"])){
        this.oldProfileData.outwardRemittance = this.arrOutwardRemittanceList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["outwardForeignRemittance"]);
        this.profileUpdateForm.controls.outwardRemittance.setValue(this.oldProfileData.outwardRemittance);
      }
      else{
        this.profileUpdateForm.controls.outwardRemittance.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["expectedTransactions"] &&
      this.arrNoOfTransactionList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["expectedTransactions"])){
        this.oldProfileData.noOfTransaction = this.arrNoOfTransactionList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["expectedTransactions"]);
        this.profileUpdateForm.controls.noOfTransaction.setValue(this.oldProfileData.noOfTransaction);
      }
      else{
        this.profileUpdateForm.controls.noOfTransaction.setValue("")
      }

      if(res["ProcessVariables"]["profileUpdate"]["politicalExposure"] &&
      this.arrPoliticalExposureList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["politicalExposure"])){
        this.oldProfileData.politicalExposure = this.arrPoliticalExposureList.find(e => e.text == res["ProcessVariables"]["profileUpdate"]["politicalExposure"]);
        this.profileUpdateForm.controls.politicalExposure.setValue(this.oldProfileData.politicalExposure);
      }
      else{
        this.profileUpdateForm.controls.politicalExposure.setValue("")
      }

      if(this.profileUpdateForm.valid){
        this.profileUpdateForm.disable();
      }
      else{
        this.profileUpdateForm.enable();
      }
      // this.profileUpdateForm.disable();
      this.spinner.hide()
    }
      //this.spinner.hide();
    else{
        this.spinner.hide();
        this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
        return;
    }  
  },
  error => {
    this.spinner.hide();
    this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
    return;
  })
}

  _filterMaritalStatus(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrMaritalStatusList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrMaritalStatusList;
    }
  }

  _filterOtherMaritalStatus(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrOtherMaritalStatusList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrOtherMaritalStatusList;
    }
  }

  _filterResidenceType(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrResidenceTypeList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrResidenceTypeList;
    }
  }

  _filterEducationalQualification(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrEducationalQualificationList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrEducationalQualificationList;
    }
  }

  _filterOccupationType(text) {
    console.log('text', text);
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrOccupationTypeList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrOccupationTypeList;
    }
  }

  _filterAnnualIncome(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrAnnualIncomeList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrAnnualIncomeList;
    }
  }

  _filterSourceOfFunds(text) {
    console.log("filter(text)", text)
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrSourceOfFundList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrSourceOfFundList;
    }
  }

  _filterEmploymentDetails(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrEmploymentDetailsList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrEmploymentDetailsList;
    }
  }

  _filterTypeOfCompany(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrTypeOfCompanyList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrTypeOfCompanyList;
    }
  }

  _filterProfession(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrProfessionList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrProfessionList;
    }
  }

  _filterNatureOfBusiness(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrNatureOfBusinessList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrNatureOfBusinessList;
    }
  }

  _filterNatureOfIndustry(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrNatureOfIndustryList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrNatureOfIndustryList;
    }
  }

  _filterCashDeposit(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrCashDepositList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrCashDepositList;
    }
  }

  _filterCashWithdrawal(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrCashWithdrawalList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrCashWithdrawalList;
    }
  }

  _filterInwardRemittance(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrInwardRemittanceList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrInwardRemittanceList;
    }
  }

  _filterOutwardRemittance(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrOutwardRemittanceList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrOutwardRemittanceList;
    }
  }

  _filterNoOfTransaction(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrNoOfTransactionList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrNoOfTransactionList;
    }
  }

  _filterPoliticalExposure(text) {
    if (text) {
      const filterValue = text.toLowerCase();
      const isValid = this.arrPoliticalExposureList.filter(option => option.text.toLowerCase().includes(filterValue) ? option : '');
      return isValid;
    } else {
      return this.arrPoliticalExposureList;
    }
  }

  isValidInput(type) {
    if (type == 1) {
      if (this.profileUpdateForm.controls.maritalStatus.value != '' && typeof this.profileUpdateForm.controls.maritalStatus.value === 'string') {
        this.profileUpdateForm.controls.maritalStatus.setErrors({
          'invalidMaritalStatus': true
        });
        this.isMaritalStatusOther = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 2) {
      if (this.profileUpdateForm.controls.otherMaritalStatus.value != '' && typeof this.profileUpdateForm.controls.otherMaritalStatus.value === 'string') {
        this.profileUpdateForm.controls.otherMaritalStatus.setErrors({
          'invalidOtherMaritalStatus': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 3) {
      if (this.profileUpdateForm.controls.residenceType.value != '' && typeof this.profileUpdateForm.controls.residenceType.value === 'string') {
        this.profileUpdateForm.controls.residenceType.setErrors({
          'invalidResidenceType': true
        });
        this.isResidenceTypeOther = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 4) {
      if (this.profileUpdateForm.controls.educationalQualification.value != '' && typeof this.profileUpdateForm.controls.educationalQualification.value === 'string') {
        this.profileUpdateForm.controls.educationalQualification.setErrors({
          'invalidEducationalQualification': true
        });
        this.isEducationalQualificationOther = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if(type == 5) {
      if(this.profileUpdateForm.controls.occupationType.value != '' && typeof this.profileUpdateForm.controls.occupationType.value === 'string') {
        this.profileUpdateForm.controls.occupationType.setErrors({
          'invalidOccupationType': true
        });
        this.isOccupationTypeOther = false;
        this.isSalaried = false;
        this.isSelfEmployeed = false;
        this.isBusiness = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 6) {
      if (this.profileUpdateForm.controls.annualIncome.value != '' && typeof this.profileUpdateForm.controls.annualIncome.value === 'string') {
        this.profileUpdateForm.controls.annualIncome.setErrors({
          'invalidAnnualIncome': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if(type == 7) {
      if(this.profileUpdateForm.controls.sourceOfFund_1.value != '' && typeof this.profileUpdateForm.controls.sourceOfFund_1.value === 'string') {
        this.profileUpdateForm.controls.sourceOfFund_1.setErrors({
          'invalidSourceOfFund_1': true
        });
        this.isSourceOfFundOther_1 = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    // if(type == 8) {
    //   if(this.profileUpdateForm.controls.sourceOfFund_2.value != '' && typeof this.profileUpdateForm.controls.sourceOfFund_2.value === 'string') {
    //     this.profileUpdateForm.controls.sourceOfFund_2.setErrors({
    //       'invalidSourceOfFund_2': true
    //     });
    //     this.isSourceOfFundOther_2 = false;
    //     this.profileUpdateForm.updateValueAndValidity();
    //   }
    // }
    // if(type == 9) {
    //   if(this.profileUpdateForm.controls.sourceOfFund_3.value != '' && typeof this.profileUpdateForm.controls.sourceOfFund_3.value === 'string') {
    //     this.profileUpdateForm.controls.sourceOfFund_3.setErrors({
    //       'invalidSourceOfFund_3': true
    //     });
    //     this.isSourceOfFundOther_3 = false;
    //     this.profileUpdateForm.updateValueAndValidity();
    //   }
    // }
    if (type == 10) {
      if (this.profileUpdateForm.controls.employmentDetails.value != '' && typeof this.profileUpdateForm.controls.employmentDetails.value === 'string') {
        this.profileUpdateForm.controls.employmentDetails.setErrors({
          'invalidEmploymentDetails': true
        });
        this.isEmploymentDetailsOther = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 11) {
      if (this.profileUpdateForm.controls.typeOfCompany.value != '' && typeof this.profileUpdateForm.controls.typeOfCompany.value === 'string') {
        this.profileUpdateForm.controls.typeOfCompany.setErrors({
          'invalidTypeOfCompany': true
        });
        this.isTypeOfCompanyOther = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 12) {
      if (this.profileUpdateForm.controls.profession.value != '' && typeof this.profileUpdateForm.controls.profession.value === 'string') {
        this.profileUpdateForm.controls.profession.setErrors({
          'invalidProfession': true
        });
        this.isProfessionOther = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 13) {
      if (this.profileUpdateForm.controls.natureOfBusiness_1.value != '' && typeof this.profileUpdateForm.controls.natureOfBusiness_1.value === 'string') {
        this.profileUpdateForm.controls.natureOfBusiness_1.setErrors({
          'invalidNatureOfBusiness_1': true
        });
        this.isNatureOfBusinessOther_1 = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    // if (type == 14) {
    //   if (this.profileUpdateForm.controls.natureOfBusiness_2.value != '' && typeof this.profileUpdateForm.controls.natureOfBusiness_2.value === 'string') {
    //     this.profileUpdateForm.controls.natureOfBusiness_2.setErrors({
    //       'invalidNatureOfBusiness_2': true
    //     });
    //     this.isNatureOfBusinessOther_2 = false;
    //     this.profileUpdateForm.updateValueAndValidity();
    //   }
    // }
    // if (type == 15) {
    //   if (this.profileUpdateForm.controls.natureOfBusiness_3.value != '' && typeof this.profileUpdateForm.controls.natureOfBusiness_3.value === 'string') {
    //     this.profileUpdateForm.controls.natureOfBusiness_3.setErrors({
    //       'invalidNatureOfBusiness_3': true
    //     });
    //     this.isNatureOfBusinessOther_3 = false;
    //     this.profileUpdateForm.updateValueAndValidity();
    //   }
    // }
    if (type == 16) {
      if (this.profileUpdateForm.controls.natureOfIndustry_1.value != '' && typeof this.profileUpdateForm.controls.natureOfIndustry_1.value === 'string') {
        this.profileUpdateForm.controls.natureOfIndustry_1.setErrors({
          'invalidNatureOfIndustry_1': true
        });
        this.isNatureOfIndustryOther_1 = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 17) {
      if (this.profileUpdateForm.controls.natureOfIndustry_2.value != '' && typeof this.profileUpdateForm.controls.natureOfIndustry_2.value === 'string') {
        this.profileUpdateForm.controls.natureOfIndustry_2.setErrors({
          'invalidNatureOfIndustry_2': true
        });
        this.isNatureOfIndustryOther_2 = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 18) {
      if (this.profileUpdateForm.controls.natureOfIndustry_3.value != '' && typeof this.profileUpdateForm.controls.natureOfIndustry_3.value === 'string') {
        this.profileUpdateForm.controls.natureOfIndustry_3.setErrors({
          'invalidNatureOfIndustry_3': true
        });
        this.isNatureOfIndustryOther_3 = false;
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 19) {
      if (this.profileUpdateForm.controls.cashDeposit.value != '' && typeof this.profileUpdateForm.controls.cashDeposit.value === 'string') {
        this.profileUpdateForm.controls.cashDeposit.setErrors({
          'invalidCashDeposit': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 20) {
      if (this.profileUpdateForm.controls.cashWithdrawal.value != '' && typeof this.profileUpdateForm.controls.cashWithdrawal.value === 'string') {
        this.profileUpdateForm.controls.cashWithdrawal.setErrors({
          'invalidCashWithdrawal': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 21) {
      if (this.profileUpdateForm.controls.inwardRemittance.value != '' && typeof this.profileUpdateForm.controls.inwardRemittance.value === 'string') {
        this.profileUpdateForm.controls.inwardRemittance.setErrors({
          'invalidInwardRemittance': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 22) {
      if (this.profileUpdateForm.controls.outwardRemittance.value != '' && typeof this.profileUpdateForm.controls.outwardRemittance.value === 'string') {
        this.profileUpdateForm.controls.outwardRemittance.setErrors({
          'invalidOutwardRemittance': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 23) {
      if (this.profileUpdateForm.controls.noOfTransaction.value != '' && typeof this.profileUpdateForm.controls.noOfTransaction.value === 'string') {
        this.profileUpdateForm.controls.noOfTransaction.setErrors({
          'invalidNoOfTransaction': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
    if (type == 24) {
      if (this.profileUpdateForm.controls.politicalExposure.value != '' && typeof this.profileUpdateForm.controls.politicalExposure.value === 'string') {
        this.profileUpdateForm.controls.politicalExposure.setErrors({
          'invalidPoliticalExposure': true
        });
        this.profileUpdateForm.updateValueAndValidity();
      }
    }
  }

  editProfileDetails(event) {
    if (event.value == 'yes') {
      this.updatePanelState = true;
      this.viewPanelState = false;
      this.profileUpdateForm.enable();
    }
    if (event.value == 'no') {
      this.updatePanelState = false;
      this.viewPanelState = true;
      this.profileUpdateForm.disable();
    }
  }

  onNatureOfBusiness(type) {
    if (type == 1) {
      console.log(this.profileUpdateForm.controls['natureOfBusiness_1'].value, this.profileUpdateForm.controls['natureOfBusiness_1'].value['text']);
      if ((this.profileUpdateForm.controls['natureOfBusiness_1'].value['text']).toLowerCase().includes('other')) {
        this.isNatureOfBusinessOther_1 = true;
        this.profileUpdateForm.controls['natureOfBusinessOther_1'].markAsTouched();
      } else {
        this.isNatureOfBusinessOther_1 = false;
      }
    }
    if (type == 2) {
      console.log(this.profileUpdateForm.controls['natureOfBusiness_2'].value, this.profileUpdateForm.controls['natureOfBusiness_2'].value['text']);
      if ((this.profileUpdateForm.controls['natureOfBusiness_2'].value['text']).toLowerCase().includes('other')) {
        this.isNatureOfBusinessOther_2 = true;
        this.profileUpdateForm.controls['natureOfBusinessOther_2'].markAsTouched();
      } else {
        this.isNatureOfBusinessOther_2 = false;
      }
    }
    if (type == 3) {
      console.log(this.profileUpdateForm.controls['natureOfBusiness_3'].value, this.profileUpdateForm.controls['natureOfBusiness_3'].value['text']);
      if ((this.profileUpdateForm.controls['natureOfBusiness_3'].value['text']).toLowerCase().includes('other')) {
        this.isNatureOfBusinessOther_3 = true;
        this.profileUpdateForm.controls['natureOfBusinessOther_3'].markAsTouched();
      } else {
        this.isNatureOfBusinessOther_3 = false;
      }
    }
  }

  onNatureOfIndustry(type) {
    if (type == 1) {
      console.log(this.profileUpdateForm.controls['natureOfIndustry_1'].value, this.profileUpdateForm.controls['natureOfIndustry_1'].value['text']);
      if ((this.profileUpdateForm.controls['natureOfIndustry_1'].value['text']).toLowerCase().includes('other')) {
        this.isNatureOfIndustryOther_1 = true;
        this.profileUpdateForm.controls['natureOfIndustryOther_1'].markAsTouched();
      } else {
        this.isNatureOfIndustryOther_1 = false;
      }
    }
    if (type == 2) {
      console.log(this.profileUpdateForm.controls['natureOfIndustry_2'].value, this.profileUpdateForm.controls['natureOfIndustry_2'].value['text']);
      if ((this.profileUpdateForm.controls['natureOfIndustry_2'].value['text']).toLowerCase().includes('other')) {
        this.isNatureOfIndustryOther_2 = true;
        this.profileUpdateForm.controls['natureOfIndustryOther_2'].markAsTouched();
      } else {
        this.isNatureOfIndustryOther_2 = false;
      }
    }
    if (type == 3) {
      console.log(this.profileUpdateForm.controls['natureOfIndustry_3'].value, this.profileUpdateForm.controls['natureOfIndustry_3'].value['text']);
      if ((this.profileUpdateForm.controls['natureOfIndustry_3'].value['text']).toLowerCase().includes('other')) {
        this.isNatureOfIndustryOther_3 = true;
        this.profileUpdateForm.controls['natureOfIndustryOther_3'].markAsTouched();
      } else {
        this.isNatureOfIndustryOther_3 = false;
      }
    }
  }

  removeExtraSpaces(flag) {
    if (flag == 1 && !(this.profileUpdateForm.value.residenceTypeOther == null)) {
      this.profileUpdateForm.controls.residenceTypeOther.setValue(this.profileUpdateForm.value.residenceTypeOther.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 2 && !(this.profileUpdateForm.value.educationalQualificationOther == null)) {
      this.profileUpdateForm.controls.educationalQualificationOther.setValue(this.profileUpdateForm.value.educationalQualificationOther.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 3 && !(this.profileUpdateForm.value.occupationTypeOther == null)) {
      this.profileUpdateForm.controls.occupationTypeOther.setValue(this.profileUpdateForm.value.occupationTypeOther.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 4 && !(this.profileUpdateForm.value.sourceOfFundOther_1 == null)) {
      this.profileUpdateForm.controls.sourceOfFundOther_1.setValue(this.profileUpdateForm.value.sourceOfFundOther_1.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 5 && !(this.profileUpdateForm.value.sourceOfFundOther_2 == null)) {
      this.profileUpdateForm.controls.sourceOfFundOther_2.setValue(this.profileUpdateForm.value.sourceOfFundOther_2.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 6 && !(this.profileUpdateForm.value.sourceOfFundOther_3 == null)) {
      this.profileUpdateForm.controls.sourceOfFundOther_3.setValue(this.profileUpdateForm.value.sourceOfFundOther_3.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 7 && !(this.profileUpdateForm.value.employmentDetailsOther == null)) {
      this.profileUpdateForm.controls.employmentDetailsOther.setValue(this.profileUpdateForm.value.employmentDetailsOther.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 8 && !(this.profileUpdateForm.value.employerName == null)) {
      this.profileUpdateForm.controls.employerName.setValue(this.profileUpdateForm.value.employerName.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 9 && !(this.profileUpdateForm.value.employeeId == null)) {
      this.profileUpdateForm.controls.employeeId.setValue(this.profileUpdateForm.value.employeeId.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 10 && !(this.profileUpdateForm.value.companyCode == null)) {
      this.profileUpdateForm.controls.companyCode.setValue(this.profileUpdateForm.value.companyCode.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 11 && !(this.profileUpdateForm.value.typeOfCompanyOther == null)) {
      this.profileUpdateForm.controls.typeOfCompanyOther.setValue(this.profileUpdateForm.value.typeOfCompanyOther.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 12 && !(this.profileUpdateForm.value.nameOfCompany == null)) {
      this.profileUpdateForm.controls.nameOfCompany.setValue(this.profileUpdateForm.value.nameOfCompany.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 13 && !(this.profileUpdateForm.value.professionOther == null)) {
      this.profileUpdateForm.controls.professionOther.setValue(this.profileUpdateForm.value.professionOther.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 14 && !(this.profileUpdateForm.value.natureOfBusinessOther_1 == null)) {
      this.profileUpdateForm.controls.natureOfBusinessOther_1.setValue(this.profileUpdateForm.value.natureOfBusinessOther_1.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 15 && !(this.profileUpdateForm.value.natureOfBusinessOther_2 == null)) {
      this.profileUpdateForm.controls.natureOfBusinessOther_2.setValue(this.profileUpdateForm.value.natureOfBusinessOther_2.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 16 && !(this.profileUpdateForm.value.natureOfBusinessOther_3 == null)) {
      this.profileUpdateForm.controls.natureOfBusinessOther_3.setValue(this.profileUpdateForm.value.natureOfBusinessOther_3.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 17 && !(this.profileUpdateForm.value.natureOfIndustryOther_1 == null)) {
      this.profileUpdateForm.controls.natureOfIndustryOther_1.setValue(this.profileUpdateForm.value.natureOfIndustryOther_1.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 18 && !(this.profileUpdateForm.value.natureOfIndustryOther_2 == null)) {
      this.profileUpdateForm.controls.natureOfIndustryOther_2.setValue(this.profileUpdateForm.value.natureOfIndustryOther_2.toString().replace(/\s\s+/g, ' ').trim());
    } else if (flag == 19 && !(this.profileUpdateForm.value.natureOfIndustryOther_3 == null)) {
      this.profileUpdateForm.controls.natureOfIndustryOther_3.setValue(this.profileUpdateForm.value.natureOfIndustryOther_3.toString().replace(/\s\s+/g, ' ').trim());
    }
  }

  // saveAndNext() {
  //   //this.spinner.show();
    
  //   // for multiple source of funds
  //   let sourceOfFundIterator = this.profileUpdateForm.value.sourceOfFund_1;
  //   console.log("sourceOfFundIterator: ", sourceOfFundIterator);
  //   this.sourceofFunds = sourceOfFundIterator.map(e => (e));
  //   // this.sourceofFunds = iterator.map(e => e.text);
  //   console.log("Array of source", this.sourceofFunds)

  //   // For Multiple nature of businesses
  //   if(this.profileUpdateForm.value.natureOfBusiness_1){
  //     let natureOfBusinessIterator = this.profileUpdateForm.value.natureOfBusiness_1;
  //     console.log("natureOfBusinessIterator: ", natureOfBusinessIterator);
  //     this.natureOfBusinesses = natureOfBusinessIterator.map(e => (e));
  //     // this.natureOfBusinesses = iterator.map(e => e.text);
  //     console.log("Array of nature of business", this.natureOfBusinesses)
  //   }

  //   // FOr multiple nature of industries
  //   if(this.profileUpdateForm.value.natureOfIndustry_1){
  //     let natureOfIndustryIterator = this.profileUpdateForm.value.natureOfIndustry_1;
  //     console.log("natureOfIndustryIterator: ", natureOfIndustryIterator);
  //     this.natureOfIndustries = natureOfIndustryIterator.map(e => (e));
  //     // this.natureOfIndustries = iterator.map(e => e.text);
  //     console.log("Array of nature of business", this.natureOfIndustries)
  //   }

  //   //API data for request
  //   let profileUpdate = this.profileUpdateForm.value;

  //   let profileForm = {
  //     //Basic Profile
  //     'maritalStatus' : profileUpdate.maritalStatus.text,
  //     'residenceType' : profileUpdate.residenceType.text,
  //     'educationalQualification' : profileUpdate.educationalQualification.text,
  //     'annualIncome' : profileUpdate.annualIncome.text,
  //     'sourceOfFunds' : this.sourceofFunds,
  //     //Transaction Pattern
  //     'cashDeposit' : profileUpdate.cashDeposit.text,
  //     'cashWithdrawal' : profileUpdate.cashWithdrawal.text,
  //     'inwardForeignRemittance' : profileUpdate.inwardRemittance.text,
  //     'outwardForeignRemittance' : profileUpdate.outwardRemittance.text,
  //     'expectedTransactions' : profileUpdate.noOfTransaction.text,
  //     'politicalExposure' : profileUpdate.politicalExposure.text,

  //   }

  //   if(profileUpdate.otherMaritalStatus){
  //     profileForm["otherMaritalStatus"] = profileUpdate.otherMaritalStatus.text
  //   }

  //   if(profileUpdate.residenceTypeOther){
  //     profileForm["otherResidence"] = profileUpdate.residenceTypeOther
  //   }

  //   if(profileUpdate.educationalQualificationOther){
  //     profileForm["otherQualification"] = profileUpdate.educationalQualificationOther
  //   }

  //   if(profileUpdate.occupationTypeOther){
  //     profileForm["otherOccupation"] = profileUpdate.otherOccupation
  //   }

  //   if(profileUpdate.employmentDetails){
  //     profileForm["employmentDetails"] = profileUpdate.employmentDetails.text
  //   }

  //   if(profileUpdate.employmentDetailsOther){
  //     profileForm["otherEmploymentDetails"] = profileUpdate.employmentDetailsOther
  //   }

  //   if(profileUpdate.employerName){
  //     profileForm["employerName"] = profileUpdate.employerName
  //   }

  //   if(profileUpdate.currentEmpPeriodYear){
  //     profileForm["currentEmploymentYears"] = profileUpdate.currentEmpPeriodYear
  //   }

  //   if(profileUpdate.currentEmpPeriodMonth){
  //     profileForm["currentEmploymentMonths"] = profileUpdate.currentEmpPeriodMonth
  //   }

  //   if(profileUpdate.employeeId){
  //     profileForm["employeeId"] = profileUpdate.employeeId
  //   }

  //   if(profileUpdate.companyCode){
  //     profileForm["companyCode"] = profileUpdate.companyCode
  //   }

  //   if(profileUpdate.typeOfCompany){
  //     profileForm["companyType"] = profileUpdate.typeOfCompany.text
  //   }

  //   if(profileUpdate.typeOfCompanyOther){
  //     profileForm["otherCompanyType"] = profileUpdate.typeOfCompanyOther
  //   }

  //   if(profileUpdate.nameOfCompany){
  //     profileForm["companyName"] = profileUpdate.nameOfCompany
  //   }

  //   if(profileUpdate.currentBusinessPeriodYear){
  //     profileForm["currentBusinessYears"] = profileUpdate.currentBusinessPeriodYear
  //    }

  //   if(profileUpdate.currentBusinessPeriodMonth){
  //     profileForm["currentBusinessMonths"] = profileUpdate.currentBusinessPeriodMonth
  //   }

  //   if(profileUpdate.profession){
  //     profileForm["profession"] = profileUpdate.profession.text
  //   }

  //   if(profileUpdate.professionOther){
  //     profileForm["otherProfession"] = profileUpdate.professionOther
  //   }

  //   if(profileUpdate.natureOfBusiness_1){
  //     profileForm["natureOfBussiness"] = this.natureOfBusinesses
  //   }

  //   // if(profileUpdate.natureOfBusinessOther_1){
  //   //   profileForm["otherNatureOfBusiness"] = profileUpdate.otherMaritalStatus
  //   // }

  //   if(profileUpdate.natureOfIndustry_1){
  //     profileForm["natureOfIndustry"] = this.natureOfIndustries
  //   }

  //   // if(profileUpdate.natureOfIndustryOther_1){
  //   //   profileForm["otherNatureOfIndustry"] = profileUpdate.otherMaritalStatus
  //   // }

  //   let oldProfileData = this.oldProfileData;

  //   let oldProfileForm  = {
  //     //Basic Profile
  //     'maritalStatus' : oldProfileData.maritalStatus.text,
  //     'residenceType' : oldProfileData.residenceType.text,
  //     'educationalQualification' : oldProfileData.educationalQualification.text,
  //     'annualIncome' : oldProfileData.annualIncome.text,
  //     'sourceOfFunds' : this.multipleSourceOfFund,
  //     //Transaction Pattern
  //     'cashDeposit' : oldProfileData.cashDeposit.text,
  //     'cashWithdrawal' : oldProfileData.cashWithdrawal.text,
  //     'inwardForeignRemittance' : oldProfileData.inwardRemittance.text,
  //     'outwardForeignRemittance' : oldProfileData.outwardRemittance.text,
  //     'expectedTransactions' : oldProfileData.noOfTransaction.text,
  //     'politicalExposure' : oldProfileData.politicalExposure.text,
  //     'otherMaritalStatus' : oldProfileData.otherMaritalStatus.text,
  //     'otherResidence' : oldProfileData.residenceTypeOther,
  //     'otherQualification' : oldProfileData.educationalQualificationOther,
  //     'otherOccupation' : oldProfileData.occupationTypeOther,
      
  //     // Occupation Type - Salaried
  //     'employmentDetails' : oldProfileData.employmentDetails.text,
  //     'otherEmploymentDetails' : oldProfileData.employmentDetailsOther,
  //     'employerName' : oldProfileData.employerName,
  //     'currentEmploymentYears' : oldProfileData.currentEmpPeriodYear,
  //     'currentEmploymentMonths' : oldProfileData.currentEmpPeriodMonth,
  //     'employeeId' : oldProfileData.employeeId,
  //     'companyCode' : oldProfileData.companyCode,

  //     // Occupation Type - Self Employed or Business
  //     'companyType' : oldProfileData.typeOfCompany.text,
  //     'otherCompanyType' : oldProfileData.typeOfCompanyOther,
  //     'companyName' : oldProfileData.nameOfCompany,
  //     'currentBusinessYears' : oldProfileData.currentBusinessPeriodYear,
  //     'currentBusinessMonths' : oldProfileData.currentBusinessPeriodMonth,

  //     // Occupation Type - Self Employed
  //     'profession': oldProfileData.profession.text,
  //     'otherProfession': oldProfileData.professionOther,
      
  //     // // Occupation Type - Business
  //     'natureOfBussiness': this.multipleNatureofBusiness,
  //     // 'otherNatureOfBusiness': oldProfileData.natureOfBusinessOther_1,
  //     'natureOfIndustry': this.multipleNatureOfIndustry
  //     // 'otherNatureOfIndustry': oldProfileData.natureOfIndustryOther_1
  //   }

  //   console.log("oldProfileForm", oldProfileForm)

  //   this.profileService.createSR(profileForm, oldProfileForm).subscribe(res => {
  //     this.spinner.show();
  //     if (res['ErrorCode'] == 200) {
  //       sessionStorage.setItem('sr_val', res['ProcessVariables']['srId']);
  //       let srId = res['ProcessVariables']['srId']
  //       this.commonService.getOptions();
  //       this.profileDetailsEvent.emit();
  //       // this.stepper.onUpload();
  //       console.log("Response for Create SR", res)
  //       // this.profileService.getSR(srId).subscribe(res => {
  //       //   console.log("Response for Get SR", res)
  //       // })
  //     }
  //     else if(res['ErrorCode'] == 400){
  //       this.authService.alertToUser(AlertMessages.MANDATORY_FIELDS_ALERT);
  //     }
  //     else{
  //       this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
  //       return;
  //     }
  //   },
  //   error => {
  //     this.spinner.hide();
  //     this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
  //     return;
  //   });
  // }

  saveAndNext(){

    // for multiple source of funds
    let sourceOfFundIterator = this.profileUpdateForm.value.sourceOfFund_1;
    console.log("sourceOfFundIterator: ", sourceOfFundIterator);
    this.sourceofFunds = sourceOfFundIterator.map(e => (e));
    // this.sourceofFunds = iterator.map(e => e.text);
    console.log("Array of source", this.sourceofFunds)

    // For Multiple nature of businesses
    if(this.profileUpdateForm.value.natureOfBusiness_1){
      let natureOfBusinessIterator = this.profileUpdateForm.value.natureOfBusiness_1;
      console.log("natureOfBusinessIterator: ", natureOfBusinessIterator);
      this.natureOfBusinesses = natureOfBusinessIterator.map(e => (e));
      // this.natureOfBusinesses = iterator.map(e => e.text);
      console.log("Array of nature of business", this.natureOfBusinesses)
    }

    // FOr multiple nature of industries
    if(this.profileUpdateForm.value.natureOfIndustry_1){
      let natureOfIndustryIterator = this.profileUpdateForm.value.natureOfIndustry_1;
      console.log("natureOfIndustryIterator: ", natureOfIndustryIterator);
      this.natureOfIndustries = natureOfIndustryIterator.map(e => (e));
      // this.natureOfIndustries = iterator.map(e => e.text);
      console.log("Array of nature of business", this.natureOfIndustries)
    }

    //API data for request
    let profileUpdate = this.profileUpdateForm.value;

    let profileForm = {
          //Basic Profile
          'maritalStatus' : profileUpdate.maritalStatus.text,
          'residenceType' : profileUpdate.residenceType.text,
          'educationalQualification' : profileUpdate.educationalQualification.text,
          'annualIncome' : profileUpdate.annualIncome.text,
          'sourceOfFunds' : this.sourceofFunds,
          //Transaction Pattern
          'cashDeposit' : profileUpdate.cashDeposit.text,
          'cashWithdrawal' : profileUpdate.cashWithdrawal.text,
          'inwardForeignRemittance' : profileUpdate.inwardRemittance.text,
          'outwardForeignRemittance' : profileUpdate.outwardRemittance.text,
          'expectedTransactions' : profileUpdate.noOfTransaction.text,
          'politicalExposure' : profileUpdate.politicalExposure.text,
    
        }
    
        if(profileUpdate.otherMaritalStatus){
          profileForm["otherMaritalStatus"] = profileUpdate.otherMaritalStatus.text
        }
    
        if(profileUpdate.residenceTypeOther){
          profileForm["otherResidence"] = profileUpdate.residenceTypeOther
        }
    
        if(profileUpdate.educationalQualificationOther){
          profileForm["otherQualification"] = profileUpdate.educationalQualificationOther
        }
    
        if(profileUpdate.occupationTypeOther){
          profileForm["otherOccupation"] = profileUpdate.otherOccupation
        }
    
        if(profileUpdate.employmentDetails){
          profileForm["employmentDetails"] = profileUpdate.employmentDetails.text
        }
    
        if(profileUpdate.employmentDetailsOther){
          profileForm["otherEmploymentDetails"] = profileUpdate.employmentDetailsOther
        }
    
        if(profileUpdate.employerName){
          profileForm["employerName"] = profileUpdate.employerName
        }
    
        if(profileUpdate.currentEmpPeriodYear){
          profileForm["currentEmploymentYears"] = profileUpdate.currentEmpPeriodYear
        }
    
        if(profileUpdate.currentEmpPeriodMonth){
          profileForm["currentEmploymentMonths"] = profileUpdate.currentEmpPeriodMonth
        }
    
        if(profileUpdate.employeeId){
          profileForm["employeeId"] = profileUpdate.employeeId
        }
    
        if(profileUpdate.companyCode){
          profileForm["companyCode"] = profileUpdate.companyCode
        }
    
        if(profileUpdate.typeOfCompany){
          profileForm["companyType"] = profileUpdate.typeOfCompany.text
        }
    
        if(profileUpdate.typeOfCompanyOther){
          profileForm["otherCompanyType"] = profileUpdate.typeOfCompanyOther
        }
    
        if(profileUpdate.nameOfCompany){
          profileForm["companyName"] = profileUpdate.nameOfCompany
        }
    
        if(profileUpdate.currentBusinessPeriodYear){
          profileForm["currentBusinessYears"] = profileUpdate.currentBusinessPeriodYear
         }
    
        if(profileUpdate.currentBusinessPeriodMonth){
          profileForm["currentBusinessMonths"] = profileUpdate.currentBusinessPeriodMonth
        }
    
        if(profileUpdate.profession){
          profileForm["profession"] = profileUpdate.profession.text
        }
    
        if(profileUpdate.professionOther){
          profileForm["otherProfession"] = profileUpdate.professionOther
        }
    
        if(profileUpdate.natureOfBusiness_1){
          profileForm["natureOfBusiness"] = this.natureOfBusinesses
        }
    
        // if(profileUpdate.natureOfBusinessOther_1){
        //   profileForm["otherNatureOfBusiness"] = profileUpdate.otherMaritalStatus
        // }
    
        if(profileUpdate.natureOfIndustry_1){
          profileForm["natureOfIndustry"] = this.natureOfIndustries
        }
    
        // if(profileUpdate.natureOfIndustryOther_1){
        //   profileForm["otherNatureOfIndustry"] = profileUpdate.otherMaritalStatus
        // }

    this.profileService.saveProfile(profileForm).subscribe(res => {
          // this.spinner.show();
          if (res['ErrorCode'] == 200) {
            // sessionStorage.setItem('sr_val', res['ProcessVariables']['srId']);
            // let srId = res['ProcessVariables']['srId']
            // this.commonService.getOptions();
            // this.profileDetailsEvent.emit();
            // this.stepper.onUpload();
            // console.log("Response for Create SR", res)
            this.profileService.captureCustomer().subscribe(res => {
              console.log("Response for Get SR", res)
              if (res['ErrorCode'] == 200) {
                console.log(this.dataService.isAuthorize,'isauth')
                if(this.dataService.isAuthorize){
                  this.router.navigate(['confirm-request']);
                }
              }
              else if(res['ErrorCode'] == 400){
                this.authService.alertToUser(AlertMessages.MANDATORY_FIELDS_ALERT);
              }
              else{
                this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
                return;
              }
            })
          }
          else if(res['ErrorCode'] == 400){
            this.authService.alertToUser(AlertMessages.MANDATORY_FIELDS_ALERT);
          }
          else{
            this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
            return;
          }
        },
        error => {
          // this.spinner.hide();
          this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
          return;
        });
  }

  displayFn(object: any): string {
    return object ? object.text : '';
  }

  compareFn(c1: { key: number }, c2: { key: number }) {
    return c1 && c2 && c1.key === c2.key;
  }

}
