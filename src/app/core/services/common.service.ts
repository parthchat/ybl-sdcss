import { Injectable } from '@angular/core';
import { Observable, of as observableOf, Subject, BehaviorSubject, of } from "rxjs";
import { BaseAPIService } from 'src/app/core/services/base-api-service.service';
import { Constants,APIConstants } from '../../app.constant';
import { TokenStorage } from './auth/token-storage.service';
import { map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private requestParams: Object;
  arr: any;
  routeArray:any = [];
  queryParamsData:any = [];
  private routeUpdated = new Subject<any>();
  private queryUpdated = new Subject<any>();

  constructor(
    public baseAPIService: BaseAPIService,
    public tokenStorage: TokenStorage,
    public spinner: NgxSpinnerService,
    public dataService: DataService
  ) {
    //Checks sessionStorage for route data array
    if (this.tokenStorage.getRouteData()) {
      let localRouteData = this.tokenStorage.getRouteData();
      this.routeArray = JSON.parse(localRouteData);
    } else {
      this.tokenStorage.setRouteData(Constants.ROUTES, JSON.stringify(this.routeArray));
    }
    //Checks sessionStorage for params data array
    if (this.tokenStorage.getParamData()) {
      this.queryParamsData = JSON.parse(this.tokenStorage.getParamData());
    } else {
      this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
    }
  }

  //Returns breadcrumb array
  getBreadcrumbs() {
    this.routeUpdated.next([...this.routeArray]);
    return this.routeArray;
  }

  getRouteUpdatedListener() {
    return this.routeUpdated.asObservable();
  }

  addBreadcrumb(data) {
    //Check whether current route name exist or not
    if (this.routeArray.filter(e => e.name === data.name).length > 0) {
      //Get index of existed route
      const index = this.routeArray.map(function (route) { return route.name; }).indexOf(data.name);
      //Removes all elements after route index
      this.routeArray = this.routeArray.slice(0, index + 1);
      //Set data to sessionStorage to make it work after browser refresh
      this.tokenStorage.setRouteData(Constants.ROUTES, JSON.stringify(this.routeArray));
      //Return breadcrumb array to component
      this.getBreadcrumbs();
    } else {
      //Push current route in array
      this.routeArray.push(data);
      this.routeUpdated.next(this.routeArray);
      //Set data to sessionStorage
      this.tokenStorage.setRouteData(Constants.ROUTES, JSON.stringify(this.routeArray));
    }
  }

  getQueryUpdatedListener() {
    return this.queryUpdated.asObservable();
  }

  setQueryParams(data): Observable<any> {
    //Check whether current param name exist or not
    if (this.queryParamsData.filter(e => e.name === data.name).length > 0) {
      //Get index of existed param route
      const index = this.queryParamsData.map(function (route) { return route.name; }).indexOf(data.name);
      //Update param data by index
      this.queryParamsData[index].data = data.data;
      this.queryUpdated.next(this.queryParamsData);
      //Set data to sessionStorage
      this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
      return observableOf(true);
    } else {
      //Push current param in array
      this.queryParamsData.push(data);
      this.queryUpdated.next(this.queryParamsData);
      //Set data to sessionStorage
      this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
      return observableOf(true);
    }
  }

  //Get params data
  getQueryParams() {
    this.queryUpdated.next([...this.queryParamsData]);
    return this.queryParamsData;
  }

  getParams() {
    this.queryParamsData = this.tokenStorage.getParamData();
    if (this.queryParamsData) {
      return this.queryParamsData;
    } else {
      return [];
    }
  }

  // when logout - clear queryParamsData
  clearAllParamData() {
    this.queryParamsData = [];
    this.queryUpdated.next(this.queryParamsData);
    this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
  }

  getOptions() {
    this.spinner.show();
    let apiUniqueKey = new Date().getTime().toString();
    this.dataService.getAuth(apiUniqueKey).subscribe(res => {
      this.spinner.hide();
      let loginType = res['ProcessVariables']['validMols'];
      console.log(loginType, 'loginType');
      this.dataService.changeMessage(loginType)
    })
  }

  getProfileMaster() {
    const processId = APIConstants.GetProfileLOVs.PROCESS_ID;
    const workflowId = APIConstants.GetProfileLOVs.WORKFLOW_ID;
    let processVariables = {
      'processId': processId,
      'ProcessVariables': { },
      'projectId': Constants.PROJECT_ID,
      'workflowId': workflowId
    };
    return this.baseAPIService.post(workflowId, processVariables);
  }

  // dummygetProfileMaster() {
  //   return of(
  //     {
  //       "Error" : "0",
  //       "ErrorCode" : "200",
  //       "ErrorMessage" : "Success",
  //       "ProcessId" : "0e140aec226011eab0227a84d450ed6d",
  //       "ProcessInstanceId" : "b67c0a40425911eaa82fbabe272a95c0",
  //       "ProcessName" : "Get all LOV's  Profile Update",
  //       "ProcessVariables" : {
  //          "annualIncome" : [
  //             {
  //                "id" : "1",
  //                "text" : "LESS THAN 1 LAKH"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "GREATER THAN OR EQUAL 1 LAKH TO LESS THAN 2 LAKHS"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "GREATER THAN OR EQUAL 2 LAKHS TO LESS THAN 5 LAKHS"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "GREATER THAN OR EQUAL 5 LAKHS TO LESS THAN 10 LAKHS"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "GREATER THAN OR EQUAL 10 LAKHS TO LESS THAN 20 LAKHS"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "GREATER THAN OR EQUAL 20 LAKHS TO LESS THAN 25 LAKHS"
  //             },
  //             {
  //                "id" : "7",
  //                "text" : "GREATER THAN OR EQUAL 25 LAKHS TO 50 LAKHS"
  //             },
  //             {
  //                "id" : "8",
  //                "text" : "GREATER THAN OR EQUAL 50 LAKHS TO 1 CRORE"
  //             },
  //             {
  //                "id" : "9",
  //                "text" : "GREATER THAN OR EQUAL 1 CRORE TO LESS THAN 5 CRORES"
  //             },
  //             {
  //                "id" : "10",
  //                "text" : "GREATER THAN OR EQUAL 5 CRORES TO LESS THAN 10 CRORES"
  //             },
  //             {
  //                "id" : "11",
  //                "text" : "GREATER THAN OR EQUAL 10 CRORES"
  //             }
  //          ],
  //          "cashDeposit" : [
  //             {
  //                "id" : "1",
  //                "text" : "NIL"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "LESS THAN 2 LAKHS"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "2 LAKHS TO 10 LAKHS"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "GREATER THAN 10 LAKHS"
  //             }
  //          ],
  //          "cashWithdrawal" : [
  //             {
  //                "id" : "1",
  //                "text" : "NIL"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "LESS THAN 2 LAKHS"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "2 LAKHS TO 10 LAKHS"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "GREATER THAN 10 LAKHS"
  //             }
  //          ],
  //          "companyType" : [
  //             {
  //                "id" : "1",
  //                "text" : "Proprietorship firm"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Partnership firm"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Public Ltd Company"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Private Ltd Company"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Others"
  //             }
  //          ],
  //          "companyTypeQuery" : "select id,company_type_desc from company_type_master",
  //          "employmentDetails" : [
  //             {
  //                "id" : "1",
  //                "text" : "Wage Earner"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "HouseHold Services"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "NGO"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Trust/Association/Society"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Proprietorship firm"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Partnership firm"
  //             },
  //             {
  //                "id" : "7",
  //                "text" : "Religious Institutions"
  //             },
  //             {
  //                "id" : "8",
  //                "text" : "Embassies/consulates"
  //             },
  //             {
  //                "id" : "9",
  //                "text" : "PSUs"
  //             },
  //             {
  //                "id" : "10",
  //                "text" : "Mulitinational"
  //             },
  //             {
  //                "id" : "11",
  //                "text" : "Government"
  //             },
  //             {
  //                "id" : "12",
  //                "text" : "Public Ltd Company"
  //             },
  //             {
  //                "id" : "13",
  //                "text" : "Private Ltd Company"
  //             },
  //             {
  //                "id" : "14",
  //                "text" : "Educational Institutions"
  //             },
  //             {
  //                "id" : "15",
  //                "text" : "Defense Organization"
  //             },
  //             {
  //                "id" : "16",
  //                "text" : "Others"
  //             }
  //          ],
  //          "expectedTransactions" : [
  //             {
  //                "id" : "1",
  //                "text" : "SAVINGS-GREATER THAN 50"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "SAVINGS-1 TO 25"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "SAVINGS-26-50"
  //             }
  //          ],
  //          "inwardRemittance" : [
  //             {
  //                "id" : "1",
  //                "text" : "NIL"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "LESS THAN 2 LAKHS"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "2 LAKHS TO 10 LAKHS"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "GREATER THAN 10 LAKHS"
  //             }
  //          ],
  //          "maritalStatus" : [
  //             {
  //                "id" : "1",
  //                "text" : "Single"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Married"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Others"
  //             }
  //          ],
  //          "natureOfBusiness" : [
  //             {
  //                "id" : "1",
  //                "text" : "Trading"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Manufacturing"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Service Provider"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Agriculture"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Real Estate"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Others"
  //             }
  //          ],
  //          "natureOfIndustry" : [
  //             {
  //                "id" : "1",
  //                "text" : "Agri Commodities"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Agri Business"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Airlines"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Airports"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Architechture firm"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Arms Dealer/Antique Dealer/Ar"
  //             },
  //             {
  //                "id" : "7",
  //                "text" : "Associations"
  //             },
  //             {
  //                "id" : "8",
  //                "text" : "Auto and Auto Ancillaries"
  //             },
  //             {
  //                "id" : "9",
  //                "text" : "Automobiles"
  //             },
  //             {
  //                "id" : "10",
  //                "text" : "Bakery/Confectionery Store"
  //             },
  //             {
  //                "id" : "11",
  //                "text" : "Banking and Financial Services"
  //             },
  //             {
  //                "id" : "12",
  //                "text" : "Bar/Casino/Nightclub"
  //             },
  //             {
  //                "id" : "13",
  //                "text" : "Boat/Plane Dealership/Brokers"
  //             },
  //             {
  //                "id" : "14",
  //                "text" : "Books/Stationery Store"
  //             },
  //             {
  //                "id" : "15",
  //                "text" : "BPO"
  //             },
  //             {
  //                "id" : "16",
  //                "text" : "Branch Office"
  //             },
  //             {
  //                "id" : "17",
  //                "text" : "Brokers"
  //             },
  //             {
  //                "id" : "18",
  //                "text" : "Broking Firm"
  //             },
  //             {
  //                "id" : "19",
  //                "text" : "Bullion Dealer"
  //             },
  //             {
  //                "id" : "20",
  //                "text" : "CA Firm"
  //             },
  //             {
  //                "id" : "21",
  //                "text" : "Cement"
  //             },
  //             {
  //                "id" : "22",
  //                "text" : "Central government"
  //             },
  //             {
  //                "id" : "23",
  //                "text" : "Chemicals,Dyes and Paints"
  //             },
  //             {
  //                "id" : "24",
  //                "text" : "Chemist"
  //             },
  //             {
  //                "id" : "25",
  //                "text" : "Clubs"
  //             },
  //             {
  //                "id" : "26",
  //                "text" : "Coal"
  //             },
  //             {
  //                "id" : "27",
  //                "text" : "Computer Hardware"
  //             },
  //             {
  //                "id" : "28",
  //                "text" : "Computer Software"
  //             },
  //             {
  //                "id" : "29",
  //                "text" : "Consulate/Embassy"
  //             },
  //             {
  //                "id" : "30",
  //                "text" : "Consultancy Firm"
  //             },
  //             {
  //                "id" : "31",
  //                "text" : "Consumer Durables"
  //             },
  //             {
  //                "id" : "32",
  //                "text" : "Contractors"
  //             },
  //             {
  //                "id" : "33",
  //                "text" : "Co-operative banks"
  //             },
  //             {
  //                "id" : "34",
  //                "text" : "Credit Co-operative Society"
  //             },
  //             {
  //                "id" : "35",
  //                "text" : "Defense"
  //             },
  //             {
  //                "id" : "36",
  //                "text" : "Defense establishments"
  //             },
  //             {
  //                "id" : "37",
  //                "text" : "Department and Grocery Store"
  //             },
  //             {
  //                "id" : "38",
  //                "text" : "Diagnostic/Research Centre"
  //             },
  //             {
  //                "id" : "39",
  //                "text" : "Edible Oils"
  //             },
  //             {
  //                "id" : "40",
  //                "text" : "Educational Institutions"
  //             },
  //             {
  //                "id" : "41",
  //                "text" : "Electrical Components"
  //             },
  //             {
  //                "id" : "42",
  //                "text" : "Electronics and Equipment"
  //             },
  //             {
  //                "id" : "43",
  //                "text" : "Engineering-Others"
  //             },
  //             {
  //                "id" : "44",
  //                "text" : "EPC"
  //             },
  //             {
  //                "id" : "45",
  //                "text" : "Exchange House"
  //             },
  //             {
  //                "id" : "46",
  //                "text" : "Exporters/ Importers"
  //             },
  //             {
  //                "id" : "47",
  //                "text" : "Fertilizers"
  //             },
  //             {
  //                "id" : "48",
  //                "text" : "Fertilizers/Seeds/Pesticides"
  //             },
  //             {
  //                "id" : "49",
  //                "text" : "Financial Intermediaries"
  //             },
  //             {
  //                "id" : "50",
  //                "text" : "Financial Servcies"
  //             },
  //             {
  //                "id" : "51",
  //                "text" : "FMCG"
  //             },
  //             {
  //                "id" : "52",
  //                "text" : "Food and Beverage"
  //             },
  //             {
  //                "id" : "53",
  //                "text" : "Foreign Government"
  //             },
  //             {
  //                "id" : "54",
  //                "text" : "Foreign Resident Banks"
  //             },
  //             {
  //                "id" : "55",
  //                "text" : "Forex Dealer"
  //             },
  //             {
  //                "id" : "56",
  //                "text" : "Furniture/Timber"
  //             },
  //             {
  //                "id" : "57",
  //                "text" : "Garment Store"
  //             },
  //             {
  //                "id" : "58",
  //                "text" : "Gems and Jewellery"
  //             },
  //             {
  //                "id" : "59",
  //                "text" : "Health Clubs"
  //             },
  //             {
  //                "id" : "60",
  //                "text" : "Healthcare"
  //             },
  //             {
  //                "id" : "61",
  //                "text" : "Healthcare Firm"
  //             },
  //             {
  //                "id" : "62",
  //                "text" : "Hospilatity"
  //             },
  //             {
  //                "id" : "63",
  //                "text" : "Hospitals"
  //             },
  //             {
  //                "id" : "64",
  //                "text" : "Housing Societies"
  //             },
  //             {
  //                "id" : "65",
  //                "text" : "Imports"
  //             },
  //             {
  //                "id" : "66",
  //                "text" : "Indian Commerical Banks"
  //             },
  //             {
  //                "id" : "67",
  //                "text" : "Iron and Steel"
  //             },
  //             {
  //                "id" : "68",
  //                "text" : "IT/ ITES"
  //             },
  //             {
  //                "id" : "69",
  //                "text" : "IT Consulting"
  //             },
  //             {
  //                "id" : "70",
  //                "text" : "IT Service Provider"
  //             },
  //             {
  //                "id" : "71",
  //                "text" : "Law Firm"
  //             },
  //             {
  //                "id" : "72",
  //                "text" : "Liaison Office"
  //             },
  //             {
  //                "id" : "73",
  //                "text" : "LIC"
  //             },
  //             {
  //                "id" : "74",
  //                "text" : "Life Sciences"
  //             },
  //             {
  //                "id" : "75",
  //                "text" : "Liquor distributor"
  //             },
  //             {
  //                "id" : "76",
  //                "text" : "Local Authorites"
  //             },
  //             {
  //                "id" : "77",
  //                "text" : "Logistics"
  //             },
  //             {
  //                "id" : "78",
  //                "text" : "Logistics (Excl Transport)"
  //             },
  //             {
  //                "id" : "79",
  //                "text" : "Manfacturing"
  //             },
  //             {
  //                "id" : "80",
  //                "text" : "Media and Entertainment"
  //             },
  //             {
  //                "id" : "81",
  //                "text" : "Media/Lifestyle/Sports/Advertisment"
  //             },
  //             {
  //                "id" : "82",
  //                "text" : "Mining"
  //             },
  //             {
  //                "id" : "83",
  //                "text" : "Money Changer"
  //             }
  //          ],
  //          "occupation" : [
  //             {
  //                "id" : "1",
  //                "text" : "Self Employed"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Salaried"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Business"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Agriculture/Farmer"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Diplomat"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Filmstar"
  //             },
  //             {
  //                "id" : "7",
  //                "text" : "Home maker"
  //             },
  //             {
  //                "id" : "8",
  //                "text" : "Retired"
  //             },
  //             {
  //                "id" : "9",
  //                "text" : "Student"
  //             },
  //             {
  //                "id" : "10",
  //                "text" : "Others"
  //             }
  //          ],
  //          "otherMaritalStatus" : [
  //             {
  //                "id" : "1",
  //                "text" : "Divorced"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Widowed"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Separated"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Wealth_Adv"
  //             }
  //          ],
  //          "outwardRemittance" : [
  //             {
  //                "id" : "1",
  //                "text" : "NIL"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "LESS THAN 2 LAKHS"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "2 LAKHS TO 10 LAKHS"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "GREATER THAN 10 LAKHS"
  //             }
  //          ],
  //          "politicalExposure" : [
  //             {
  //                "id" : "1",
  //                "text" : "Politically exposed Person"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Related Politically Exposed Person"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Not Applicable - N/A"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "PEP"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "NO"
  //             }
  //          ],
  //          "politicalExposureQuery" : "select id,political_exposure_desc from political_exposure_master",
  //          "profession" : [
  //             {
  //                "id" : "1",
  //                "text" : "Practising Chartered Accountant"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Practicing Company Secretory"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Practicing Doctor"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Practicing Lawyer"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Practicing Cost Accountant"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Practicing Architect"
  //             },
  //             {
  //                "id" : "7",
  //                "text" : "Others"
  //             }
  //          ],
  //          "qualification" : [
  //             {
  //                "id" : "1",
  //                "text" : "Upto 10th"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Under graduate"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Graduate"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Post graduate"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Professional"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Illiterate/Notapplicable"
  //             },
  //             {
  //                "id" : "7",
  //                "text" : "Others"
  //             }
  //          ],
  //          "residenceType" : [
  //             {
  //                "id" : "1",
  //                "text" : "Self Owned"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Family Owned"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Company Owned"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Rented"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "PG Accomodation"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Others"
  //             }
  //          ],
  //          "residentialTypeQuery" : "select residence_type_desc,id from residence_type_master",
  //          "sourceOfFunds" : [
  //             {
  //                "id" : "1",
  //                "text" : "Personal"
  //             },
  //             {
  //                "id" : "2",
  //                "text" : "Business related"
  //             },
  //             {
  //                "id" : "3",
  //                "text" : "Salary"
  //             },
  //             {
  //                "id" : "4",
  //                "text" : "Wages"
  //             },
  //             {
  //                "id" : "5",
  //                "text" : "Income from Business"
  //             },
  //             {
  //                "id" : "6",
  //                "text" : "Income from Investments"
  //             },
  //             {
  //                "id" : "7",
  //                "text" : "Investments from Rent"
  //             },
  //             {
  //                "id" : "8",
  //                "text" : "Income from Agriculture"
  //             },
  //             {
  //                "id" : "9",
  //                "text" : "Pension"
  //             },
  //             {
  //                "id" : "10",
  //                "text" : "Royalty"
  //             },
  //             {
  //                "id" : "11",
  //                "text" : "Supported by family income"
  //             },
  //             {
  //                "id" : "12",
  //                "text" : "Rent"
  //             },
  //             {
  //                "id" : "13",
  //                "text" : "Sales Proceeds"
  //             },
  //             {
  //                "id" : "14",
  //                "text" : "Capital Contribution"
  //             },
  //             {
  //                "id" : "15",
  //                "text" : "Investment Received"
  //             },
  //             {
  //                "id" : "16",
  //                "text" : "Dividends"
  //             },
  //             {
  //                "id" : "17",
  //                "text" : "Incentives"
  //             },
  //             {
  //                "id" : "18",
  //                "text" : "Commisions"
  //             },
  //             {
  //                "id" : "19",
  //                "text" : "Grants"
  //             },
  //             {
  //                "id" : "20",
  //                "text" : "Donations"
  //             },
  //             {
  //                "id" : "21",
  //                "text" : "Fees"
  //             },
  //             {
  //                "id" : "22",
  //                "text" : "Subscription"
  //             },
  //             {
  //                "id" : "23",
  //                "text" : "Loans and Advances"
  //             },
  //             {
  //                "id" : "24",
  //                "text" : "Reimbursement"
  //             },
  //             {
  //                "id" : "25",
  //                "text" : "Consultancy Income"
  //             },
  //             {
  //                "id" : "26",
  //                "text" : "Professional Fees"
  //             },
  //             {
  //                "id" : "27",
  //                "text" : "Membership Fees"
  //             },
  //             {
  //                "id" : "28",
  //                "text" : "Job Works Charges"
  //             },
  //             {
  //                "id" : "29",
  //                "text" : "Gift"
  //             },
  //             {
  //                "id" : "30",
  //                "text" : "Ancestral Property"
  //             },
  //             {
  //                "id" : "31",
  //                "text" : "Prize Money"
  //             }
  //          ]
  //       },
  //       "Status" : "Execution Completed",
  //       "WorkflowId" : "bd905b30892011e9b12c2eca4ea5bb5f"
  //     }     
  //   );
  // }
}
