import { Injectable } from '@angular/core';
import { APIConstants, Constants } from '../app.constant';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }

  cust(apiUniqueReqId: any) {
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Details.WORKFLOW_ID,
      "processId": APIConstants.Details.PROCESS_ID,
      "ProcessVariables": {
        "srId": this.tokenStorage.getSrId(),
        "apiUniqueReqId": apiUniqueReqId
      }
    }
    return this.baseAPIService.post(APIConstants.Details.WORKFLOW_ID, processVariables);
  }

  // get Options
  getOptions(srType: any) {
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.SrType.WORKFLOW_ID,
      "processId": APIConstants.SrType.PROCESS_ID,
      "ProcessVariables": {
        "srType": srType
      }
    }
    return this.baseAPIService.post(APIConstants.SrType.WORKFLOW_ID, processVariables);
  }
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

  uploadImg(img: any, fileName: String) {
    let formData = new FormData();
    const stamp = new Date().getTime().toString();
    fileName = fileName.replace(/[|&;$%@"'<> ()+,{}#\[\]]/g, "");
    formData.append('files', img, stamp + '_' + fileName);
    return this.baseAPIService.postUpload(formData);
  }

  rejectOptions() {
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Reject.WORKFLOW_ID,
      "processId": APIConstants.Reject.PROCESS_ID,
      "ProcessVariables": {},
    }
    return this.baseAPIService.post(APIConstants.Reject.WORKFLOW_ID, processVariables);
  }

  reject(approved: any, reason: number, apiUniqueReqId: any) {
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": APIConstants.Accept.WORKFLOW_ID,
      "processId": APIConstants.Accept.PROCESS_ID,
      "ProcessVariables": {
        "srId": this.tokenStorage.getSrId(),
        "isApproved": approved,
        "rejectReason": reason,
        "apiUniqueReqId": apiUniqueReqId
      }
    }
    return this.baseAPIService.post(APIConstants.Accept.WORKFLOW_ID, processVariables);
  }

}
