import { Injectable } from '@angular/core';
import { Constants, APIConstants } from '../app.constant';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  accptRejct: any;
  constructor(private tokenStorage: TokenStorage, private baseAPIService: BaseAPIService) { }

  getAcceptRejectValue(val: any) {
    this.accptRejct = val;
  }

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

}
