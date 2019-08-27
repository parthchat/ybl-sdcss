import { Injectable } from '@angular/core';
import { Constants, APIConstants } from '../app.constant';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  otpAuthRefId: any;
  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }
  
  getAuth(apiUniqueReqId: any) {
    let body = {
      "processId": APIConstants.Auth_init_otp.PROCESS_ID,
      "workflowId": APIConstants.Auth_init_otp.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    };
    return this.baseAPIService.getAuthTokenPost(body);
  }

  auth_reinit(apiUniqueReqId: any, loginType, iUserId) {
    let body = {
      "processId": APIConstants.Auth_reinit_otp.PROCESS_ID,
      "workflowId": APIConstants.Auth_reinit_otp.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId,
        "type": loginType,
        "iUserId": iUserId
      }
    };
    return this.baseAPIService.getAuthReInitPost(body);
  }

  verifyDetails(loginType, iUserId, iPass, debitCardNo, debitPIN, refid: any, otp: any, apiUniqueReqId: any) {
    let body = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Auth_valid_otp.WORKFLOW_ID,
      "processId": APIConstants.Auth_valid_otp.PROCESS_ID,
      "ProcessVariables": {
        "type": loginType,
        "iUserId": iUserId,
        "iPass": iPass,
        "debitCardNo": debitCardNo, 
        "debitPIN": debitPIN,
        "authRefId": refid,
        "userOtp": otp,
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    }
    return this.baseAPIService.validateAuthPost(body);
  }
}
