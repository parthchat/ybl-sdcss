import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from './customer.service';
import { TokenStorage } from '../core/services/auth/token-storage.service';
import { BaseAPIService } from '../core/services/base-api-service.service';
import { AlertMessages } from '../app.constant';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DialogBoxComponent } from '../core/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  docType: any = [];
  dob_Primary_Doc: any = [];
  customLoadingTemplate: any;
  docstype: any;
  imgURL: any;
  imgURL2: any;
  imgURL3: any;
  imgURL4: any;
  showImg = false;
  res_: any;
  responses: any = [];
  res_status: any;
  img_upload_status = false;
  img_upload_status2 = false;
  backImg_status = false;
  img_id: any;
  img_id2: any;
  img_id3: any;
  pageCount: any = 0;
  dob_pg_count: any = 0;
  panImgName: any = '';
  frontImg: any = '';
  backImg: any = '';
  approved: boolean = true;
  reasonId: number;
  Rejectedoptions: any = [];
  loading = false;
  show_DoB_Img = false;
  img1: any;
  img2: any;
  img3: any;
  img4: any;
  enableBtn = false;
  otherDocType: any;
  newarayy: any[];
  fileCount: number;
  rejectReasonTxt: any;
  sr_type: any;
  old_Dob: any;
  new_dob: any;
  dob_backimg_Name: any;
  img_id4: any;
  dob_doc_type: any;
  old_email: any;
  new_email: any;
  old_mobile_number: any;
  new_mobile_number: any;
  errorTxtmsg ='Invalid link. Either the link has already been used or session expired';
  showStatus = true;
  imgError = 'File upload failed! Retry after sometime';
  apiUniqueKey = '';
  tiffPdf_back: boolean = false;
  tiffPdf_front: boolean = false;
  tiffPdf_dob_BackImg: boolean = false;
  tiffPdf = false;
  isDuplicate: boolean = false;
  duplicateErrMsg: string = "";
  validUploadMethods: any;
  mobile: boolean;
  panMatchPercentage: any;
  matchLevel: string;
  constructor(public dialog: MatDialog, private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage, private customerService: CustomerService, private sanitizer: DomSanitizer, private router: Router, private service: DataService, private _snackBar: MatSnackBar) { }

  ngOnInit() { 
    if (window.screen.width <= 768) { // 768px portrait
      this.mobile = true;
    } else {
      this.mobile = false;
    }

    console.log("mobile", this.mobile);
    if (this.tokenStorage.getAccessToken()) {
      this.apiUniqueKey = new Date().getTime().toString();
      this.loading = true;
      this.customerService.cust(this.apiUniqueKey).subscribe(res => {
          this.loading = false;
          this.res_ = res;
          if (res['login_required'] == true) {
            this.errorPage();
            return;
          }
          if (res['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
            this._snackBar.open('Invalid', 'Error', {
              duration: 4000,
            });
            return;
          }
          if(this.res_['ProcessVariables']['srDetails']['srType']){
            this.sr_type = this.res_['ProcessVariables']['srDetails']['srType'];
          }else{
            this.errorPage();
            return;
          }
          this.service.srId = res['ProcessVariables']['srId'];
          this.rejectReasonTxt = res['ProcessVariables']['srDetails']['rejectReason'];
          if (this.sr_type == 1008) {
            console.log("in DOB Sr");
            this.old_Dob = this.res_['ProcessVariables']['dobUpdate']['oldDob'] ? this.res_['ProcessVariables']['dobUpdate']['oldDob'] : AlertMessages.NA_BANK_MSG;
            this.new_dob = this.res_['ProcessVariables']['dobUpdate']['newDob'] ? this.res_['ProcessVariables']['dobUpdate']['newDob'] : AlertMessages.NA_BANK_MSG;
          }
          if (this.sr_type == 1006) {
            console.log("in email Sr");
            this.old_email = this.res_['ProcessVariables']['emailUpdate']['maskedOldEmail'] ? this.res_['ProcessVariables']['emailUpdate']['maskedOldEmail'] : AlertMessages.NA_BANK_MSG;
            this.new_email = this.res_['ProcessVariables']['emailUpdate']['newEmail'] ? this.res_['ProcessVariables']['emailUpdate']['newEmail'] : AlertMessages.NA_BANK_MSG;
            if(this.res_['ProcessVariables']['emailUpdate']['oldEmail'] && this.res_['ProcessVariables']['emailUpdate']['newEmail']){
              console.log("in email");
              if(this.res_['ProcessVariables']['emailUpdate']['oldEmail'].toLowerCase() == this.res_['ProcessVariables']['emailUpdate']['newEmail'].toLowerCase()) {
                console.log("in email err true");
                this.isDuplicate = true;
                this.duplicateErrMsg = "New Email ID entered is same as Existing Email ID, Kindly enter different Email ID to proceed.";
              } else {
                console.log("in email err false");
                this.isDuplicate = false;
                this.duplicateErrMsg = "";
              }
            }
          }
          if (this.sr_type == 1007) {
            console.log("in Mobile Sr");
            this.old_mobile_number = this.res_['ProcessVariables']['custDetails']['mobileNumber'] ? this.res_['ProcessVariables']['custDetails']['mobileNumber'] : AlertMessages.NA_BANK_MSG;
            this.new_mobile_number = this.res_['ProcessVariables']['mobileUpdate']['newMobile'] ? this.res_['ProcessVariables']['mobileUpdate']['newMobile'] : AlertMessages.NA_BANK_MSG;
          }
          this.getDropDownOptions(this.sr_type);
        },
        error => {
          this._snackBar.open('Server Error', 'Error', {
            duration: 4000,
          });
          return;
        }
      )
    }
    else {
      this.errorPage();
      return;
    }
  }

  errorMsg() {
    this.tokenStorage.clear();
    this.showStatus = false;
    this.loading = false;
  }

  errorPage() {
    this.router.navigate(['error']);
    this.tokenStorage.clear();
  }

  getDropDownOptions(srtype: any) {
    this.loading = true;
    this.customerService.getOptions(srtype).subscribe(
      res => {
        this.loading = false;
        this.newarayy = res['ProcessVariables']['validDocList'];
        this.validUploadMethods = res['ProcessVariables']['validUploadMethods'];
        for (var i = 0; i < this.newarayy.length; i++) {
          if (!this.newarayy[i].isPrimary) {
            this.docType.push(this.newarayy[i]);
          }
        }

        // For DOB Primary Dropdown
        for (var i = 0; i < this.newarayy.length; i++) {
          if (this.newarayy[i].isPrimary) {
            this.dob_Primary_Doc.push(this.newarayy[i]);
          }
        }
        this.processResopnse();
      }, error => {
        this._snackBar.open('Error in Dropdown list', 'Error', {
          duration: 4000,
        });
        this.loading = false;
        return;
      }
    )
  }

  Onselect_Dob_ImgPrimary(type: any) {
    this.imgURL =  this.imgURL4 = '';
    this.show_DoB_Img = true;
    this.dob_pg_count = type.pageCount;
    this.dob_doc_type = type.docType;
    this.validationOnAccpt();
  }

  Onselect(type: any) {
    this.imgURL2 = this.imgURL3 = '';
    this.showImg = true;
    this.frontImg = this.backImg = '';
    this.otherDocType = type.docType;
    this.pageCount = type.pageCount;
    this.validationOnAccpt();
  }

  alertFoundNoFiles() {
    alert("Umm... this is not supposed to happen!");
  }

  dob_Primary_backImg() {
    if (!this.dob_backimg_Name || !this.img4 || this.dob_pg_count !== 2) {
      this.uploadImg1();
      return;
    }
    this.loading = true;
    this.customerService.uploadImg(this.img4, this.dob_backimg_Name).subscribe(
      res => {
        this.loading = false;
        if (res['login_required'] == true) {
          this.errorPage();
          return;
        }
        this.img_id4 = res['info']['id'];
        this.dob_backimg_Name = res['info']['filename'];
        this.uploadImg1();
      }, error => {
        this.loading = false;
        this._snackBar.open(this.imgError, 'Image Error', {
          duration: 4000,
        });
        return;
      }
    );
  }

  uploadImg1() {
    // 1nd Image
    if (!this.panImgName || !this.img1) {
      this.uploadImg2();
      return;
    }
    this.loading = true;
    this.customerService.uploadImg(this.img1, this.panImgName).subscribe(
      res => {
        this.loading = false;
        if (res['login_required'] == true) {
          this.errorPage();
          return;
        }
        this.img_upload_status = res['ok'];
        this.img_id = res['info']['id'];
        this.panImgName = res['info']['filename'];
        this.uploadImg2();
      }, error => {
        this.loading = false;
        this._snackBar.open(this.imgError, 'Image Error', {
          duration: 4000,
        });
        return;
      }
    );
  }

  uploadImg2() {
    // 2nd Image
    if (!this.frontImg || !this.img2) {
      if (this.pageCount == 1) {
        this.accept();
      } else {
        this.uploadImg3();
        this.fileCount++;
      }
      return;
    }
    this.loading = true;
    this.customerService.uploadImg(this.img2, this.frontImg).subscribe(
      res => {
        this.loading = false;
        if (res['login_required'] == true) {
          this.errorPage();
          return;
        }
        this.img_upload_status2 = res['ok'];
        this.img_id2 = res['info']['id'];
        this.frontImg = res['info']['filename'];
        this.uploadImg3()
      }, error => {
        this.loading = false;
        this._snackBar.open(this.imgError, 'Image Error', {
          duration: 4000,
        });
        return;
      }
    )
  }

  uploadImg3() {
    // 3rd Image
    if (this.pageCount == 2 && !this.backImg || !this.img3) {
      this.accept();
      this.fileCount++;
      return;
    }
    this.loading = true;
    this.customerService.uploadImg(this.img3, this.backImg).subscribe(
      res => {
        this.loading = false;
        if (res['login_required'] == true) {
          this.errorPage();
          return;
        }
        this.backImg_status = res['ok'];
        this.img_id3 = res['info']['id'];
        this.backImg = res['info']['filename'];
        this.accept();
      }, error => {
        this.loading = false;
        this._snackBar.open(this.imgError, 'Image Error', {
          duration: 4000,
        });
        return;
      }
    )
  }

  defaultImgCall() {
    this.loading = this.approved = true;
    this.fileCount = 0;
    this.dob_Primary_backImg();
  }

  backImage_Dob(files: any) {
    if (this.sr_type == 1008 && this.dob_pg_count == 2) {
      var img = files[0];
      const fileType = img['type'];
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png','application/pdf','image/tiff'];
      const tiff_PDF = ['application/pdf','image/tiff'];
      if(tiff_PDF.includes(fileType)){
        this.tiffPdf_dob_BackImg = true;
      }
      else{
        this.tiffPdf_dob_BackImg = false;
      }
      if (!validImageTypes.includes(fileType)) {
        this._snackBar.open('Invalid Image', 'Upload Error', {
          duration: 4000,
        });
        return;
      }
      this.img4 = img;
      this.dob_backimg_Name = img['name']
      var reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL4 = reader.result;
      }
    }
    this.validationOnAccpt()
  }

  frontImage(files: any) {
    var img = files[0];
    const fileType = img['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png','application/pdf','image/tiff'];
    const tiff_PDF = ['application/pdf','image/tiff'];
    if(tiff_PDF.includes(fileType)){
      this.tiffPdf_front = true;
    }
    else{
      this.tiffPdf_front = false;
    }
    if (!validImageTypes.includes(fileType)) {
      this._snackBar.open('Invalid Image', 'Upload Error', {
        duration: 4000,
      });
      return;
    }
    this.img2 = img;
    this.frontImg = img['name']
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL2 = reader.result;
    }
    this.validationOnAccpt()
  }

  backImage(files: any) {
    var img = files[0];
    const fileType = img['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png','application/pdf','image/tiff'];
    const tiff_PDF = ['application/pdf','image/tiff'];
    if(tiff_PDF.includes(fileType)){
      this.tiffPdf_back = true;
    }
    else{
      this.tiffPdf_back = false;
    }
    if (!validImageTypes.includes(fileType)) {
      this._snackBar.open('Invalid Image', 'Upload Error', {
        duration: 4000,
      });
      return;
    }
    this.img3 = img;
    this.backImg = img['name'];
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL3 = reader.result;
    }
    this.validationOnAccpt()
  }

  deafaultImage(files: any) {
    if (files.length === 0)
      return;
    this.img1 = files[0];
    const fileType = this.img1['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png','application/pdf','image/tiff'];
    const tiff_PDF = ['application/pdf','image/tiff'];
    if(tiff_PDF.includes(fileType)){
      this.tiffPdf = true;
    }
    else{
      this.tiffPdf = false;
    }
    if (!validImageTypes.includes(fileType)) {
      this._snackBar.open('Invalid Image', 'Upload Error', {
        duration: 4000,
      });
      return;
    }
    this.panImgName = this.img1['name'];
    var reader = new FileReader();
    console.log("this.panImgName", this.panImgName);
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  getImgPanResponse(doc) {
    this.panImgName = doc['docName']
    this.backImg_status = true;
    this.img_id = doc['docId'];
    this.baseAPIService.getImage(doc['docId']).subscribe(res => {
      let unsafeUrl = URL.createObjectURL(res);
      let finalUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
      this.imgURL = finalUrl;
    }, error => {
      this.loading = false;
      this._snackBar.open(this.imgError, 'Image Error', {
        duration: 4000,
      });
      return;
    })
  }

  getImg2response(doc) {
    this.frontImg = doc['docName']
    this.backImg_status = true;
    this.img_id2 = doc['docId'];
    this.baseAPIService.getImage(doc['docId']).subscribe(res => {
      let unsafeUrl = URL.createObjectURL(res);
      let finalUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
      this.imgURL2 = finalUrl;
    }, error => {
      this.loading = false;
      return;
    })
  }
  getImg3response(doc) {
    this.backImg = doc['docName'];
    this.backImg_status = true;
    this.img_id3 = doc['docId'];
    this.baseAPIService.getImage(doc['docId']).subscribe(res => {
      let unsafeUrl = URL.createObjectURL(res);
      let finalUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
      this.imgURL3 = finalUrl;
    }, error => {
      this.loading = false;
      return;
    })
  }

  getDob_primary_BackImg(doc) {
    this.dob_backimg_Name = doc['docName'];
    this.img_id4 = doc['docId'];
    this.baseAPIService.getImage(doc['docId']).subscribe(res => {
      if (res['login_required'] == true) {
        this.errorPage();
        this.loading = false;
        return;
      }
      let unsafeUrl = URL.createObjectURL(res);
      let finalUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
      this.imgURL4 = finalUrl;
    }, error => {
      this.loading = false;
      return
    })
  }

  processResopnse() {
    let doc = this.res_['ProcessVariables']['docs'] || [];
    for (var i = 0; i < doc.length; i++) {
      if (doc[i].isPrimary && doc[i].isFront) {
        this.getImgPanResponse(doc[i]);
        this.enableBtn = true;
      }
      if (doc[i].isPrimary && this.sr_type == 1008 && doc[i].isFront) {
        this.dob_doc_type = doc[i]['docType'];
        this.show_DoB_Img = true;
      }
      if (doc[i].isPrimary && doc[i].isFront == false && this.sr_type == 1008) {
        this.getDob_primary_BackImg(doc[i]);
        this.enableBtn = true;
      } else {
        this.otherDocType = doc[i].docType;
        this.showImg = true;
        if (doc[i].isFront && doc[i].isPrimary == false) {
          this.getImg2response(doc[i]);
          this.enableBtn = true;
        }
        if (doc[i].isFront == false && doc[i].isPrimary == false) {
          this.getImg3response(doc[i]);
          this.enableBtn = true;
        }
        for (var j = 0; j < this.docType.length; j++) {
          if (this.docType[j]['docType'] == this.otherDocType) {
            this.pageCount = this.docType[j]['pageCount'];
          }
        }
        for (var k = 0; k < this.dob_Primary_Doc.length; k++) {
          if (this.dob_Primary_Doc[k]['docType'] == this.dob_doc_type) {
            this.dob_pg_count = this.dob_Primary_Doc[k]['pageCount'];
          }
        }
      }
    }

    this.res_status = this.res_['ProcessVariables']['response'][0]['statusCode'];
    let cust_details = this.res_['ProcessVariables']['custDetails'];
    let cust_id = cust_details['maskedCustId'];
    let srType = this.res_['ProcessVariables']['srDetails']['srName'];
    let old_pan_number = this.res_['ProcessVariables']['panUpdate']['oldPan'] ? this.res_['ProcessVariables']['panUpdate']['oldPan'] : AlertMessages.NA_BANK_MSG;
    let new_pan_number =  this.res_['ProcessVariables']['panUpdate']['newPan'] ? this.res_['ProcessVariables']['panUpdate']['newPan'] : AlertMessages.NA_BANK_MSG;
    this.panMatchPercentage = parseFloat(this.res_['ProcessVariables']['panUpdate']['matchPer']).toString() ? parseFloat(this.res_['ProcessVariables']['panUpdate']['matchPer']).toString() : parseFloat('0.0');
    this.matchLevel = this.res_['ProcessVariables']['panUpdate']['matchLevel'];

    this.checkSamePAN();
    
    console.log("old pan", this.res_['ProcessVariables']['panUpdate']['oldPan'], "level", this.matchLevel);
    this.responses.push({ 'cust_id': cust_id, 'srType': srType, 'old_pan_number': old_pan_number, 'new_pan_number': new_pan_number });
  }

  //check name match on pan is same or different in NSDL
  checkPanMatchLevel() {
    if(this.matchLevel) {
      if(this.matchLevel.toLowerCase() == 'low') {
        console.log("Level is Low");
        this.callDalog("Dear Customer, name fetched from NSDL is different from what is maintained in the Bank records. Kindly visit the nearest branch with valid identity documents.");
      } else if(this.matchLevel.toLowerCase() == 'medium'){
        console.log("Level is medium");
        this.isDuplicate = false;
        this.duplicateErrMsg = "";
      } else if(this.matchLevel.toLowerCase() == 'high') {
        console.log("Level is High");
        this.enableBtn = true;
        this.isDuplicate = true;
        this.duplicateErrMsg = "";
      }
    }
  }

  // check old PAN & new PAN is same or not
  checkSamePAN(){
    if(this.res_['ProcessVariables']['panUpdate']['oldPan'] && this.res_['ProcessVariables']['panUpdate']['newPan']){
      console.log("in Pan");
      if(this.res_['ProcessVariables']['panUpdate']['oldPan'].toLowerCase() == this.res_['ProcessVariables']['panUpdate']['newPan'].toLowerCase()) {
        console.log("in pan err true");
        this.isDuplicate = true;
        this.duplicateErrMsg = "New PAN entered is same as Existing PAN, Kindly enter different PAN to proceed.";
        this.enableBtn = false;
      } else {
        console.log("in pan err false");
        this.checkPanMatchLevel();
      }
    }
  }

  accept() {
    if (this.fileCount > 1) {
      this.alertFoundNoFiles();
    }
    this.service.accptRejct = this.approved;
    this.apiUniqueKey = new Date().getTime().toString();
    let acceptData = {
      'approved': this.approved,
      'img_id': this.img_id, 
      'panImgName': this.panImgName, 
      'frontImg': this.frontImg, 
      'img_id2': this.img_id2, 
      'otherDocType': this.otherDocType, 
      'backImg': this.backImg, 
      'img_id3': this.img_id3, 
      'dob_pg_count': this.dob_pg_count, 
      'img_id4': this.img_id4, 
      'dob_doc_type': this.dob_doc_type, 
      'dob_backimg_Name': this.dob_backimg_Name, 
      'sr_type': this.sr_type,
      'apiUniqueKey': this.apiUniqueKey
    }
    this.loading = true;
    this.customerService.acceptApi(acceptData)
      .subscribe(
        res => {
          this.loading = false;
          if (res['login_required'] == true) {
            this.errorPage();
            return;
          }
          if (res['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
            this._snackBar.open('Invalid', 'Error', {
              duration: 4000,
            });
            return;
          }
          let Error = res['Error'];
          if (Error == 1) {
            this.errorPage();
            return;
          }
          let accept_status = res['ProcessVariables']['response'][0]['statusCode'];
          if (accept_status === 200) {
            this.tokenStorage.clear();
            this.router.navigate(['result']);
          } else {
            this.errorPage();
            return;
          }
        }, error => {
          this.loading = false;
          this.errorPage();
          this._snackBar.open('Error in Server', 'Error', {
            duration: 4000,
          });
          return;
        }
      )
  }

  reject() {
    this.approved = false;
    this.reasonOptions();
  }

  reasonOptions() {
    this.loading = true;
    this.customerService.rejectOptions().subscribe(res => {
      this.loading = false;
      let Error = res['Error'];
      if (Error == 1) {
        this._snackBar.open('Error in Server', 'Error', {
          duration: 2000,
        });
        return;
      }
      this.Rejectedoptions = res['ProcessVariables']['rejectReasons'];
    }, error => {
      this.loading = false;
      this.errorPage();
      this._snackBar.open('Error in Server', 'Error', {
        duration: 4000,
      });
      return;
    })
  }

  reasonSelect(id: any) {
    this.reasonId = +id;
  }

  // Reject reason after select option than submit 
  submit() {
    this.loading = true;
    this.apiUniqueKey = new Date().getTime().toString();
    this.customerService.reject(this.approved, this.reasonId, this.apiUniqueKey).subscribe(res => {
      this.loading = false;
      if (res['login_required'] == true) {
        this.errorPage();
        return;
      }
      this.service.accptRejct = this.approved;
      let Error = res['Error'];
      if (Error == 1) {
        this._snackBar.open('Error in Server', 'Error', {
          duration: 2000,
        });
        return;
      }
      if (res['ProcessVariables']['apiUniqueReqId'] != this.apiUniqueKey) {
        this._snackBar.open('Invalid', 'Error', {
          duration: 4000,
        });
        return;
      }
      this.router.navigate(['result']);
      this.tokenStorage.clear();
      
    }, error => {
      this.loading = false;
      return;
    })
  }

  cancel() {
    this.approved = true;
    this.reasonId = 0;
  }

  validationOnAccpt() {
    this.enableBtn = false;
    if (this.sr_type == 1005) {
      if (this.pageCount == 1 && this.frontImg) {
        this.enableBtn = true;
      }
      else if (this.pageCount == 2 && this.frontImg && this.backImg) {
        this.enableBtn = true;
      }
      else {
        this.enableBtn = false;
      }
    }

    // srtype 1007 / mobile update
    if (this.sr_type == 1007) {
      if (this.pageCount == 1 && this.frontImg) {
        this.enableBtn = true;
      }
      else if (this.pageCount == 2 && this.frontImg && this.backImg) {
        this.enableBtn = true;
      }
      else {
        this.enableBtn = false;
      }
    }

    // srtype DOB
    if (this.sr_type == 1008 && this.panImgName && this.dob_pg_count == 1) {
      if (this.pageCount == 1 && this.frontImg) {
        this.enableBtn = true;
      }
      else if (this.pageCount == 2 && this.frontImg && this.backImg) {
        this.enableBtn = true;
      }
    }

    if (this.sr_type == 1008 && this.panImgName && this.dob_pg_count == 2 && this.dob_backimg_Name) {
      if (this.pageCount == 1 && this.frontImg) {
        this.enableBtn = true;
      }
      else if (this.pageCount == 2 && this.frontImg && this.backImg) {
        this.enableBtn = true;
      } else {
        this.enableBtn = false
      }
    }

    if (this.sr_type == 1006) {
      if (this.pageCount == 1 && this.frontImg) {
        this.enableBtn = true;
      }
      else if (this.pageCount == 2 && this.frontImg && this.backImg) {
        this.enableBtn = true;
      }
    }
  }

  callDalog(popupMsg){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '350px';
    dialogConfig.panelClass = 'delete-dialog';
    dialogConfig.data = {
      title: 'Alert',
      message: popupMsg
    };

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.router.navigate(['/']);
      }
    });
  }

}
