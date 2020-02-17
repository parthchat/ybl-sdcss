(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/accept-reject/accept-reject.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/accept-reject/accept-reject.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"result\">\n  <h5 class=\"text-center  success\" *ngIf=\"showval==true\">Your service request {{srId}} is created successfully.</h5>\n  <h5 class=\"text-center  fail\" *ngIf=\"showval==false\">Your service request {{srId}} is marked as rejected.</h5>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div class=\"text-center logo\">\n    <img src=\"assets/images/logo.png\">\n  </div> -->\n  <mat-toolbar class=\"logo\">\n    <img src=\"assets/images/logo.png\" title=\"0.17.22v\">\n  </mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/authorization/authorization.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/authorization/authorization.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <br>\n    <div class=\"container\">\n    <mat-toolbar class=\"text-center tool-auth\">Authorization</mat-toolbar><br>\n    <div class=\"row\">\n        <div class=\"col-sm-4 colscard\" *ngFor=\"let options of authroization_options; let i = index\">\n            <mat-card class=\"cards\" (click)=\"authorization(options.id,i,options.mode)\" [class.cards-bg]=\"i == index\">\n                <mat-icon class=\"example-tab-icon\">credit_card</mat-icon>\n                <h6 class=\"text-center\">{{options.mode}}</h6>\n            </mat-card>\n        </div>\n        <!-- <div class=\"col-sm-4 colscard\">\n            <mat-card class=\"cards\">\n                <mat-icon class=\"example-tab-icon\">credit_card</mat-icon>\n                <h6 class=\"text-center\">Debit Card</h6>\n            </mat-card>\n\n        </div>\n        <div class=\"col-sm-4 colscard\">\n            <mat-card class=\"cards\">\n                <mat-icon class=\"example-tab-icon\">computer</mat-icon>\n                <h6 class=\"text-center\">Retail Net Banking</h6>\n            </mat-card>\n        </div>\n        <div class=\"col-sm-4 colscard\">\n            <mat-card class=\"cards\">\n                <mat-icon class=\"example-tab-icon\">textsms</mat-icon>\n                <h6 class=\"text-center\">Mobile OTP</h6>\n            </mat-card>\n\n        </div> -->\n    </div>\n    <br>\n    <div class=\"submit-btn\">\n        <button  mat-raised-button color=\"warn\" class=\"submitBtn\" (click)=\"submit()\">Proceed</button>\n    </div>\n    <h4 class=\"text-center\">You have selected <span class=\"\" style=\"color:lightgray\">{{selected_authorization_name}}</span> option</h4>\n    <!--  -->\n    \n</div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/dialog-box/dialog-box.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/dialog-box/dialog-box.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title class=\"text-center popup-title confirm-popup\">{{modalTitle}}</h1>\n<mat-dialog-content class=\"delete-dialog-content\">\n    <i class=\"material-icons delete-icon\" color=\"red\">notification_important</i>\n    {{message}}\n</mat-dialog-content>\n\n<div class=\"btn-container popup-btn-container\">\n    <button mat-raised-button class=\"action-btn\" [mat-dialog-close]=\"true\"><i class=\"right-icon\"></i>OK</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/not-found/not-found.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/not-found/not-found.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sorry we can't seem to find the page you're looking for. </h1>\n<!-- <p class=\"zoom-area\">How did you get here </p> -->\n<p class=\"zoom-area\">There may be a misspelling in the URL entered, or the page you are looking for may no longer exist. </p>\n<section class=\"error-container\">\n    <span>\n    <span>4</span>\n    </span>\n    <span>0</span>\n    <span>\n    <span>4</span>\n    </span>\n</section>\n<!-- <div class=\"link-container\">\n    <a class=\"more-link\" routerLink=\"/\">Go Home</a>\n</div> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\" *ngIf=\"showStatus\">\n\n  <div class=\"\">\n    <h5 class=\"account-title\">Service Request Details</h5>\n    <div class=\"row example-container\" *ngFor=\"let data of responses\">\n      <div class=\"col-sm-3 cols\">\n        <mat-form-field>\n          <input matInput placeholder=\"Customer ID\" [(ngModel)]=\"data.cust_id\" disabled>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-3 cols\">\n        <mat-form-field>\n          <input matInput placeholder=\"Request Type\" [(ngModel)]=\"data.srType\" disabled>\n        </mat-form-field>\n      </div>\n      <!-- Pan Data -->\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1005\">\n        <mat-form-field>\n          <input matInput placeholder=\"Old PAN Number\" [(ngModel)]=\"data.old_pan_number\" disabled>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1005\">\n        <mat-form-field>\n          <input matInput placeholder=\"New PAN Number\" [(ngModel)]=\"data.new_pan_number\" disabled>\n        </mat-form-field>\n      </div>\n      <!--  -->\n      <!-- Dob data -->\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1008\">\n        <mat-form-field>\n          <input matInput placeholder=\"Old DOB\" [(ngModel)]=\"old_Dob\" disabled>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1008\">\n        <mat-form-field>\n          <input matInput placeholder=\"New DOB\" [(ngModel)]=\"new_dob\" disabled>\n        </mat-form-field>\n      </div>\n      <!-- Email data -->\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1006\">\n        <mat-form-field>\n          <input matInput placeholder=\"Old Email\" [(ngModel)]=\"old_email\" disabled>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1006\">\n        <mat-form-field>\n          <input matInput placeholder=\"New Email\" [(ngModel)]=\"new_email\" disabled>\n        </mat-form-field>\n      </div>\n      <!--Mobile Update  -->\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1007\">\n        <mat-form-field>\n          <input matInput placeholder=\"Old Mobile Number\" [(ngModel)]=\"old_mobile_number\" disabled>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-3 cols\" *ngIf=\"sr_type == 1007\">\n        <mat-form-field>\n          <input matInput placeholder=\"New Mobile Number\" [(ngModel)]=\"new_mobile_number\" disabled>\n        </mat-form-field>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"err-msg\" *ngIf=\"isDuplicate\">\n    <h6>{{ duplicateErrMsg }}</h6>\n  </div>\n\n  <div *ngIf=\"!isDuplicate\">\n    <!-- upload image for PAN -->\n    <!-- <div class=\"upload text-center\" *ngIf=\"sr_type == 1005\">\n      <h6 class=\"text-left pls\">Please upload a picture of New PAN</h6>\n      <label for=\"file-upload\" class=\"custom-file-upload\">\n        <img src=\"assets/images/imgs.png\" class=\"imgs\"> Upload Image\n      </label>\n      <input #file type=\"file\" accept=\"image/x-png,image/jpeg,application/pdf,image/tiff\" id=\"file-upload\" (change)=\"deafaultImage(file.files)\" />\n      <img class=\"images\" [src]=\"imgURL\" height=\"400\" width=\"400\" *ngIf=\"imgURL && !tiffPdf\">\n      <h5 class=\"pdfTiff\" *ngIf=\"panImgName || tiffPdf\">{{panImgName}}</h5>\n    </div> -->\n    <!-- upload image for PAN -->\n\n    <!-- Upload DOB Proof Docs -->\n    <div class=\"upload\" *ngIf=\"sr_type == 1008\">\n      <h6 class=\"other-doc\">Upload DOB Proofs</h6>\n      <mat-form-field class=\"mat-options\">\n        <mat-select [(ngModel)]=\"dob_doc_type\">\n          <mat-option *ngFor=\"let type of dob_Primary_Doc\" (ngModelChange)=\"Onselect_Dob_ImgPrimary(type)\"\n            (click)=\"Onselect_Dob_ImgPrimary(type)\" [value]=\"type.docType\" [disabled]=\"!type.isPrimary\">\n            {{type.docName}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <!-- Doc Upload -->\n      <div class=\"imgdiv text-center\" *ngIf=\"show_DoB_Img\">\n        <!-- front Image -->\n        <label for=\"upload-5\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Front\n          Image</label>\n        <input #file type=\"file\" accept=\"image/x-png,image/jpeg,application/pdf,image/tiff\" id=\"upload-5\" (change)=\"deafaultImage(file.files)\" />\n        <img class=\"images\" [src]=\"imgURL\" height=\"400\" width=\"400\" *ngIf=\"imgURL && !tiffPdf\">\n        <h5 class=\"pdfTiff\" *ngIf=\"panImgName && tiffPdf\">{{panImgName}}</h5>\n        <!-- front Image -->\n\n        <!-- Back Image -->\n        <div class=\"\" *ngIf=\"dob_pg_count==2\">\n          <label for=\"upload-4\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Back\n            Image</label>\n          <input type=\"file\" name=\"pic\" id=\"upload-4\" accept=\"image/x-png,image/jpeg,application/pdf,image/tiff\" (change)=\"backImage_Dob($event.target.files)\">\n          <img class=\"images\" [src]=\"imgURL4\" height=\"400\" width=\"400\" *ngIf=\"imgURL4 && !tiffPdf_dob_BackImg\">\n          <h5 class=\"pdfTiff\" *ngIf=\"dob_backimg_Name && tiffPdf_dob_BackImg\">{{dob_backimg_Name}}</h5>\n        </div>\n        <!-- Back Image -->\n      </div>\n      <!-- Doc Upload -->\n    </div>\n    <!-- Upload DOB Proof Docs -->\n\n    <!-- Common Docs Upload -->\n    <div class=\"upload text-center\" *ngIf=\"sr_type!=1006\">\n      <h6 class=\"other-doc\">Upload Identity Documents</h6>\n      <mat-form-field class=\"mat-options\" >\n        <mat-label>Select Document Type</mat-label>\n        <mat-select [(ngModel)]=\"otherDocType\">\n          <mat-option *ngFor=\"let type of docType\" (ngModelChange)=\"Onselect(type)\" (click)=\"Onselect(type)\"\n            [value]=\"type.docType\" [disabled]=\"type.isPrimary\">\n            {{type.docName}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <!-- Doc Upload -->\n      <div class=\"imgdiv\" *ngIf=\"showImg\">\n        <!-- front Image -->\n        <div *ngIf=\"!mobile\">\n          <label for=\"upload-1\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Browse and Upload Front Side </label>\n          <input type=\"file\" name=\"pic\" id=\"upload-1\" accept=\".pdf, .png, .jpeg, .jpg, .jpe, .jfif, .gif, .bmp\" (change)=\"frontImage($event.target.files)\">\n        </div>\n\n        <div class=\"row\" *ngIf=\"mobile\">\n          <div class=\"col-sm-5\">\n            <label for=\"upload-2\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Browse and Upload Front Side </label>\n            <input type=\"file\" name=\"pic\" id=\"upload-2\" accept=\".pdf, .png, .jpeg, .jpg, .jpe, .jfif, .gif, .bmp\" (change)=\"frontImage($event.target.files)\">\n          </div>\n          <div class=\"col-sm-2\">\n            <h6 class=\"font-size\"> OR </h6> \n          </div>\n          <div class=\"col-sm-5\">\n            <label for=\"upload-3\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Capture and Attach Front Side </label>\n            <input type=\"file\" name=\"pic\" id=\"upload-3\" accept=\"image/*\" (change)=\"frontImage($event.target.files)\" capture=\"camera\">\n          </div>\n        </div>\n        <!-- Show thumbnail img -- FRONT -->\n        <!-- <img class=\"images\" [src]=\"imgURL2\" height=\"400\" width=\"400\" *ngIf=\"imgURL2 && !tiffPdf_front\"> -->\n        <img class=\"images\" [src]=\"imgURL2\" (load)=\"onImageLoaded($event, 1)\" height=\"400\" width=\"400\" (error)=\"onError($event, 1)\" *ngIf=\"imgURL2 && !pdf1\">\n        <div *ngIf=\"pdf1 && frontImg\" class=\"thumbnail\" (click)=\"openPdf(pdfUrl_Front)\">\n        <pdf-viewer\n          [src]=\"pdfUrl_Front\"\n          [page]=\"page\"\n          [original-size]=\"false\"\n          style=\"display: block;\"\n          (error)=\"onError($event, 1)\"\n          ></pdf-viewer>\n      </div>\n      <h5 class=\"pdfTiff\" *ngIf=\"frontImg || tiffPdf_front\">{{frontImg}}</h5>\n        <div class=\"div-progress\" *ngIf=\"frontImg_ProgressBar\">\n          <div class=\"container progress\">\n            <div class=\"progress-bar progress-bar-striped\" [ngStyle]=\"{'width':progressPer+'%'}\">{{progressPer}}%</div>\n          </div>\n        </div>\n        <!-- front Image -->\n\n        <!-- Back Image -->\n        <div class=\"\" *ngIf=\"pageCount==2\">\n          <div *ngIf=\"!mobile\">\n            <label for=\"upload-4\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Browse and Upload Back Side </label>\n            <input type=\"file\" name=\"pic\" id=\"upload-4\" accept=\".pdf, .png, .jpeg, .jpg, .jpe, .jfif, .gif, .bmp\" (change)=\"backImage($event.target.files)\">\n          </div>\n\n          <div class=\"row\" *ngIf=\"mobile\">\n            <div class=\"col-sm-5\">\n              <label for=\"upload-5\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Browse and Upload Back Side </label>\n              <input type=\"file\" name=\"pic\" id=\"upload-5\" accept=\"image/x-png,image/jpeg,application/pdf,image/tiff\" (change)=\"backImage($event.target.files)\">\n            </div>\n            <div class=\"col-sm-2\">\n              <h6 class=\"font-size\"> OR </h6> \n            </div>\n            <div class=\"col-sm-5\">\n              <label for=\"upload-6\" class=\"custom-file-upload\"><img src=\"assets/images/imgs.png\" class=\"imgs\"> Capture and Attach Back Side </label>\n              <input type=\"file\" name=\"pic\" id=\"upload-6\" accept=\"image/*\" (change)=\"backImage($event.target.files)\" capture=\"camera\">\n            </div>\n          </div>\n          <!-- Show thumbnail img -- BACK -->\n          <!-- <img class=\"images\" [src]=\"imgURL3\" height=\"400\" width=\"400\" *ngIf=\"imgURL3 && !tiffPdf_back\"> -->\n          <img class=\"images\" [src]=\"imgURL3\" height=\"400\" width=\"400\" (load)=\"onImageLoaded($event, 2)\" (error)=\"onError($event, 2)\" *ngIf=\"imgURL3 && !pdf2\">\n          <div *ngIf=\"pdf2 && backImg\" class=\"thumbnail\" (click)=\"openPdf(pdfUrl_Back)\">\n            <pdf-viewer\n              [src]=\"pdfUrl_Back\"\n              [page]=\"page\"\n              [original-size]=\"false\"\n              style=\"display: block;\"\n              (error)=\"onError($event, 2)\"\n              ></pdf-viewer>\n              </div>\n          <h5 class=\"pdfTiff\" *ngIf=\"backImg || tiffPdf_back\">{{backImg}}</h5>\n          <div class=\"div-progress\" *ngIf=\"backImg_progressBar\">\n            <div class=\"container progress\">\n              <div class=\"progress-bar progress-bar-striped\" [ngStyle]=\"{'width':progressPer+'%'}\">{{progressPer}}%</div>\n            </div>\n          </div>\n        </div>\n        <!-- Back Image -->\n      </div>\n      <!-- Doc Upload -->\n    </div>\n    <!-- Common Docs Upload -->\n  </div>\n\n  <!-- reason reject dropdown -->\n  <div class=\"drpreason text-center\">\n    <mat-form-field *ngIf=\"approved===false\" class=\"reass\">\n      <mat-label>Select Reason</mat-label>\n      <mat-select>\n        <mat-option *ngFor=\"let data of Rejectedoptions\" [value]=\"data.reason\" (click)=\"reasonSelect(data.id)\">\n          {{data.reason}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <!-- reason reject dropdown -->\n\n  <!-- submit reason reject or cancel reason reject -->\n  <div class=\"text-center\" *ngIf=\"approved===false\">\n    <button mat-raised-button color=\"primary\" class=\"cancelSubmit\" (click)=\"submit()\"\n      [disabled]=\"!reasonId\">Submit</button>\n    <button mat-raised-button color=\"primary\" class=\"cancelSubmit\" (click)=\"cancel()\">Cancel</button>\n  </div>\n  <!-- submit reason reject or cancel reason reject -->\n\n  <!-- Show Rejected Reason -->\n  <h5 class=\"rejectedreason\" *ngIf=\"rejectReasonTxt\"><span class=\"rejectTXt\" style=\"font-weight: bolder\">Reject reason</span>: {{rejectReasonTxt}}</h5>\n  <!-- Show Rejected Reason -->\n  \n  <!-- Accept/ Reject Button -->\n  <div class=\"grp-btn col text-center\" *ngIf=\"approved==true\">\n    <button mat-raised-button color=\"primary\" class=\"btns accept\" (click)=\"defaultImgCall()\"\n      [disabled]=\"enableBtn==false\">Accept</button>\n    <button mat-raised-button color=\"warn\" class=\"btns\" (click)=\"reject()\">Reject</button>\n  </div>\n  <!-- Accept/ Reject Button -->\n\n  <!-- Loader -->\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n  </ngx-loading>\n  <!-- Loader -->\n\n</mat-card>\n\n<!-- Error Message -->\n<div class=\"d-flex\" *ngIf=\"!showStatus\">\n  <h5 class=\"error text-center\">{{errorTxtmsg}}</h5>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/emailverify/emailverify.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/emailverify/emailverify.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p  [(ngModel)]=\"check\">{{online | async}}</p> -->\n<div class=\"d-flex\" *ngIf=\"Showstatus\">\n  <h5 class=\"error-true text-center\">Email validated</h5>\n</div>\n<div class=\"d-flex\" *ngIf=\"emailResult\">\n  <h5 class=\"error text-center\">Email Validation Fail</h5>\n</div>\n<div class=\"d-flex\" *ngIf=\"error=='401'\">\n  <h5 class=\"error text-center\">Invalid link. Either the link has already been used or session expired</h5>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/errorpage/errorpage.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/errorpage/errorpage.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\">\n    <h5 class=\"error text-center\">\n        <!-- <p>Invalid link. Either the link has already been used or session expired</p> -->\n        <h3> You cannot access this page. Possible reasons :</h3>\n        <div class=\"d-flex-c\">\n            <ul class=\"text-left\">\n                <li>Session expired.</li>\n                <li>Invalid link.</li>\n                <li>Link already used.</li>\n                <li>Invalid username or password.</li>\n            </ul>\n        </div>\n    </h5>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mobile-verify/mobile-verify.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mobile-verify/mobile-verify.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-section align-items-center\" *ngIf=\"!successMsg\">\n  <div class=\"login-page-inner\">\n    <div class=\"row justify-content-md-center\">\n      <div class=\"col-12 text-center logo-image\"><img src=\"assets/images/logo.png\"></div>\n      <mat-card class=\"col-12 form-card\">\n        <mat-card-content>\n          <form [formGroup]=\"otpLoginForm\">\n          <div class=\"form-container\">\n            <mat-form-field>\n                <mat-icon matPrefix class=\"login-icon\"></mat-icon>\n                <input matInput (input)=\"inputValidator($event)\" placeholder=\"Enter OTP here\"\n                    pattern=\"\\d*\" maxlength=\"6\" formControlName=\"mobileOTP\" type=\"text\" required>\n                <mat-error class=\"left-space\">{{getMobileOTPErrorMessage()}}</mat-error>\n            </mat-form-field>\n          </div>\n          </form>\n        </mat-card-content>\n      </mat-card>\n\n    </div>\n    <p class=\"copyright-text\">\n      Copyright © 2019-2020 YES BANK. All Rights Reserved.\n    </p>\n  </div>\n</div>\n\n\n<!-- Error Message -->\n<div class=\"d-flex\" *ngIf=\"error=='401'\">\n  <h5 class=\"error text-center\">Invalid link. Either the link has already been used or session expired</h5>\n</div>\n<div class=\"d-flex\" *ngIf=\"successMsg\">\n  <h5 class=\"error-true text-center\">Mobile Verified Successfully</h5>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/otp-page/otp-page.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/otp-page/otp-page.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- *ngIf=\"Showstatus\" -->\n<div class=\"form-section align-items-center\" *ngIf=\"Showstatus\">\n    <div class=\"login-page-inner\">\n        <div class=\"row justify-content-md-center\">\n            <div class=\"col-12 text-center logo-image\"><img src=\"assets/images/logo.png\"></div>\n            <mat-card class=\"col-12 form-card\">\n                <mat-card-content>\n                    <div class=\"form-container\">\n                        <mat-form-field *ngIf=\"!mobileRoute\">\n                            <input matInput placeholder=\"Enter your OTP here\" [(ngModel)]=\"otp\"\n                                (keypress)=\"keyPress($event)\" (keyup.enter)=\"submitOtp()\" minlength=6 maxlength=6 autsfocus>\n                            <mat-hint class=\"red\" *ngIf=\"errorstatus\">Invalid OTP</mat-hint>\n                            <mat-hint align=\"end\" class=\"resend\" (click)=\"resendOtp()\">Resend OTP</mat-hint>\n                        </mat-form-field>\n                        <!--  -->\n                        <mat-form-field *ngIf=\"mobileRoute\">\n                            <input matInput placeholder=\"Enter Last 6 Digits Of Mobile Number\" [(ngModel)]=\"otp\"\n                                (keypress)=\"keyPress($event)\" (keyup.enter)=\"submitOtp()\" minlength=6 maxlength=6 autsfocus>\n                            <mat-hint class=\"red\" *ngIf=\"errorstatus\">Invalid Number</mat-hint>\n                        </mat-form-field>\n                        <!-- <span class=\"red\" *ngIf=\"errorstatus\">Invalid OTP</span> -->\n                        <div class=\"button-row text-right form-btn\">\n                            <button mat-raised-button color=\"warn\" class=\"text-uppercase\" (click)=\"submitOtp()\"><span\n                                    *ngIf=\"!mobileRoute\">Enter</span><span *ngIf=\"mobileRoute\">Verify</span></button>\n                        </div>\n                    </div>\n                </mat-card-content>\n            </mat-card>\n\n        </div>\n        <p class=\"copyright-text\">\n            Copyright © 2019-2020 YES BANK. All Rights Reserved.\n        </p>\n    </div>\n</div>\n\n\n<!-- Error Message -->\n<div class=\"d-flex\" *ngIf=\"error=='401'\">\n    <h5 class=\"error text-center\">Invalid link. Either the link has already been used or session expired</h5>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stepper/aadhar-card/aadhar-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stepper/aadhar-card/aadhar-card.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"flex form-section\">\n        <mat-card class=\"example-card text-center\">\n            <div class=\"\" *ngIf=\"hide\">\n                <form [formGroup]=\"formAadhar\" (ngSubmit)=\"onSubmit()\">\n                    <mat-form-field appearance=\"outline\" class=\"input_aadhar\" style=\"width:100%\">\n                        <mat-label>Enter 12 digit Aadhar number</mat-label>\n                        <input matInput placeholder=\"\" formControlName=\"aadhar\" maxlength=\"12\" minlength=\"12\">\n                        <mat-icon matSuffix>perm_identity</mat-icon>\n                        <!-- <mat-hint>Hint</mat-hint> -->\n                    </mat-form-field><br>\n                    <button mat-raised-button class=\"\" (click)=\"onSubmit()\" color=\"warn\"\n                        [disabled]=\"!this.formAadhar.valid\">Submit</button>\n                        </form>\n            </div>\n    \n            <div class=\"\" *ngIf=\"!hide\">\n                    <form [formGroup]=\"otpForm\">\n                            <mat-form-field appearance=\"outline\" class=\"input_aadhar\" style=\"width:100%\">\n                                    <mat-label>Enter 6 digit OTP number</mat-label>    \n                                <input (input)=\"getOTP()\" matInput maxlength=\"6\" minlength=\"6\"\n                                            placeholder=\"Enter Your 6 digit OTP\" formControlName=\"otp\">\n                                            <mat-icon matSuffix>textsms</mat-icon>\n                                    <mat-hint align=\"end\">{{otpForm.value.otp.length || 0}}/6</mat-hint>\n                            </mat-form-field>\n                    </form>\n            </div>\n        </mat-card>\n    </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stepper/credit-card/credit-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stepper/credit-card/credit-card.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-section\">\n    <div class=\"login-page-inner\">\n        <div class=\"row justify-content-md-center\">\n            <mat-card class=\"col-12 form-card\">\n                <mat-card-content>\n                    <form [formGroup]=\"ccLoginForm\">\n                        <div class=\"form-container\">\n                            <mat-form-field>\n                                <mat-icon matPrefix>credit_card</mat-icon>\n                                <input matInput placeholder=\"Enter Credit Card No.\" maxlength=\"16\"\n                                    minlength=\"16\" formControlName=\"creditCard_no\">\n                                <!-- <mat-error class=\"left-space\">{{getDCLoginErrorMessage()}}</mat-error> -->\n                            </mat-form-field>\n                            <mat-form-field>\n                                <input formControlName=\"dob\" matInput [matDatepicker]=\"picker\"\n                                    placeholder=\"Date Of Birth\" formControlName=\"dob\" [min]=\"minDate\" [max]=\"maxDate\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker></mat-datepicker>\n                            </mat-form-field>\n                            <!--  -->\n                            <table class=\"example-full-width\" cellspacing=\"0\">\n                                <tr>\n                                    <td>\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"Month\" maxlength=\"2\" formControlName=\"expiry_month\">\n                                        </mat-form-field>\n                                    </td>\n                                    <td>\n                                        <mat-form-field class=\"example-full-width\">\n                                            <input matInput placeholder=\"Year\" maxlength=\"4\" formControlName=\"expiry_year\">\n                                        </mat-form-field>\n                                    </td>\n                                </tr>\n                            </table>\n                            <div class=\"button-row text-right form-btn\">\n                                <button mat-raised-button color=\"warn\" class=\"auth\"\n                                    (click)=\"auth()\" [disabled]=\"!ccLoginForm.valid\">Authenticate</button>\n                            </div>\n                        </div>\n\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stepper/debit-card/debit-card.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stepper/debit-card/debit-card.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page form-section align-items-center d-flex\">\n    <div class=\"login-page-inner\">\n        <div class=\"row justify-content-md-center\">\n            <mat-card class=\"col-12 form-card\">\n                <mat-card-content>\n                    <form [formGroup]=\"dcLoginForm\" (ngSubmit)=\"dcLoginForm.valid && dcLogin()\" autocomplete=\"off\">\n                        <div class=\"form-container\">\n                            <mat-form-field>\n                                <mat-icon matPrefix>credit_card</mat-icon>\n                                <input matInput (input)=\"inputValidator($event)\" placeholder=\"Enter Debit Card No.\"\n                                    pattern=\"\\d*\" maxlength=\"16\" minlength=\"16\" formControlName=\"cardNumber\" type=\"text\" required>\n                                <mat-error class=\"left-space\">{{getDCLoginErrorMessage()}}</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field>\n                                <mat-icon matPrefix>vpn_key</mat-icon>\n                                <input matInput (input)=\"inputValidator($event)\" maxlength=\"4\" minlength=\"4\" class=\"password\" placeholder=\"Transaction PIN\" formControlName=\"transPIN\" [type]=\"hide ? 'password' : 'text'\" required>\n                                <mat-icon style=\"cursor: pointer;\" matSuffix class=\"password--show-icon\" (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                <mat-error class=\"left-space\">{{getDCLoginPINErrorMessage()}}</mat-error>\n                            </mat-form-field>\n                            <div class=\"button-row text-right form-btn\">\n                                <button mat-raised-button color=\"warn\" [disabled]=\"!dcLoginForm.valid\" class=\"text-uppercase\">Login</button>\n                            </div>\n                        </div>\n\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>\n    \n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stepper/otp-login/otp-login.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stepper/otp-login/otp-login.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page form-section align-items-center d-flex\">\n    <div class=\"login-page-inner\">\n        <div class=\"row justify-content-md-center\">\n            <mat-card class=\"col-12 form-card\">\n                <mat-card-content>\n                    <form [formGroup]=\"otpLoginForm\">\n                        <div class=\"form-container\">\n                            <mat-form-field>\n                                <mat-icon matPrefix class=\"login-icon\"></mat-icon>\n                                <input matInput (input)=\"inputValidator($event)\" placeholder=\"Enter OTP here\"\n                                    pattern=\"\\d*\" maxlength=\"6\" formControlName=\"mobileOTP\" type=\"text\" required>\n                                <mat-error class=\"left-space\">{{getMobileOTPErrorMessage()}}</mat-error>\n                            </mat-form-field>\n                        </div>\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>\n\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stepper/retail-net-banking/retail-net-banking.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stepper/retail-net-banking/retail-net-banking.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page form-section align-items-center d-flex\">\n    <div class=\"login-page-inner\">\n        <div class=\"row justify-content-md-center\">\n            <mat-card class=\"col-12 form-card\">\n                <mat-card-content>\n                    <form [formGroup]=\"rnbLoginForm\" (ngSubmit)=\"rnbLoginForm.valid && rnbLogin()\" autocomplete=\"off\">\n                        <div class=\"form-container\">\n                            <mat-form-field>\n                                <mat-icon matPrefix class=\"login-icon\"></mat-icon>\n                                <!-- <span matPrefix>{{preFixval}}</span> -->\n                                <!-- <input matInput maxlength=\"20\" minlength=\"7\" placeholder=\"Enter Customer ID\" formControlName=\"custId\" type=\"text\" required> -->\n\n                                <input matInput (input)=\"inputValidator($event)\" placeholder=\"Enter Login ID\"\n                                    pattern=\"\\d*\" maxlength=\"20\" minlength=\"7\" formControlName=\"custId\" type=\"text\"\n                                    required>\n                                <mat-error class=\"left-space\">{{ getCustIdErrorMessage() }}</mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field *ngIf=\"isShowPasswordField\">\n                                <mat-icon matPrefix class=\"password-icon\"></mat-icon>\n                                <input matInput maxlength=\"14\" minlength=\"10\" class=\"password\" placeholder=\"Password\"\n                                    formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\n                                <mat-icon style=\"cursor: pointer;\" matSuffix class=\"password--show-icon\"\n                                    (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                                <mat-error class=\"left-space\">{{ getPasswordErrorMessage() }}</mat-error>\n                            </mat-form-field>\n                            <div class=\"button-row text-right form-btn\" *ngIf=\"isLoginButton\">\n                                <button mat-raised-button color=\"warn\" [disabled]=\"!rnbLoginForm.valid\"\n                                    class=\"text-uppercase\">Login</button>\n                            </div>\n                            <div class=\"button-row text-right form-btn\" *ngIf=\"isNextButton\">\n                                <button mat-raised-button color=\"warn\" (click)=\"showPassField()\"\n                                    [disabled]=\"rnbLoginForm.get('custId').invalid\" class=\"text-uppercase\">Next</button>\n                            </div>\n                        </div>\n\n                    </form>\n                </mat-card-content>\n            </mat-card>\n        </div>\n    </div>\n</div>\n\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stepper/stepper.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stepper/stepper.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n    <div class=\"main-page-container  t-0\">\n        <div *ngIf=\"arrLoginType\" class=\"heading\">\n            <h3>Please select option for login</h3>\n        </div>\n        <div class=\"flex\">\n            <div class=\"row col-12 container\">\n                <div class=\"col-sm-4 colscard\" *ngFor=\"let type of arrLoginType;\" (click)=\"selected(type.id)\">\n                    <div *ngIf=\"type.id==1\">\n                        <mat-card class=\"cards\" [class.cards-bg]=\"index == 1\">\n                            <mat-icon class=\"example-tab-icon\">computer</mat-icon>\n                            <h6 class=\"text-center\">Retail Net Banking</h6>\n                        </mat-card>\n                    </div>\n                    <div *ngIf=\"type.id==2\">\n                        <mat-card class=\"cards\" [class.cards-bg]=\"index == 2\">\n                            <mat-icon class=\"example-tab-icon\">credit_card</mat-icon>\n                            <h6 class=\"text-center\">Debit Card</h6>\n                        </mat-card>\n                    </div>\n                    <div *ngIf=\"type.id==3\">\n                        <mat-card class=\"cards\" [class.cards-bg]=\"index == 3\">\n                            <mat-icon class=\"example-tab-icon\">textsms</mat-icon>\n                            <h6 class=\"text-center\">OTP</h6>\n                        </mat-card>\n                    </div>\n                    <div *ngIf=\"type.id==4\">\n                        <mat-card class=\"cards\" [class.cards-bg]=\"index == 4\">\n                            <mat-icon class=\"example-tab-icon\">credit_card</mat-icon>\n                            <h6 class=\"text-center\">Credit Card</h6>\n                        </mat-card>\n                    </div>\n\n                    <!-- Aadhar -->\n                    <div *ngIf=\"type.id==5\">\n                        <mat-card class=\"cards\" [class.cards-bg]=\"index == 5\">\n                            <mat-icon class=\"example-tab-icon\">perm_identity</mat-icon>\n                            <h6 class=\"text-center\">Aadhar Card</h6>\n                        </mat-card>\n                    </div>\n                    <!--  -->\n                    <!-- Email OTP -->\n                    <div *ngIf=\"type.id==6\">\n                        <mat-card class=\"cards\" [class.cards-bg]=\"index == 6\">\n                            <mat-icon class=\"example-tab-icon\">textsms</mat-icon>\n                            <h6 class=\"text-center\">Email OTP</h6>\n                        </mat-card>\n                    </div>\n                    <!--  -->\n                </div>\n            </div>\n            <div *ngIf=\"isShowSubmitBtn\" class=\"alert-msg\">\n                <h5 class=\"select-txt\">Proceed with <b class=\"bolds\">{{ selectedOption }}</b> Authorization </h5>\n            </div>\n            <div *ngIf=\"isCommingSoonMsg\" class=\"alert-msg\">\n                <h5 class=\"select-txt\">This feature will be coming soon.</h5>\n            </div>\n            <div *ngIf=\"isShowSubmitBtn\" class=\"submit-btn\">\n                <button mat-raised-button color=\"warn\" class=\"submitBtn\" (click)=\"submit()\">Next</button>\n            </div>\n        </div>\n        <div class=\"copyright-text text-center\">\n            Copyright © {{copyrightYear}} YES BANK. All Rights Reserved.\n        </div>\n    </div>\n</div>\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/under-construction/under-construction.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/under-construction/under-construction.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex\">\n    <h3 class=\"text-center title-txt\">\n        This feature will be coming soon.\n    </h3>\n    </div>"

/***/ }),

/***/ "./src/app/accept-reject/accept-reject.component.css":
/*!***********************************************************!*\
  !*** ./src/app/accept-reject/accept-reject.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result{\n height: calc(100vh - 64px);\n display: flex;\n align-items: baseline;\n justify-content: center;  \n background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9); \n}\n.success{\n    color: green;\n    margin-top: 190px;\n}\n.fail{\n    color: red;\n    margin-top: 190px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjZXB0LXJlamVjdC9hY2NlcHQtcmVqZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsZ0ZBQWdGO0FBQ2pGO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYWNjZXB0LXJlamVjdC9hY2NlcHQtcmVqZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzdWx0e1xuIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuIGRpc3BsYXk6IGZsZXg7XG4gYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXG4gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzBkNWE5NiwgIzRlN2ZhZSwgIzgwYTVjNywgI2IzY2NkZiwgI2VhZjNmOSk7IFxufVxuLnN1Y2Nlc3N7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIG1hcmdpbi10b3A6IDE5MHB4O1xufVxuLmZhaWx7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tdG9wOiAxOTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/accept-reject/accept-reject.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/accept-reject/accept-reject.component.ts ***!
  \**********************************************************/
/*! exports provided: AcceptRejectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptRejectComponent", function() { return AcceptRejectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AcceptRejectComponent = /** @class */ (function () {
    function AcceptRejectComponent(router, service, route) {
        this.router = router;
        this.service = service;
        this.route = route;
        this.srId = this.service.srId;
    }
    AcceptRejectComponent.prototype.ngOnInit = function () {
        if (this.service.accptRejct) {
            this.showval = true;
            return;
        }
        if (this.service.accptRejct === false) {
            this.showval = false;
            return;
        }
        else {
            this.router.navigate(['404']);
        }
    };
    AcceptRejectComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    AcceptRejectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accept-reject',
            template: __webpack_require__(/*! raw-loader!./accept-reject.component.html */ "./node_modules/raw-loader/index.js!./src/app/accept-reject/accept-reject.component.html"),
            styles: [__webpack_require__(/*! ./accept-reject.component.css */ "./src/app/accept-reject/accept-reject.component.css")]
        })
    ], AcceptRejectComponent);
    return AcceptRejectComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _otp_page_otp_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp-page/otp-page.component */ "./src/app/otp-page/otp-page.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _accept_reject_accept_reject_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accept-reject/accept-reject.component */ "./src/app/accept-reject/accept-reject.component.ts");
/* harmony import */ var _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emailverify/emailverify.component */ "./src/app/emailverify/emailverify.component.ts");
/* harmony import */ var _mobile_verify_mobile_verify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile-verify/mobile-verify.component */ "./src/app/mobile-verify/mobile-verify.component.ts");
/* harmony import */ var _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/stepper/stepper.component.ts");
/* harmony import */ var _stepper_retail_net_banking_retail_net_banking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stepper/retail-net-banking/retail-net-banking.component */ "./src/app/stepper/retail-net-banking/retail-net-banking.component.ts");
/* harmony import */ var _stepper_debit_card_debit_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stepper/debit-card/debit-card.component */ "./src/app/stepper/debit-card/debit-card.component.ts");
/* harmony import */ var _stepper_otp_login_otp_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./stepper/otp-login/otp-login.component */ "./src/app/stepper/otp-login/otp-login.component.ts");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./authorization/authorization.component */ "./src/app/authorization/authorization.component.ts");
/* harmony import */ var _stepper_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./stepper/credit-card/credit-card.component */ "./src/app/stepper/credit-card/credit-card.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth-guard/auth.guard */ "./src/app/auth-guard/auth.guard.ts");


















var routes = [
    // { path: '', component: OtpPageComponent },   // OLD
    { path: '', component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_10__["StepperComponent"] },
    { path: 't', component: _otp_page_otp_page_component__WEBPACK_IMPORTED_MODULE_3__["OtpPageComponent"] },
    { path: 'rnbLogin', component: _stepper_retail_net_banking_retail_net_banking_component__WEBPACK_IMPORTED_MODULE_11__["RetailNetBankingComponent"], canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'dcLogin', component: _stepper_debit_card_debit_card_component__WEBPACK_IMPORTED_MODULE_12__["DebitCardComponent"], canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'otpLogin', component: _stepper_otp_login_otp_login_component__WEBPACK_IMPORTED_MODULE_13__["OtpLoginComponent"] },
    { path: 'credit_card', component: _stepper_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_15__["CreditCardComponent"], canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerComponent"], canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: '404', component: _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] },
    { path: 'result', component: _accept_reject_accept_reject_component__WEBPACK_IMPORTED_MODULE_5__["AcceptRejectComponent"] },
    { path: 'emailverify', component: _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_6__["EmailverifyComponent"] },
    { path: 'error', component: _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_9__["ErrorpageComponent"] },
    { path: 'mobileverify', component: _mobile_verify_mobile_verify_component__WEBPACK_IMPORTED_MODULE_7__["MobileVerifyComponent"], canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'confirm-request', component: _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_14__["AuthorizationComponent"], canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'under_construction', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_16__["UnderConstructionComponent"] },
    { path: '**', redirectTo: '404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\n    display: flex;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(location, commonFunctions) {
        var _this = this;
        this.location = location;
        this.commonFunctions = commonFunctions;
        this.title = 'my-app';
        this.isLocationChanged = false;
        this.userInactive = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // check if back or forward button is pressed.
        this.location.onPopState(function () {
            // set isBackButtonClicked to true.
            _this.isLocationChanged = true;
            _this.setError();
            return false;
        });
    }
    AppComponent.prototype.setError = function () {
        var _this = this;
        if (this.isLocationChanged) {
            setTimeout(function () { return _this.commonFunctions.showErrorPage(); });
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"] },
        { type: _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_3__["CommonFunctions"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: Constants, APIConstants, AlertMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIConstants", function() { return APIConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessages", function() { return AlertMessages; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.BLANK = '';
    Constants.USER_INFO = 'iuo';
    Constants.DBOARD_TYPE = 'dboardType';
    Constants.ACCESS_TOKEN = 'ian';
    Constants.BEARER_TOKEN = 'ibn';
    Constants.RETURN_URL = 'rul';
    Constants.ROUTES = 'rts';
    Constants.SESSION_ID = 'ssid';
    Constants.SR_ID = "srid";
    Constants.PROJECT_ID = 'ff0ae4a6884711e9b16676fb2f2488b6';
    Constants.PARAM_DATA = 'prms';
    Constants.InterceptorSkipHeader = 'X-Skip-Interceptor';
    Constants.VALIDATION_ALPHANUMERIC = /^[a-zA-Z0-9]+$/; //!~{}|[]^_;:?()*,-.=@#$
    Constants.VALIDATION_PASSWORD = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!~^_;:,-.=*#?|])[A-Za-z\\d@$!~^_;:,-.=*#?|]{1,}$";
    return Constants;
}());

var APIConstants;
(function (APIConstants) {
    var Auth_init_otp;
    (function (Auth_init_otp) {
        Auth_init_otp["PROCESS_ID"] = "5166f5ee89d511e9b12c2eca4ea5bb5f";
        Auth_init_otp["WORKFLOW_ID"] = "90dc3ec288f511e9b12c2eca4ea5bb5f";
    })(Auth_init_otp = APIConstants.Auth_init_otp || (APIConstants.Auth_init_otp = {}));
    var Auth_reinit_otp;
    (function (Auth_reinit_otp) {
        Auth_reinit_otp["PROCESS_ID"] = "e2fc2278ad3311e9b432da7aa4ddfb2b";
        Auth_reinit_otp["WORKFLOW_ID"] = "90dc3ec288f511e9b12c2eca4ea5bb5f";
    })(Auth_reinit_otp = APIConstants.Auth_reinit_otp || (APIConstants.Auth_reinit_otp = {}));
    var Auth_valid_otp;
    (function (Auth_valid_otp) {
        Auth_valid_otp["PROCESS_ID"] = "aa58b77089d811e9b12c2eca4ea5bb5f";
        Auth_valid_otp["WORKFLOW_ID"] = "90dc3ec288f511e9b12c2eca4ea5bb5f";
    })(Auth_valid_otp = APIConstants.Auth_valid_otp || (APIConstants.Auth_valid_otp = {}));
    var Details;
    (function (Details) {
        Details["WORKFLOW_ID"] = "06b4889a8b4711e9b12c2eca4ea5bb5f";
        Details["PROCESS_ID"] = "06d837a48b4711e9b12c2eca4ea5bb5f";
    })(Details = APIConstants.Details || (APIConstants.Details = {}));
    var SrType;
    (function (SrType) {
        SrType["WORKFLOW_ID"] = "a9e581be8ea711e9bc050221a44a8414";
        SrType["PROCESS_ID"] = "d2f10a428ea711e9bc050221a44a8414";
    })(SrType = APIConstants.SrType || (APIConstants.SrType = {}));
    var Accept;
    (function (Accept) {
        Accept["WORKFLOW_ID"] = "0de4c8e68ce111e99cd6ba3d751df4e5";
        Accept["PROCESS_ID"] = "1940052a8ce111e99cd6ba3d751df4e5";
    })(Accept = APIConstants.Accept || (APIConstants.Accept = {}));
    var Reject;
    (function (Reject) {
        Reject["WORKFLOW_ID"] = "9736f64a90ca11e9bc050221a44a8414";
        Reject["PROCESS_ID"] = "ae78876a90ca11e9bc050221a44a8414";
    })(Reject = APIConstants.Reject || (APIConstants.Reject = {}));
    var validate_logins;
    (function (validate_logins) {
        validate_logins["PROCESS_ID"] = "aa58b77089d811e9b12c2eca4ea5bb5f";
        validate_logins["WORKFLOW_ID"] = "90dc3ec288f511e9b12c2eca4ea5bb5f";
    })(validate_logins = APIConstants.validate_logins || (APIConstants.validate_logins = {}));
    // taken from ccsp
    var re_init;
    (function (re_init) {
        re_init["PROCESS_ID"] = "e2fc2278ad3311e9b432da7aa4ddfb2b";
        re_init["WORKFLOW_ID"] = "90dc3ec288f511e9b12c2eca4ea5bb5f";
    })(re_init = APIConstants.re_init || (APIConstants.re_init = {}));
    var Auth_init_email;
    (function (Auth_init_email) {
        Auth_init_email["PROCESS_ID"] = "0e8b77d8999b11e9abea8e9e63ab42a5";
        Auth_init_email["WORKFLOW_ID"] = "2995dd5e998a11e9abea8e9e63ab42a5";
    })(Auth_init_email = APIConstants.Auth_init_email || (APIConstants.Auth_init_email = {}));
    var Auth_valid_email;
    (function (Auth_valid_email) {
        Auth_valid_email["PROCESS_ID"] = "29c9614c998a11e9abea8e9e63ab42a5";
        Auth_valid_email["WORKFLOW_ID"] = "2995dd5e998a11e9abea8e9e63ab42a5";
    })(Auth_valid_email = APIConstants.Auth_valid_email || (APIConstants.Auth_valid_email = {}));
    var Auth_init_mobile;
    (function (Auth_init_mobile) {
        Auth_init_mobile["PROCESS_ID"] = "1d8cc41898d711e983a02642e3160d7b";
        Auth_init_mobile["WORKFLOW_ID"] = "14f6fbde98d711e983a02642e3160d7b";
    })(Auth_init_mobile = APIConstants.Auth_init_mobile || (APIConstants.Auth_init_mobile = {}));
    var Auth_valid_mobile;
    (function (Auth_valid_mobile) {
        Auth_valid_mobile["PROCESS_ID"] = "32885f96999d11e9abea8e9e63ab42a5";
        Auth_valid_mobile["WORKFLOW_ID"] = "14f6fbde98d711e983a02642e3160d7b";
    })(Auth_valid_mobile = APIConstants.Auth_valid_mobile || (APIConstants.Auth_valid_mobile = {}));
    var CompleteSR;
    (function (CompleteSR) {
        CompleteSR["PROCESS_ID"] = "4d94c438998811e9abea8e9e63ab42a5";
        CompleteSR["WORKFLOW_ID"] = "41b5e566998811e9abea8e9e63ab42a5";
    })(CompleteSR = APIConstants.CompleteSR || (APIConstants.CompleteSR = {}));
})(APIConstants || (APIConstants = {}));
var AlertMessages = /** @class */ (function () {
    function AlertMessages() {
    }
    AlertMessages.SOMETHING_WRONG = 'Something went wrong, Please try again shortly.';
    AlertMessages.SERVER_ERROR = 'Server error, Please try again shortly.';
    AlertMessages.SESSION_EXPIRED = 'Current session expired due to either logged in on different session or session timeout.';
    AlertMessages.SESSION_LOGOUT = 'Logout Successfully';
    AlertMessages.MANDATORY_FIELDS_ALERT = 'Please fill all the mandatory fields.';
    AlertMessages.NA_BANK_MSG = 'Not available in the Bank records';
    AlertMessages.invalid_Credentials = 'Invalid Credentials';
    AlertMessages.resend_OTP_success = 'OTP has been sent';
    return AlertMessages;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var _core_utils_filter_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/utils/filter.interceptor */ "./src/app/core/utils/filter.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _otp_page_otp_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./otp-page/otp-page.component */ "./src/app/otp-page/otp-page.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _accept_reject_accept_reject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./accept-reject/accept-reject.component */ "./src/app/accept-reject/accept-reject.component.ts");
/* harmony import */ var _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./emailverify/emailverify.component */ "./src/app/emailverify/emailverify.component.ts");
/* harmony import */ var _mobile_verify_mobile_verify_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mobile-verify/mobile-verify.component */ "./src/app/mobile-verify/mobile-verify.component.ts");
/* harmony import */ var _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/not-found/not-found.component */ "./src/app/core/components/not-found/not-found.component.ts");
/* harmony import */ var _directives_mydirect_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/mydirect.directive */ "./src/app/directives/mydirect.directive.ts");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/errorpage/errorpage.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/stepper/stepper.component.ts");
/* harmony import */ var _stepper_retail_net_banking_retail_net_banking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stepper/retail-net-banking/retail-net-banking.component */ "./src/app/stepper/retail-net-banking/retail-net-banking.component.ts");
/* harmony import */ var _stepper_debit_card_debit_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stepper/debit-card/debit-card.component */ "./src/app/stepper/debit-card/debit-card.component.ts");
/* harmony import */ var _stepper_otp_login_otp_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./stepper/otp-login/otp-login.component */ "./src/app/stepper/otp-login/otp-login.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _stepper_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./stepper/credit-card/credit-card.component */ "./src/app/stepper/credit-card/credit-card.component.ts");
/* harmony import */ var _stepper_aadhar_card_aadhar_card_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./stepper/aadhar-card/aadhar-card.component */ "./src/app/stepper/aadhar-card/aadhar-card.component.ts");
/* harmony import */ var _core_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./core/components/dialog-box/dialog-box.component */ "./src/app/core/components/dialog-box/dialog-box.component.ts");
/* harmony import */ var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./authorization/authorization.component */ "./src/app/authorization/authorization.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
                _otp_page_otp_page_component__WEBPACK_IMPORTED_MODULE_8__["OtpPageComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
                _accept_reject_accept_reject_component__WEBPACK_IMPORTED_MODULE_10__["AcceptRejectComponent"],
                _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_11__["EmailverifyComponent"],
                _mobile_verify_mobile_verify_component__WEBPACK_IMPORTED_MODULE_12__["MobileVerifyComponent"],
                _core_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"],
                _directives_mydirect_directive__WEBPACK_IMPORTED_MODULE_14__["MydirectDirective"],
                _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_15__["ErrorpageComponent"],
                _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_16__["StepperComponent"],
                _stepper_retail_net_banking_retail_net_banking_component__WEBPACK_IMPORTED_MODULE_17__["RetailNetBankingComponent"],
                _stepper_debit_card_debit_card_component__WEBPACK_IMPORTED_MODULE_18__["DebitCardComponent"],
                _stepper_otp_login_otp_login_component__WEBPACK_IMPORTED_MODULE_19__["OtpLoginComponent"],
                _stepper_credit_card_credit_card_component__WEBPACK_IMPORTED_MODULE_28__["CreditCardComponent"],
                _stepper_aadhar_card_aadhar_card_component__WEBPACK_IMPORTED_MODULE_29__["AadharCardComponent"],
                _core_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_30__["DialogBoxComponent"],
                _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_31__["AuthorizationComponent"],
                _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_32__["UnderConstructionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_21__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_27__["PdfViewerModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_26__["NgxLoadingModule"].forRoot({}),
            ],
            entryComponents: [_core_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_30__["DialogBoxComponent"]],
            providers: [
                _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _core_utils_filter_interceptor__WEBPACK_IMPORTED_MODULE_4__["FilterInterceptor"],
                    multi: true
                },
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_3__["CommonFunctions"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/auth-guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, tokenStorage) {
        this.router = router;
        this.tokenStorage = tokenStorage;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.tokenStorage.getAccessToken() || !this.tokenStorage.getSessionId()) {
            console.log("IN Auth Guard ...");
            // this.tokenstorage.clear();
            this.router.navigate(['error']);
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorage"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/authorization/authorization.component.scss":
/*!************************************************************!*\
  !*** ./src/app/authorization/authorization.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 768px) {\n  .cards {\n    height: 110px;\n    width: 175px;\n  }\n\n  .colscard {\n    display: flex;\n    justify-content: center;\n  }\n}\n.cards {\n  margin: 10px;\n  cursor: pointer;\n  text-align: center;\n  padding: 25px;\n  border: #5e8bb6 1px solid;\n  border-radius: 0px;\n}\n.tool-auth {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: gray;\n  font-size: 28px;\n}\n.main {\n  height: calc(100vh - 64px);\n  background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n  overflow-x: hidden;\n}\n.submit-btn {\n  text-align: center;\n  margin: 15px;\n}\n.cards-bg {\n  background-color: lightgray;\n  border: none;\n}\n.submitBtn {\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcGl5by9EZXNrdG9wL1NELVByb2plY3QveWJsLXNkY3NzL3NyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRob3JpemF0aW9uL2F1dGhvcml6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxZQUFBO0VDQ047O0VEQ0U7SUFDSSxhQUFBO0lBQ0EsdUJBQUE7RUNFTjtBQUNGO0FEQUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEREE7RUFDSSwwQkFBQTtFQUNJLGdGQUFBO0VBQ0Esa0JBQUE7QUNJUjtBREZBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDS0o7QURIQTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtBQ01KO0FESkE7RUFDSSxrQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9yaXphdGlvbi9hdXRob3JpemF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY2FyZHN7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICB9XG4gICAgLmNvbHNjYXJke1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG4uY2FyZHN7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXI6ICM1ZThiYjYgMXB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi50b29sLWF1dGh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cbi5tYWlue1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGQ1YTk2LCAjNGU3ZmFlLCAjODBhNWM3LCAjYjNjY2RmLCAjZWFmM2Y5KTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuLnN1Ym1pdC1idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHg7XG59XG4uY2FyZHMtYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cbi5zdWJtaXRCdG57XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufSIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXJkcyB7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgICB3aWR0aDogMTc1cHg7XG4gIH1cblxuICAuY29sc2NhcmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5jYXJkcyB7XG4gIG1hcmdpbjogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlcjogIzVlOGJiNiAxcHggc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLnRvb2wtYXV0aCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4ubWFpbiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGQ1YTk2LCAjNGU3ZmFlLCAjODBhNWM3LCAjYjNjY2RmLCAjZWFmM2Y5KTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4uY2FyZHMtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/authorization/authorization.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/authorization/authorization.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthorizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function() { return AuthorizationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _stepper_stepper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stepper/stepper.service */ "./src/app/stepper/stepper.service.ts");








var AuthorizationComponent = /** @class */ (function () {
    function AuthorizationComponent(stepperService, authService, router, service, commonFunctions) {
        this.stepperService = stepperService;
        this.authService = authService;
        this.router = router;
        this.service = service;
        this.commonFunctions = commonFunctions;
        this.active_option = 0;
        this.authroization_options = [];
    }
    AuthorizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        var apiUniqueKey = new Date().getTime().toString();
        this.service.getAuth(apiUniqueKey).subscribe(function (res) {
            _this.loading = false;
            if (res['ErrorCode'] == 200) {
                _this.loading = false;
                console.log(res, 'auth options');
                _this.authroization_options = res['ProcessVariables']['validMols'];
                // for(var i=0;i<=this.authroization_options[i].length;i++){
                //   if(this.authroization_options[i]['id']==1){
                //     this.authroization_options[i].push({'icon':'computer'});
                //   }
                // }
                console.log(_this.authroization_options);
            }
            else {
                _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_6__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            }
        }, function (error) {
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_6__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    AuthorizationComponent.prototype.authorization = function (option_val, i, name) {
        this.index = i;
        this.active_option = option_val;
        console.log(this.active_option, option_val);
        this.selected_authorization_name = name;
        console.log(this.selected_authorization_name);
    };
    AuthorizationComponent.prototype.submit = function () {
        // Set value when trigger, it will detect as a Authorization Page use
        this.stepperService.detect_auth = 1;
        // Retail Net Banking
        if (this.active_option == 1) {
            this.router.navigate(['rnbLogin']);
        }
        // For Debit Card Screen
        if (this.active_option == 2) {
            this.router.navigate(['dcLogin']);
        }
        // For OTP Screen
        if (this.active_option == 3) {
            this.generateOtp();
        }
        // for Credit Card Screen
        if (this.active_option == 4) {
            this.router.navigate(['credit_card']);
        }
        // For Email OTP Screen
        if (this.active_option == 6) {
            this.router.navigate(['under_construction']);
        }
    };
    AuthorizationComponent.prototype.generateOtp = function () {
        var _this = this;
        this.loading = true;
        var apiUniqueKey = new Date().getTime().toString();
        this.stepperService.auth_reinit2(apiUniqueKey, 3, '').subscribe(function (response) {
            _this.loading = false;
            console.log(response);
            if (response['ErrorCode'] == '200') {
                if (response['ProcessVariables']['apiUniqueReqId'] == apiUniqueKey) {
                    if (response['ProcessVariables']['authRefId']) {
                        _this.stepperService.otpAuthRefId = response['ProcessVariables']['authRefId'];
                        _this.router.navigate(['otpLogin']);
                    }
                }
                else {
                    _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_6__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(response['ErrorMessage']);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_6__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    AuthorizationComponent.ctorParameters = function () { return [
        { type: _stepper_stepper_service__WEBPACK_IMPORTED_MODULE_7__["StepperService"] },
        { type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_3__["CommonFunctions"] }
    ]; };
    AuthorizationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authorization',
            template: __webpack_require__(/*! raw-loader!./authorization.component.html */ "./node_modules/raw-loader/index.js!./src/app/authorization/authorization.component.html"),
            styles: [__webpack_require__(/*! ./authorization.component.scss */ "./src/app/authorization/authorization.component.scss")]
        })
    ], AuthorizationComponent);
    return AuthorizationComponent;
}());



/***/ }),

/***/ "./src/app/core/components/dialog-box/dialog-box.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/components/dialog-box/dialog-box.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .mat-dialog-content {\n  margin: none;\n  padding: none;\n  margin-top: -10px;\n  margin-bottom: 20px;\n} */\n\n.delete-dialog-content {\n    text-align: center;\n    margin-bottom: 21px;\n  }\n\n:host /deep/ .mat-dialog-title {\n    color: #d71920;\n    text-transform: uppercase;\n    font-size: 22px;\n    margin-bottom: 10px;\n    font-weight: 400;\n  }\n\n.delete-icon {\n    position: relative;\n    top: 5px;\n    color: red;\n  }\n\n.question-icon{\n    position: relative;\n    top: 7px;\n  }\n\n.delete-btns {\n    background: #0062a8;\n    color: #fff;\n    font-size: 14px;\n    width: 100px;\n    height: 40px;\n    line-height: 40px;\n    text-align: center;\n    border-radius: 4px;\n    margin: 0 15px;\n  }\n\n.btn-section {\n    margin-bottom: 0px;\n  }\n\n.confirm-popup {\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 18px;\n    margin-bottom: 18px;\n  }\n\n/* .popup-btn-container{\n    margin: 0 -24px;\n  } */\n\n.popup-btn-container{\n    /* text-align: right; */\n    margin: 0 -24px;\n    bottom: -24px;\n    text-align: center;\n    /* margin-top: 15px; */\n  }\n\n.right-icon {\n    background: url(/../assets/images/right.png) 0 0 no-repeat;\n    /* width: 18px; */\n    height: 18px;\n    display: inline-block;\n    /* margin-right: 7px; */\n  }\n\n@media(max-width:767px) and (orientation:portrait){\n    .popup-btn-container.btn-container {\n        margin: 0 10px !important;\n    }\n    ::ng-deep .delete-dialog-box .popup-btn-container.btn-container {\n        margin: 0 -24px !important;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0VBQ1Y7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBQ0E7SUFDRSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjs7QUFDQTs7S0FFRzs7QUFDSDtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSwwREFBMEQ7SUFDMUQsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsdUJBQXVCO0VBQ3pCOztBQUNBO0lBQ0U7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLDBCQUEwQjtJQUM5QjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLm1hdC1kaWFsb2ctY29udGVudCB7XG4gIG1hcmdpbjogbm9uZTtcbiAgcGFkZGluZzogbm9uZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59ICovXG5cbi5kZWxldGUtZGlhbG9nLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xuICB9XG4gIFxuICA6aG9zdCAvZGVlcC8gLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIGNvbG9yOiAjZDcxOTIwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICBcbiAgLmRlbGV0ZS1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLnF1ZXN0aW9uLWljb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogN3B4O1xuICB9XG4gIFxuICAuZGVsZXRlLWJ0bnMge1xuICAgIGJhY2tncm91bmQ6ICMwMDYyYTg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW46IDAgMTVweDtcbiAgfVxuICBcbiAgLmJ0bi1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmNvbmZpcm0tcG9wdXAge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmctYm90dG9tOiAxOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIH1cbiAgLyogLnBvcHVwLWJ0bi1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIC0yNHB4O1xuICB9ICovXG4gIC5wb3B1cC1idG4tY29udGFpbmVye1xuICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xuICAgIG1hcmdpbjogMCAtMjRweDtcbiAgICBib3R0b206IC0yNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBtYXJnaW4tdG9wOiAxNXB4OyAqL1xuICB9XG4gIC5yaWdodC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLy4uL2Fzc2V0cy9pbWFnZXMvcmlnaHQucG5nKSAwIDAgbm8tcmVwZWF0O1xuICAgIC8qIHdpZHRoOiAxOHB4OyAqL1xuICAgIGhlaWdodDogMThweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiA3cHg7ICovXG4gIH1cbiAgQG1lZGlhKG1heC13aWR0aDo3NjdweCkgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCl7XG4gICAgLnBvcHVwLWJ0bi1jb250YWluZXIuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIDo6bmctZGVlcCAuZGVsZXRlLWRpYWxvZy1ib3ggLnBvcHVwLWJ0bi1jb250YWluZXIuYnRuLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMCAtMjRweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/dialog-box/dialog-box.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/components/dialog-box/dialog-box.component.ts ***!
  \********************************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DialogBoxComponent = /** @class */ (function () {
    function DialogBoxComponent(data) {
        this.data = data;
        this.modalTitle = data.title;
        this.message = data.message;
    }
    DialogBoxComponent.prototype.ngOnInit = function () {
    };
    DialogBoxComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog-box',
            template: __webpack_require__(/*! raw-loader!./dialog-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/dialog-box/dialog-box.component.html"),
            styles: [__webpack_require__(/*! ./dialog-box.component.css */ "./src/app/core/components/dialog-box/dialog-box.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DialogBoxComponent);
    return DialogBoxComponent;
}());



/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700');\n@import url('https://fonts.googleapis.com/css?family=Catamaran:400,800');\n.error-container {\n  text-align: center;\n  font-size: 180px;\n  font-family: 'Catamaran', sans-serif;\n  font-weight: 800;\n  margin: 20px 15px;\n}\n.error-container > span {\n  display: inline-block;\n  line-height: 0.7;\n  position: relative;\n  color: #FFB485;\n}\n.error-container > span > span {\n  display: inline-block;\n  position: relative;\n}\n.error-container > span:nth-of-type(1) {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  -webkit-perspective-origin: 500% 50%;\n          perspective-origin: 500% 50%;\n  color: #F0E395;\n}\n.error-container > span:nth-of-type(1) > span {\n  -webkit-transform-origin: 50% 100% 0px;\n          transform-origin: 50% 100% 0px;\n  -webkit-transform: rotateX(0);\n          transform: rotateX(0);\n  -webkit-animation: easyoutelastic 8s infinite;\n          animation: easyoutelastic 8s infinite;\n}\n.error-container > span:nth-of-type(3) {\n  -webkit-perspective: none;\n          perspective: none;\n  -webkit-perspective-origin: 50% 50%;\n          perspective-origin: 50% 50%;\n  color: #D15C95;\n}\n.error-container > span:nth-of-type(3) > span {\n  -webkit-transform-origin: 100% 100% 0px;\n          transform-origin: 100% 100% 0px;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-animation: rotatedrop 8s infinite;\n          animation: rotatedrop 8s infinite;\n}\n@-webkit-keyframes easyoutelastic {\n  0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n  9% {\n    -webkit-transform: rotateX(210deg);\n            transform: rotateX(210deg);\n  }\n  13% {\n    -webkit-transform: rotateX(150deg);\n            transform: rotateX(150deg);\n  }\n  16% {\n    -webkit-transform: rotateX(200deg);\n            transform: rotateX(200deg);\n  }\n  18% {\n    -webkit-transform: rotateX(170deg);\n            transform: rotateX(170deg);\n  }\n  20% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n  }\n  60% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n  }\n  80% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n  100% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n}\n@keyframes easyoutelastic {\n  0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n  9% {\n    -webkit-transform: rotateX(210deg);\n            transform: rotateX(210deg);\n  }\n  13% {\n    -webkit-transform: rotateX(150deg);\n            transform: rotateX(150deg);\n  }\n  16% {\n    -webkit-transform: rotateX(200deg);\n            transform: rotateX(200deg);\n  }\n  18% {\n    -webkit-transform: rotateX(170deg);\n            transform: rotateX(170deg);\n  }\n  20% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n  }\n  60% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n  }\n  80% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n  100% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n}\n@-webkit-keyframes rotatedrop {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  10% {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n  }\n  15% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  70% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  80% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n}\n@keyframes rotatedrop {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  10% {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg);\n  }\n  15% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  70% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n  }\n  80% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n}\n/* demo stuff */\n* {\n    box-sizing: border-box;\n}\nbody {\n  background-color: #f4f4f4;\n  margin-bottom: 50px;\n}\nhtml, button, input, select, textarea {\n    font-family: 'Montserrat', Helvetica, sans-serif;\n    color: #bbb;\n}\nh1,h2 {\n  text-align: center;\n  margin: 30px 15px;\n}\n.zoom-area {\n  max-width: 490px;\n  margin: 30px auto 30px;\n  font-size: 19px;\n  text-align: center;\n}\n.link-container {\n  text-align: center;\n}\na.more-link {\n  text-transform: uppercase;\n  font-size: 13px;\n    background-color: #bbb;\n    padding: 10px 15px;\n    border-radius: 0;\n    color: #fff;\n    display: inline-block;\n    margin-right: 5px;\n    margin-bottom: 5px;\n    line-height: 1.5;\n    text-decoration: none;\n  margin-top: 50px;\n  letter-spacing: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7QUFDN0Usd0VBQXdFO0FBQ3hFO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUNBQStCO1VBQS9CLCtCQUErQjtFQUMvQiwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtBQUNGO0FBNUJBO0VBQ0U7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsNEJBQW9CO1lBQXBCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsNkJBQXFCO1lBQXJCLHFCQUFxQjtFQUN2QjtBQUNGO0FBbkJBO0VBQ0U7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSw2QkFBcUI7WUFBckIscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFNQSxlQUFlO0FBQ2Y7SUFHSSxzQkFBc0I7QUFDMUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLGdEQUFnRDtJQUNoRCxXQUFXO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw2MDAsNzAwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNhdGFtYXJhbjo0MDAsODAwJyk7XG4uZXJyb3ItY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4MHB4O1xuICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIG1hcmdpbjogMjBweCAxNXB4O1xufVxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAwLjc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNGRkI0ODU7XG59XG4uZXJyb3ItY29udGFpbmVyID4gc3BhbiA+IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5lcnJvci1jb250YWluZXIgPiBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MDAlIDUwJTtcbiAgY29sb3I6ICNGMEUzOTU7XG59XG4uZXJyb3ItY29udGFpbmVyID4gc3BhbjpudGgtb2YtdHlwZSgxKSA+IHNwYW4ge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJSAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgYW5pbWF0aW9uOiBlYXN5b3V0ZWxhc3RpYyA4cyBpbmZpbml0ZTtcbn1cblxuLmVycm9yLWNvbnRhaW5lciA+IHNwYW46bnRoLW9mLXR5cGUoMykge1xuICBwZXJzcGVjdGl2ZTogbm9uZTtcbiAgcGVyc3BlY3RpdmUtb3JpZ2luOiA1MCUgNTAlO1xuICBjb2xvcjogI0QxNUM5NTtcbn1cbi5lcnJvci1jb250YWluZXIgPiBzcGFuOm50aC1vZi10eXBlKDMpID4gc3BhbiB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJSAwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICBhbmltYXRpb246IHJvdGF0ZWRyb3AgOHMgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIGVhc3lvdXRlbGFzdGljIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgfVxuICA5JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDIxMGRlZyk7XG4gIH1cbiAgMTMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTUwZGVnKTtcbiAgfVxuICAxNiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgyMDBkZWcpO1xuICB9XG4gIDE4JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDE3MGRlZyk7XG4gIH1cbiAgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgxODBkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZWRyb3Age1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XG4gIH1cbn1cblxuXG5cblxuXG4vKiBkZW1vIHN0dWZmICovXG4qIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbmh0bWwsIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2JiYjtcbn1cbmgxLGgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDMwcHggMTVweDtcbn1cbi56b29tLWFyZWEge1xuICBtYXgtd2lkdGg6IDQ5MHB4O1xuICBtYXJnaW46IDMwcHggYXV0byAzMHB4O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saW5rLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmEubW9yZS1saW5rIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/not-found/not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/not-found/not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(tokenStorage) {
        this.tokenStorage = tokenStorage;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        this.tokenStorage.clear();
    };
    NotFoundComponent.ctorParameters = function () { return [
        { type: _services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorage"] }
    ]; };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/core/components/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material/material.module */ "./src/app/core/material/material.module.ts");





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/encryption/base64.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/encryption/base64.service.ts ***!
  \***************************************************/
/*! exports provided: Base64Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64Service", function() { return Base64Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Base64Service = /** @class */ (function () {
    function Base64Service() {
        this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    }
    Base64Service.prototype.encode = function (e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = this._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            }
            else if (isNaN(i)) {
                a = 64;
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) +
                this._keyStr.charAt(u) + this._keyStr.charAt(a);
        }
        return t;
    };
    Base64Service.prototype.decode = function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r);
            }
            if (a != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = this._utf8_decode(t);
        return t;
    };
    Base64Service.prototype._utf8_encode = function (e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
            }
            else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
            }
            else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
            }
        }
        return t;
    };
    Base64Service.prototype._utf8_decode = function (e) {
        var t = "";
        var n = 0;
        var c1;
        var c2;
        var c3;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            }
            else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            }
            else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) <<
                    6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    };
    Base64Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], Base64Service);
    return Base64Service;
}());



/***/ }),

/***/ "./src/app/core/encryption/encryption.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/encryption/encryption.service.ts ***!
  \*******************************************************/
/*! exports provided: EncryptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncryptionService", function() { return EncryptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base64_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base64.service */ "./src/app/core/encryption/base64.service.ts");


var CryptoJS = __webpack_require__(/*! sjcl */ "./node_modules/sjcl/sjcl.js");

var EncryptionService = /** @class */ (function () {
    function EncryptionService(Base64) {
        this.Base64 = Base64;
    }
    EncryptionService.prototype.encrypt = function (dataToEncrypt, aesPublicKey) {
        console.log(dataToEncrypt);
        var hash = CryptoJS.hash.sha256.hash(dataToEncrypt);
        var payloadHash = CryptoJS.codec.hex.fromBits(hash);
        var ct, p;
        var timestamp = (new Date()).toISOString();
        var iv = timestamp.substr(timestamp.length - 8);
        var key = CryptoJS.codec.hex.fromBits(CryptoJS.random.randomWords(32, 0));
        p = {
            adata: "",
            iter: 1000,
            mode: "ccm",
            ts: parseInt("64"),
            ks: parseInt("256"),
            iv: this.Base64.encode(iv),
            salt: this.Base64.encode(iv)
        };
        ct = CryptoJS.encrypt(key, dataToEncrypt, p);
        ct = JSON.parse(ct);
        var encryptedRawPayload = this.Base64.encode(ct.ct);
        var encryptedRandomKey = "";
        {
            var randomCT, randomPayload;
            randomPayload = {
                adata: "",
                iter: 1000,
                mode: "ccm",
                ts: parseInt("64"),
                ks: parseInt("256"),
                iv: this.Base64.encode(iv),
                salt: this.Base64.encode(iv)
            };
            randomCT = CryptoJS.encrypt(aesPublicKey, key, randomPayload);
            randomCT = JSON.parse(randomCT);
            encryptedRandomKey = this.Base64.encode(randomCT.ct);
        }
        var headers = {
            'x-appiyo-key': encryptedRandomKey,
            'x-appiyo-hash': payloadHash,
            'x-appiyo-ts': timestamp,
            'Content-Type': 'text/html'
        };
        var request = {
            "rawPayload": encryptedRawPayload,
            "headers": headers
        };
        return request;
    };
    EncryptionService.prototype.decrypt = function (randKey, timeStamp, responseHash, encryptedRes, aesPublicKey) {
        var decryptedKey = this.decryptAES(this.Base64.decode(randKey), aesPublicKey, timeStamp);
        var decryptedResponse = this.decryptAES(this.Base64.decode(encryptedRes), decryptedKey, timeStamp);
        var hash = CryptoJS.hash.sha256.hash((decryptedResponse));
        var payloadHash = CryptoJS.codec.hex.fromBits(hash);
        if (payloadHash !== responseHash) {
            decryptedResponse = "{error: 'Malformed response'}";
        }
        return decryptedResponse;
    };
    EncryptionService.prototype.decryptAES = function (encryptedData, key, timestamp) {
        var rp = {};
        var plaintext;
        var iv = timestamp.substr(timestamp.length - 8);
        try {
            var ciphertext = encryptedData;
            var dataToDecrypt = {
                "iv": this.Base64.encode(iv),
                "salt": this.Base64.encode(iv),
                "ct": ciphertext,
                "mode": "ccm",
                "v": 1,
                "ks": 256,
                "iter": 1000,
                "adata": "",
                "ts": 64
            };
            plaintext = CryptoJS.decrypt(key, JSON.stringify(dataToDecrypt), {}, rp);
        }
        catch (e) {
            console.log(e);
            return;
        }
        return plaintext;
    };
    EncryptionService.ctorParameters = function () { return [
        { type: _base64_service__WEBPACK_IMPORTED_MODULE_2__["Base64Service"] }
    ]; };
    EncryptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EncryptionService);
    return EncryptionService;
}());



/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var materialModules = [
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["LayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                materialModules
            ],
            declarations: [],
            exports: [
                materialModules
            ],
            providers: [
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"],
                    useValue: {
                        hasBackdrop: true,
                        panelClass: 'm-mat-dialog-container__wrapper',
                        height: 'auto',
                        width: '900px'
                    }
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
                    useValue: {
                        duration: 5000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'
                    }
                },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_6__["LOCALE_ID"], useValue: "en-GB" }
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/core/services/auth/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/auth/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common.service */ "./src/app/core/services/common.service.ts");







var AuthService = /** @class */ (function () {
    function AuthService(router, snackBar, tokenStorage, common) {
        this.router = router;
        this.snackBar = snackBar;
        this.tokenStorage = tokenStorage;
        this.common = common;
        this.loggedIn = false;
        this.brokerLoggedIn = false;
        this.brokerVerified = false;
        this.contractorLoggedIn = false;
        this.contractorVerified = false;
        this.isYesTeamMember = false;
        this.isREHMember = false;
    }
    AuthService.prototype.resetLoginDetails = function () {
        this.arrAllowedRoutes = [];
        this.tokenStorage.removeKey(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].ROUTES);
        this.tokenStorage.removeKey(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAM_DATA);
        this.common.clearAllParamData();
        this.tokenStorage.clear();
        this.loggedIn = false;
        this.router.navigate(['/login']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return token;
    };
    AuthService.prototype.alertToUser = function (message, logout, isError) {
        if (logout === void 0) { logout = false; }
        if (isError === void 0) { isError = false; }
        var snackbarConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarConfig"]();
        snackbarConfig.duration = 5000;
        snackbarConfig.verticalPosition = 'top';
        snackbarConfig.horizontalPosition = 'right';
        if (isError) {
            snackbarConfig.panelClass = ['red-snackbar'];
        }
        if (!logout) {
            this.snackBar.open(message, '', snackbarConfig);
        }
        if (logout && this.loggedIn) {
            this.snackBar.open(message, '', snackbarConfig);
            // this.logout(false);
        }
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
        { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"] },
        { type: _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/auth/token-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/services/auth/token-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: TokenStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return TokenStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_4__);





var TokenStorage = /** @class */ (function () {
    function TokenStorage(router) {
        this.router = router;
        this.ENCRYPTION_KEY = 'idnm@sec#pass123';
        this.tempToken = '';
    }
    /**
       * Get access token
       * @returns {Observable<string>}
       */
    TokenStorage.prototype.getAccessToken = function () {
        if (this.tempToken) {
            this.setAccessToken(this.tempToken);
            return this.tempToken;
        }
        var token = sessionStorage.getItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].ACCESS_TOKEN);
        this.tempToken = token;
        return token;
    };
    /**
       * Get bearer token
       * @returns {Observable<string>}
       */
    TokenStorage.prototype.getBearerToken = function () {
        var token = sessionStorage.getItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].BEARER_TOKEN);
        return token;
    };
    /**
      * Get session Id
      * @returns {Observable<string>}
      */
    TokenStorage.prototype.getSessionId = function () {
        var sessionId = sessionStorage.getItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].SESSION_ID);
        return sessionId;
    };
    /**
       * Get sr Id
       * @returns {Observable<string>}
       */
    TokenStorage.prototype.getSrId = function () {
        var srId = sessionStorage.getItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].SR_ID);
        return srId;
    };
    /**
       * Set sr token
       * @returns {TokenStorage}
       */
    TokenStorage.prototype.setSrId = function (srId) {
        if (srId) {
            sessionStorage.setItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].SR_ID, srId);
        }
        return this;
    };
    /**
       * Set access token
       * @returns {TokenStorage}
       */
    TokenStorage.prototype.setAccessToken = function (token) {
        this.tempToken = token;
        sessionStorage.setItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].ACCESS_TOKEN, token);
        return this;
    };
    /**
       * Set session id
       * @returns {TokenStorage}
       */
    TokenStorage.prototype.setSessionId = function (sessionId) {
        sessionStorage.setItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].SESSION_ID, sessionId);
        return this;
    };
    /**
       * Set refresh token
       * @returns {TokenStorage}
       */
    TokenStorage.prototype.setBearerToken = function (token) {
        if (token) {
            sessionStorage.setItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].BEARER_TOKEN, token);
        }
        return this;
    };
    TokenStorage.prototype.removeKey = function (key) {
        sessionStorage.removeItem(key);
    };
    TokenStorage.prototype.setRouteData = function (key, value) {
        if (value) {
            var valueEnc = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(JSON.stringify(value), this.ENCRYPTION_KEY).toString();
            return sessionStorage.setItem(key, valueEnc);
        }
        return null;
    };
    TokenStorage.prototype.setParamData = function (key, value) {
        if (value) {
            var valueEnc = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].encrypt(JSON.stringify(value), this.ENCRYPTION_KEY).toString();
            return sessionStorage.setItem(key, valueEnc);
        }
        return null;
    };
    TokenStorage.prototype.getRouteData = function () {
        try {
            var routeData = sessionStorage.getItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].ROUTES);
            if (routeData) {
                var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(routeData, this.ENCRYPTION_KEY);
                var routeDataDec = JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8));
                return routeDataDec;
            }
        }
        catch (err) {
            this.clear();
            this.router.navigate(['/login']);
        }
    };
    TokenStorage.prototype.getParamData = function () {
        try {
            var paramData = sessionStorage.getItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PARAM_DATA);
            if (paramData) {
                var bytes = crypto_js__WEBPACK_IMPORTED_MODULE_4__["AES"].decrypt(paramData, this.ENCRYPTION_KEY);
                var paramDataDec = JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_4__["enc"].Utf8));
                return paramDataDec;
            }
        }
        catch (err) {
            this.clear();
            this.router.navigate(['/login']);
        }
    };
    TokenStorage.prototype.setReturnURL = function (returnURL) {
        sessionStorage.setItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].RETURN_URL, returnURL);
    };
    TokenStorage.prototype.getReturnURL = function () {
        sessionStorage.getItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].RETURN_URL);
    };
    /**
       * Remove tokens
       */
    TokenStorage.prototype.clear = function () {
        sessionStorage.removeItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].USER_INFO);
        sessionStorage.removeItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].ACCESS_TOKEN);
        sessionStorage.removeItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].BEARER_TOKEN);
        sessionStorage.removeItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].SESSION_ID);
        sessionStorage.removeItem(src_app_app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].SR_ID);
        sessionStorage.clear();
        this.tempToken = null;
    };
    TokenStorage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    TokenStorage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TokenStorage);
    return TokenStorage;
}());



/***/ }),

/***/ "./src/app/core/services/base-api-service.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/services/base-api-service.service.ts ***!
  \***********************************************************/
/*! exports provided: BaseAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAPIService", function() { return BaseAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");





//const SERVER_URL = environment.apiUrl;
var BaseAPIService = /** @class */ (function () {
    function BaseAPIService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    // get(endpoint, params) {
    //   if (Object.keys(params).length) {
    //     return this.http.get(`${SERVER_URL}${endpoint}/${params}`);
    //   } else {
    //     return this.http.get(`${SERVER_URL}${endpoint}`);
    //   }
    // }
    BaseAPIService.prototype.loginpost = function (endpoint, params, httpOptions) {
        return this.http.post("" + endpoint, JSON.stringify(params), httpOptions);
    };
    BaseAPIService.prototype.post = function (workflowId, params) {
        var SERVER_URL = this.baseUrl + ("d/workflows/" + workflowId + "/" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiVersion + "/execute");
        return this.http.post("" + SERVER_URL, JSON.stringify(params));
    };
    BaseAPIService.prototype.postUpload = function (params) {
        var SERVER_URL = this.baseUrl + 'd/drive/upload';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set(src_app_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].InterceptorSkipHeader, '');
        return this.http.post("" + SERVER_URL, params, { headers: headers, reportProgress: true, observe: 'events' });
        //  return this.http.post(`${SERVER_URL}`, params, { headers });
    };
    BaseAPIService.prototype.getAuthTokenPost = function (params) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "session/auth_init", JSON.stringify(params));
    };
    BaseAPIService.prototype.getAuthReInitPost = function (params) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "session/auth_reinit", JSON.stringify(params));
    };
    BaseAPIService.prototype.validateAuthPost = function (params) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "session/auth_validate", JSON.stringify(params));
    };
    BaseAPIService.prototype.getImage = function (fileId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].documentUrl + fileId, { responseType: "blob" });
    };
    // put(endpoint, params): Observable<Object> {
    //   const body = new HttpParams().set(
    //     `processVariables`,
    //     JSON.stringify(params)
    //   );
    //   return this.http.post(`${SERVER_URL}${endpoint}/`,  JSON.stringify(params));
    // }
    BaseAPIService.prototype.getStatusCode = function (resp) {
        var statusCode = resp['ProcessVariables']['response'][0].statusCode;
        return statusCode;
    };
    BaseAPIService.prototype.getStatus = function (resp) {
        var status = resp['ProcessVariables']['response'][0].status;
        return status;
    };
    BaseAPIService.prototype.getSuccessMsg = function (resp) {
        var responseMsg = resp['ProcessVariables']['response'][0].message;
        return responseMsg;
    };
    BaseAPIService.prototype.getErrorCode = function (resp) {
        return resp['Error'];
    };
    BaseAPIService.prototype.getResponseStatus = function (response) {
        if (this.getErrorCode(response) === '0' &&
            this.getStatusCode(response) === 200) {
            return true;
        }
        else {
            return false;
        }
    };
    BaseAPIService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BaseAPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BaseAPIService);
    return BaseAPIService;
}());



/***/ }),

/***/ "./src/app/core/services/common.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/common.service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");






var CommonService = /** @class */ (function () {
    function CommonService(baseAPIService, tokenStorage) {
        this.baseAPIService = baseAPIService;
        this.tokenStorage = tokenStorage;
        this.routeArray = [];
        this.queryParamsData = [];
        this.routeUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.queryUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //Checks sessionStorage for route data array
        if (this.tokenStorage.getRouteData()) {
            var localRouteData = this.tokenStorage.getRouteData();
            this.routeArray = JSON.parse(localRouteData);
        }
        else {
            this.tokenStorage.setRouteData(_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].ROUTES, JSON.stringify(this.routeArray));
        }
        //Checks sessionStorage for params data array
        if (this.tokenStorage.getParamData()) {
            this.queryParamsData = JSON.parse(this.tokenStorage.getParamData());
        }
        else {
            this.tokenStorage.setParamData(_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAM_DATA, JSON.stringify(this.queryParamsData));
        }
    }
    //Returns breadcrumb array
    CommonService.prototype.getBreadcrumbs = function () {
        this.routeUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.routeArray));
        return this.routeArray;
    };
    CommonService.prototype.getRouteUpdatedListener = function () {
        return this.routeUpdated.asObservable();
    };
    CommonService.prototype.addBreadcrumb = function (data) {
        //Check whether current route name exist or not
        if (this.routeArray.filter(function (e) { return e.name === data.name; }).length > 0) {
            //Get index of existed route
            var index = this.routeArray.map(function (route) { return route.name; }).indexOf(data.name);
            //Removes all elements after route index
            this.routeArray = this.routeArray.slice(0, index + 1);
            //Set data to sessionStorage to make it work after browser refresh
            this.tokenStorage.setRouteData(_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].ROUTES, JSON.stringify(this.routeArray));
            //Return breadcrumb array to component
            this.getBreadcrumbs();
        }
        else {
            //Push current route in array
            this.routeArray.push(data);
            this.routeUpdated.next(this.routeArray);
            //Set data to sessionStorage
            this.tokenStorage.setRouteData(_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].ROUTES, JSON.stringify(this.routeArray));
        }
    };
    CommonService.prototype.getQueryUpdatedListener = function () {
        return this.queryUpdated.asObservable();
    };
    CommonService.prototype.setQueryParams = function (data) {
        //Check whether current param name exist or not
        if (this.queryParamsData.filter(function (e) { return e.name === data.name; }).length > 0) {
            //Get index of existed param route
            var index = this.queryParamsData.map(function (route) { return route.name; }).indexOf(data.name);
            //Update param data by index
            this.queryParamsData[index].data = data.data;
            this.queryUpdated.next(this.queryParamsData);
            //Set data to sessionStorage
            this.tokenStorage.setParamData(_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAM_DATA, JSON.stringify(this.queryParamsData));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
        else {
            //Push current param in array
            this.queryParamsData.push(data);
            this.queryUpdated.next(this.queryParamsData);
            //Set data to sessionStorage
            this.tokenStorage.setParamData(_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAM_DATA, JSON.stringify(this.queryParamsData));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }
    };
    //Get params data
    CommonService.prototype.getQueryParams = function () {
        this.queryUpdated.next(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.queryParamsData));
        return this.queryParamsData;
    };
    CommonService.prototype.getParams = function () {
        this.queryParamsData = this.tokenStorage.getParamData();
        if (this.queryParamsData) {
            return this.queryParamsData;
        }
        else {
            return [];
        }
    };
    // when logout - clear queryParamsData
    CommonService.prototype.clearAllParamData = function () {
        this.queryParamsData = [];
        this.queryUpdated.next(this.queryParamsData);
        this.tokenStorage.setParamData(_app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PARAM_DATA, JSON.stringify(this.queryParamsData));
    };
    CommonService.ctorParameters = function () { return [
        { type: src_app_core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseAPIService"] },
        { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"] }
    ]; };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/core/utils/common-functions.ts":
/*!************************************************!*\
  !*** ./src/app/core/utils/common-functions.ts ***!
  \************************************************/
/*! exports provided: CommonFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonFunctions", function() { return CommonFunctions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");




var CommonFunctions = /** @class */ (function () {
    function CommonFunctions(tokenStorage, router) {
        this.tokenStorage = tokenStorage;
        this.router = router;
    }
    CommonFunctions.prototype.showErrorPage = function () {
        this.tokenStorage.clear();
        this.router.navigate(['error']);
    };
    CommonFunctions.ctorParameters = function () { return [
        { type: _services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CommonFunctions = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CommonFunctions);
    return CommonFunctions;
}());



/***/ }),

/***/ "./src/app/core/utils/filter.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/core/utils/filter.interceptor.ts ***!
  \**************************************************/
/*! exports provided: FilterInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterInterceptor", function() { return FilterInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _encryption_encryption_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../encryption/encryption.service */ "./src/app/core/encryption/encryption.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var FilterInterceptor = /** @class */ (function () {
    function FilterInterceptor(router, auth, tokenStorage, encryptionService, dialog) {
        this.router = router;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.encryptionService = encryptionService;
        this.dialog = dialog;
    }
    FilterInterceptor.prototype.intercept = function (request, next) {
        // if (this.tokenStorage.getAccessToken() === null) {
        //   request = request.clone({
        //     setHeaders: {
        //       'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        //   });
        // } else if (request.url.toString().indexOf('upload_excel') !== -1) {
        //   request = request.clone({
        //     setHeaders: {
        //       'authentication-token': this.tokenStorage.getAccessToken()
        //     }
        //   });
        // } else if (request.url.toString().indexOf('upload') !== -1) {
        //   request = request.clone({
        //     setHeaders: {
        //       // 'Content-Type': 'multipart/form-data',
        //       'authentication-token': this.tokenStorage.getAccessToken()
        //       // 'Authorization': 'Bearer ' + sessionStorage.getItem(Constants.BEARER_TOKEN),
        //     }
        //   });
        // } else if (
        //   this.tokenStorage.getAccessToken() !== 'undefined' &&
        //   this.tokenStorage.getBearerToken()
        // ) {
        //   request = request.clone({
        //     setHeaders: {
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //       'authentication-token': this.tokenStorage.getAccessToken(),
        //       Authorization: 'Bearer ' + this.tokenStorage.getBearerToken()
        //     }
        //   });
        // } else {
        //   request = request.clone({
        //     setHeaders: {
        //       'Content-Type': 'application/x-www-form-urlencoded',
        //       'authentication-token': this.tokenStorage.getAccessToken()
        //     },
        //     // body: body
        //   });
        // }
        var _this = this;
        if (request.url.toString().indexOf('auth_init') !== -1 || request.url.toString().indexOf('auth_validate') !== -1 || request.url.toString().indexOf('auth_reinit') !== -1) {
            request = request.clone({
                setHeaders: {
                    'X-AUTH-SESSIONID': this.tokenStorage.getSessionId()
                }
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    'authentication-token': this.tokenStorage.getAccessToken()
                },
            });
        }
        if (!request.headers.has(_app_constant__WEBPACK_IMPORTED_MODULE_9__["Constants"].InterceptorSkipHeader) && request.method != "GET") {
            var encryption = this.encryptionService.encrypt((request.body), src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].aesPublicKey);
            request = request.clone({
                setHeaders: encryption.headers,
                body: encryption.rawPayload,
                responseType: 'text'
            });
        }
        else if (request.headers.has(_app_constant__WEBPACK_IMPORTED_MODULE_9__["Constants"].InterceptorSkipHeader)) {
            var headers = request.headers.delete(_app_constant__WEBPACK_IMPORTED_MODULE_9__["Constants"].InterceptorSkipHeader);
            request = request.clone({ headers: headers });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                console.log("Resp ", _this.decryptResponse(event));
                if (_this.decryptResponse(event)) {
                    event = event.clone({ body: JSON.parse(_this.decryptResponse(event)) });
                    if (event.headers.get('ACCESS_TOKEN')) {
                        _this.tokenStorage.setBearerToken(event.headers.get('ACCESS_TOKEN'));
                    }
                    if ('body' in event &&
                        'login_required' in event['body'] &&
                        event['body']['login_required'] === true) {
                        _this.auth.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SESSION_EXPIRED);
                        _this.dialog.closeAll();
                        _this.tokenStorage.clear();
                        // this.auth.logout(false);
                        throw new Error(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SESSION_EXPIRED);
                        // this.auth.alertToUser(AlertMessages.SESSION_EXPIRED, true, true);
                        // throw new Error(AlertMessages.SESSION_EXPIRED);
                    }
                }
                else {
                    if (typeof event['body'] == "string") {
                        event = event.clone({ body: JSON.parse(event['body']) });
                    }
                    if ('body' in event &&
                        'login_required' in event['body'] &&
                        event['body']['login_required'] === true) {
                        _this.auth.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SESSION_EXPIRED);
                        _this.dialog.closeAll();
                        _this.tokenStorage.clear();
                        // this.auth.logout(false);
                        throw new Error(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SESSION_EXPIRED);
                        // this.auth.alertToUser(AlertMessages.SESSION_EXPIRED, true, true);
                        // throw new Error(AlertMessages.SESSION_EXPIRED);
                    }
                }
            }
            return event;
        }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                var custerror = _this.decryptResponse(error.error);
                if (custerror) {
                    _this.decryptResponse(error.error);
                }
                if (error.status === 401) {
                    // redirect to the login route
                    // or show a modal
                    _this.router.navigate(['/notfound']);
                }
            }
            else {
                if ('body' in event &&
                    'login_required' in event['body'] &&
                    event['body']['login_required'] === true) {
                    _this.auth.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SESSION_EXPIRED);
                    _this.dialog.closeAll();
                    _this.tokenStorage.clear();
                    // this.auth.logout(false);
                    throw new Error(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SESSION_EXPIRED);
                    // this.auth.alertToUser(AlertMessages.SESSION_EXPIRED, true, true);
                    // throw new Error(AlertMessages.SESSION_EXPIRED);
                }
                else {
                    _this.auth.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SERVER_ERROR);
                }
            }
        }));
    };
    FilterInterceptor.prototype.decryptResponse = function (event) {
        var timestamp = event.headers.get('x-appiyo-ts');
        var randomkey = event.headers.get('x-appiyo-key');
        var responseHash = event.headers.get('x-appiyo-hash');
        if (timestamp != null) {
            var decryption = this.encryptionService.decrypt(randomkey, timestamp, responseHash, event.body, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].aesPublicKey);
            return decryption;
        }
        else {
            return false;
        }
    };
    FilterInterceptor.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorage"] },
        { type: _encryption_encryption_service__WEBPACK_IMPORTED_MODULE_7__["EncryptionService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
    ]; };
    FilterInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FilterInterceptor);
    return FilterInterceptor;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title{\n    border-bottom: 1px solid gainsboro\n}\n.details{\n    margin: 15px;\n}\n.details-txt{\n    margin: 15px;\n    margin-bottom: 35px;\n}\n.cust-titles{\n    font-weight: 300;\n}\n.npan{\n    border-top: 1px solid lightgray;\n    border-bottom: 1px solid lightgray;\n    display: flex;\n    height: 50px;\n    align-items: flex-end;\n    margin-right: 5px;\n    margin-left: 5px;    \n}\n.progress-bar{\n    margin: 0px 50px;\n}\n.div-progress {\n    padding: 5% 15%;\n}\n.thumbnail {\n    width: 100px;\n    height: 150px;\n    margin: auto;\n    border: 1px solid grey;\n    cursor: pointer;\n    overflow: auto;\n}\n.height{\n    height: calc(100vh - 200px);\n}\n.rejectTXt{\n    color: brown\n}\n.error{\n    color: red;\n    margin-top: 180px;\n}\n.d-flex{\n    height: calc(100vh - 64px);\n    display: flex;\n    align-items:baseline;\n    justify-content: center;\n    background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n    color: white;   \n}\n.images{\n    display: block;\n    margin: auto;\n    margin-top:5px;\n    padding: 10px;\n    display: block;\n    max-width:230px;\n    max-height:250px;\n    margin-bottom: 10px;\n    width: auto;\n    height: auto;\n}\ninput[type=\"file\"] {\n    display: none;\n}\n.imgdiv{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n.custom-file-upload {\n    margin-bottom: 15px;\n    /* font-weight: 600; */\n    color: white;\n    background-color: #3f51b5;\n    font-size: 13px;\n    /* display: inline-block;\n    white-space: nowrap;\n    text-decoration: none;\n    vertical-align: baseline;\n    text-align: center; */\n    cursor: pointer;\n    /* min-width: 64px; */\n    line-height: 36px;\n    padding: 0 16px;\n    /* border-radius: 0px;\n    overflow: visible;\n    transform: translate3d(0,0,0);\n    transition: background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1); */\n}\n.rejectedreason{\n    margin-bottom: 25px;\n    margin-bottom: 25px;\n    text-align: center;\n    color: red;\n}\n.imgs{\n    width: 18px;\n    vertical-align: sub;\n    margin-bottom: -1px;\n}\n.commnts{\n    margin-top: 25px;\n}\n.btns{\nmargin: 10px;\nborder-radius: 0px;\nborder: none;\ntext-decoration: none;\nfont-size: 12px;\n}\n.grp-btns{\n    margin-top: 50px;\n}\n.cancelSubmit{\n    margin: 5px;\n    border: none;\n    border-radius: 0px;\n}\n.cols{\n    display: flex;\n    flex-direction: column;\n}\n.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after, .mat-input-element:disabled{\n color: black;\n}\n.card{\n    margin: 20px;\n    /* background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9); */\n}\n.upload{\n    margin: 0px 0px;\n}\n.pls{\n    margin-bottom: 25px;\n    color: black;\n    font-weight: bold;\n}\n.other-doc{\n    color: black;\n    font-weight: bold;\n    text-align: left;\n    margin-bottom: 20px;\n    font-size: 1.25rem;\n}\n.mat-options{\n    width: 100%;\n    display: block;\n}\n.success{\n    color: green;\n}\n.btns{\n    margin: 5px;\n}\n.accept{\n    background-color: green;\n}\n.reass{\n    margin-top: 10px;\n}\n.account-title{\n    margin-bottom: 20px;\n}\n.bg-img2{\n    width: 250px;\n    height: 250px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    margin: auto;\n    margin-top: 25px;\n  }\n.err-msg {\n    text-align: center;\n    color: #c4261d;\n    margin: 30px;\n}\n.center-align {\n    justify-content: center;\n}\n@media (max-width: 767px) {\n    .font-size {\n        font-size: 10px;\n    }\n    \n    .spacing {\n        margin-left: 100px;\n        margin-right: 100px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsZ0ZBQWdGO0lBQ2hGLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Y7Ozs7eUJBSXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZjs7O3FHQUdpRztBQUNyRztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtJQUNJLFlBQVk7SUFDWixzRkFBc0Y7QUFDMUY7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7QUFFRjtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnYWluc2Jvcm9cbn1cbi5kZXRhaWxze1xuICAgIG1hcmdpbjogMTVweDtcbn1cbi5kZXRhaWxzLXR4dHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5jdXN0LXRpdGxlc3tcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLm5wYW57XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4OyAgICBcbn1cbi5wcm9ncmVzcy1iYXJ7XG4gICAgbWFyZ2luOiAwcHggNTBweDtcbn1cbi5kaXYtcHJvZ3Jlc3Mge1xuICAgIHBhZGRpbmc6IDUlIDE1JTtcbn1cblxuLnRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaGVpZ2h0e1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbn1cbi5yZWplY3RUWHR7XG4gICAgY29sb3I6IGJyb3duXG59XG4uZXJyb3J7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcbn1cbi5kLWZsZXh7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpiYXNlbGluZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGQ1YTk2LCAjNGU3ZmFlLCAjODBhNWM3LCAjYjNjY2RmLCAjZWFmM2Y5KTtcbiAgICBjb2xvcjogd2hpdGU7ICAgXG59XG4uaW1hZ2Vze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOjVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1heC13aWR0aDoyMzBweDtcbiAgICBtYXgtaGVpZ2h0OjI1MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmltZ2RpdntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jdXN0b20tZmlsZS11cGxvYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8qIG1pbi13aWR0aDogNjRweDsgKi9cbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgLyogYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7ICovXG59XG4ucmVqZWN0ZWRyZWFzb257XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogcmVkO1xufVxuLmltZ3N7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuLmNvbW1udHN7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5idG5ze1xubWFyZ2luOiAxMHB4O1xuYm9yZGVyLXJhZGl1czogMHB4O1xuYm9yZGVyOiBub25lO1xudGV4dC1kZWNvcmF0aW9uOiBub25lO1xuZm9udC1zaXplOiAxMnB4O1xufVxuLmdycC1idG5ze1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4uY2FuY2VsU3VibWl0e1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uY29sc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyLCAubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWR7XG4gY29sb3I6IGJsYWNrO1xufVxuLmNhcmR7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpOyAqL1xufVxuLnVwbG9hZHtcbiAgICBtYXJnaW46IDBweCAwcHg7XG59XG4ucGxze1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm90aGVyLWRvY3tcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cbi5tYXQtb3B0aW9uc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5zdWNjZXNze1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbi5idG5ze1xuICAgIG1hcmdpbjogNXB4O1xufVxuLmFjY2VwdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbi5yZWFzc3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmFjY291bnQtdGl0bGV7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5iZy1pbWcye1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cblxuLmVyci1tc2cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2M0MjYxZDtcbiAgICBtYXJnaW46IDMwcHg7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuZm9udC1zaXplIHtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAuc3BhY2luZyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.service */ "./src/app/customer/customer.service.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/components/dialog-box/dialog-box.component */ "./src/app/core/components/dialog-box/dialog-box.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(dialog, baseAPIService, tokenStorage, customerService, sanitizer, router, service, _snackBar) {
        this.dialog = dialog;
        this.baseAPIService = baseAPIService;
        this.tokenStorage = tokenStorage;
        this.customerService = customerService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.service = service;
        this._snackBar = _snackBar;
        this.docType = [];
        this.dob_Primary_Doc = [];
        this.showImg = false;
        this.responses = [];
        this.img_upload_status = false;
        this.img_upload_status2 = false;
        this.backImg_status = false;
        this.pageCount = 0;
        this.dob_pg_count = 0;
        this.panImgName = '';
        this.frontImg = '';
        this.backImg = '';
        this.approved = true;
        this.Rejectedoptions = [];
        this.loading = false;
        this.show_DoB_Img = false;
        this.enableBtn = false;
        this.errorTxtmsg = 'Invalid link. Either the link has already been used or session expired';
        this.showStatus = true;
        this.imgError = 'File upload failed! Retry after sometime';
        this.apiUniqueKey = '';
        this.tiffPdf_back = false;
        this.tiffPdf_front = false;
        this.tiffPdf_dob_BackImg = false;
        this.tiffPdf = false;
        this.isDuplicate = false;
        this.duplicateErrMsg = "";
        this.Optional_is_optional = true;
        this.img1_progressBar = false;
        this.frontImg_ProgressBar = false;
        this.backImg_progressBar = false;
        this.page = 1;
        this.pdf1 = false;
        this.pdf2 = false;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (window.screen.width <= 768) { // 768px portrait
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
        console.log("mobile", this.mobile);
        if (this.tokenStorage.getAccessToken()) {
            this.apiUniqueKey = new Date().getTime().toString();
            this.loading = true;
            this.customerService.cust(this.apiUniqueKey).subscribe(function (res) {
                _this.loading = false;
                _this.res_ = res;
                if (res['login_required'] == true) {
                    _this.errorPage();
                    return;
                }
                if (res['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey) {
                    _this._snackBar.open('Invalid', 'Error', {
                        duration: 4000,
                    });
                    return;
                }
                if (_this.res_['ProcessVariables']['srDetails']['srType']) {
                    _this.sr_type = _this.res_['ProcessVariables']['srDetails']['srType'];
                }
                else {
                    _this.errorPage();
                    return;
                }
                _this.authorization = res['ProcessVariables']['isAuthorizationRequired'];
                _this.needDocs = res['ProcessVariables']['needDocs'];
                console.log(_this.authorization, _this.needDocs, 'additional options');
                _this.service.srId = res['ProcessVariables']['srId'];
                _this.rejectReasonTxt = res['ProcessVariables']['srDetails']['rejectReason'];
                if (_this.sr_type == 1008) {
                    console.log("in DOB Sr");
                    _this.old_Dob = _this.res_['ProcessVariables']['dobUpdate']['oldDob'] ? _this.res_['ProcessVariables']['dobUpdate']['oldDob'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
                    _this.new_dob = _this.res_['ProcessVariables']['dobUpdate']['newDob'] ? _this.res_['ProcessVariables']['dobUpdate']['newDob'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
                }
                if (_this.sr_type == 1006) {
                    console.log("in email Sr");
                    _this.old_email = _this.res_['ProcessVariables']['emailUpdate']['maskedOldEmail'] ? _this.res_['ProcessVariables']['emailUpdate']['maskedOldEmail'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
                    _this.new_email = _this.res_['ProcessVariables']['emailUpdate']['newEmail'] ? _this.res_['ProcessVariables']['emailUpdate']['newEmail'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
                    if (_this.res_['ProcessVariables']['emailUpdate']['oldEmail'] && _this.res_['ProcessVariables']['emailUpdate']['newEmail']) {
                        console.log("in email");
                        if (_this.res_['ProcessVariables']['emailUpdate']['oldEmail'].toLowerCase() == _this.res_['ProcessVariables']['emailUpdate']['newEmail'].toLowerCase()) {
                            console.log("in email err true");
                            _this.isDuplicate = true;
                            _this.duplicateErrMsg = "New Email ID entered is same as Existing Email ID, Kindly enter different Email ID to proceed.";
                        }
                        else {
                            console.log("in email err false");
                            _this.isDuplicate = false;
                            _this.duplicateErrMsg = "";
                        }
                    }
                }
                if (_this.sr_type == 1007) {
                    console.log("in Mobile Sr");
                    _this.old_mobile_number = _this.res_['ProcessVariables']['custDetails']['mobileNumber'] ? _this.res_['ProcessVariables']['custDetails']['mobileNumber'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
                    _this.new_mobile_number = _this.res_['ProcessVariables']['mobileUpdate']['newMobile'] ? _this.res_['ProcessVariables']['mobileUpdate']['newMobile'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
                }
                _this.getDropDownOptions(_this.sr_type);
            }, function (error) {
                _this._snackBar.open('Server Error', 'Error', {
                    duration: 4000,
                });
                return;
            });
        }
        else {
            this.errorPage();
            return;
        }
    };
    CustomerComponent.prototype.errorMsg = function () {
        this.tokenStorage.clear();
        this.showStatus = false;
        this.loading = false;
    };
    CustomerComponent.prototype.errorPage = function () {
        this.router.navigate(['error']);
        this.tokenStorage.clear();
    };
    CustomerComponent.prototype.onError = function (e, type) {
        if (type == 1) {
            this.frontImg = '';
            this.imgURL2 = '';
        }
        else if (type == 2) {
            this.backImg = '';
            this.imgURL3 = '';
        }
        if (e) {
            alert('got');
            console.log("Error", e);
            this._snackBar.open('Invalid File.', 'Upload Error', {
                duration: 4000,
            });
        }
        this.validationOnAccpt();
    };
    CustomerComponent.prototype.createThumbnail = function (docID, type) {
        var _this = this;
        if (docID != "null") {
            this.loading = true;
            this.mySubscription = this.baseAPIService.getImage(docID).subscribe(function (res) {
                _this.loading = false;
                var unsafeImageUrl = URL.createObjectURL(res);
                var currentImgUrl = _this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
                if (type == 1) {
                    _this.pdfUrl_Front = currentImgUrl['changingThisBreaksApplicationSecurity'];
                    // console.log("currentImgUrlShow", this.pdfUrl_Front);
                }
                if (type == 2) {
                    _this.pdfUrl_Back = currentImgUrl['changingThisBreaksApplicationSecurity'];
                    //console.log("currentImgUrlShow", this.pdfUrl_Back);
                }
                // if(type == 3) {
                //   this.pdfUrl_Back = currentImgUrl['changingThisBreaksApplicationSecurity'];
                //  // console.log("currentImgUrlShow", this.pdfUrl_Back);
                // }
            });
        }
        else {
            this._snackBar.open('Faild to file upload.', 'Upload Error', {
                duration: 4000,
            });
            //this.isDisableBtn = true;
        }
    };
    CustomerComponent.prototype.getDropDownOptions = function (srtype) {
        var _this = this;
        this.loading = true;
        this.customerService.getOptions(srtype).subscribe(function (res) {
            _this.loading = false;
            _this.newarayy = res['ProcessVariables']['validDocList'];
            _this.validUploadMethods = res['ProcessVariables']['validUploadMethods'];
            for (var i = 0; i < _this.newarayy.length; i++) {
                if (!_this.newarayy[i].isPrimary) {
                    _this.docType.push(_this.newarayy[i]);
                }
            }
            // to Check if Docs are Optional or Not , If any doc type is Primary==false than it is optional
            for (var i = 0; i < _this.newarayy.length; i++) {
                if (_this.newarayy[i].isPrimary) {
                    _this.Optional_is_optional = false;
                }
            }
            // For DOB Primary Dropdown
            for (var i = 0; i < _this.newarayy.length; i++) {
                if (_this.newarayy[i].isPrimary) {
                    _this.dob_Primary_Doc.push(_this.newarayy[i]);
                }
            }
            _this.processResopnse();
        }, function (error) {
            _this._snackBar.open('Error in Dropdown list', 'Error', {
                duration: 4000,
            });
            _this.loading = false;
            return;
        });
    };
    CustomerComponent.prototype.Onselect_Dob_ImgPrimary = function (type) {
        this.imgURL = this.imgURL4 = '';
        this.show_DoB_Img = true;
        this.dob_pg_count = type.pageCount;
        this.dob_doc_type = type.docType;
        this.validationOnAccpt();
    };
    CustomerComponent.prototype.Onselect = function (type) {
        this.imgURL2 = this.imgURL3 = '';
        this.showImg = true;
        this.frontImg = this.backImg = '';
        this.otherDocType = type.docType;
        this.pageCount = type.pageCount;
        this.validationOnAccpt();
    };
    CustomerComponent.prototype.alertFoundNoFiles = function () {
        alert("Umm... this is not supposed to happen!");
    };
    CustomerComponent.prototype.dob_Primary_backImg = function () {
        var _this = this;
        if (!this.dob_backimg_Name || !this.img4 || this.dob_pg_count !== 2) {
            this.uploadImg1();
            return;
        }
        this.loading = true;
        this.customerService.uploadImg(this.img4, this.dob_backimg_Name).subscribe(function (res) {
            _this.loading = false;
            if (res['login_required'] == true) {
                _this.errorPage();
                return;
            }
            _this.img_id4 = res['info']['id'];
            _this.dob_backimg_Name = res['info']['filename'];
            _this.uploadImg1();
        }, function (error) {
            _this.loading = false;
            _this._snackBar.open(_this.imgError, 'Image Error', {
                duration: 4000,
            });
            return;
        });
    };
    CustomerComponent.prototype.uploadImg1 = function () {
        var _this = this;
        // 1nd Image
        if (!this.panImgName || !this.img1) {
            this.uploadImg2();
            return;
        }
        this.loading = true;
        console.log('Caught');
        this.customerService.uploadImg(this.img1, this.panImgName).subscribe(function (event) {
            console.log('My progress2'); // new code check response progresss to show progress bar
            _this.img1_progressBar = true;
            console.log("uploadToServer_Back", event);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                    _this.progressPer = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.progressPer + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response:
                    var res = event.body;
                    console.log('file upload successfully !!!', event.body);
                    setTimeout(function () {
                        _this.loading = false;
                        _this.progressPer = 0;
                        _this.img1_progressBar = false;
                    }, 100);
                    // console.log("uploadToServer_Back", res);
                    // this.img_id2 = res['info']['id'];
                    // this.frontImg = res['info']['filename'];
                    //this.isDisableBtn = false;
                    if (_this.pdf2) {
                        _this.createThumbnail(res['info']['id'], 2);
                    }
            }
        }, function (error) {
            _this.loading = false;
            _this._snackBar.open(_this.imgError, 'Image Error', {
                duration: 4000,
            });
            return;
        }
        // res => {
        //   this.loading = false;
        //   if (res['login_required'] == true) {
        //     this.errorPage();
        //     return;
        //   }
        //   this.img_upload_status = res['ok'];
        //   this.img_id = res['info']['id'];
        //   this.panImgName = res['info']['filename'];
        //   this.uploadImg2();
        // }, error => {
        //   this.loading = false;
        //   this._snackBar.open(this.imgError, 'Image Error', {
        //     duration: 4000,
        //   });
        //   return;
        // }
        );
    };
    CustomerComponent.prototype.uploadImg2 = function () {
        var _this = this;
        // 2nd Image
        if (!this.frontImg || !this.img2) {
            if (this.pageCount == 1) {
                this.accept();
            }
            else {
                this.uploadImg3();
                this.fileCount++;
            }
            return;
        }
        this.loading = true;
        this.customerService.uploadImg(this.img2, this.frontImg).subscribe(function (event) {
            console.log('My progress1'); // new code check response progresss to show progress bar
            _this.frontImg_ProgressBar = true;
            console.log("uploadToServer_Back", event);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                    _this.progressPer = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.progressPer + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response:
                    var res = event.body;
                    console.log('file upload successfully !!!', event.body);
                    setTimeout(function () {
                        _this.loading = false;
                        _this.progressPer = 0;
                        _this.frontImg_ProgressBar = false;
                    }, 100);
                    if (res['login_required'] == true) {
                        _this.errorPage();
                        return;
                    }
                    _this.img_upload_status2 = res['ok'];
                    _this.img_id2 = res['info']['id'];
                    _this.frontImg = res['info']['filename'];
                    _this.uploadImg3();
                // 
                // console.log("uploadToServer_Back", res);
                // this.id_identify_back_img = res['info']['id'];
                // this.identify_backImage = res['info']['filename'];
                // this.isDisableBtn = false;
                // if (this.isPdf_2) {
                //   this.createThumbnail(res['info']['id'], 3);
                // }
            }
        }, function (error) {
            _this.loading = false;
            _this._snackBar.open(_this.imgError, 'Image Error', {
                duration: 4000,
            });
            return;
        }
        // res => {
        //   this.loading = false;
        //   if (res['login_required'] == true) {
        //     this.errorPage();
        //     return;
        //   }
        //   this.img_upload_status2 = res['ok'];
        //   this.img_id2 = res['info']['id'];
        //   this.frontImg = res['info']['filename'];
        //   this.uploadImg3()
        // }, error => {
        //   this.loading = false;
        //   this._snackBar.open(this.imgError, 'Image Error', {
        //     duration: 4000,
        //   });
        //   return;
        // }
        );
    };
    CustomerComponent.prototype.uploadImg3 = function () {
        var _this = this;
        // 3rd Image
        if (this.pageCount == 2 && !this.backImg || !this.img3) {
            this.accept();
            this.fileCount++;
            return;
        }
        this.loading = true;
        this.customerService.uploadImg(this.img3, this.backImg).subscribe(function (event) {
            console.log('My progress'); // new code check response progresss to show progress bar
            _this.backImg_progressBar = true;
            console.log("uploadToServer_Back", event);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                    _this.progressPer = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.progressPer + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response:
                    var res = event.body;
                    console.log('file upload successfully !!!', event.body);
                    setTimeout(function () {
                        _this.loading = false;
                        _this.progressPer = 0;
                        _this.backImg_progressBar = false;
                    }, 100);
                    _this.loading = false;
                    if (res['login_required'] == true) {
                        _this.errorPage();
                        return;
                    }
                    _this.backImg_status = res['ok'];
                    _this.img_id3 = res['info']['id'];
                    _this.backImg = res['info']['filename'];
                    _this.accept();
                // 
                // console.log("uploadToServer_Back", res);
                // this.id_identify_back_img = res['info']['id'];
                // this.identify_backImage = res['info']['filename'];
                // this.isDisableBtn = false;
                // if (this.isPdf_2) {
                //   this.createThumbnail(res['info']['id'], 3);
                // }
            }
        }, function (error) {
            _this.loading = false;
            _this._snackBar.open(_this.imgError, 'Image Error', {
                duration: 4000,
            });
            return;
        }
        // res => {
        //   this.loading = false;
        //   if (res['login_required'] == true) {
        //     this.errorPage();
        //     return;
        //   }
        //   this.backImg_status = res['ok'];
        //   this.img_id3 = res['info']['id'];
        //   this.backImg = res['info']['filename'];
        //   this.accept();
        // }, error => {
        //   this.loading = false;
        //   this._snackBar.open(this.imgError, 'Image Error', {
        //     duration: 4000,
        //   });
        //   return;
        // }
        );
    };
    // check invalid img format and throw error msg
    CustomerComponent.prototype.inValidImg = function (files) {
        // console.log(files)
        var temp = files.name.toString().split(".");
        var extension = temp[temp.length - 1].toLowerCase();
        console.log(extension);
        if (extension != "pdf" && extension != "jpg" && extension != "jpeg" && extension != "gif" && extension != "png" && extension != "jpe" && extension != "bmp" && extension != "jfif") {
            this._snackBar.open('Upload only .png, .jpeg, .jpg, .jpe, .jfif, .gif, .bmp or .pdf', 'Upload Error', {
                duration: 4000,
            });
            return;
        }
    };
    CustomerComponent.prototype.openPdf = function (url) {
        console.log("Opening", url);
        window.open(url);
    };
    CustomerComponent.prototype.onImageLoaded = function (e, type) {
        console.log("on load", e);
        if (e['type'] == 'load') {
            if (type == 1) {
                this.uploadToServer_Default();
            }
            if (type == 2) {
                this.uploadToServer_back();
            }
            if (type == 3) {
                //this.uploadToServer_Back();
            }
        }
    };
    // for Front Image 
    CustomerComponent.prototype.uploadToServer_Default = function () {
        var _this = this;
        console.log(this.front_file, 'uploadserver');
        this.loading = false;
        this.mySubscription = this.customerService.uploadImg(this.front_file[0], this.front_file[0].name).subscribe(function (event) {
            // this.isDefault = true;
            console.log("uploadToServer", event);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                    _this.progressPer = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.progressPer + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response:
                    var res = event.body;
                    console.log('file upload successfully !!!', event.body);
                    setTimeout(function () {
                        _this.loading = false;
                        _this.progressPer = 0;
                        //this.isDefault = false;
                    }, 100);
                    console.log("uploadToServer", res);
                    _this.img_id2 = res['info']['id'];
                    _this.frontImg = res['info']['filename'];
                    if (_this.pdf1) {
                        console.log(res['info']['id'], 1, 'docID');
                        _this.createThumbnail(res['info']['id'], 1);
                    }
                //this.isDisableBtn = false;
            }
        }, function (error) {
            _this.loading = false;
            console.log('error', error);
            _this.progressPer = 0;
            // this.isDefault = false;
            _this.img_id2 = '';
            _this.frontImg = '';
            _this.pdf1 = false;
            _this._snackBar.open(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG, 'Error', {
                duration: 4000,
            });
            return;
        });
        // Old Code 
        //   res => {
        //     this.spinner.hide();
        //     console.log("uploadToServer_Default", res);
        //     this.id_primary_front_img = res['info']['id'];
        //     this.front_primary_name = res['info']['filename'];
        //     if(this.isPdf){
        //       this.createThumbnail(res['info']['id'], 1);
        //     }
        //     this.isDisableBtn = false;
        //   }, error => {
        //     this.spinner.hide();
        //     this.img_name = '';
        //     this.firstImage = '';
        //     this.isPdf = false;
        //     this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
        //     return;
        //   }
        // )
    };
    CustomerComponent.prototype.uploadToServer_back = function () {
        var _this = this;
        console.log(this.back_file, 'uploadserver');
        this.loading = false;
        this.mySubscription = this.customerService.uploadImg(this.back_file[0], this.back_file[0].name).subscribe(function (event) {
            // this.isDefault = true;
            console.log("uploadToServer", event);
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].UploadProgress:
                    _this.progressPer = Math.round(event.loaded / event.total * 100);
                    console.log("Uploaded! " + _this.progressPer + "%");
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpEventType"].Response:
                    var res = event.body;
                    console.log('file upload successfully !!!', event.body);
                    setTimeout(function () {
                        _this.loading = false;
                        _this.progressPer = 0;
                        //this.isDefault = false;
                    }, 100);
                    console.log("uploadToServer", res);
                    _this.img_id3 = res['info']['id'];
                    _this.backImg = res['info']['filename'];
                    if (_this.pdf1) {
                        console.log(res['info']['id'], 1, 'docID');
                        _this.createThumbnail(res['info']['id'], 2);
                    }
                //this.isDisableBtn = false;
            }
        }, function (error) {
            _this.loading = false;
            console.log('error', error);
            _this.progressPer = 0;
            // this.isDefault = false;
            _this.img_id3 = '';
            _this.backImg = '';
            _this.pdf2 = false;
            _this._snackBar.open(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG, 'Error', {
                duration: 4000,
            });
            return;
        });
        // Old Code 
        //   res => {
        //     this.spinner.hide();
        //     console.log("uploadToServer_Default", res);
        //     this.id_primary_front_img = res['info']['id'];
        //     this.front_primary_name = res['info']['filename'];
        //     if(this.isPdf){
        //       this.createThumbnail(res['info']['id'], 1);
        //     }
        //     this.isDisableBtn = false;
        //   }, error => {
        //     this.spinner.hide();
        //     this.img_name = '';
        //     this.firstImage = '';
        //     this.isPdf = false;
        //     this.authService.alertToUser(AlertMessages.SOMETHING_WRONG);
        //     return;
        //   }
        // )
    };
    CustomerComponent.prototype.back_file = function (back_file, arg1) {
        throw new Error("Method not implemented.");
    };
    CustomerComponent.prototype.defaultImgCall = function () {
        this.loading = this.approved = true;
        this.fileCount = 0;
        this.dob_Primary_backImg();
    };
    CustomerComponent.prototype.backImage_Dob = function (files) {
        var _this = this;
        if (this.sr_type == 1008 && this.dob_pg_count == 2) {
            var img = files[0];
            var fileType = img['type'];
            var validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'application/pdf', 'image/tiff'];
            var tiff_PDF = ['application/pdf', 'image/tiff'];
            if (tiff_PDF.includes(fileType)) {
                this.tiffPdf_dob_BackImg = true;
            }
            else {
                this.tiffPdf_dob_BackImg = false;
            }
            this.inValidImg(img);
            // if (!validImageTypes.includes(fileType)) {
            //   this._snackBar.open('Invalid Image', 'Upload Error', {
            //     duration: 4000,
            //   });
            //   return;
            // }
            this.img4 = img;
            this.dob_backimg_Name = img['name'];
            var reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = function (_event) {
                _this.imgURL4 = reader.result;
            };
        }
        this.validationOnAccpt();
    };
    CustomerComponent.prototype.frontImage = function (files) {
        var _this = this;
        this.front_file = files;
        this.loading = true;
        var img = files[0];
        if (Math.floor(img.size / 1024 / 1024) >= 5) {
            this._snackBar.open('File size exceeds 5 MB.', 'Upload Error', {
                duration: 4000,
            });
            img = '';
            this.frontImg = '';
            this.loading = false;
            return;
        }
        var temp = files[0].name.toString().split(".");
        var extension = temp[temp.length - 1].toLowerCase();
        console.log(extension);
        if (extension != "pdf" && extension != "jpg" && extension != "jpeg" && extension != "gif" && extension != "png" && extension != "jpe" && extension != "bmp" && extension != "jfif") {
            this._snackBar.open('Upload only .png, .jpeg, .jpg, .jpe, .jfif, .gif, .bmp or .pdf', 'Upload Error', {
                duration: 4000,
            });
            this.loading = false;
            return;
        }
        else {
            if (extension == 'pdf') {
                this.pdf1 = true;
            }
            else {
                this.pdf1 = false;
            }
            if (this.pdf1) {
                this.uploadToServer_Default();
            }
            this.loading = false;
        }
        // const fileType = img['type'];
        // const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'application/pdf', 'image/tiff'];
        // const tiff_PDF = ['application/pdf', 'image/tiff'];
        // if (tiff_PDF.includes(fileType)) {
        //   this.tiffPdf_front = true;
        // }
        // else {
        //   this.tiffPdf_front = false;
        // }
        this.inValidImg(img);
        // if (!validImageTypes.includes(fileType)) {
        //   this._snackBar.open('Invalid Image', 'Upload Error', {
        //     duration: 4000,
        //   });
        //   return;
        // }
        this.img2 = img;
        this.frontImg = img['name'];
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL2 = reader.result;
        };
        this.validationOnAccpt();
    };
    CustomerComponent.prototype.backImage = function (files) {
        var _this = this;
        this.back_file = files;
        var img = files[0];
        if (Math.floor(files[0].size / 1024 / 1024) >= 5) {
            this._snackBar.open('File size exceeds 5 MB.', 'Upload Error', {
                duration: 4000,
            });
            this.backImg = '';
            return;
        }
        var temp = files[0].name.toString().split(".");
        var extension = temp[temp.length - 1].toLowerCase();
        console.log(extension);
        if (extension != "pdf" && extension != "jpg" && extension != "jpeg" && extension != "gif" && extension != "png" && extension != "jpe" && extension != "bmp" && extension != "jfif") {
            this._snackBar.open('Upload only .png, .jpeg, .jpg, .jpe, .jfif, .gif, .bmp or .pdf', 'Upload Error', {
                duration: 4000,
            });
            this.loading = false;
            return;
        }
        else {
            if (extension == 'pdf') {
                this.pdf2 = true;
            }
            else {
                this.pdf2 = false;
            }
            if (this.pdf2) {
                this.uploadToServer_back();
            }
            this.loading = false;
        }
        this.inValidImg(img);
        // if (!validImageTypes.includes(fileType)) {
        //   this._snackBar.open('Invalid Image', 'Upload Error', {
        //     duration: 4000,
        //   });
        //   return;
        // }
        this.img3 = img;
        this.backImg = img['name'];
        var reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL3 = reader.result;
        };
        this.validationOnAccpt();
    };
    CustomerComponent.prototype.deafaultImage = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        this.img1 = files[0];
        var fileType = this.img1['type'];
        var validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'application/pdf', 'image/tiff'];
        var tiff_PDF = ['application/pdf', 'image/tiff'];
        if (tiff_PDF.includes(fileType)) {
            this.tiffPdf = true;
        }
        else {
            this.tiffPdf = false;
        }
        this.inValidImg(this.img1);
        // if (!validImageTypes.includes(fileType)) {
        //   this._snackBar.open('Invalid Image', 'Upload Error', {
        //     duration: 4000,
        //   });
        //   return;
        // }
        this.panImgName = this.img1['name'];
        var reader = new FileReader();
        console.log("this.panImgName", this.panImgName);
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
        };
    };
    CustomerComponent.prototype.getImgPanResponse = function (doc) {
        var _this = this;
        this.panImgName = doc['docName'];
        this.backImg_status = true;
        this.img_id = doc['docId'];
        this.baseAPIService.getImage(doc['docId']).subscribe(function (res) {
            var unsafeUrl = URL.createObjectURL(res);
            var finalUrl = _this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
            _this.imgURL = finalUrl;
        }, function (error) {
            _this.loading = false;
            _this._snackBar.open(_this.imgError, 'Image Error', {
                duration: 4000,
            });
            return;
        });
    };
    CustomerComponent.prototype.getImg2response = function (doc) {
        var _this = this;
        this.frontImg = doc['docName'];
        this.backImg_status = true;
        this.img_id2 = doc['docId'];
        this.baseAPIService.getImage(doc['docId']).subscribe(function (res) {
            var unsafeUrl = URL.createObjectURL(res);
            var finalUrl = _this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
            _this.imgURL2 = finalUrl;
        }, function (error) {
            _this.loading = false;
            return;
        });
    };
    CustomerComponent.prototype.getImg3response = function (doc) {
        var _this = this;
        this.backImg = doc['docName'];
        this.backImg_status = true;
        this.img_id3 = doc['docId'];
        this.baseAPIService.getImage(doc['docId']).subscribe(function (res) {
            var unsafeUrl = URL.createObjectURL(res);
            var finalUrl = _this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
            _this.imgURL3 = finalUrl;
        }, function (error) {
            _this.loading = false;
            return;
        });
    };
    CustomerComponent.prototype.getDob_primary_BackImg = function (doc) {
        var _this = this;
        this.dob_backimg_Name = doc['docName'];
        this.img_id4 = doc['docId'];
        this.baseAPIService.getImage(doc['docId']).subscribe(function (res) {
            if (res['login_required'] == true) {
                _this.errorPage();
                _this.loading = false;
                return;
            }
            var unsafeUrl = URL.createObjectURL(res);
            var finalUrl = _this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
            _this.imgURL4 = finalUrl;
        }, function (error) {
            _this.loading = false;
            return;
        });
    };
    CustomerComponent.prototype.processResopnse = function () {
        // if NeedDocs are not need then accept button will enables
        if (!this.needDocs) {
            console.log('Enabled');
            this.enableBtn = true;
        }
        var doc = this.res_['ProcessVariables']['docs'] || [];
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
            }
            else {
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
        var cust_details = this.res_['ProcessVariables']['custDetails'];
        var cust_id = cust_details['maskedCustId'];
        var srType = this.res_['ProcessVariables']['srDetails']['srName'];
        var old_pan_number = this.res_['ProcessVariables']['panUpdate']['oldPan'] ? this.res_['ProcessVariables']['panUpdate']['oldPan'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
        var new_pan_number = this.res_['ProcessVariables']['panUpdate']['newPan'] ? this.res_['ProcessVariables']['panUpdate']['newPan'] : _app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].NA_BANK_MSG;
        this.panMatchPercentage = parseFloat(this.res_['ProcessVariables']['panUpdate']['matchPer']).toString() ? parseFloat(this.res_['ProcessVariables']['panUpdate']['matchPer']).toString() : parseFloat('0.0');
        this.matchLevel = this.res_['ProcessVariables']['panUpdate']['matchLevel'];
        this.checkSamePAN();
        console.log("old pan", this.res_['ProcessVariables']['panUpdate']['oldPan'], "level", this.matchLevel);
        this.responses.push({ 'cust_id': cust_id, 'srType': srType, 'old_pan_number': old_pan_number, 'new_pan_number': new_pan_number });
    };
    //check name match on pan is same or different in NSDL
    CustomerComponent.prototype.checkPanMatchLevel = function () {
        if (this.matchLevel) {
            if (this.matchLevel.toLowerCase() == 'low') {
                console.log("Level is Low");
                this.callDalog("Dear Customer, name fetched from NSDL is different from what is maintained in the Bank records. Kindly visit the nearest branch with valid identity documents.");
            }
            else if (this.matchLevel.toLowerCase() == 'medium') {
                console.log("Level is medium");
                this.isDuplicate = false;
                this.duplicateErrMsg = "";
            }
            else if (this.matchLevel.toLowerCase() == 'high') {
                console.log("Level is High");
                this.enableBtn = true;
                this.isDuplicate = true;
                this.duplicateErrMsg = "";
            }
        }
    };
    // check old PAN & new PAN is same or not
    CustomerComponent.prototype.checkSamePAN = function () {
        if (this.res_['ProcessVariables']['panUpdate']['oldPan'] && this.res_['ProcessVariables']['panUpdate']['newPan']) {
            console.log("in Pan");
            if (this.res_['ProcessVariables']['panUpdate']['oldPan'].toLowerCase() == this.res_['ProcessVariables']['panUpdate']['newPan'].toLowerCase()) {
                console.log("in pan err true");
                this.isDuplicate = true;
                this.duplicateErrMsg = "New PAN entered is same as Existing PAN, Kindly enter different PAN to proceed.";
                this.enableBtn = false;
            }
            else {
                console.log("in pan err false");
                this.checkPanMatchLevel();
            }
        }
    };
    CustomerComponent.prototype.accept = function () {
        var _this = this;
        this.loading = true;
        if (this.fileCount > 1) {
            this.alertFoundNoFiles();
        }
        this.service.accptRejct = this.approved;
        this.apiUniqueKey = new Date().getTime().toString();
        var acceptData = {
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
        };
        console.log(acceptData, 'accpted data');
        this.service.getDoc_srtype_details(acceptData);
        // If authorixation is True then it will show authorization options
        if (this.authorization) {
            // this.loading = true;
            this.router.navigate(['confirm-request']);
            return;
        }
        this.loading = true;
        this.customerService.acceptApi(acceptData)
            .subscribe(function (res) {
            _this.loading = false;
            if (res['login_required'] == true) {
                _this.errorPage();
                return;
            }
            if (res['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey) {
                _this._snackBar.open('Invalid', 'Error', {
                    duration: 4000,
                });
                return;
            }
            var Error = res['Error'];
            if (Error == 1) {
                _this.errorPage();
                return;
            }
            var accept_status = res['ProcessVariables']['response'][0]['statusCode'];
            console.log(accept_status, 'status');
            if (accept_status == 200) {
                _this.tokenStorage.clear();
                _this.router.navigate(['result']);
            }
            else {
                _this.errorPage();
                return;
            }
        }, function (error) {
            _this.loading = false;
            _this.errorPage();
            _this._snackBar.open('Error in Server', 'Error', {
                duration: 4000,
            });
            return;
        });
    };
    CustomerComponent.prototype.reject = function () {
        this.approved = false;
        this.reasonOptions();
    };
    CustomerComponent.prototype.reasonOptions = function () {
        var _this = this;
        this.loading = true;
        this.customerService.rejectOptions().subscribe(function (res) {
            _this.loading = false;
            var Error = res['Error'];
            if (Error == 1) {
                _this._snackBar.open('Error in Server', 'Error', {
                    duration: 2000,
                });
                return;
            }
            _this.Rejectedoptions = res['ProcessVariables']['rejectReasons'];
        }, function (error) {
            _this.loading = false;
            _this.errorPage();
            _this._snackBar.open('Error in Server', 'Error', {
                duration: 4000,
            });
            return;
        });
    };
    CustomerComponent.prototype.reasonSelect = function (id) {
        this.reasonId = +id;
    };
    // Reject reason after select option than submit 
    CustomerComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.apiUniqueKey = new Date().getTime().toString();
        this.customerService.reject(this.approved, this.reasonId, this.apiUniqueKey).subscribe(function (res) {
            _this.loading = false;
            if (res['login_required'] == true) {
                _this.errorPage();
                return;
            }
            _this.service.accptRejct = _this.approved;
            var Error = res['Error'];
            if (Error == 1) {
                _this._snackBar.open('Error in Server', 'Error', {
                    duration: 2000,
                });
                return;
            }
            if (res['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey) {
                _this._snackBar.open('Invalid', 'Error', {
                    duration: 4000,
                });
                return;
            }
            _this.router.navigate(['result']);
            _this.tokenStorage.clear();
        }, function (error) {
            _this.loading = false;
            return;
        });
    };
    CustomerComponent.prototype.cancel = function () {
        this.approved = true;
        this.reasonId = 0;
    };
    CustomerComponent.prototype.validationOnAccpt = function () {
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
            }
            else {
                this.enableBtn = false;
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
    };
    CustomerComponent.prototype.callDalog = function (popupMsg) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = '350px';
        dialogConfig.panelClass = 'delete-dialog';
        dialogConfig.data = {
            title: 'Alert',
            message: popupMsg
        };
        var dialogRef = this.dialog.open(_core_components_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_11__["DialogBoxComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.router.navigate(['/']);
            }
        });
    };
    CustomerComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] },
        { type: _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_8__["BaseAPIService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorage"] },
        { type: _customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        })
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/customer/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");





var CustomerService = /** @class */ (function () {
    function CustomerService(baseAPIService, tokenStorage) {
        this.baseAPIService = baseAPIService;
        this.tokenStorage = tokenStorage;
    }
    CustomerService.prototype.cust = function (apiUniqueReqId) {
        var processVariables = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Details.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Details.PROCESS_ID,
            "ProcessVariables": {
                "srId": this.tokenStorage.getSrId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Details.WORKFLOW_ID, processVariables);
    };
    // get Options
    CustomerService.prototype.getOptions = function (srType) {
        var processVariables = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].SrType.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].SrType.PROCESS_ID,
            "ProcessVariables": {
                "srType": srType
            }
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].SrType.WORKFLOW_ID, processVariables);
    };
    // Capture Customer Approval API
    CustomerService.prototype.acceptApi = function (data) {
        var processVariables = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.PROCESS_ID,
            "ProcessVariables": {
                "srId": this.tokenStorage.getSrId(),
                "isApproved": data.approved,
                "documents": [],
                "apiUniqueReqId": data.apiUniqueKey
            }
        };
        // DOB primary backImg
        if (data.img_id4 && data.dob_pg_count == 2) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id4,
                "docName": data.dob_backimg_Name,
                "docType": data.dob_doc_type,
                "isPrimary": true,
                "isFront": false
            });
        }
        // default Image body call
        if (data.img_id && data.sr_type == 1005) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id,
                "docName": data.panImgName,
                "docType": 7,
                "isPrimary": true,
                "isFront": true
            });
        }
        if (data.img_id && data.sr_type == 1008) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id,
                "docName": data.panImgName,
                "docType": data.dob_doc_type,
                "isPrimary": true,
                "isFront": true
            });
        }
        // Front Image Body Call
        if (data.img_id2) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id2,
                "docName": data.frontImg,
                "docType": data.otherDocType,
                "isPrimary": false,
                "isFront": true
            });
        }
        // Back Image Body Call
        if (data.img_id3) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id3,
                "docName": data.backImg,
                "docType": data.otherDocType,
                "isPrimary": false,
                "isFront": false
            });
        }
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.WORKFLOW_ID, processVariables);
    };
    CustomerService.prototype.uploadImg = function (img, fileName) {
        var formData = new FormData();
        var stamp = new Date().getTime().toString();
        fileName = fileName.replace(/[|&;$%@"'<> ()+,{}#\[\]]/g, "");
        formData.append('files', img, stamp + '_' + fileName);
        return this.baseAPIService.postUpload(formData);
    };
    CustomerService.prototype.rejectOptions = function () {
        var processVariables = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Reject.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Reject.PROCESS_ID,
            "ProcessVariables": {},
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Reject.WORKFLOW_ID, processVariables);
    };
    CustomerService.prototype.reject = function (approved, reason, apiUniqueReqId) {
        var processVariables = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.PROCESS_ID,
            "ProcessVariables": {
                "srId": this.tokenStorage.getSrId(),
                "isApproved": approved,
                "rejectReason": reason,
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.WORKFLOW_ID, processVariables);
    };
    CustomerService.ctorParameters = function () { return [
        { type: _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseAPIService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"] }
    ]; };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/directives/mydirect.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/mydirect.directive.ts ***!
  \**************************************************/
/*! exports provided: MydirectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MydirectDirective", function() { return MydirectDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MydirectDirective = /** @class */ (function () {
    function MydirectDirective(el) {
        this.el = el;
    }
    MydirectDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.el.nativeElement.focus();
        }, 100);
    };
    MydirectDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MydirectDirective.prototype, "appAutoFocus", void 0);
    MydirectDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[autsfocus]'
        })
    ], MydirectDirective);
    return MydirectDirective;
}());



/***/ }),

/***/ "./src/app/emailverify/emailverify.component.css":
/*!*******************************************************!*\
  !*** ./src/app/emailverify/emailverify.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex{\n    height: calc(100vh - 64px);\n    display: flex;\n    align-items:baseline;\n    justify-content: center;\n    background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n    color: white;   \n}\n.error{\n    color: red;\n    margin-top: 180px;\n}\n.error-true{\n    color: green;\n    margin-top: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1haWx2ZXJpZnkvZW1haWx2ZXJpZnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixnRkFBZ0Y7SUFDaEYsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsdmVyaWZ5L2VtYWlsdmVyaWZ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4e1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6YmFzZWxpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzBkNWE5NiwgIzRlN2ZhZSwgIzgwYTVjNywgI2IzY2NkZiwgI2VhZjNmOSk7XG4gICAgY29sb3I6IHdoaXRlOyAgIFxufVxuLmVycm9ye1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogMTgwcHg7XG59XG5cbi5lcnJvci10cnVle1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/emailverify/emailverify.component.ts":
/*!******************************************************!*\
  !*** ./src/app/emailverify/emailverify.component.ts ***!
  \******************************************************/
/*! exports provided: EmailverifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverifyComponent", function() { return EmailverifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _emailverify_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emailverify.service */ "./src/app/emailverify/emailverify.service.ts");
/* harmony import */ var _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");












var EmailverifyComponent = /** @class */ (function () {
    function EmailverifyComponent(authService, commonFunctions, emailverifyService, tokenStorage, service, route, router, _snackBar) {
        this.authService = authService;
        this.commonFunctions = commonFunctions;
        this.emailverifyService = emailverifyService;
        this.tokenStorage = tokenStorage;
        this.service = service;
        this.route = route;
        this.router = router;
        this._snackBar = _snackBar;
        this.apiUniqueKey = "";
        this.loading = true;
        this.Showstatus = false;
        this.online = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(false)));
    }
    EmailverifyComponent.prototype.ngOnInit = function () {
        this.getSessiondetails();
    };
    EmailverifyComponent.prototype.sendError = function () {
        this.Showstatus = false;
        this.error = '401';
        this.loading = false;
        return;
    };
    EmailverifyComponent.prototype.getSessiondetails = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            var details = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params.keys, params);
            _this.getsession = details['params'];
            if (!_this.getsession['sessionId']) {
                _this.router.navigate(['404']);
                return;
            }
            _this.tokenStorage.setSessionId(_this.getsession['sessionId']);
            _this.getAuth(); // 1st call 
        });
    };
    EmailverifyComponent.prototype.getAuth = function () {
        var _this = this;
        this.apiUniqueKey = new Date().getTime().toString();
        this.emailverifyService.authEmail(this.apiUniqueKey).subscribe(function (response) {
            _this.loading = false;
            if (response['status']) {
                if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                    if (response['payload']['processResponse']['ProcessVariables']['authRefId']) { // set auth token
                        _this.refId = response['payload']['processResponse']['ProcessVariables']['authRefId'];
                        _this.emailVerify();
                    }
                    else {
                        _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    EmailverifyComponent.prototype.emailVerify = function () {
        var _this = this;
        this.loading = true;
        this.apiUniqueKey = new Date().getTime().toString();
        this.emailverifyService.verifyemail(this.refId, this.apiUniqueKey).subscribe(function (response) {
            _this.loading = false;
            if (response['status']) {
                if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                    if (response['payload']['processResponse']['authentication-token']) { // set auth token
                        _this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
                        _this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
                        _this.verified();
                        // this.router.navigate(['customer']);
                    }
                    else {
                        _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_11__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    EmailverifyComponent.prototype.verified = function () {
        var _this = this;
        this.loading = true;
        this.apiUniqueKey = new Date().getTime().toString();
        this.service.completeSR(this.apiUniqueKey).subscribe(function (res) {
            _this.loading = false;
            if (res['ErrorCode'] == 200) {
                _this.Showstatus = true;
                _this.loading = false;
                return;
            }
            else {
                _this.loading = false;
                _this.emailResult = true;
                return;
            }
        }, function (error) {
            _this.loading = false;
            // this.emailResult = true;
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    EmailverifyComponent.ctorParameters = function () { return [
        { type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
        { type: _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_9__["CommonFunctions"] },
        { type: _emailverify_service__WEBPACK_IMPORTED_MODULE_8__["EmailverifyService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorage"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    EmailverifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emailverify',
            template: __webpack_require__(/*! raw-loader!./emailverify.component.html */ "./node_modules/raw-loader/index.js!./src/app/emailverify/emailverify.component.html"),
            styles: [__webpack_require__(/*! ./emailverify.component.css */ "./src/app/emailverify/emailverify.component.css")]
        })
    ], EmailverifyComponent);
    return EmailverifyComponent;
}());



/***/ }),

/***/ "./src/app/emailverify/emailverify.service.ts":
/*!****************************************************!*\
  !*** ./src/app/emailverify/emailverify.service.ts ***!
  \****************************************************/
/*! exports provided: EmailverifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverifyService", function() { return EmailverifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");





var EmailverifyService = /** @class */ (function () {
    function EmailverifyService(baseAPIService, tokenStorage) {
        this.baseAPIService = baseAPIService;
        this.tokenStorage = tokenStorage;
    }
    EmailverifyService.prototype.authEmail = function (apiUniqueReqId) {
        var body = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_init_email.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_init_email.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.getAuthTokenPost(body);
    };
    EmailverifyService.prototype.verifyemail = function (refid, apiUniqueReqId) {
        var body = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_valid_email.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_valid_email.PROCESS_ID,
            "ProcessVariables": {
                "authRefId": refid,
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.validateAuthPost(body);
    };
    EmailverifyService.ctorParameters = function () { return [
        { type: _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorage"] }
    ]; };
    EmailverifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EmailverifyService);
    return EmailverifyService;
}());



/***/ }),

/***/ "./src/app/errorpage/errorpage.component.scss":
/*!****************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  height: calc(100vh - 64px);\n  display: flex;\n  align-items: baseline;\n  justify-content: center;\n  background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n  color: white;\n}\n\n.error {\n  color: #c4261d;\n  margin-top: 180px;\n}\n\n.d-flex-c {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcGl5by9EZXNrdG9wL1NELVByb2plY3QveWJsLXNkY3NzL3NyYy9hcHAvZXJyb3JwYWdlL2Vycm9ycGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXJyb3JwYWdlL2Vycm9ycGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnRkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9lcnJvcnBhZ2UvZXJyb3JwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpO1xuICAgIGNvbG9yOiB3aGl0ZTsgICBcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogI2M0MjYxZDtcbiAgICBtYXJnaW4tdG9wOiAxODBweDtcbn1cblxuLmQtZmxleC1je1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59IiwiLmQtZmxleCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGQ1YTk2LCAjNGU3ZmFlLCAjODBhNWM3LCAjYjNjY2RmLCAjZWFmM2Y5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogI2M0MjYxZDtcbiAgbWFyZ2luLXRvcDogMTgwcHg7XG59XG5cbi5kLWZsZXgtYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/errorpage/errorpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/errorpage/errorpage.component.ts ***!
  \**************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! raw-loader!./errorpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.scss */ "./src/app/errorpage/errorpage.component.scss")]
        })
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/mobile-verify/mobile-verify.component.css":
/*!***********************************************************!*\
  !*** ./src/app/mobile-verify/mobile-verify.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-section {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    overflow: auto;\n    background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n    text-align: center;\n    color: #9b9b9b;\n    padding: 3em;\n}\n\n.login-page-inner {\n    width: 100%;\n}\n\n.logo-image {\n    margin: 0px 0 20px;\n}\n\n.form-card {\n    max-width: 500px;\n    padding: 21px 30px;\n    border-radius: 5px;\n}\n\n.form-container>* {\n    width: 100%;\n}\n\n.error {\n    color: red;\n    margin-top: 180px;\n}\n\n.error-true {\n    color: green;\n    margin-top: 180px;\n}\n\n.form-btn {\n    margin: 15px 0 5px;\n}\n\n.copyright-text {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    left: 0;\n    color: #8bb1ce;\n    font-size: 14px;\n    right:0;\n}\n\n.d-flex{\n    height: calc(100vh - 64px);\n    display: flex;\n    align-items:baseline;\n    justify-content: center;\n    background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n    color: white;   \n}\n\n.error{\n    color: red;\n    margin-top: 180px;\n}\n\n.mat-icon.material-icons.login-icon {\n    background: url('login-icon-default.png') 0 0 no-repeat;\n    width: 20px;\n    height: 23px;\n    display: inline-block;\n}\n\n.mat-focused .mat-icon.material-icons.login-icon {\n    background: url('login-icon.png') 0 0 no-repeat;\n}\n\n:host /deep/ .mat-form-field-appearance-legacy .mat-form-field-infix {\n    position: relative;\n    top: -6px;\n}\n\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n\n.form-container>* {\n    width: 100%;\n}\n\n.mat-icon.material-icons {\n    margin-right: 15px;\n}\n\n.form-card {\n    max-width: 500px;\n    padding: 21px 30px;\n    border-radius: 5px;\n}\n\n.form-btn {\n    margin: 15px 0 5px;\n}\n\n.logo-image {\n    margin: 0px 0 20px;\n}\n\n.form-container .mat-form-field {\n    margin: 15px 0 5px;\n}\n\n.login-page-inner {\n    width: 100%;\n}\n\n.password-icon,\n.login-icon,\n.password--show-icon {\n    position: relative;\n    top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9iaWxlLXZlcmlmeS9tb2JpbGUtdmVyaWZ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsTUFBTTtJQUNOLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0ZBQWdGO0lBQ2hGLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0lBQ1AsY0FBYztJQUNkLGVBQWU7SUFDZixPQUFPO0FBQ1g7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsZ0ZBQWdGO0lBQ2hGLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksdURBQXlFO0lBQ3pFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0NBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0E7OztJQUdJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9tb2JpbGUtdmVyaWZ5L21vYmlsZS12ZXJpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzBkNWE5NiwgIzRlN2ZhZSwgIzgwYTVjNywgI2IzY2NkZiwgI2VhZjNmOSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIHBhZGRpbmc6IDNlbTtcbn1cblxuLmxvZ2luLXBhZ2UtaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9nby1pbWFnZSB7XG4gICAgbWFyZ2luOiAwcHggMCAyMHB4O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDIxcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lcj4qIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi10b3A6IDE4MHB4O1xufVxuXG4uZXJyb3ItdHJ1ZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIG1hcmdpbi10b3A6IDE4MHB4O1xufVxuXG4uZm9ybS1idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDVweDtcbn1cblxuLmNvcHlyaWdodC10ZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgY29sb3I6ICM4YmIxY2U7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHJpZ2h0OjA7XG59XG4uZC1mbGV4e1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6YmFzZWxpbmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzBkNWE5NiwgIzRlN2ZhZSwgIzgwYTVjNywgI2IzY2NkZiwgI2VhZjNmOSk7XG4gICAgY29sb3I6IHdoaXRlOyAgIFxufVxuLmVycm9ye1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogMTgwcHg7XG59XG5cbi5tYXQtaWNvbi5tYXRlcmlhbC1pY29ucy5sb2dpbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1pY29uLWRlZmF1bHQucG5nKSAwIDAgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjNweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYXQtZm9jdXNlZCAubWF0LWljb24ubWF0ZXJpYWwtaWNvbnMubG9naW4taWNvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4taWNvbi5wbmcpIDAgMCBuby1yZXBlYXQ7XG59XG5cbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNnB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXG4gIG1hcmdpbjogMDsgXG59XG5cbi5mb3JtLWNvbnRhaW5lcj4qIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1pY29uLm1hdGVyaWFsLWljb25zIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5mb3JtLWNhcmQge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZzogMjFweCAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm0tYnRuIHtcbiAgICBtYXJnaW46IDE1cHggMCA1cHg7XG59XG5cbi5sb2dvLWltYWdlIHtcbiAgICBtYXJnaW46IDBweCAwIDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogMTVweCAwIDVweDtcbn1cblxuLmxvZ2luLXBhZ2UtaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5wYXNzd29yZC1pY29uLFxuLmxvZ2luLWljb24sXG4ucGFzc3dvcmQtLXNob3ctaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mobile-verify/mobile-verify.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/mobile-verify/mobile-verify.component.ts ***!
  \**********************************************************/
/*! exports provided: MobileVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyComponent", function() { return MobileVerifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _mobile_verify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-verify.service */ "./src/app/mobile-verify/mobile-verify.service.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");










var MobileVerifyComponent = /** @class */ (function () {
    function MobileVerifyComponent(authService, commonFunctions, formBuilder, tokenStorage, mobileVerifyService, router, route, service) {
        this.authService = authService;
        this.commonFunctions = commonFunctions;
        this.formBuilder = formBuilder;
        this.tokenStorage = tokenStorage;
        this.mobileVerifyService = mobileVerifyService;
        this.router = router;
        this.route = route;
        this.service = service;
        this.loading = true;
        this.otpPattern = /^[0-9]{6}$/;
        this.successMsg = false;
        this.errorMsg = false;
        this.errorstatus = false;
        this.apiUniqueKey = "";
    }
    MobileVerifyComponent.prototype.ngOnInit = function () {
        this.otpLoginForm = this.formBuilder.group({
            mobileOTP: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.otpPattern)
                ]
            ]
        });
        this.getSessiondetails();
    };
    // this gets from url
    MobileVerifyComponent.prototype.getSessiondetails = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            var details = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params.keys, params);
            _this.getsession = details['params'];
            if (!_this.getsession['sessionId']) {
                _this.router.navigate(['404']);
                return;
            }
            _this.tokenStorage.setSessionId(_this.getsession['sessionId']);
            _this.getAuth(); // 1st call 
        });
    };
    MobileVerifyComponent.prototype.sendError = function () {
        this.error = '401';
    };
    MobileVerifyComponent.prototype.succes = function () {
        this.successMsg = true;
    };
    // On OTP validation
    MobileVerifyComponent.prototype.keyPress = function (event) {
        this.errorstatus = false;
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 6 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    // 1st call auth call
    MobileVerifyComponent.prototype.getAuth = function () {
        var _this = this;
        this.apiUniqueKey = new Date().getTime().toString();
        this.mobileVerifyService.getAuthMobile(this.apiUniqueKey).subscribe(function (response) {
            _this.loading = false;
            if (response['status']) {
                if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                    if (response['payload']['processResponse']['ProcessVariables']['authRefId']) { // set auth token
                        _this.refId = response['payload']['processResponse']['ProcessVariables']['authRefId'];
                    }
                    else {
                        _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    MobileVerifyComponent.prototype.inputValidator = function (event) {
        var pattern = /^[0-9]*$/;
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
            // invalid character, prevent input
        }
        else {
            if (event.target.value.length == 6) {
                this.submitOtp();
            }
        }
    };
    MobileVerifyComponent.prototype.getMobileOTPErrorMessage = function () {
        var formCntrl = this.otpLoginForm.controls;
        return formCntrl.mobileOTP.hasError('required') ? 'Please enter the OTP sent on your registered mobile.' :
            formCntrl.mobileOTP.hasError('maxlength') ? 'Only 6 digit OTP allowed.' :
                formCntrl.mobileOTP.hasError('minlength') ? 'Enter 6 digit OTP.' :
                    '';
    };
    MobileVerifyComponent.prototype.submitOtp = function () {
        var _this = this;
        this.loading = true;
        this.apiUniqueKey = new Date().getTime().toString();
        this.mobileVerifyService.verifyMobileOtp(this.refId, this.otpLoginForm.controls.mobileOTP.value, this.apiUniqueKey).subscribe(function (response) {
            _this.loading = false;
            if (response['status']) {
                if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                    if (response['payload']['processResponse']['authentication-token']) { // set auth token
                        _this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
                        _this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
                        _this.mobileTokenVerify();
                        // this.router.navigate(['customer']);
                    }
                    else {
                        _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_9__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    MobileVerifyComponent.prototype.mobileTokenVerify = function () {
        var _this = this;
        this.apiUniqueKey = new Date().getTime().toString();
        this.loading = true;
        this.service.completeSR(this.apiUniqueKey).subscribe(function (res) {
            _this.loading = false;
            if (res['ErrorCode'] == 200) {
                _this.succes();
                return;
            }
            else {
                _this.commonFunctions.showErrorPage();
                return;
            }
        }, function (error) {
            _this.loading = true;
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    MobileVerifyComponent.ctorParameters = function () { return [
        { type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_7__["CommonFunctions"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"] },
        { type: _mobile_verify_service__WEBPACK_IMPORTED_MODULE_4__["MobileVerifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    MobileVerifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-verify',
            template: __webpack_require__(/*! raw-loader!./mobile-verify.component.html */ "./node_modules/raw-loader/index.js!./src/app/mobile-verify/mobile-verify.component.html"),
            styles: [__webpack_require__(/*! ./mobile-verify.component.css */ "./src/app/mobile-verify/mobile-verify.component.css")]
        })
    ], MobileVerifyComponent);
    return MobileVerifyComponent;
}());



/***/ }),

/***/ "./src/app/mobile-verify/mobile-verify.service.ts":
/*!********************************************************!*\
  !*** ./src/app/mobile-verify/mobile-verify.service.ts ***!
  \********************************************************/
/*! exports provided: MobileVerifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileVerifyService", function() { return MobileVerifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");





var MobileVerifyService = /** @class */ (function () {
    function MobileVerifyService(baseAPIService, tokenStorage) {
        this.baseAPIService = baseAPIService;
        this.tokenStorage = tokenStorage;
    }
    MobileVerifyService.prototype.getAuthMobile = function (apiUniqueReqId) {
        var body = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_init_mobile.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_init_mobile.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.getAuthTokenPost(body);
    };
    // Mobile OTP verify
    MobileVerifyService.prototype.verifyMobileOtp = function (refid, otp, apiUniqueReqId) {
        var body = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_valid_mobile.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_4__["APIConstants"].Auth_valid_mobile.PROCESS_ID,
            "ProcessVariables": {
                "authRefId": refid,
                "userOtp": otp,
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.validateAuthPost(body);
    };
    MobileVerifyService.ctorParameters = function () { return [
        { type: _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseAPIService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorage"] }
    ]; };
    MobileVerifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MobileVerifyService);
    return MobileVerifyService;
}());



/***/ }),

/***/ "./src/app/otp-page/otp-page.component.css":
/*!*************************************************!*\
  !*** ./src/app/otp-page/otp-page.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container>* {\n    width: 100%;\n}\n\n\n.mat-icon.material-icons {\n    margin-right: 15px;\n}\n\n\n.form-card {\n    max-width: 500px;\n    padding: 21px 30px;\n    border-radius: 5px;\n}\n\n\n.form-btn {\n    margin: 15px 0 5px;\n}\n\n\n.error{\n    color: red;\n    margin-top: 180px;\n}\n\n\n.logo-image {\n    margin: 0px 0 20px;\n}\n\n\n.form-container .mat-form-field {\n    margin: 15px 0 5px;\n}\n\n\n.login-page-inner {\n    width: 100%;\n}\n\n\n.form-section {\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    overflow: auto;\n    background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n    text-align: center;\n    color: #9b9b9b;\n    padding: 3em;\n}\n\n\n.password-icon,\n.login-icon,\n.password--show-icon {\n    position: relative;\n    top: 0px;\n}\n\n\n.copyright-text {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    left: 0;\n    color: #8bb1ce;\n    font-size: 14px;\n    right:0;\n}\n\n\n.resend{\n    color: blue;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n\n.red{\n    color: red;\n    display: -webkit-inline-box;\n    font-size: 13px;\n}\n\n\n.d-flex{\n    height: calc(100vh - 64px);\n    display: flex;\n    align-items:baseline;\n    justify-content: center;\n    background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n    color: white;   \n}\n\n\n:host /deep/ .mat-form-field-appearance-legacy .mat-form-field-infix {\n    position: relative;\n    top: -6px;\n}\n\n\n.show{\n  display: block;\n}\n\n\n@media(max-width:767px) and (orientation : landscape){\n    .copyright-text{\n        position: relative;\n        bottom:-20px;\n    }\n    .form-section{\n        position: relative;\n        padding:1em;\n\n    }\n    .form-card{\n        margin:0 auto;\n    }\n}\n\n\n@media(max-width:767px){\n    .copyright-text {\n        position: relative;\n        margin-top:77px;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwLXBhZ2Uvb3RwLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7O0FBR0E7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFDQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULE1BQU07SUFDTixXQUFXO0lBQ1gsY0FBYztJQUNkLGdGQUFnRjtJQUNoRixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7OztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLE9BQU87SUFDUCxjQUFjO0lBQ2QsZUFBZTtJQUNmLE9BQU87QUFDWDs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUNBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COzs7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixnRkFBZ0Y7SUFDaEYsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7OztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7O0lBRWY7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7O0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vdHAtcGFnZS9vdHAtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyPioge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5tYXQtaWNvbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDIxcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtLWJ0biB7XG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4O1xufVxuLmVycm9ye1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogMTgwcHg7XG59XG5cbi5sb2dvLWltYWdlIHtcbiAgICBtYXJnaW46IDBweCAwIDIwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogMTVweCAwIDVweDtcbn1cblxuLmxvZ2luLXBhZ2UtaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbi5wYXNzd29yZC1pY29uLFxuLmxvZ2luLWljb24sXG4ucGFzc3dvcmQtLXNob3ctaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xufVxuXG4uY29weXJpZ2h0LXRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogIzhiYjFjZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcmlnaHQ6MDtcbn1cbi5yZXNlbmR7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZWR7XG4gICAgY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuLmQtZmxleHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmJhc2VsaW5lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpO1xuICAgIGNvbG9yOiB3aGl0ZTsgICBcbn1cblxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02cHg7XG59XG5cbi5zaG93e1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSl7XG4gICAgLmNvcHlyaWdodC10ZXh0e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTotMjBweDtcbiAgICB9XG4gICAgLmZvcm0tc2VjdGlvbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOjFlbTtcblxuICAgIH1cbiAgICAuZm9ybS1jYXJke1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC5jb3B5cmlnaHQtdGV4dCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLXRvcDo3N3B4O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/otp-page/otp-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/otp-page/otp-page.component.ts ***!
  \************************************************/
/*! exports provided: OtpPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageComponent", function() { return OtpPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _otp_page_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-page.service */ "./src/app/otp-page/otp-page.service.ts");






var OtpPageComponent = /** @class */ (function () {
    function OtpPageComponent(otpPageService, tokenStorage, router, route, _snackBar) {
        this.otpPageService = otpPageService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.route = route;
        this._snackBar = _snackBar;
        this.Showstatus = false;
        this.loading = true;
        this.errorstatus = false;
        this.refIdfail = false;
        this.href = "";
        this.apiUniqueKey = "";
        this.mobileRoute = false;
    }
    OtpPageComponent.prototype.ngOnInit = function () {
        // FOR LOCALHOST
        // if (window.location.pathname == '/t') {
        //   this.mobileRoute = true;
        // }
        //FOR UAT or PROD
        if (window.location.pathname == '/sdcss/d/t') {
            this.mobileRoute = true;
        }
        this.getSessiondetails(); //get session id and all
    };
    OtpPageComponent.prototype.getSessiondetails = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            var details = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params.keys, params);
            _this.getsession = details['params'];
            if (!_this.getsession['sessionId']) {
                _this.errorPage();
                return;
            }
            _this.tokenStorage.setSessionId(_this.getsession['sessionId']);
            _this.getAuth(); // 1st call 
        });
    };
    OtpPageComponent.prototype.resendOtp = function () {
        this.getAuth();
        this._snackBar.open('OTP has been sent you', 'Resend OTP', {
            duration: 4000,
        });
        return;
    };
    OtpPageComponent.prototype.sendError = function () {
        this.tokenStorage.clear();
        this.Showstatus = false;
        this.error = '401';
        this.loading = false;
    };
    OtpPageComponent.prototype.errorPage = function () {
        this.router.navigate(['error']);
        this.tokenStorage.clear();
    };
    // 1st call auth call
    OtpPageComponent.prototype.getAuth = function () {
        var _this = this;
        this.apiUniqueKey = new Date().getTime().toString();
        this.otpPageService.getAuth(this.apiUniqueKey).subscribe(function (res) {
            if (!res['status']) {
                _this.errorPage();
                return;
            }
            if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey) {
                _this._snackBar.open('Invalid Authentication', 'Error', {
                    duration: 4000,
                });
                return;
            }
            _this.Showstatus = res['status'];
            if (!_this.Showstatus || res['login_required'] == true) {
                _this.errorPage();
                return;
            }
            if (res['payload']['processResponse']['ProcessVariables']['authRefId']) {
                _this.refId = res['payload']['processResponse']['ProcessVariables']['authRefId'];
            }
            else {
                _this.errorPage();
                return;
            }
            _this.loading = false;
        }, function (error) {
            _this.errorPage();
            return;
        });
    };
    // On OTP validation
    OtpPageComponent.prototype.keyPress = function (event) {
        this.errorstatus = false;
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 6 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    // Validate Opt with RefID
    OtpPageComponent.prototype.submitOtp = function () {
        var _this = this;
        this.loading = true;
        if (this.otp.length !== 6) {
            this.errorstatus = true;
            this.loading = false;
            return;
        }
        this.otp.toString();
        this.apiUniqueKey = new Date().getTime().toString();
        this.otpPageService.verifyOtp(this.refId, this.otp, this.apiUniqueKey).subscribe(function (res) {
            if (!res['status']) {
                _this.errorPage();
                _this.loading = false;
                return;
            }
            if (res['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey) {
                _this.sendError();
                _this.loading = false;
                return;
            }
            if (res['login_required'] == true) {
                _this.errorPage();
                return;
            }
            if (!res['payload']['processResponse']['ProcessVariables']['isAuthValidated']) {
                _this.errorstatus = true;
                _this.loading = false;
                _this.otp = '';
                return;
            }
            if (res['payload']['processResponse']['authentication-token']) {
                _this.tokenStorage.setAccessToken(res['payload']['processResponse']['authentication-token']);
                _this.tokenStorage.setSrId(res['payload']['processResponse']['ProcessVariables']['srId']);
                _this.router.navigate(['customer']);
                _this.loading = false;
            }
            else {
                _this.errorPage();
                return;
            }
        }, function (error) {
            _this.errorPage();
        });
    };
    OtpPageComponent.ctorParameters = function () { return [
        { type: _otp_page_service__WEBPACK_IMPORTED_MODULE_5__["OtpPageService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    OtpPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp-page',
            template: __webpack_require__(/*! raw-loader!./otp-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/otp-page/otp-page.component.html"),
            styles: [__webpack_require__(/*! ./otp-page.component.css */ "./src/app/otp-page/otp-page.component.css")]
        })
    ], OtpPageComponent);
    return OtpPageComponent;
}());



/***/ }),

/***/ "./src/app/otp-page/otp-page.service.ts":
/*!**********************************************!*\
  !*** ./src/app/otp-page/otp-page.service.ts ***!
  \**********************************************/
/*! exports provided: OtpPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageService", function() { return OtpPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");





var OtpPageService = /** @class */ (function () {
    function OtpPageService(baseAPIService, tokenStorage) {
        this.baseAPIService = baseAPIService;
        this.tokenStorage = tokenStorage;
    }
    OtpPageService.prototype.getAuth = function (apiUniqueReqId) {
        var body = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_3__["APIConstants"].Auth_init_otp.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_3__["APIConstants"].Auth_init_otp.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_3__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.getAuthTokenPost(body);
    };
    OtpPageService.prototype.verifyOtp = function (refid, otp, apiUniqueReqId) {
        var body = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_3__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_3__["APIConstants"].Auth_valid_otp.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_3__["APIConstants"].Auth_valid_otp.PROCESS_ID,
            "ProcessVariables": {
                "authRefId": refid,
                "userOtp": otp,
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.validateAuthPost(body);
    };
    OtpPageService.ctorParameters = function () { return [
        { type: _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"] }
    ]; };
    OtpPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], OtpPageService);
    return OtpPageService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");





var DataService = /** @class */ (function () {
    function DataService(tokenStorage, baseAPIService) {
        this.tokenStorage = tokenStorage;
        this.baseAPIService = baseAPIService;
    }
    DataService.prototype.getAcceptRejectValue = function (val) {
        this.accptRejct = val;
    };
    DataService.prototype.getDoc_srtype_details = function (val) {
        this.objc_details = val;
    };
    //  complete Service request
    DataService.prototype.completeSR = function (apiUniqueReqId) {
        var processVariables = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].CompleteSR.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].CompleteSR.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].CompleteSR.WORKFLOW_ID, processVariables);
    };
    // Get list of Authorization Options
    DataService.prototype.getAuth = function (apiUniqueReqId) {
        var body = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_init_otp.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_init_otp.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "srId": this.tokenStorage.getSrId(),
                // "apiUniqueReqId": apiUniqueReqId,
                "authType": "Authorization",
                "channel": "GN"
            }
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_init_otp.WORKFLOW_ID, body);
    };
    // Capture Customer Approval API
    DataService.prototype.acceptApi = function (data) {
        var apiUniqueKey = new Date().getTime().toString();
        var processVariables = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.PROCESS_ID,
            "ProcessVariables": {
                "srId": this.tokenStorage.getSrId(),
                "isApproved": data.approved,
                "documents": [],
                "apiUniqueReqId": apiUniqueKey
            }
        };
        // DOB primary backImg
        if (data.img_id4 && data.dob_pg_count == 2) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id4,
                "docName": data.dob_backimg_Name,
                "docType": data.dob_doc_type,
                "isPrimary": true,
                "isFront": false
            });
        }
        // default Image body call
        if (data.img_id && data.sr_type == 1005) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id,
                "docName": data.panImgName,
                "docType": 7,
                "isPrimary": true,
                "isFront": true
            });
        }
        if (data.img_id && data.sr_type == 1008) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id,
                "docName": data.panImgName,
                "docType": data.dob_doc_type,
                "isPrimary": true,
                "isFront": true
            });
        }
        // Front Image Body Call
        if (data.img_id2) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id2,
                "docName": data.frontImg,
                "docType": data.otherDocType,
                "isPrimary": false,
                "isFront": true
            });
        }
        // Back Image Body Call
        if (data.img_id3) {
            processVariables.ProcessVariables.documents.push({
                "docId": data.img_id3,
                "docName": data.backImg,
                "docType": data.otherDocType,
                "isPrimary": false,
                "isFront": false
            });
        }
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Accept.WORKFLOW_ID, processVariables);
    };
    DataService.ctorParameters = function () { return [
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"] },
        { type: _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseAPIService"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/stepper/aadhar-card/aadhar-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/stepper/aadhar-card/aadhar-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input_aadhar {\n  width: 450px !important;\n}\n\n@media only screen and (max-width: 768px) {\n  .input_aadhar {\n    width: 100% !important;\n  }\n}\n\n.form-section {\n  position: relative;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100%;\n  overflow: auto;\n  text-align: center;\n  color: #9b9b9b;\n  padding: 3em;\n  /* background-color: cornflowerblue; */\n  /* height: calc(100vh - 250px); */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcGl5by9EZXNrdG9wL1NELVByb2plY3QveWJsLXNkY3NzL3NyYy9hcHAvc3RlcHBlci9hYWRoYXItY2FyZC9hYWRoYXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RlcHBlci9hYWRoYXItY2FyZC9hYWRoYXItY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSTtJQUNDLHNCQUFBO0VDRUg7QUFDRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3N0ZXBwZXIvYWFkaGFyLWNhcmQvYWFkaGFyLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRfYWFkaGFye1xuICAgIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5pbnB1dF9hYWRoYXIge1xuICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIHBhZGRpbmc6IDNlbTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTsgKi9cbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCk7ICovXG59IiwiLmlucHV0X2FhZGhhciB7XG4gIHdpZHRoOiA0NTBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbnB1dF9hYWRoYXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5mb3JtLXNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOWI5YjliO1xuICBwYWRkaW5nOiAzZW07XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlOyAqL1xuICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCk7ICovXG59Il19 */"

/***/ }),

/***/ "./src/app/stepper/aadhar-card/aadhar-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stepper/aadhar-card/aadhar-card.component.ts ***!
  \**************************************************************/
/*! exports provided: AadharCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AadharCardComponent", function() { return AadharCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var AadharCardComponent = /** @class */ (function () {
    function AadharCardComponent() {
        this.hide = true;
        this.formAadhar = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            aadhar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')])
        });
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$")]),
        });
    }
    AadharCardComponent.prototype.ngOnInit = function () {
    };
    // validate and submit
    AadharCardComponent.prototype.onSubmit = function () {
        if (this.formAadhar.valid) {
            console.log('hello');
            this.hide = false;
        }
        else {
            console.log('bello');
            this.hide = true;
        }
    };
    AadharCardComponent.prototype.getOTP = function () {
        if (this.otpForm.valid) {
            console.log('success');
            return;
        }
    };
    AadharCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aadhar-card',
            template: __webpack_require__(/*! raw-loader!./aadhar-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/stepper/aadhar-card/aadhar-card.component.html"),
            styles: [__webpack_require__(/*! ./aadhar-card.component.scss */ "./src/app/stepper/aadhar-card/aadhar-card.component.scss")]
        })
    ], AadharCardComponent);
    return AadharCardComponent;
}());



/***/ }),

/***/ "./src/app/stepper/credit-card/credit-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/stepper/credit-card/credit-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container > * {\n  width: 100%;\n}\n\n.mat-icon.material-icons {\n  margin-right: 15px;\n}\n\n.form-card {\n  max-width: 500px;\n  padding: 21px 30px;\n  border-radius: 5px;\n}\n\n.form-btn {\n  margin: 15px 0 5px;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n.logo-image {\n  margin: 0px 0 20px;\n}\n\n.auth {\n  border-radius: 0px;\n}\n\n.form-container .mat-form-field {\n  margin: 15px 0 5px;\n}\n\n.login-page-inner {\n  width: 100%;\n}\n\n.adfs-button {\n  margin-top: 20px;\n}\n\n.form-section {\n  position: relative;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  width: 100%;\n  overflow: auto;\n  text-align: center;\n  color: #9b9b9b;\n  padding: 3em;\n  height: calc(100vh - 64px);\n  background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n}\n\n.password-icon,\n.login-icon,\n.password--show-icon {\n  position: relative;\n  top: 0px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n@media (max-width: 767px) and (orientation: landscape) {\n  .form-section {\n    position: relative;\n    padding: 1em;\n  }\n\n  .form-card {\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcGl5by9EZXNrdG9wL1NELVByb2plY3QveWJsLXNkY3NzL3NyYy9hcHAvc3RlcHBlci9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3RlcHBlci9jcmVkaXQtY2FyZC9jcmVkaXQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtBQ0VKOztBRENBO0VBQ0ksa0JBQUE7QUNFSjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQUE7RUFDSSxrQkFBQTtBQ0dKOztBREFBO0VBQ0ksV0FBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0ZBQUE7QUNHSjs7QURBQTs7O0VBR0ksa0JBQUE7RUFDQSxRQUFBO0FDR0o7O0FES0E7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FDRkY7O0FES0E7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtFQ0ZOOztFREtFO0lBQ0ksY0FBQTtFQ0ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zdGVwcGVyL2NyZWRpdC1jYXJkL2NyZWRpdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyPioge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWljb24ubWF0ZXJpYWwtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmZvcm0tY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBwYWRkaW5nOiAyMXB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybS1idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDVweDtcbn1cbnRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIH1cblxuLmxvZ28taW1hZ2Uge1xuICAgIG1hcmdpbjogMHB4IDAgMjBweDtcbn1cblxuLmF1dGh7XG4gIGJvcmRlci1yYWRpdXM6IDBweDsgICAgICBcbn1cbi5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbjogMTVweCAwIDVweDtcbn1cblxuLmxvZ2luLXBhZ2UtaW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRmcy1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjOWI5YjliO1xuICAgIHBhZGRpbmc6IDNlbTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGQ1YTk2LCAjNGU3ZmFlLCAjODBhNWM3LCAjYjNjY2RmLCAjZWFmM2Y5KTtcbn1cblxuLnBhc3N3b3JkLWljb24sXG4ubG9naW4taWNvbixcbi5wYXNzd29yZC0tc2hvdy1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG59XG5cbi8vIDpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgdG9wOiAtNnB4O1xuLy8gfVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXG4gIG1hcmdpbjogMDsgXG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpe1xuICAgIC5mb3JtLXNlY3Rpb257XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzoxZW07XG5cbiAgICB9XG4gICAgLmZvcm0tY2FyZHtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG59IiwiLmZvcm0tY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWljb24ubWF0ZXJpYWwtaWNvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5mb3JtLWNhcmQge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBwYWRkaW5nOiAyMXB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm0tYnRuIHtcbiAgbWFyZ2luOiAxNXB4IDAgNXB4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICBtYXJnaW46IDBweCAwIDIwcHg7XG59XG5cbi5hdXRoIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luOiAxNXB4IDAgNXB4O1xufVxuXG4ubG9naW4tcGFnZS1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRmcy1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzliOWI5YjtcbiAgcGFkZGluZzogM2VtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzBkNWE5NiwgIzRlN2ZhZSwgIzgwYTVjNywgI2IzY2NkZiwgI2VhZjNmOSk7XG59XG5cbi5wYXNzd29yZC1pY29uLFxuLmxvZ2luLWljb24sXG4ucGFzc3dvcmQtLXNob3ctaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuZm9ybS1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG5cbiAgLmZvcm0tY2FyZCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/stepper/credit-card/credit-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/stepper/credit-card/credit-card.component.ts ***!
  \**************************************************************/
/*! exports provided: CreditCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardComponent", function() { return CreditCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CreditCardComponent = /** @class */ (function () {
    function CreditCardComponent() {
        this.current_yr = (new Date()).getFullYear();
        this.month = (new Date()).getMonth() - 1;
        this.date = (new Date()).getDate() - 1;
        // for Min max set in datepicker
        this.minDate = new Date(1930, 0, 1);
        this.maxDate = new Date(this.current_yr, this.month, this.date);
        // /
        this.ccLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            creditCard_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]*$')]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            expiry_month: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(0?[1-9]|1[012])$')]),
            expiry_year: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?:(?:19|20)[0-9]{2})')]),
        });
    }
    CreditCardComponent.prototype.ngOnInit = function () {
    };
    CreditCardComponent.prototype.auth = function () {
        alert('Success');
        return;
    };
    CreditCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-card',
            template: __webpack_require__(/*! raw-loader!./credit-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/stepper/credit-card/credit-card.component.html"),
            styles: [__webpack_require__(/*! ./credit-card.component.scss */ "./src/app/stepper/credit-card/credit-card.component.scss")]
        })
    ], CreditCardComponent);
    return CreditCardComponent;
}());



/***/ }),

/***/ "./src/app/stepper/debit-card/debit-card.component.css":
/*!*************************************************************!*\
  !*** ./src/app/stepper/debit-card/debit-card.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container>* {\n    width: 100%;\n}\n\n.mat-icon.material-icons {\n    margin-right: 15px;\n}\n\n.form-card {\n    max-width: 500px;\n    padding: 21px 30px;\n    border-radius: 5px;\n}\n\n.form-btn {\n    margin: 15px 0 5px;\n}\n\n.logo-image {\n    margin: 0px 0 20px;\n}\n\n.form-container .mat-form-field {\n    margin: 15px 0 5px;\n}\n\n.login-page-inner {\n    width: 100%;\n}\n\n.adfs-button {\n    margin-top: 20px;\n}\n\n.form-section {\n    position: relative;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    overflow: auto;\n    /* // background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9); */\n    text-align: center;\n    color: #9b9b9b;\n    padding: 3em;\n}\n\n.password-icon,\n.login-icon,\n.password--show-icon {\n    position: relative;\n    top: 0px;\n}\n\n:host /deep/ .mat-form-field-appearance-legacy .mat-form-field-infix {\n    position: relative;\n    top: -6px;\n}\n\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n\n@media(max-width:767px) and (orientation : landscape){\n    .form-section{\n        position: relative;\n        padding:1em;\n\n    }\n    .form-card{\n        margin:0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcHBlci9kZWJpdC1jYXJkL2RlYml0LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULE1BQU07SUFDTixXQUFXO0lBQ1gsY0FBYztJQUNkLHlGQUF5RjtJQUN6RixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixXQUFXOztJQUVmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdGVwcGVyL2RlYml0LWNhcmQvZGViaXQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyPioge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWljb24ubWF0ZXJpYWwtaWNvbnMge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmZvcm0tY2FyZCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBwYWRkaW5nOiAyMXB4IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybS1idG4ge1xuICAgIG1hcmdpbjogMTVweCAwIDVweDtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICAgIG1hcmdpbjogMHB4IDAgMjBweDtcbn1cblxuLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4O1xufVxuXG4ubG9naW4tcGFnZS1pbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5hZGZzLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZvcm0tc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAvKiAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGQ1YTk2LCAjNGU3ZmFlLCAjODBhNWM3LCAjYjNjY2RmLCAjZWFmM2Y5KTsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM5YjliOWI7XG4gICAgcGFkZGluZzogM2VtO1xufVxuXG4ucGFzc3dvcmQtaWNvbixcbi5sb2dpbi1pY29uLFxuLnBhc3N3b3JkLS1zaG93LWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDBweDtcbn1cblxuOmhvc3QgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02cHg7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24geyBcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBcbiAgbWFyZ2luOiAwOyBcbn1cblxuQG1lZGlhKG1heC13aWR0aDo3NjdweCkgYW5kIChvcmllbnRhdGlvbiA6IGxhbmRzY2FwZSl7XG4gICAgLmZvcm0tc2VjdGlvbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOjFlbTtcblxuICAgIH1cbiAgICAuZm9ybS1jYXJke1xuICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/stepper/debit-card/debit-card.component.ts":
/*!************************************************************!*\
  !*** ./src/app/stepper/debit-card/debit-card.component.ts ***!
  \************************************************************/
/*! exports provided: DebitCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitCardComponent", function() { return DebitCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _stepper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stepper.service */ "./src/app/stepper/stepper.service.ts");
/* harmony import */ var src_app_core_utils_common_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");










var DebitCardComponent = /** @class */ (function () {
    function DebitCardComponent(formBuilder, authService, commonFunctions, stepperService, tokenStorage, router, service) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commonFunctions = commonFunctions;
        this.stepperService = stepperService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.service = service;
        this.hide = true;
    }
    DebitCardComponent.prototype.ngOnInit = function () {
        this.dcLoginForm = this.formBuilder.group({
            cardNumber: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(16)
                ]
            ],
            transPIN: [
                '', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)
                ]
            ]
        });
    };
    DebitCardComponent.prototype.inputValidator = function (event) {
        var pattern = /^[0-9]*$/;
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
            // invalid character, prevent input
        }
    };
    DebitCardComponent.prototype.getDCLoginErrorMessage = function () {
        var formCntrl = this.dcLoginForm.controls;
        return formCntrl.cardNumber.hasError('required') ? 'This field is required.' :
            formCntrl.cardNumber.hasError('minlength') ? 'Enter 16 digit number.' :
                formCntrl.cardNumber.hasError('maxlength') ? 'Only 16 digit number allowed.' :
                    '';
    };
    DebitCardComponent.prototype.getDCLoginPINErrorMessage = function () {
        var formCntrl = this.dcLoginForm.controls;
        return formCntrl.transPIN.hasError('required') ? 'This field is required.' :
            formCntrl.transPIN.hasError('minlength') ? 'Enter 4 digit pin number.' :
                formCntrl.transPIN.hasError('maxlength') ? 'Only 4 digit pin number allowed.' :
                    '';
    };
    DebitCardComponent.prototype.pinEncrption = function (pin, cardno) {
        var PINHexavalue = "0" + pin.toString().length + pin.toString();
        for (var i = 1; i <= (16 - (pin.toString().length) - 2); i++) {
            PINHexavalue += "F";
        }
        var AccountHexavalue = "0000" + cardno.toString().substring(3, 15);
        var encryptedPin = this.xoR_hex(PINHexavalue, AccountHexavalue);
        return (encryptedPin).substr(1, 15);
    };
    DebitCardComponent.prototype.xoR_hex = function (a, b) {
        var res = '';
        var i = a.length;
        var j = b.length;
        while (i-- > 0 && j-- > 0) {
            res = (parseInt(a.charAt(i), 16) ^ parseInt(b.charAt(j), 16)).toString(16) + res;
        }
        return res;
    };
    DebitCardComponent.prototype.dcLogin = function () {
        var _this = this;
        if (this.stepperService.detect_auth == 1) {
            this.dcLogin_for_Authorization();
        }
        else {
            this.cardNumber = this.dcLoginForm.controls.cardNumber.value;
            this.cardPinNumber = this.dcLoginForm.controls.transPIN.value;
            var encPass = this.pinEncrption(this.cardPinNumber, this.cardNumber);
            encPass = '0' + encPass;
            this.loading = true;
            this.apiUniqueKey = new Date().getTime().toString();
            this.stepperService.verifyDetails(2, '', '', this.cardNumber, encPass, '', '', this.apiUniqueKey).subscribe(function (response) {
                _this.loading = false;
                if (response['status']) {
                    if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
                        if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                            if (response['payload']['processResponse']['authentication-token']) { // set auth token
                                _this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
                                _this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
                                _this.router.navigate(['customer']);
                            }
                            else {
                                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                                _this.commonFunctions.showErrorPage();
                            }
                        }
                        else {
                            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                            _this.commonFunctions.showErrorPage();
                        }
                    }
                    else {
                        _this.authService.alertToUser(response['payload']['processResponse']['ErrorMessage']);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }, function (error) {
                _this.loading = false;
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            });
        }
    };
    DebitCardComponent.prototype.dcLogin_for_Authorization = function () {
        var _this = this;
        this.cardNumber = this.dcLoginForm.controls.cardNumber.value;
        this.cardPinNumber = this.dcLoginForm.controls.transPIN.value;
        var encPass = this.pinEncrption(this.cardPinNumber, this.cardNumber);
        encPass = '0' + encPass;
        this.loading = true;
        this.apiUniqueKey = new Date().getTime().toString();
        this.stepperService.OtpAuthorization(2, '', '', this.cardNumber, encPass, '', '', this.apiUniqueKey).subscribe(function (response) {
            _this.loading = false;
            if (response['Error'] == '0' && response['ErrorCode'] == '200') {
                if (response['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                    _this.upload_doc_service();
                    // this.router.navigate(['result']);
                }
                else {
                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(response['ErrorMessage']);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    DebitCardComponent.prototype.upload_doc_service = function () {
        var _this = this;
        this.loading = true;
        this.service.acceptApi(this.service.objc_details)
            .subscribe(function (res) {
            _this.loading = false;
            if (res['ErrorCode'] == 200) {
                console.log('Got 200');
                _this.tokenStorage.clear();
                _this.router.navigate(['result']);
                return;
            }
            else if (res['login_required'] == true || res['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey || res['Error'] == 1) {
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                console.log('Got 600');
                return;
            }
            else {
                console.log('Got 400');
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
        });
    };
    DebitCardComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
        { type: src_app_core_utils_common_functions__WEBPACK_IMPORTED_MODULE_6__["CommonFunctions"] },
        { type: _stepper_service__WEBPACK_IMPORTED_MODULE_5__["StepperService"] },
        { type: src_app_core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] }
    ]; };
    DebitCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-debit-card',
            template: __webpack_require__(/*! raw-loader!./debit-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/stepper/debit-card/debit-card.component.html"),
            styles: [__webpack_require__(/*! ./debit-card.component.css */ "./src/app/stepper/debit-card/debit-card.component.css")]
        })
    ], DebitCardComponent);
    return DebitCardComponent;
}());



/***/ }),

/***/ "./src/app/stepper/otp-login/otp-login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/stepper/otp-login/otp-login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container>* {\n    width: 100%;\n}\n\n.mat-icon.material-icons {\n    margin-right: 15px;\n}\n\n.form-card {\n    max-width: 500px;\n    padding: 21px 30px;\n    border-radius: 5px;\n}\n\n.form-btn {\n    margin: 15px 0 5px;\n}\n\n.logo-image {\n    margin: 0px 0 20px;\n}\n\n.form-container .mat-form-field {\n    margin: 15px 0 5px;\n}\n\n.login-page-inner {\n    width: 100%;\n}\n\n.adfs-button {\n    margin-top: 20px;\n}\n\n.form-section {\n    position: relative;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    overflow: auto;\n    /* // background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9); */\n    text-align: center;\n    color: #9b9b9b;\n    padding: 3em;\n}\n\n.password-icon,\n.login-icon,\n.password--show-icon {\n    position: relative;\n    top: 0px;\n}\n\n.mat-icon.material-icons.login-icon {\n    background: url('login-icon-default.png') 0 0 no-repeat;\n    width: 20px;\n    height: 23px;\n    display: inline-block;\n}\n\n.mat-focused .mat-icon.material-icons.login-icon {\n    background: url('login-icon.png') 0 0 no-repeat;\n}\n\n:host /deep/ .mat-form-field-appearance-legacy .mat-form-field-infix {\n    position: relative;\n    top: -6px;\n}\n\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n\n@media(max-width:767px) and (orientation : landscape){\n    .form-section {\n        position: relative;\n        padding:1em;\n    }\n\n    .form-card {\n        margin:0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcHBlci9vdHAtbG9naW4vb3RwLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0lBQ04sV0FBVztJQUNYLGNBQWM7SUFDZCx5RkFBeUY7SUFDekYsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksdURBQTRFO0lBQzVFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0NBQW9FO0FBQ3hFOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc3RlcHBlci9vdHAtbG9naW4vb3RwLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXI+KiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtaWNvbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDIxcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtLWJ0biB7XG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4O1xufVxuXG4ubG9nby1pbWFnZSB7XG4gICAgbWFyZ2luOiAwcHggMCAyMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDE1cHggMCA1cHg7XG59XG5cbi5sb2dpbi1wYWdlLWlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZnMtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbi5wYXNzd29yZC1pY29uLFxuLmxvZ2luLWljb24sXG4ucGFzc3dvcmQtLXNob3ctaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xufVxuXG4ubWF0LWljb24ubWF0ZXJpYWwtaWNvbnMubG9naW4taWNvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4taWNvbi1kZWZhdWx0LnBuZykgMCAwIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWF0LWZvY3VzZWQgLm1hdC1pY29uLm1hdGVyaWFsLWljb25zLmxvZ2luLWljb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLWljb24ucG5nKSAwIDAgbm8tcmVwZWF0O1xufVxuXG46aG9zdCAvZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTZweDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxuICBtYXJnaW46IDA7IFxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKXtcbiAgICAuZm9ybS1zZWN0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOjFlbTtcbiAgICB9XG5cbiAgICAuZm9ybS1jYXJkIHtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/stepper/otp-login/otp-login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/stepper/otp-login/otp-login.component.ts ***!
  \**********************************************************/
/*! exports provided: OtpLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpLoginComponent", function() { return OtpLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var src_app_core_utils_common_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var _stepper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stepper.service */ "./src/app/stepper/stepper.service.ts");
/* harmony import */ var src_app_core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");










var OtpLoginComponent = /** @class */ (function () {
    function OtpLoginComponent(service, formBuilder, authService, commonFunctions, stepperService, tokenStorage, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commonFunctions = commonFunctions;
        this.stepperService = stepperService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.hide = true;
        this.otpPattern = /^[0-9]{6}$/;
    }
    OtpLoginComponent.prototype.ngOnInit = function () {
        this.otpLoginForm = this.formBuilder.group({
            mobileOTP: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.otpPattern)
                ]
            ]
        });
    };
    OtpLoginComponent.prototype.inputValidator = function (event) {
        var pattern = /^[0-9]*$/;
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
            // invalid character, prevent input
        }
        else {
            if (event.target.value.length == 6) {
                this.otpLogin();
            }
        }
    };
    OtpLoginComponent.prototype.getMobileOTPErrorMessage = function () {
        var formCntrl = this.otpLoginForm.controls;
        return formCntrl.mobileOTP.hasError('required') ? 'Please enter the OTP sent on your registered mobile.' :
            formCntrl.mobileOTP.hasError('maxlength') ? 'Only 6 digit OTP allowed.' :
                formCntrl.mobileOTP.hasError('minlength') ? 'Enter 6 digit OTP.' :
                    '';
    };
    OtpLoginComponent.prototype.otpLogin = function () {
        var _this = this;
        this.loading = true;
        // If user in Authorization Page  i.e when user uploads pic and submits
        if (this.stepperService.detect_auth == 1) {
            this.otpLogin_for_authorization();
        }
        // If user in Authentication Page i.e when user in links on link
        else {
            this.apiUniqueKey = new Date().getTime().toString();
            if (this.stepperService.otpAuthRefId) {
                this.stepperService.verifyDetails(3, '', '', '', '', this.stepperService.otpAuthRefId, this.otpLoginForm.controls.mobileOTP.value, this.apiUniqueKey).subscribe(function (response) {
                    _this.loading = false;
                    if (response['status']) {
                        if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
                            if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                                if (response['payload']['processResponse']['authentication-token']) { // set auth token
                                    _this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
                                    console.log(response['payload']['processResponse']['authentication-token'], 'token');
                                    _this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
                                    _this.router.navigate(['customer']);
                                }
                                else {
                                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                                    _this.commonFunctions.showErrorPage();
                                }
                            }
                            else {
                                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                                _this.commonFunctions.showErrorPage();
                            }
                        }
                        else {
                            _this.authService.alertToUser(response['payload']['processResponse']['ErrorMessage']);
                            _this.commonFunctions.showErrorPage();
                        }
                    }
                    else {
                        _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }, function (error) {
                    _this.loading = false;
                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                    return;
                });
            }
            else {
                this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                this.commonFunctions.showErrorPage();
            }
        }
    };
    // For Authorization OTP Options  
    OtpLoginComponent.prototype.otpLogin_for_authorization = function () {
        var _this = this;
        var apiUniqueKey = new Date().getTime().toString();
        if (this.stepperService.otpAuthRefId) {
            this.stepperService.OtpAuthorization(3, '', '', '', '', this.stepperService.otpAuthRefId, this.otpLoginForm.controls.mobileOTP.value, apiUniqueKey).subscribe(function (response) {
                _this.loading = false;
                if (response['Error'] == '0' && response['ErrorCode'] == '200') {
                    if (response['ProcessVariables']['apiUniqueReqId'] == apiUniqueKey) {
                        _this.upload_doc_service();
                        // this.router.navigate(['result']);
                    }
                    else {
                        _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(response['ErrorMessage']);
                    _this.commonFunctions.showErrorPage();
                }
            }, function (error) {
                _this.loading = false;
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            });
        }
        else {
            this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
            this.commonFunctions.showErrorPage();
        }
    };
    OtpLoginComponent.prototype.upload_doc_service = function () {
        var _this = this;
        this.loading = true;
        this.service.acceptApi(this.service.objc_details)
            .subscribe(function (res) {
            _this.loading = false;
            if (res['ErrorCode'] == 200) {
                console.log('Got 200');
                _this.tokenStorage.clear();
                _this.router.navigate(['result']);
                return;
            }
            else if (res['login_required'] == true || res['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey || res['Error'] == 1) {
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                console.log('Got 600');
                return;
            }
            else {
                console.log('Got 400');
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_8__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
        });
    };
    OtpLoginComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_core_utils_common_functions__WEBPACK_IMPORTED_MODULE_4__["CommonFunctions"] },
        { type: _stepper_service__WEBPACK_IMPORTED_MODULE_5__["StepperService"] },
        { type: src_app_core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    OtpLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp-login',
            template: __webpack_require__(/*! raw-loader!./otp-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/stepper/otp-login/otp-login.component.html"),
            styles: [__webpack_require__(/*! ./otp-login.component.css */ "./src/app/stepper/otp-login/otp-login.component.css")]
        })
    ], OtpLoginComponent);
    return OtpLoginComponent;
}());



/***/ }),

/***/ "./src/app/stepper/retail-net-banking/retail-net-banking.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/stepper/retail-net-banking/retail-net-banking.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container>* {\n    width: 100%;\n}\n\n.mat-icon.material-icons {\n    margin-right: 15px;\n}\n\n.form-card {\n    max-width: 500px;\n    padding: 21px 30px;\n    border-radius: 5px;\n}\n\n.form-btn {\n    margin: 15px 0 5px;\n}\n\n.logo-image {\n    margin: 0px 0 20px;\n}\n\n.form-container .mat-form-field {\n    margin: 15px 0 5px;\n}\n\n.login-page-inner {\n    width: 100%;\n}\n\n.adfs-button {\n    margin-top: 20px;\n}\n\n.form-section {\n    position: relative;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    width: 100%;\n    overflow: auto;\n    /* // background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9); */\n    text-align: center;\n    color: #9b9b9b;\n    padding: 3em;\n}\n\n.mat-icon.material-icons.login-icon {\n    background: url('login-icon-default.png') 0 0 no-repeat;\n    width: 20px;\n    /* height: 23px; */\n    display: inline-block;\n}\n\n.mat-focused .mat-icon.material-icons.login-icon {\n    background: url('login-icon.png') 0 0 no-repeat;\n}\n\n.mat-icon.material-icons.password-icon {\n    background: url('password-icon.png') 0 0 no-repeat;\n    width: 20px;\n    height: 23px;\n    display: inline-block;\n}\n\n.mat-focused .mat-icon.material-icons.password-icon {\n    background: url('password-icon-blue.png') 0 0 no-repeat;\n}\n\n.password-icon,\n.login-icon,\n.password--show-icon {\n    position: relative;\n    top: 0px;\n}\n\ninput[type=number]::-webkit-inner-spin-button, \ninput[type=number]::-webkit-outer-spin-button { \n  -webkit-appearance: none; \n  margin: 0; \n}\n\n:host /deep/ .mat-form-field-appearance-legacy .mat-form-field-infix {\n    position: relative;\n    top: -6px;\n}\n\n@media(max-width:767px) and (orientation : landscape){\n    .form-section{\n        position: relative;\n        padding:1em;\n\n    }\n    .form-card{\n        margin:0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcHBlci9yZXRhaWwtbmV0LWJhbmtpbmcvcmV0YWlsLW5ldC1iYW5raW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxNQUFNO0lBQ04sV0FBVztJQUNYLGNBQWM7SUFDZCx5RkFBeUY7SUFDekYsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdURBQTRFO0lBQzVFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksK0NBQW9FO0FBQ3hFOztBQUVBO0lBQ0ksa0RBQXVFO0lBQ3ZFLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksdURBQTRFO0FBQ2hGOztBQUVBOzs7SUFHSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUdBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVzs7SUFFZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc3RlcHBlci9yZXRhaWwtbmV0LWJhbmtpbmcvcmV0YWlsLW5ldC1iYW5raW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXI+KiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtaWNvbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHBhZGRpbmc6IDIxcHggMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5mb3JtLWJ0biB7XG4gICAgbWFyZ2luOiAxNXB4IDAgNXB4O1xufVxuXG4ubG9nby1pbWFnZSB7XG4gICAgbWFyZ2luOiAwcHggMCAyMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW46IDE1cHggMCA1cHg7XG59XG5cbi5sb2dpbi1wYWdlLWlubmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmFkZnMtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9ybS1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBwYWRkaW5nOiAzZW07XG59XG5cbi5tYXQtaWNvbi5tYXRlcmlhbC1pY29ucy5sb2dpbi1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbi1pY29uLWRlZmF1bHQucG5nKSAwIDAgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIC8qIGhlaWdodDogMjNweDsgKi9cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYXQtZm9jdXNlZCAubWF0LWljb24ubWF0ZXJpYWwtaWNvbnMubG9naW4taWNvbiB7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW4taWNvbi5wbmcpIDAgMCBuby1yZXBlYXQ7XG59XG5cbi5tYXQtaWNvbi5tYXRlcmlhbC1pY29ucy5wYXNzd29yZC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYXNzd29yZC1pY29uLnBuZykgMCAwIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWF0LWZvY3VzZWQgLm1hdC1pY29uLm1hdGVyaWFsLWljb25zLnBhc3N3b3JkLWljb24ge1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Bhc3N3b3JkLWljb24tYmx1ZS5wbmcpIDAgMCBuby1yZXBlYXQ7XG59XG5cbi5wYXNzd29yZC1pY29uLFxuLmxvZ2luLWljb24sXG4ucGFzc3dvcmQtLXNob3ctaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMHB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHsgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgXG4gIG1hcmdpbjogMDsgXG59XG5cbjpob3N0IC9kZWVwLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNnB4O1xufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIGFuZCAob3JpZW50YXRpb24gOiBsYW5kc2NhcGUpe1xuICAgIC5mb3JtLXNlY3Rpb257XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzoxZW07XG5cbiAgICB9XG4gICAgLmZvcm0tY2FyZHtcbiAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/stepper/retail-net-banking/retail-net-banking.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/stepper/retail-net-banking/retail-net-banking.component.ts ***!
  \****************************************************************************/
/*! exports provided: RetailNetBankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailNetBankingComponent", function() { return RetailNetBankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _stepper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stepper.service */ "./src/app/stepper/stepper.service.ts");
/* harmony import */ var src_app_core_utils_common_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");











var RetailNetBankingComponent = /** @class */ (function () {
    function RetailNetBankingComponent(service, formBuilder, authService, commonFunctions, stepperService, tokenStorage, router) {
        this.service = service;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.commonFunctions = commonFunctions;
        this.stepperService = stepperService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.hide = true;
        this.isShowPasswordField = false;
        this.isNextButton = true;
        this.isLoginButton = false;
        this.custIdPattern = /^[a-zA-Z0-9]$/;
    }
    RetailNetBankingComponent.prototype.ngOnInit = function () {
        this.rnbLoginForm = this.formBuilder.group({
            custId: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"),
                ]
            ],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["Constants"].VALIDATION_PASSWORD)
                ]
            ]
        });
    };
    RetailNetBankingComponent.prototype.getCustIdErrorMessage = function () {
        var formCntrl = this.rnbLoginForm.controls;
        return formCntrl.custId.hasError('required') ? 'This field is required.' :
            formCntrl.custId.hasError('minlength') ? 'Minimum limit 7 characters.' :
                formCntrl.custId.hasError('maxlength') ? 'Maximum limit 20 characters.' :
                    '';
    };
    RetailNetBankingComponent.prototype.getPasswordErrorMessage = function () {
        var formCntrl = this.rnbLoginForm.controls;
        return formCntrl.password.hasError('required') ? 'This field is required.' :
            formCntrl.password.hasError('pattern') ? 'Password should contains at least 1 uppercase, 1 lowercase, 1 numeric & 1 special characters.' :
                formCntrl.password.hasError('minlength') ? 'Minimum limit 10 characters.' :
                    formCntrl.password.hasError('maxlength') ? 'Maximum limit 14 characters.' :
                        '';
    };
    RetailNetBankingComponent.prototype.showPassField = function () {
        var _this = this;
        this.loading = true;
        if (this.stepperService.detect_auth == 1) {
            this.authorization_RNB();
        }
        else {
            this.apiUniqueKey = new Date().getTime().toString();
            this.stepperService.auth_reinit(this.apiUniqueKey, 1, this.rnbLoginForm.controls.custId.value).subscribe(function (response) {
                _this.loading = false;
                if (response['status']) {
                    if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
                        if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                            if (response['payload']['processResponse']['ProcessVariables']['iSalt']) {
                                _this.salt = response['payload']['processResponse']['ProcessVariables']['iSalt'];
                                _this.isShowPasswordField = true;
                                _this.isNextButton = false;
                                _this.isLoginButton = true;
                                _this.rnbLoginForm.controls.custId.disable();
                            }
                        }
                        else {
                            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                            _this.commonFunctions.showErrorPage();
                        }
                    }
                    else {
                        _this.authService.alertToUser(response['payload']['processResponse']['ErrorMessage']);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }, function (error) {
                _this.loading = false;
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            });
        }
    };
    RetailNetBankingComponent.prototype.authorization_RNB = function () {
        var _this = this;
        var apiUniqueKey = new Date().getTime().toString();
        if (this.stepperService.otpAuthRefId) {
            this.stepperService.auth_reinit2(apiUniqueKey, 1, this.rnbLoginForm.controls.custId.value).subscribe(function (response) {
                _this.loading = false;
                if (response['Error'] == '0' && response['ErrorCode'] == '200') {
                    if (response['ProcessVariables']['apiUniqueReqId'] == apiUniqueKey) {
                        if (response['ProcessVariables']['iSalt']) {
                            _this.salt = response['ProcessVariables']['iSalt'];
                            _this.isShowPasswordField = true;
                            _this.isNextButton = false;
                            _this.isLoginButton = true;
                            _this.rnbLoginForm.controls.custId.disable();
                        }
                        else {
                            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                            _this.commonFunctions.showErrorPage();
                        }
                    }
                    else {
                        _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }, function (error) {
                _this.loading = false;
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            });
        }
    };
    RetailNetBankingComponent.prototype.addPrefix = function (val) {
        console.log("len", val.length);
        if (val.length == 1) {
            this.rnbLoginForm.controls.custId.setValue('000000' + val);
        }
        if (val.length == 2) {
            this.rnbLoginForm.controls.custId.setValue('00000' + val);
        }
        if (val.length == 3) {
            this.rnbLoginForm.controls.custId.setValue('0000' + val);
        }
        if (val.length == 4) {
            this.rnbLoginForm.controls.custId.setValue('000' + val);
        }
        if (val.length == 5) {
            this.rnbLoginForm.controls.custId.setValue('00' + val);
        }
        if (val.length == 6) {
            this.rnbLoginForm.controls.custId.setValue('0' + val);
        }
        if (val.length > 6) {
            this.rnbLoginForm.controls.custId.setValue(val);
        }
    };
    RetailNetBankingComponent.prototype.inputValidator = function (event) {
        var pattern = /^[0-9]*$/;
        if (!pattern.test(event.target.value)) {
            event.target.value = event.target.value.replace(/[^0-9]/g, "");
            // invalid character, prevent input
        }
        else {
            var val = event.target.value.replace(/^0+/, '');
            // console.log("val", val, event.target.value);
            this.addPrefix(val);
        }
    };
    RetailNetBankingComponent.prototype.rnbLogin = function () {
        var _this = this;
        // old keysize -> { keySize: 512 / 32, iterations: 600 }
        if (this.stepperService.detect_auth == 1) {
            this.rnbLogin_for_authorization();
        }
        else {
            var key512Bits1000Iterations = crypto_js__WEBPACK_IMPORTED_MODULE_9__["PBKDF2"](this.rnbLoginForm.controls.password.value, this.salt, { keySize: 256 / 32, iterations: 500 });
            var encryptedPassword = key512Bits1000Iterations.toString();
            this.loading = true;
            this.apiUniqueKey = new Date().getTime().toString();
            this.stepperService.verifyDetails(1, this.rnbLoginForm.controls.custId.value, encryptedPassword, '', '', '', '', this.apiUniqueKey).subscribe(function (response) {
                _this.loading = false;
                if (response['status']) {
                    if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
                        if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                            if (response['payload']['processResponse']['authentication-token']) { // set auth token
                                _this.tokenStorage.setAccessToken(response['payload']['processResponse']['authentication-token']);
                                _this.tokenStorage.setSrId(response['payload']['processResponse']['ProcessVariables']['srId']);
                                _this.router.navigate(['customer']);
                            }
                            else {
                                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                                _this.commonFunctions.showErrorPage();
                            }
                        }
                        else {
                            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                            _this.commonFunctions.showErrorPage();
                        }
                    }
                    else {
                        _this.authService.alertToUser(response['payload']['processResponse']['ErrorMessage']);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }, function (error) {
                _this.loading = false;
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            });
        }
    };
    RetailNetBankingComponent.prototype.rnbLogin_for_authorization = function () {
        var _this = this;
        var key512Bits1000Iterations = crypto_js__WEBPACK_IMPORTED_MODULE_9__["PBKDF2"](this.rnbLoginForm.controls.password.value, this.salt, { keySize: 256 / 32, iterations: 500 });
        var encryptedPassword = key512Bits1000Iterations.toString();
        this.loading = true;
        this.apiUniqueKey = new Date().getTime().toString();
        this.stepperService.OtpAuthorization(1, this.rnbLoginForm.controls.custId.value, encryptedPassword, '', '', '', '', this.apiUniqueKey).subscribe(function (response) {
            _this.loading = false;
            if (response['Error'] == '0' && response['ErrorCode'] == '200') {
                if (response['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                    _this.upload_doc_service();
                    // this.router.navigate(['result']);
                }
                else {
                    _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(response['ErrorMessage']);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    RetailNetBankingComponent.prototype.upload_doc_service = function () {
        var _this = this;
        this.loading = true;
        this.service.acceptApi(this.service.objc_details)
            .subscribe(function (res) {
            _this.loading = false;
            if (res['ErrorCode'] == 200) {
                _this.tokenStorage.clear();
                _this.router.navigate(['result']);
                return;
            }
            else if (res['login_required'] == true || res['ProcessVariables']['apiUniqueReqId'] != _this.apiUniqueKey || res['Error'] == 1) {
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            }
            else {
                _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
                return;
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(src_app_app_constant__WEBPACK_IMPORTED_MODULE_3__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
        });
    };
    RetailNetBankingComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: src_app_core_utils_common_functions__WEBPACK_IMPORTED_MODULE_7__["CommonFunctions"] },
        { type: _stepper_service__WEBPACK_IMPORTED_MODULE_6__["StepperService"] },
        { type: src_app_core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RetailNetBankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-retail-net-banking',
            template: __webpack_require__(/*! raw-loader!./retail-net-banking.component.html */ "./node_modules/raw-loader/index.js!./src/app/stepper/retail-net-banking/retail-net-banking.component.html"),
            styles: [__webpack_require__(/*! ./retail-net-banking.component.css */ "./src/app/stepper/retail-net-banking/retail-net-banking.component.css")]
        })
    ], RetailNetBankingComponent);
    return RetailNetBankingComponent;
}());



/***/ }),

/***/ "./src/app/stepper/stepper.component.css":
/*!***********************************************!*\
  !*** ./src/app/stepper/stepper.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n    /* background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9); */\n    /* .flex{ */\n        height: calc(100vh - 64px);\n        background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n        color: white; \n        position: relative;  \n        overflow: auto;\n    /* } */\n}\n\n.copyright-text {\n    position: static;\n    bottom: 0px;\n    width: 100%;\n    left: 0;\n    color: #8bb1ce;\n    font-size: 14px;\n    right: 0;\n}\n\n.bolds{\n    color: #292929;\n}\n\n.heading {\n    text-align: center;\n    color: gray;\n    padding-top: 30px;\n}\n\n.flex{\n    color: white; \n    position: relative;  \n    display: inline;\n    justify-content: center;\n    padding-top: 45px;\n    overflow: hidden;\n}\n\n.container {\n    margin: 0px;\n    justify-content: center;\n}\n\n.cards{\n    margin: 10px;\n    cursor: pointer;\n    text-align: center;\n    padding: 25px;\n    border: #5e8bb6 3px solid;\n}\n\n.card-wrapper{\n    display: flex;\n    justify-content: center;\n}\n\n.submitBtn{\n  width: 175px;\n}\n\n.submit-btn {\n    text-align: center;\n    margin: 15px;\n}\n\n.hint-msg {\n    color: #c4261d;\n}\n\n.alert-msg {\n    padding: 10px;\n    text-align: center;\n}\n\n.logins{\n    margin: 20px;\n}\n\n.mat-icon{\n    color: darkblue;\n}\n\n.cards-bg{\n    background: linear-gradient(to top, #0d5a96, #4e7fae, #80a5c7, #b3ccdf, #eaf3f9);\n    border: #005190 3px solid;\n}\n\n@media screen and (max-width: 768px) {\n    .logins{\n        margin-top: 20%;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .cards{\n        height: 110px;\n        width: 175px;\n    }\n    .colscard{\n        display: flex;\n        justify-content: center;\n    }\n}\n\n@media(max-width:767px) {\n    .page {\n        height: calc(100vh - 0px);\n    }\n    \n    .copyright-text{\n        bottom: 0px;\n    }\n}\n\n@media(max-width:767px) and (orientation : landscape){\n    .page {\n        height: calc(100vh - 0px);\n    }\n\n    .copyright-text{\n        bottom: 0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlcHBlci9zdGVwcGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzRkFBc0Y7SUFDdEYsV0FBVztRQUNQLDBCQUEwQjtRQUMxQixnRkFBZ0Y7UUFDaEYsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCLE1BQU07QUFDVjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFFBQVE7QUFDWjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0ZBQWdGO0lBQ2hGLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMGQ1YTk2LCAjNGU3ZmFlLCAjODBhNWM3LCAjYjNjY2RmLCAjZWFmM2Y5KTsgKi9cbiAgICAvKiAuZmxleHsgKi9cbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7IFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7ICBcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLyogfSAqL1xufVxuXG4uY29weXJpZ2h0LXRleHQge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBjb2xvcjogIzhiYjFjZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcmlnaHQ6IDA7XG59XG4uYm9sZHN7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG59XG5cbi5oZWFkaW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5mbGV4e1xuICAgIGNvbG9yOiB3aGl0ZTsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FyZHN7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBib3JkZXI6ICM1ZThiYjYgM3B4IHNvbGlkO1xufVxuXG4uY2FyZC13cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdWJtaXRCdG57XG4gIHdpZHRoOiAxNzVweDtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHg7XG59XG5cbi5oaW50LW1zZyB7XG4gICAgY29sb3I6ICNjNDI2MWQ7XG59XG5cbi5hbGVydC1tc2cge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW5ze1xuICAgIG1hcmdpbjogMjBweDtcbn1cblxuLm1hdC1pY29ue1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLmNhcmRzLWJne1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwZDVhOTYsICM0ZTdmYWUsICM4MGE1YzcsICNiM2NjZGYsICNlYWYzZjkpO1xuICAgIGJvcmRlcjogIzAwNTE5MCAzcHggc29saWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmxvZ2luc3tcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuY2FyZHN7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICB9XG4gICAgLmNvbHNjYXJke1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAucGFnZSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDBweCk7XG4gICAgfVxuICAgIFxuICAgIC5jb3B5cmlnaHQtdGV4dHtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSBhbmQgKG9yaWVudGF0aW9uIDogbGFuZHNjYXBlKXtcbiAgICAucGFnZSB7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDBweCk7XG4gICAgfVxuXG4gICAgLmNvcHlyaWdodC10ZXh0e1xuICAgICAgICBib3R0b206IDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/stepper/stepper.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stepper/stepper.component.ts ***!
  \**********************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepper.service */ "./src/app/stepper/stepper.service.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils/common-functions */ "./src/app/core/utils/common-functions.ts");
/* harmony import */ var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/auth/auth.service */ "./src/app/core/services/auth/auth.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");








var StepperComponent = /** @class */ (function () {
    function StepperComponent(router, authService, commonFunctions, stepperService, tokenStorage, route) {
        this.router = router;
        this.authService = authService;
        this.commonFunctions = commonFunctions;
        this.stepperService = stepperService;
        this.tokenStorage = tokenStorage;
        this.route = route;
        this.isRNBL = false;
        this.isDCL = false;
        this.isOTPL = false;
        this.isShowSubmitBtn = false;
        this.isCommingSoonMsg = false;
        this.copyrightYear = "";
    }
    StepperComponent.prototype.ngOnInit = function () {
        this.loading = true;
        var year = new Date();
        this.copyrightYear = year.getFullYear() + "-" + (year.getFullYear() + 1);
        console.log("this.copyrightYear", this.copyrightYear);
        this.getSessiondetails();
    };
    StepperComponent.prototype.getSessiondetails = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            var details = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, params.keys, params);
            _this.getsession = details['params'];
            if (!_this.getsession['sessionId']) {
                _this.commonFunctions.showErrorPage();
                return;
            }
            _this.tokenStorage.setSessionId(_this.getsession['sessionId']);
            _this.getAuth(); // 1st call 
        });
    };
    StepperComponent.prototype.getAuth = function () {
        var _this = this;
        this.apiUniqueKey = new Date().getTime().toString();
        this.stepperService.getAuth(this.apiUniqueKey).subscribe(function (response) {
            _this.loading = false;
            if (response['status']) {
                if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
                    if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                        if (response['payload']['processResponse']['ProcessVariables']['validMols']) {
                            _this.arrLoginType = response['payload']['processResponse']['ProcessVariables']['validMols'];
                            // if(((response['payload']['processResponse']['ProcessVariables']['validMols']).length) == 1){
                            //   this.generateOtp();
                            // } else {
                            //   this.arrLoginType = response['payload']['processResponse']['ProcessVariables']['validMols'];
                            // }
                        }
                        else {
                            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
                            _this.commonFunctions.showErrorPage();
                        }
                    }
                    else {
                        _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    StepperComponent.prototype.selected = function (i) {
        console.log("index", i);
        this.index = i;
        this.isShowSubmitBtn = true;
        this.isCommingSoonMsg = false;
        if (this.index == 1) {
            this.selectedOption = "Retail Net Banking Login";
        }
        if (this.index == 2) {
            this.selectedOption = "Debit Card Login";
        }
        if (this.index == 3) {
            this.selectedOption = "OTP Login";
        }
        if (this.index == 4) {
            this.isShowSubmitBtn = false;
            this.isCommingSoonMsg = true;
            this.selectedOption = "Credit Card Login";
        }
        if (this.index == 5) {
            this.isShowSubmitBtn = false;
            this.isCommingSoonMsg = true;
            this.selectedOption = "Aadhar Card Login";
        }
        if (this.index == 6) {
            this.isShowSubmitBtn = false;
            this.isCommingSoonMsg = true;
            this.selectedOption = "Email OTP Login";
        }
    };
    StepperComponent.prototype.submit = function () {
        if (this.index == 1) {
            this.router.navigate(['rnbLogin']);
        }
        if (this.index == 2) {
            this.router.navigate(['dcLogin']);
        }
        if (this.index == 3) {
            this.generateOtp();
        }
    };
    StepperComponent.prototype.generateOtp = function () {
        var _this = this;
        this.loading = true;
        this.apiUniqueKey = new Date().getTime().toString();
        this.stepperService.auth_reinit(this.apiUniqueKey, 3, '').subscribe(function (response) {
            _this.loading = false;
            if (response['status']) {
                if (response['payload']['processResponse']['Error'] == '0' && response['payload']['processResponse']['ErrorCode'] == '200') {
                    if (response['payload']['processResponse']['ProcessVariables']['apiUniqueReqId'] == _this.apiUniqueKey) {
                        if (response['payload']['processResponse']['ProcessVariables']['authRefId']) {
                            _this.stepperService.otpAuthRefId = response['payload']['processResponse']['ProcessVariables']['authRefId'];
                            _this.router.navigate(['otpLogin']);
                        }
                    }
                    else {
                        _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
                        _this.commonFunctions.showErrorPage();
                    }
                }
                else {
                    _this.authService.alertToUser(response['payload']['processResponse']['ErrorMessage']);
                    _this.commonFunctions.showErrorPage();
                }
            }
            else {
                _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
                _this.commonFunctions.showErrorPage();
            }
        }, function (error) {
            _this.loading = false;
            _this.authService.alertToUser(_app_constant__WEBPACK_IMPORTED_MODULE_7__["AlertMessages"].SOMETHING_WRONG);
            _this.commonFunctions.showErrorPage();
            return;
        });
    };
    StepperComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _core_utils_common_functions__WEBPACK_IMPORTED_MODULE_5__["CommonFunctions"] },
        { type: _stepper_service__WEBPACK_IMPORTED_MODULE_2__["StepperService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorage"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    StepperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/index.js!./src/app/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.css */ "./src/app/stepper/stepper.component.css")]
        })
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/stepper/stepper.service.ts":
/*!********************************************!*\
  !*** ./src/app/stepper/stepper.service.ts ***!
  \********************************************/
/*! exports provided: StepperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperService", function() { return StepperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/base-api-service.service */ "./src/app/core/services/base-api-service.service.ts");
/* harmony import */ var _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth/token-storage.service */ "./src/app/core/services/auth/token-storage.service.ts");





var StepperService = /** @class */ (function () {
    function StepperService(baseAPIService, tokenStorage) {
        this.baseAPIService = baseAPIService;
        this.tokenStorage = tokenStorage;
        this.detect_auth = 0;
    }
    StepperService.prototype.getAuth = function (apiUniqueReqId) {
        var body = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_init_otp.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_init_otp.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.getAuthTokenPost(body);
    };
    StepperService.prototype.auth_reinit = function (apiUniqueReqId, loginType, iUserId) {
        var body = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_reinit_otp.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_reinit_otp.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "sessionId": this.tokenStorage.getSessionId(),
                "apiUniqueReqId": apiUniqueReqId,
                "type": loginType,
                "iUserId": iUserId
            }
        };
        return this.baseAPIService.getAuthReInitPost(body);
    };
    //Get RefID for OTP in Authorization 
    StepperService.prototype.auth_reinit2 = function (apiUniqueReqId, loginType, iUserId) {
        var body = {
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_reinit_otp.PROCESS_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_reinit_otp.WORKFLOW_ID,
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "ProcessVariables": {
                "srId": this.tokenStorage.getSrId(),
                // "authentication-token": this.tokenStorage.getAccessToken(),
                "apiUniqueReqId": apiUniqueReqId,
                "type": loginType,
                "iUserId": iUserId
            }
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_reinit_otp.WORKFLOW_ID, body);
    };
    StepperService.prototype.verifyDetails = function (loginType, iUserId, iPass, debitCardNo, debitPIN, refid, otp, apiUniqueReqId) {
        var body = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_valid_otp.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_valid_otp.PROCESS_ID,
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
        };
        return this.baseAPIService.validateAuthPost(body);
    };
    // OTP Authorization & also for RnB
    StepperService.prototype.OtpAuthorization = function (loginType, iUserId, iPass, debitCardNo, debitPIN, refid, otp, apiUniqueReqId) {
        var body = {
            "projectId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].PROJECT_ID,
            "workflowId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_valid_otp.WORKFLOW_ID,
            "processId": _app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_valid_otp.PROCESS_ID,
            "ProcessVariables": {
                "type": loginType,
                "iUserId": iUserId,
                "iPass": iPass,
                "debitCardNo": debitCardNo,
                "debitPIN": debitPIN,
                "authRefId": refid,
                "userOtp": otp,
                "srId": this.tokenStorage.getSrId(),
                "apiUniqueReqId": apiUniqueReqId
            }
        };
        return this.baseAPIService.post(_app_constant__WEBPACK_IMPORTED_MODULE_2__["APIConstants"].Auth_valid_otp.WORKFLOW_ID, body);
    };
    StepperService.ctorParameters = function () { return [
        { type: _core_services_base_api_service_service__WEBPACK_IMPORTED_MODULE_3__["BaseAPIService"] },
        { type: _core_services_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"] }
    ]; };
    StepperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StepperService);
    return StepperService;
}());



/***/ }),

/***/ "./src/app/under-construction/under-construction.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: calc(100vh - 180px);\n}\n\n.title-txt {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FwcGl5by9EZXNrdG9wL1NELVByb2plY3QveWJsLXNkY3NzL3NyYy9hcHAvdW5kZXItY29uc3RydWN0aW9uL3VuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdW5kZXItY29uc3RydWN0aW9uL3VuZGVyLWNvbnN0cnVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3VuZGVyLWNvbnN0cnVjdGlvbi91bmRlci1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgwcHgpO1xufVxuLnRpdGxlLXR4dHtcbiAgICBjb2xvcjogZ3JheTtcbn0iLCIuZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxODBweCk7XG59XG5cbi50aXRsZS10eHQge1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/under-construction/under-construction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.ts ***!
  \********************************************************************/
/*! exports provided: UnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function() { return UnderConstructionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnderConstructionComponent = /** @class */ (function () {
    function UnderConstructionComponent() {
    }
    UnderConstructionComponent.prototype.ngOnInit = function () {
    };
    UnderConstructionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-under-construction',
            template: __webpack_require__(/*! raw-loader!./under-construction.component.html */ "./node_modules/raw-loader/index.js!./src/app/under-construction/under-construction.component.html"),
            styles: [__webpack_require__(/*! ./under-construction.component.scss */ "./src/app/under-construction/under-construction.component.scss")]
        })
    ], UnderConstructionComponent);
    return UnderConstructionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
var environment = {
    production: false,
    apiUrl: 'https://13.76.216.136/internaladmin/sd/appiyo/',
    documentUrl: 'https://13.76.216.136/internaladmin/sd/appiyo/d/drive/docs/',
    apiVersion: 'v2',
    aesPublicKey: 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJ+GJdSSEeaNFBLqyfM3DIOgQgWCwJ0INfeZZV7ITsLeuA7Yd02rrkYGIix1IWvoebWVmzhncUepYxHwK1ARCdUCAwEAAQ==',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/appiyo/Desktop/SD-Project/ybl-sdcss/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map