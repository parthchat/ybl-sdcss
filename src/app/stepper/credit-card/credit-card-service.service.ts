import { Injectable } from '@angular/core';
import { BaseAPIService } from 'src/app/core/services/base-api-service.service';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { Constants, APIConstants } from '../../../app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class CreditCardServiceService {

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }

  verifyDetails(cc_no: any, dob: any, expiry: any, srId: any, apiUniqueReqId: any) {
    let body = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.validate_logins.WORKFLOW_ID,
      "processId": APIConstants.validate_logins.PROCESS_ID,
      "ProcessVariables": {
        "type": 4,
        "ccNumber": cc_no,
        "ccExpiryDate": expiry,
        "ccDob": dob,
        "srId": srId,
        "apiUniqueReqId": apiUniqueReqId
      }
    }
    return this.baseAPIService.post(APIConstants.validate_logins.WORKFLOW_ID, body);
    //return this.baseAPIService.validateAuthPost(body);
  }


  // Verify OTP after Success of Credit Details
  // re_init API
  reInit(apiUniqueKey:any,srId:any){
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.re_init.WORKFLOW_ID,
      "processId": APIConstants.re_init.PROCESS_ID,
      "ProcessVariables": {
        "srId": srId,
        "type": 4,
        "apiUniqueReqId": apiUniqueKey,
        "f2Auth": true
      }
    }
    console.log(processVariables,'reInit')
    return this.baseAPIService.post(APIConstants.re_init.WORKFLOW_ID, processVariables);
  }

  otpInput(otp: any, refID: any,srId:any) {
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.validate_logins.WORKFLOW_ID,
      "processId": APIConstants.validate_logins.PROCESS_ID,
      "ProcessVariables": {
        "srId": srId,
        "authRefId": refID,
        "userOtp": otp,
        "type": 4,
        "f2Auth": true
      }
    }
    return this.baseAPIService.post(APIConstants.validate_logins.WORKFLOW_ID, processVariables);
  }
}
