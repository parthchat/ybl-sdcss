import { Injectable } from '@angular/core';
import { Constants, APIConstants } from '../app.constant';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  accptRejct: any;
  srId: any;
  objc_details:any;
  isAuthorize :boolean;
  customerDetails: Object;
  loading = false;
  constructor(private tokenStorage: TokenStorage, private baseAPIService: BaseAPIService,private router: Router) { }

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
      let apiUniqueKey = new Date().getTime().toString();
      let processVariables = {
        "projectId": Constants.PROJECT_ID,
        "workflowId": APIConstants.Accept.WORKFLOW_ID,
        "processId": APIConstants.Accept.PROCESS_ID,
        "ProcessVariables": {
          "srId": this.tokenStorage.getSrId(),
          "isApproved": data.approved,
          "documents": [],
          "apiUniqueReqId": apiUniqueKey
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

    // get customer details
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
    
    getCustomerDetails_And_Routing(){
      this.loading =  true
      let apiUniqueKey = new Date().getTime().toString();
      this.cust(apiUniqueKey).subscribe(res => {
        this.loading = false;
        console.log(res);
        this.customerDetails = res;
        if (res['login_required'] == true) {
          this.errorPage();
          return;
        }
        if (res['ProcessVariables']['srDetails']['srType']) {
          let sr_type = res['ProcessVariables']['srDetails']['srType'];
          
          // Fixed Deposit
          if(sr_type==1001){
            console.log(sr_type,'srtype')
            this.router.navigate(['fixed-deposit']);
            return;
          }
          // Recurring Deposit
          if(sr_type==1012){
            this.router.navigate(['recurring-deposit']);
            return;
          }
          // Profile Update
          if(sr_type==1004){
            this.router.navigate(['profile_update']);
            return;
          }
          // PAN and Email 
          if(sr_type==1005 || 1006){
            this.router.navigate(['customer']);
            return;
          }
        } else {
          this.errorPage();
          return;
        }
      })
    }
    // error page
    errorPage() {
      this.loading = false;
      this.router.navigate(['error']);
      this.tokenStorage.clear();
    }
}
