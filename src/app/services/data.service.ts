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
        "srId": this.tokenStorage.getSrId(),
        // "apiUniqueReqId": apiUniqueReqId,
        "authType": "Authorization",
         "channel": "GN"
      }
    };
    return this.baseAPIService.post(APIConstants.Auth_init_otp.WORKFLOW_ID,body);
  }

    // Capture Customer Approval API
    acceptApi(data: any) {
      let processVariables = {
        "projectId": Constants.PROJECT_ID,
        "workflowId": APIConstants.Accept.WORKFLOW_ID,
        "processId": APIConstants.Accept.PROCESS_ID,
        "ProcessVariables": {
          "srId": this.tokenStorage.getSrId(),
          "isApproved": data.approved,
          "documents": [],
          "apiUniqueReqId": data.apiUniqueKey
        }
      }
      // DOB primary backImg
      if (data.img_id4 && data.dob_pg_count == 2) {
        processVariables.ProcessVariables.documents.push(
          {
            "docId": data.img_id4,
            "docName": data.dob_backimg_Name,
            "docType": data.dob_doc_type,
            "isPrimary": true,
            "isFront": false
          }
        )
      }
  
      // default Image body call
      if (data.img_id && data.sr_type == 1005) {
        processVariables.ProcessVariables.documents.push(
          {
            "docId": data.img_id,
            "docName": data.panImgName,
            "docType": 7,
            "isPrimary": true,
            "isFront": true
          }
        )
      }
      if (data.img_id && data.sr_type == 1008) {
        processVariables.ProcessVariables.documents.push(
          {
            "docId": data.img_id,
            "docName": data.panImgName,
            "docType": data.dob_doc_type,
            "isPrimary": true,
            "isFront": true
          }
        )
      }
      // Front Image Body Call
      if (data.img_id2) {
        processVariables.ProcessVariables.documents.push(
          {
            "docId": data.img_id2,
            "docName": data.frontImg,
            "docType": data.otherDocType,
            "isPrimary": false,
            "isFront": true
          }
        )
  
      }
  
      // Back Image Body Call
      if (data.img_id3) {
        processVariables.ProcessVariables.documents.push(
          {
            "docId": data.img_id3,
            "docName": data.backImg,
            "docType": data.otherDocType,
            "isPrimary": false,
            "isFront": false
          }
        )
      }
  
      return this.baseAPIService.post(APIConstants.Accept.WORKFLOW_ID, processVariables);
    }
}
