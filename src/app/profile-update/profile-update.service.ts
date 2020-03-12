import { Injectable } from '@angular/core';
import { BaseAPIService } from 'src/app/core/services/base-api-service.service';
import { Constants, APIConstants } from 'src/app/app.constant';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileUpdateService {

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }

  saveProfile(data, oldData?){
    console.log("srid", this.tokenStorage.getSrId())
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.SaveProfileData.WORKFLOW_ID,
      "processId": APIConstants.SaveProfileData.PROCESS_ID,
      "ProcessVariables": {
        'apiUniqueReqId' : new Date().getTime().toString(),
        // "srType": (JSON.parse(this.tokenStorage.getSrId()).id).toString(),
        'profileUpdate' : data,
        // 'srDetails':{
        'srId':this.tokenStorage.getSrId()
        // }
        // 'profileOld' : oldData
      }
    }
    return this.baseAPIService.sr_update(APIConstants.SaveProfileData.WORKFLOW_ID, processVariables);
  }

  captureCustomer(){
    console.log("srid", this.tokenStorage.getSrId())
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.CaptureCustomerData.WORKFLOW_ID,
      "processId": APIConstants.CaptureCustomerData.PROCESS_ID,
      "ProcessVariables": {
        'srId':this.tokenStorage.getSrId(),
        'isApproved': true
      }
    }
    return this.baseAPIService.sr_update(APIConstants.CaptureCustomerData.WORKFLOW_ID, processVariables);
  }

  getSR(data?){
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.GetProfileData.WORKFLOW_ID,
      "processId": APIConstants.GetProfileData.PROCESS_ID,
      "ProcessVariables": {
        'srId' : this.tokenStorage.getSrId(),
      }
    }
    return this.baseAPIService.sr_update(APIConstants.GetProfileData.WORKFLOW_ID, processVariables);
  }

  // createSr(){
  //   let processVariables = {
  //     "projectId": Constants.PROJECT_ID,
  //     "workflowId": APIConstants.Details.WORKFLOW_ID,
  //     "processId": APIConstants.Details.PROCESS_ID,
  //     "ProcessVariables": {
  //       'apiUniqueReqId' : new Date().getTime().toString(),
  //       'headers':{
  //         'refId': this.tokenStorage.getSessionId(),
  //         'appId': "app2",
  //         "channel": "SS",
  //       },
  //       'srDetails':{
  //         "srType": this.tokenStorage.getSrId(),
  //         // "branchId": 
  //       },
  //       // 'custDetails':{
  //       //   "custName": ,
  //       //   "custId": ,
  //       //   "mobileNumber": ,
  //       //   "email": ,
  //       // }
  //     }
  //   }
  //   return this.baseAPIService.sr_update(APIConstants.Details.WORKFLOW_ID, processVariables);
  // }

  dummyGetSession(){
      return of(
        {
          "ApplicationId" : "ff0ae4a6884711e9b16676fb2f2488b6",
          "Error" : "0",
          "ErrorCode" : "200",
          "ErrorMessage" : "",
          "ProcessId" : "ff1599825eb111ea98b76adcd8a925ce",
          "ProcessInstanceId" : "7556b7ca5ee411eaa1726adcd8a925ce",
          "ProcessName" : "Profile Update Get service request",
          "ProcessVariables" : {
             "annualIncome" : "",
             "custDetails" : {
                "accountNumber" : null,
                "custId" : "Sanket34",
                "custName" : "Sanket34",
                "email" : "sanket.thumma@appiyo.com",
                "mobileNumber" : "9500138600"
             },
             "employedWith" : "",
             "errorCode" : "200",
             "errorMsg" : "",
             "isValidData" : true,
             "maritalStatus" : "",
             "mdmRowId" : 0,
             "mdmSearchQuery" : "select cust_id, cust_name, account_number, mobile,email,sr_type from service_request                       where sr_id  = 'SR20200305105197GN'",
             "natureOfBusiness" : "",
             "natureOfInd2" : "",
             "natureOfInd3" : "",
             "natureOfindustry" : "",
             "politicalExposure" : "",
             "profileUpdate" : {
                "addressLineOne" : "No. 123 Vijay Apartment",
                "addressLineThree" : "New Delhi",
                "addressLineTwo" : "MG Road",
                "annualIncome" : "LESS THAN 1 LAKH",
                "cashDeposit" : "NIL",
                "cashWithdrawal" : "NIL",
                "city" : "New Delhi",
                "companyCode" : "1",
                "companyName" : "ABC",
                "companyType" : "Partnership firm",
                "country" : "India",
                "currentBusinessMonths" : "4",
                "currentBusinessYears" : "3",
                "currentEmploymentMonths" : "6",
                "currentEmploymentYears" : "2",
                "educationalQualification" : "Upto 10th",
                "employeeId" : "12",
                "employerName" : "XYZ",
                "employmentDetails" : "Wage Earner",
                "expectedTransactions" : "SAVINGS-GREATER THAN 50",
                "inwardForeignRemittance" : "NIL",
                "landmark" : "Block A",
                "maritalStatus" : "single",
                "natureOfBusiness" : [ "Trading" ],
                "natureOfIndustry" : [ "Airlines" ],
                "occupationType" : "Business",
                "otherCompanyType" : "",
                "otherEducationalQualification" : "",
                "otherMaritalStatus" : "",
                "otherNatureOfBusiness" : "",
                "otherNatureOfIndustry" : "",
                "otherOccupation" : "",
                "otherProfession" : "",
                "otherResidence" : "",
                "outwardForeignRemittance" : "NIL",
                "pincode" : "100011",
                "politicalExposure" : "Politically exposed Person",
                "profession" : "Others",
                "residenceType" : "Self Owned",
                // "sourceOfFunds" : [ "Personal", "Salary" ],
                "sourceOfFunds" : "",
                "state" : "Delhi"
             },
             "residenceType" : "",
             "sourceOfFunds" : "",
             "srDetails" : {
                "srType" : 1006
             },
             "srId" : "SR20200305105197GN",
             "srTypeStr" : "1006",
             "srcOfFunds2" : "",
             "srcOfFunds3" : ""
          },
          "Status" : "Execution Completed",
          "WorkflowId" : "fefa558c5eb111ea82796adcd8a925ce"
       }
      );
    }
}
