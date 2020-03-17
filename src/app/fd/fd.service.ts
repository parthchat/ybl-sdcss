import { Injectable } from '@angular/core';
import { APIConstants, Constants } from '../app.constant';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FdService {

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }
   // get Balanace based on select bank A/C No.
   get_Acc_Balanec(apiUniqueKey: any, accNumber: string,accountRelation:any) {
    let body = {
      "processId": APIConstants.getAccountDetails.PROCESS_ID,
      "workflowId": APIConstants.getAccountDetails.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "srId": this.tokenStorage.getSrId(),
        "apiUniqueReqId": apiUniqueKey,
        "accountNumber": accNumber,
         "accountType" : accountRelation
      }
    };
    console.log(body, 'payload');
    return this.baseAPIService.post(APIConstants.getAccountDetails.WORKFLOW_ID, body);
  }

  // get product details based on code select
  get_Products_details(apiUniqueKey: any, code: any,amount:string,month:number,days:number,branch_code:any) {
    let body = {
      "processId": APIConstants.getProductDetails.PROCESS_ID,
      "workflowId": APIConstants.getProductDetails.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "srId": this.tokenStorage.getSrId(),
        "apiUniqueReqId": apiUniqueKey,
        "code": code,
        "amount": amount,
        // "pan": pan_no,
        "termMonths": month,
        "termDays": days,
        "branchCode": parseInt(branch_code)
      }
    };
    // if(parseInt(amount) < 50000){
    //   delete body.ProcessVariables.pan;  
    // }
    console.log(body,'payload')
    return this.baseAPIService.post(APIConstants.getProductDetails.WORKFLOW_ID, body);
  }


  // on form Submit we call SR create API
  update_Sr(obj,obj_code:any,staff_obj:any,cheked:boolean) {
    let apiUniqueKey = new Date().getTime().toString();
    let body = {
      "processId": APIConstants.fd_sr_create.PROCESS_ID,
      "workflowId": APIConstants.fd_sr_create.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "srId": this.tokenStorage.getSrId(),
        // "headers": {
        //   "refId": this.tokenStorage.getSessionId(),
        //   "channel": "SS",
        //   "appId": "app1"
        // },
        // "srDetails": {
        //   "srType": 1001
        // },
        "fdDetails": {
          "sourceAccount": obj['account'],
          "branchId":  parseInt(obj['branch_code']),
          "depositProduct": 401,
          "depositAmount": 12000,
          "depositStartDate": obj['deposit_start_date'],
          "interestRate":  parseFloat(obj['interestRate']),
          "interestAccount":  obj['selectAccount_Interest'],
          "tenureMonths": obj['months'],
          "tenureDays": obj['day'],
          "sweepIn": obj['sweepIn'],
          "maturityDate": obj['maturityDate'],
          "maturityAmount": parseInt(obj['maturityAmount']),
          "maturityInstruction": obj['maturity_instruction'],
          "interestInstructions": obj['interest_instruction'],
          "interestFrequency": parseInt(obj_code['FrequencyCode']),
          "principalAccount": obj['selectAccount_principle'],
          "principalInstructions": obj['principal_Instruction'],
          "jointAccount": obj['jointAccount'],
          "staffId":staff_obj['staf_id'],
          "apiUniqueReqId": apiUniqueKey,
          "schemeType":obj['schemeType'],
          "accountRelation":obj['accountRelation']
        },
        nomineeDetails: obj.nomineeDetails ? {
          relationToAccHolder: obj['nomineeDetails']['relationToAccHolder'],
          nomineeName: obj['nomineeDetails']['nomineeName'],
          addressLine1: obj['nomineeDetails']['addressLine1'],
          addressLine2: obj['nomineeDetails']['addressLine2'],
          addressLine3: obj['nomineeDetails']['addressLine3'],
          displayNomineeNameFlag: obj['nomineeDetails']['displayNomineeNameFlag'],
          phoneNumber: obj['nomineeDetails']['mobileNumber'], // To Phone number was changed by Ganesh
          nomineeRegistrationNumber: obj['nomineeDetails']['nomineeRegistrationNumber'],
          sharePercentage: obj['nomineeDetails']['sharePercentage'],
          dateOfBirth: obj['nomineeDetails']['dateOfBirth'],
          // emailId: obj['nomineeDetails']['emailId'],
          country: obj['nomineeDetails']['country'],
          state: obj['nomineeDetails']['state'],
          townOrCity: obj['nomineeDetails']['townOrCity'],
          zipCode: obj['nomineeDetails']['zipCode'],
        } : null,
        guardianDetails: obj.guardianDetails ? {
          relationToNominee: obj['guardianDetails']['relationToNominee'],
          guardianName: obj['guardianDetails']['guardianName'],
          addressLine1: obj['guardianDetails']['addressLine1'],
          addressLine2: obj['guardianDetails']['addressLine2'],
          addressLine3: obj['guardianDetails']['addressLine3'],
          phoneNumber: obj['guardianDetails']['phoneNumber'],
          mobileNumber: obj['guardianDetails']['mobileNumber'],
          emailId: obj['guardianDetails']['emailId'],
          country: obj['guardianDetails']['country'],
          state: obj['guardianDetails']['state'],
          townOrCity: obj['guardianDetails']['townOrCity'],
          zipCode: obj['guardianDetails']['zipCode']
        } : null
      }
    };
    if(!cheked){
      delete body.ProcessVariables.fdDetails.staffId;  
    }
    if(!obj['maturity_instruction']){
      delete body.ProcessVariables.fdDetails.maturityInstruction
    }
    if(!obj['selectAccount_principle']){
      delete body.ProcessVariables.fdDetails.principalAccount
    }
    if(!obj['selectAccount_Interest']){
      delete body.ProcessVariables.fdDetails.interestAccount
    }
    console.log(body,'payload update SR')
    return this.baseAPIService.post(APIConstants.fd_sr_create.WORKFLOW_ID, body);
  }

  capture_customerApproval(accpetRject:boolean){
    let apiUniqueKey = new Date().getTime().toString();
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Accept.WORKFLOW_ID,
      "processId": APIConstants.Accept.PROCESS_ID,
      "ProcessVariables": {
        "srId": this.tokenStorage.getSrId(),
        "apiUniqueReqId": apiUniqueKey,
        "isApproved": accpetRject
      }
    }
    console.log(processVariables,'payload capture customer approval')
    return this.baseAPIService.post(APIConstants.Accept.WORKFLOW_ID, processVariables);
  }
}
