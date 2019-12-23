import { Injectable } from '@angular/core';
import { Constants, APIConstants } from '../app.constant';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  accptRejct: any;
  srId: any;
  objc_details:any;
  constructor(private tokenStorage: TokenStorage, private baseAPIService: BaseAPIService) { }

  getAcceptRejectValue(val: any) {
    this.accptRejct = val;
  }
  getDoc_srtype_details(val){
    this.objc_details = val;
  }
//  complete Service request
  completeSR(apiUniqueReqId: any) {
    let processVariables = {
      "processId": APIConstants.CompleteSR.PROCESS_ID,
      "workflowId": APIConstants.CompleteSR.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    };
    return this.baseAPIService.post(APIConstants.CompleteSR.WORKFLOW_ID, processVariables);
  }

  // Get list of Authorization Options
  getAuth(apiUniqueReqId: any) {
    let body = {
      "processId": APIConstants.Auth_init_otp.PROCESS_ID,
      "workflowId": APIConstants.Auth_init_otp.WORKFLOW_ID,
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "sessionId": this.tokenStorage.getAccessToken(),
        "apiUniqueReqId": apiUniqueReqId,
        "authType": "Authorization",
         "channel": "GN",
          "srType": 1006,
      }
    };
    return this.baseAPIService.getAuthTokenPost(body);
  }
}
