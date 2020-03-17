import { Injectable } from '@angular/core';
import { BaseAPIService } from 'src/app/core/services/base-api-service.service';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { BehaviorSubject } from 'rxjs';
import { Constants, APIConstants } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class LandlineUpdateService {

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }
  
  createSR(landline_no: string, old_landline: string) {
    var SRtype = JSON.parse(this.tokenStorage.getSrId()).id;
    var processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Create_srtype.WORKFLOW_ID,
      "processId": APIConstants.Create_srtype.PROCESS_ID,
      "ProcessVariables": {
        "headers": {
          "refId": this.tokenStorage.getSessionId(),
          "channel": "SS",
          "appId": "app2"
        },
        "srDetails": {
          "srType": SRtype
        },
        "landLineUpdate": {
          "oldNumber": old_landline,
          "newNumber": landline_no
        },
      }
    }
    if (!old_landline) {
      delete processVariables.ProcessVariables.landLineUpdate.oldNumber
    }
    console.log(processVariables, 'payload landline')
    return this.baseAPIService.sr_update(APIConstants.Create_srtype.WORKFLOW_ID, processVariables);
  }
}
