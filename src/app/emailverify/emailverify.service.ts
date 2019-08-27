import { Injectable } from '@angular/core';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { APIConstants, Constants } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class EmailverifyService {

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }

  authEmail(apiUniqueReqId: any) {
    let body = {
      "processId": APIConstants.Auth_init_email.PROCESS_ID,
      "workflowId": APIConstants.Auth_init_email.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    };
    return this.baseAPIService.getAuthTokenPost(body);
  }

  verifyemail(refid: any, apiUniqueReqId: any) {
    let body = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Auth_valid_email.WORKFLOW_ID,
      "processId": APIConstants.Auth_valid_email.PROCESS_ID,
      "ProcessVariables": {
        "authRefId": refid,
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    }
    return this.baseAPIService.validateAuthPost(body);
  }
}
