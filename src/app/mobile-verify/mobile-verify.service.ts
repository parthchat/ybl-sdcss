import { Injectable } from '@angular/core';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { APIConstants, Constants } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class MobileVerifyService {

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }

  getAuthMobile(apiUniqueReqId: any) {
    let body = {
      "processId": APIConstants.Auth_init_mobile.PROCESS_ID,
      "workflowId": APIConstants.Auth_init_mobile.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    };
    return this.baseAPIService.getAuthTokenPost(body);
  }

// Mobile OTP verify
  verifyMobileOtp(refid: any, otp: any, apiUniqueReqId: any) {
    let body = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Auth_valid_mobile.WORKFLOW_ID,
      "processId": APIConstants.Auth_valid_mobile.PROCESS_ID,
      "ProcessVariables": {
        "authRefId": refid,
        "userOtp": otp,
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    }
    return this.baseAPIService.validateAuthPost(body);
  }

}
