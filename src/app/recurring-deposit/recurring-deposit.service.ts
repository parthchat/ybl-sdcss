import { Injectable } from '@angular/core';
import { BaseAPIService } from 'src/app/core/services/base-api-service.service';
import { TokenStorage } from 'src/app/core/services/auth/token-storage.service';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Constants, APIConstants } from 'src/app/app.constant';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RecurringDepositService {

  _sessionDetails: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sessionDetails$ = this._sessionDetails.asObservable().pipe(filter(x => !!x)); // Do not emit if null
  setSessionDetails(sessionDetails: any) {
    this._sessionDetails.next(sessionDetails);
  }

  constructor(private baseAPIService: BaseAPIService, private tokenStorage: TokenStorage) { }

  // Get session details API call
  getSessionDetails() {
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": 'APIConstants.sessionDetails.WORKFLOW_ID',
      "processId": 'APIConstants.sessionDetails.PROCESS_ID',
      "ProcessVariables": {
        "sessionId": this.tokenStorage.getSessionId(),
        "srType": '(JSON.parse(this.tokenStorage.getSrId()).id).toString()'
      }
    }
    // return this.baseAPIService.post(APIConstants.Details.WORKFLOW_ID, processVariables);
    return of(
      {
        "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
        "Error": "0",
        "ErrorCode": "",
        "ErrorMessage": "",
        "ProcessId": "06d837a48b4711e9b12c2eca4ea5bb5f",
        "ProcessInstanceId": "6ff5bf545c8911eaa2956adcd8a925ce",
        "ProcessName": "Get Service Request Details",
        "ProcessVariables": {
            "accountDetails": [
                {
                    "accountNumber": "1234567890987654",
                    "accountRelation": "1",
                    "accountType": "3",
                    "balance": null,
                    "branchCode": "419",
                    "branchName": "IFC"
                },
                {
                    "accountNumber": "1234567899876543",
                    "accountRelation": "10",
                    "accountType": "2",
                    "branchCode": "422",
                    "branchName": "COLABA"
                }
            ],
            "apiUniqueReqId": "",
            "countryData": [
                {
                    "code": 1,
                    "label": "India"
                }
            ],
            "custDetails": {
                "accountNumber": null,
                "custId": "Ganesh332",
                "custName": "Ganesh482",
                "custType": "41",
                "landline": null,
                "maskedCustId": "Ganesh332",
                "mdmPan": "******465G",
                "mobileNumber": "9860413109",
                "panExist": true,
                "seniorCitizen": false
            },
            "docs": null,
            "dvuComments": null,
            "emailUpdate": {
                "maskedOldEmail": null,
                "newEmail": null,
                "oldEmail": "kasarganesh99@gmail.com"
            },
            "fdDetails": null,
            "fdrdGuardianDetails": {
                "addressLine1": "Addressline 1",
                "addressLine2": "Addressline 2",
                "addressLine3": "Addressline 3",
                "country": "1",
                "emailId": null,
                "guardianName": "Sample Nominee",
                "mobileNumber": "9876543211",
                "phoneNumber": "9876543210",
                "relationToNominee": "2",
                "state": "state value",
                "townOrCity": "City Value",
                "zipCode": "zip code"
            },
            "fdrdNomineeDetails": {
                "accountNumber": null,
                "accountType": null,
                "addressLine1": "Addressline 1",
                "addressLine2": "Addressline 2",
                "addressLine3": "Addressline 3",
                "country": "1",
                "dateOfBirth": "2004/02/12",
                "depositNumber": null,
                "emailId": null,
                "mobileNumber": null,
                "nomineeName": "Sample Nominee",
                "phoneNumber": "9876543210",
                "relationToAccHolder": "2",
                "sharePercentage": null,
                "state": "state value",
                "townOrCity": "City Value",
                "zipCode": "zip code"
            },
            "guardianRelationData": [
                {
                    "code": 1,
                    "label": "MOTHER"
                },
                {
                    "code": 2,
                    "label": "FATHER"
                },
                {
                    "code": 3,
                    "label": "SISTER"
                },
                {
                    "code": 4,
                    "label": "BROTHER"
                },
                {
                    "code": 5,
                    "label": "DAUGHTER"
                },
                {
                    "code": 6,
                    "label": "SON"
                },
                {
                    "code": 7,
                    "label": "AUNT"
                },
                {
                    "code": 8,
                    "label": "UNCLE"
                },
                {
                    "code": 9,
                    "label": "GRANDMOTHER"
                },
                {
                    "code": 10,
                    "label": "GRANDFATHER"
                },
                {
                    "code": 11,
                    "label": "MOTHER - IN - LAW"
                },
                {
                    "code": 12,
                    "label": "FATHER - IN - LAW"
                },
                {
                    "code": 13,
                    "label": "SISTER - IN- LAW"
                },
                {
                    "code": 14,
                    "label": "BROTHER - IN - LAW"
                },
                {
                    "code": 15,
                    "label": "DAUGHTER - IN - LAW"
                },
                {
                    "code": 16,
                    "label": "SON - IN - LAW"
                },
                {
                    "code": 17,
                    "label": "WIFE"
                },
                {
                    "code": 18,
                    "label": "HUSBAND"
                },
                {
                    "code": 19,
                    "label": "COUSIN"
                },
                {
                    "code": 20,
                    "label": "GUARDIAN"
                },
                {
                    "code": 21,
                    "label": "OTHER"
                }
            ],
            "interestInstructions": null,
            "isAuthorizationRequired": true,
            "maturityInstructions": null,
            "needDocs": true,
            "nomineeRelationData": [
                {
                    "code": 1,
                    "label": "MOTHER"
                },
                {
                    "code": 2,
                    "label": "FATHER"
                },
                {
                    "code": 3,
                    "label": "SISTER"
                },
                {
                    "code": 4,
                    "label": "BROTHER"
                },
                {
                    "code": 5,
                    "label": "DAUGHTER"
                },
                {
                    "code": 6,
                    "label": "SON"
                },
                {
                    "code": 7,
                    "label": "AUNT"
                },
                {
                    "code": 8,
                    "label": "UNCLE"
                },
                {
                    "code": 9,
                    "label": "GRANDMOTHER"
                },
                {
                    "code": 10,
                    "label": "GRANDFATHER"
                },
                {
                    "code": 11,
                    "label": "MOTHER - IN - LAW"
                },
                {
                    "code": 12,
                    "label": "FATHER - IN - LAW"
                },
                {
                    "code": 13,
                    "label": "SISTER - IN- LAW"
                },
                {
                    "code": 14,
                    "label": "BROTHER - IN - LAW"
                },
                {
                    "code": 15,
                    "label": "DAUGHTER - IN - LAW"
                },
                {
                    "code": 16,
                    "label": "SON - IN - LAW"
                },
                {
                    "code": 17,
                    "label": "WIFE"
                },
                {
                    "code": 18,
                    "label": "HUSBAND"
                },
                {
                    "code": 19,
                    "label": "COUSIN"
                },
                {
                    "code": 20,
                    "label": "GUARDIAN"
                },
                {
                    "code": 21,
                    "label": "OTHER"
                }
            ],
            "panUpdate": {
                "isSameName": false,
                "maskedOldPan": null,
                "matchLevel": null,
                "matchPer": null,
                "newPan": null,
                "newPanName": null,
                "oldPan": null
            },
            "principleInstructions": null,
            "productDetails": [
                {
                    "code": "928",
                    "label": "RD-Resident Citizens",
                    "type": null
                }
            ],
            "profileNew": null,
            "profileOld": null,
            "rdDetails": {
                "accountRelation": "1",
                "branchId": 2,
                "custType": null,
                "depositAmount": 10500,
                "depositProduct": 928,
                "jointAccount": false,
                "pan": null,
                "sourceAccount": "1234567890987654",
                "staffId": null,
                "tenureMonths": 12
            },
            "response": [
                {
                    "status": "success",
                    "statusCode": 200
                }
            ],
            "schemeDetails": null,
            "srDetails": {
                "branchId": "1",
                "createdOn": "2020-02-06T13:26:53Z",
                "currentRole": null,
                "currentUser": null,
                "rejectReason": null,
                "srId": "SR20200206103924SS",
                "srName": "Recurring Deposit Creation",
                "srType": 1012,
                "status": "25",
                "updateBy": "101",
                "updatedOn": "2020-02-06T13:26:53Z",
                "userId": "101"
            },
            "srId": "SR20200206103924SS",
            "srMetaData": {
                "appId": "app1",
                "channel": "channel1",
                "refId": "1580995505"
            },
            "taskDetails": null
        },
        "Status": "Execution Completed",
        "WorkflowId": "06b4889a8b4711e9b12c2eca4ea5bb5f"
    }
    );
  }

  // get Balanace based on select bank A/C No.
  getAccountDetails(apiUniqueKey: any, accNumber: string, accType: string) {
    let body = {
      "processId": 'APIConstants.fd_Get_Balance.PROCESS_ID',
      "workflowId": 'APIConstants.fd_Get_Balance.WORKFLOW_ID',
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        // "sessionId": this.tokenStorage.getSessionId(),
        "srId": this.tokenStorage.getSrId(),
        "apiUniqueReqId": apiUniqueKey,
        "acctNumber": accNumber,
        "acctType": accType
      }
    };
    console.log('[RecurringDepositService] Get Account Balance payload: ', body);
    // return this.baseAPIService.auth_options(APIConstants.fd_Get_Balance.WORKFLOW_ID, body);
    
    if(accNumber == '1234567890987654') {
      return of(
        {
          "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
          "Error": "0",
          "ErrorCode": "200",
          "ErrorMessage": "",
          "ProcessId": "59cf14ec09d611eabda88a71c4611c6d",
          "ProcessInstanceId": "bb5eee3e53c911eaa4fb3af528466045",
          "ProcessName": "CSSP:: Get Account Details",
          "ProcessVariables": {
              "balance": "120000.00",
              "fdrdQuickBookData": [
                  {
                      "amount": 10000,
                      "isSpecial": true,
                      "maxDays": 0,
                      "maxMonths": 0,
                      "maxYear": 3,
                      "minDays": 0,
                      "minMonths": 0,
                      "minYear": 2,
                      "interestRate": "5.5",
                      "schemeName": "2 years < 3 years"
                  },
                  {
                      "amount": 60000,
                      "isSpecial": true,
                      "maxDays": 20,
                      "maxMonths": 12,
                      "maxYear": 0,
                      "minDays": 10,
                      "minMonths": 12,
                      "minYear": 0,
                      "interestRate": "5.5",
                      "schemeName": "12 Months 10 Days to 12 Months 20 Days"
                  },
                  {
                      "amount": 90000,
                      "isSpecial": true,
                      "maxDays": 18,
                      "maxMonths": 18,
                      "maxYear": 0,
                      "minDays": 8,
                      "minMonths": 18,
                      "minYear": 0,
                      "interestRate": "5.5",
                      "schemeName": "18 Months 8 Days to 18 Months 18 Days"
                  }
              ],
              "guardianDetails": {
                  "addressLine1": "PAREL",
                  "addressLine2": "Thane",
                  "addressLine3": "Thane",
                  "country": "1",
                  "emailId": "test@gmail.com",
                  "guardianName": "Sample Name",
                  "mobileNumber": "9876543210",
                  "phoneNumber": "9876543210",
                  "relationToNominee": "2",
                  "state": "MAHARASHTRA",
                  "townOrCity": "MUMBAI",
                  "zipCode": "400037"
              },
              "nomineeDetails": {
                  "addressLine1": "PAREL",
                  "addressLine2": "Thane",
                  "addressLine3": "Thane",
                  "country": "1",
                  "dateOfBirth": "2003-08-08",
                  "displayNomineeNameFlag": "Y",
                  "emailId": "test@gmail.com",
                  "mobileNumber": "9876543210",
                  "nomineeName": "Sample Name",
                  "nomineeRegistrationNumber": "6535991",
                  "relationToAccHolder": "2",
                  "sharePercentage": "100.00",
                  "state": "MAHARASHTRA",
                  "townOrCity": "MUMBAI",
                  "zipCode": "400037"
              },
              "quickBookData": null
          },
          "Status": "Execution Completed",
          "WorkflowId": "30a6167e09d611eabda88a71c4611c6d"
        }
      );
    } else {
      return of(
        {
          "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
          "Error": "0",
          "ErrorCode": "200",
          "ErrorMessage": "",
          "ProcessId": "59cf14ec09d611eabda88a71c4611c6d",
          "ProcessInstanceId": "f28a8f1853c311eabe0d3af528466045",
          "ProcessName": "CSSP:: Get Account Details",
          "ProcessVariables": {
              "balance": "800.00",
              "fdrdQuickBookData": [
                  {
                      "isSpecial": true,
                      "maxDays": 0,
                      "maxMonths": 0,
                      "maxYear": 3,
                      "minDays": 0,
                      "minMonths": 0,
                      "minYear": 2,
                      "schemeName": "2 years < 3 years"
                  },
                  {
                      "isSpecial": true,
                      "maxDays": 20,
                      "maxMonths": 12,
                      "maxYear": 0,
                      "minDays": 10,
                      "minMonths": 12,
                      "minYear": 0,
                      "schemeName": "12 Months 10 Days to 12 Months 20 Days"
                  },
                  {
                      "isSpecial": true,
                      "maxDays": 18,
                      "maxMonths": 18,
                      "maxYear": 0,
                      "minDays": 8,
                      "minMonths": 18,
                      "minYear": 0,
                      "schemeName": "18 Months 8 Days to 18 Months 18 Days"
                  }
              ],
              "guardianDetails": null,
              "nomineeDetails": null,
              "quickBookData": null
          },
          "Status": "Execution Completed",
          "WorkflowId": "30a6167e09d611eabda88a71c4611c6d"
        }
      );
    }
  }

  // get product details based on code select
  getProductDetails(apiUniqueKey: any, code: string, amount: string, months: number, srId: string) {
    let body = {
      "processId": 'APIConstants.fd_product_details.PROCESS_ID',
      "workflowId": 'APIConstants.fd_product_details.WORKFLOW_ID',
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        // "sessionId": this.tokenStorage.getSessionId(),
        "apiUniqueReqId": apiUniqueKey,
        "code": code,
        "amount": amount+'',
        "termMonths": months,
        "srId": srId
      }
    };

    console.log("[RecurringDepositSerivce] Get Product Details: ", body);

    // return this.baseAPIService.auth_options(APIConstants.fd_product_details.WORKFLOW_ID, body);
    return of(
      {
        "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
        "Error": "0",
        "ErrorCode": "200",
        "ErrorMessage": "",
        "ProcessId": "40eb48be0d0111eaa5ef8a71c4611c6d",
        "ProcessInstanceId": "6ac87e625fa011eab75e6adcd8a925ce",
        "ProcessName": "FDRD:: Get Product Details",
        "ProcessVariables": {
            "compoundingFrequency": "",
            "compoundingFrequencyCode": "",
            "depositDate": "2020-03-18",
            "interestIndexCode": 100,
            "interestRate": "7.6",
            "jointHolder": false,
            "maturityAmount": "",
            "maturityDate": "2020-03-18",
            "payOutFrequency": "",
            "payoutFrequencyCode": "",
            "taxCode": 999,
            "tenure": "12 Days"
        },
        "Status": "Execution Completed",
        "WorkflowId": "15b498da0d0111eaa5ef8a71c4611c6d"
      }
    );
  }


  // on form Submit we call SR create API
  updateSR(sourceAccount: string, obj: any, nomineeDetails: any, guardianDetails: any, staffObj:any, checked: boolean) {
    console.log("[RecurringDepositService] UpdateSR sourceAccount: ", sourceAccount, "UpdateSR rdFormGroup: ", obj, nomineeDetails, guardianDetails);
    let body = {
      "processId": 'APIConstants.getAccountDetails.PROCESS_ID',
      "workflowId": 'APIConstants.getAccountDetails.WORKFLOW_ID',
      "projectId": Constants.PROJECT_ID,
      "ProcessVariables": {
        "headers": {
          "refId": this.tokenStorage.getSessionId(),
          "channel": "SS",
          "appId": "app1"
        },
        // "srDetails": {
        //   "srType": 1001,
        //   "branchId": obj['branchCode']
        // },
        "srId": this.tokenStorage.getSrId(),
        "rdDetails": {
          "sourceAccount": sourceAccount,
          "branchId": parseInt(obj['branchCode']),
          "depositProduct": parseInt(obj['rdProduct']),
          "depositAmount": parseFloat(obj['amount']),
          "tenureMonths": parseInt(obj['months']+''),
          "custType": parseInt(obj['custType']),
          "jointAccount": obj['jointHolder'], // as per Ganesh instruction
          "maturityInstruction": "",
          "interestInstructions": "",
          "principalInstructions": "",
          "pan": "",
          "staffId": staffObj['staffId'],
          "accountRelation": obj['accountRelation'],

          // "maturityDate": obj['maturityDate'],
          // "maturityAmount": parseFloat(obj['maturityAmount']),
          // "interestRate":  parseFloat(obj['interestRate']),
          // "interestAccount":  obj['account'],
          // "depositStartDate": obj['depositDate'],
          // "interestFrequency": parseInt(obj['prod_code']),
          // "principalAccount":"",
        },
        nomineeDetails: nomineeDetails ? {
          relationToAccHolder: nomineeDetails['relationToAccHolder'],
          nomineeName: nomineeDetails['nomineeName'],
          addressLine1: nomineeDetails['addressLine1'],
          addressLine2: nomineeDetails['addressLine2'],
          addressLine3: nomineeDetails['addressLine3'],
          displayNomineeNameFlag: nomineeDetails['displayNomineeNameFlag'],
          phoneNumber: nomineeDetails['mobileNumber'], // To Phone number, as per Ganesh instructions
          nomineeRegistrationNumber: nomineeDetails['nomineeRegistrationNumber'],
          sharePercentage: nomineeDetails['sharePercentage'],
          dateOfBirth: nomineeDetails['dateOfBirth'],
          // emailId: nomineeDetails['emailId'],
          country: nomineeDetails['country'],
          state: nomineeDetails['state'],
          townOrCity: nomineeDetails['townOrCity'],
          zipCode: nomineeDetails['zipCode'],
        } : null,
        guardianDetails: guardianDetails ? {
          relationToNominee: guardianDetails['relationToNominee'],
          guardianName: guardianDetails['guardianName'],
          addressLine1: guardianDetails['addressLine1'],
          addressLine2: guardianDetails['addressLine2'],
          addressLine3: guardianDetails['addressLine3'],
          phoneNumber: guardianDetails['phoneNumber'],
          mobileNumber: guardianDetails['mobileNumber'],
          emailId: guardianDetails['emailId'],
          country: guardianDetails['country'],
          state: guardianDetails['state'],
          townOrCity: guardianDetails['townOrCity'],
          zipCode: guardianDetails['zipCode']
        } : null
      }
    };
    if(!checked){
      delete body.ProcessVariables.rdDetails.staffId;  
    }
    console.log("[RecurringDepositService] Update SR Payload: ", body);

    // return this.baseAPIService.auth_options(APIConstants.getAccountDetails.WORKFLOW_ID, body);
    return of(
      {
        "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
        "Error": "0",
        "ErrorCode": "200",
        "ErrorMessage": "SR Details has been saved successfully",
        "ProcessId": "72ded74a5d5711eaa3dc6adcd8a925ce",
        "ProcessInstanceId": "9ff4da605fa311ea91416adcd8a925ce",
        "ProcessName": "FDRD:: Update SR Details",
        "ProcessVariables": null,
        "Status": "Execution Completed",
        "WorkflowId": "72aede785d5711ea81a56adcd8a925ce"
      }
    );
  }
  sr_submit(){
    let processVariables = {
      "projectId": Constants.PROJECT_ID,
      "workflowId": 'APIConstants.Accept.WORKFLOW_ID',
      "processId": 'APIConstants.Accept.PROCESS_ID',
      "ProcessVariables": {
        "srId": sessionStorage.getItem('sr_val'),
        "isApproved": true
      }
    }
    console.log('[RecurringDepositService] In sr_submit processVariables: ', processVariables);
    // return this.baseAPIService.common(APIConstants.Accept.WORKFLOW_ID, processVariables);
    return of({});
  }

  // dummygetAccountBalance(a, b) {
  //   if(b == '1234567890987654') {
  //     return of(
  //       {
  //         "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
  //         "Error": "0",
  //         "ErrorCode": "200",
  //         "ErrorMessage": "",
  //         "ProcessId": "59cf14ec09d611eabda88a71c4611c6d",
  //         "ProcessInstanceId": "bb5eee3e53c911eaa4fb3af528466045",
  //         "ProcessName": "CSSP:: Get Account Details",
  //         "ProcessVariables": {
  //             "balance": "120000.00",
  //             "fdrdQuickBookData": [
  //                 {
  //                     "amount": 10000,
  //                     "isSpecial": true,
  //                     "maxDays": 0,
  //                     "maxMonths": 0,
  //                     "maxYear": 3,
  //                     "minDays": 0,
  //                     "minMonths": 0,
  //                     "minYear": 2,
  //                     "schemeName": "2 years < 3 years"
  //                 },
  //                 {
  //                     "amount": 60000,
  //                     "isSpecial": true,
  //                     "maxDays": 20,
  //                     "maxMonths": 12,
  //                     "maxYear": 0,
  //                     "minDays": 10,
  //                     "minMonths": 12,
  //                     "minYear": 0,
  //                     "schemeName": "12 Months 10 Days to 12 Months 20 Days"
  //                 },
  //                 {
  //                     "amount": 90000,
  //                     "isSpecial": true,
  //                     "maxDays": 18,
  //                     "maxMonths": 18,
  //                     "maxYear": 0,
  //                     "minDays": 8,
  //                     "minMonths": 18,
  //                     "minYear": 0,
  //                     "schemeName": "18 Months 8 Days to 18 Months 18 Days"
  //                 }
  //             ],
  //             "guardianDetails": {
  //                 "addressLine1": "PAREL",
  //                 "addressLine2": "Thane",
  //                 "addressLine3": "Thane",
  //                 "country": "1",
  //                 "emailId": "test@gmail.com",
  //                 "guardianName": "Sample Name",
  //                 "mobileNumber": "9876543210",
  //                 "phoneNumber": "9876543210",
  //                 "relationToNominee": "2",
  //                 "state": "MAHARASHTRA",
  //                 "townOrCity": "MUMBAI",
  //                 "zipCode": "400037"
  //             },
  //             "nomineeDetails": {
  //                 "addressLine1": "PAREL",
  //                 "addressLine2": "Thane",
  //                 "addressLine3": "Thane",
  //                 "country": "1",
  //                 "dateOfBirth": "2003-08-08",
  //                 "displayNomineeNameFlag": "Y",
  //                 "emailId": "test@gmail.com",
  //                 "mobileNumber": "9876543210",
  //                 "nomineeName": "Sample Name",
  //                 "nomineeRegistrationNumber": "6535991",
  //                 "relationToAccHolder": "2",
  //                 "sharePercentage": "100.00",
  //                 "state": "MAHARASHTRA",
  //                 "townOrCity": "MUMBAI",
  //                 "zipCode": "400037"
  //             },
  //             "quickBookData": null
  //         },
  //         "Status": "Execution Completed",
  //         "WorkflowId": "30a6167e09d611eabda88a71c4611c6d"
  //       }
  //     );
  //   } else {
  //     return of(
  //       {
  //         "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
  //         "Error": "0",
  //         "ErrorCode": "200",
  //         "ErrorMessage": "",
  //         "ProcessId": "59cf14ec09d611eabda88a71c4611c6d",
  //         "ProcessInstanceId": "f28a8f1853c311eabe0d3af528466045",
  //         "ProcessName": "CSSP:: Get Account Details",
  //         "ProcessVariables": {
  //             "balance": "800.00",
  //             "fdrdQuickBookData": [
  //                 {
  //                     "isSpecial": true,
  //                     "maxDays": 0,
  //                     "maxMonths": 0,
  //                     "maxYear": 3,
  //                     "minDays": 0,
  //                     "minMonths": 0,
  //                     "minYear": 2,
  //                     "schemeName": "2 years < 3 years"
  //                 },
  //                 {
  //                     "isSpecial": true,
  //                     "maxDays": 20,
  //                     "maxMonths": 12,
  //                     "maxYear": 0,
  //                     "minDays": 10,
  //                     "minMonths": 12,
  //                     "minYear": 0,
  //                     "schemeName": "12 Months 10 Days to 12 Months 20 Days"
  //                 },
  //                 {
  //                     "isSpecial": true,
  //                     "maxDays": 18,
  //                     "maxMonths": 18,
  //                     "maxYear": 0,
  //                     "minDays": 8,
  //                     "minMonths": 18,
  //                     "minYear": 0,
  //                     "schemeName": "18 Months 8 Days to 18 Months 18 Days"
  //                 }
  //             ],
  //             "guardianDetails": null,
  //             "nomineeDetails": null,
  //             "quickBookData": null
  //         },
  //         "Status": "Execution Completed",
  //         "WorkflowId": "30a6167e09d611eabda88a71c4611c6d"
  //       }
  //     );
  //   }
  // }

  // dummygetProductDetails(a,b,c,d) {
  //   return of(
  //     {
  //       "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
  //       "Error": "0",
  //       "ErrorCode": "200",
  //       "ErrorMessage": "",
  //       "ProcessId": "40eb48be0d0111eaa5ef8a71c4611c6d",
  //       "ProcessInstanceId": "118b6d0c4e4611ea9c833af528466045",
  //       "ProcessName": "CSSP:: Get Product Details",
  //       "ProcessVariables": {
  //           "compoundingFrequency": "",
  //           "compoundingFrequencyCode": "",
  //           "depositDate": "2020-11-09",
  //           "interestIndexCode": 100,
  //           "interestRate": "7.6",
  //           "jointHolder": false,
  //           "maturityAmount": "",
  //           "maturityDate": "2020-11-09",
  //           "payOutFrequency": "",
  //           "payoutFrequencyCode": "",
  //           "taxCode": 999,
  //           "tenure": "270 Days"
  //       },
  //       "Status": "Execution Completed",
  //       "WorkflowId": "15b498da0d0111eaa5ef8a71c4611c6d"
  //     }
  //   );
  // }

  // dummyCreateSR() {
  //   return of(
  //     {
  //       "ApplicationId": "ff0ae4a6884711e9b16676fb2f2488b6",
  //       "Error": "0",
  //       "ErrorCode": "200",
  //       "ErrorMessage": "Request created successfully",
  //       "ProcessId": "01ea2356c99a11e9933d8e7a151d5229",
  //       "ProcessInstanceId": "cf7a977a4e4611eaa5393af528466045",
  //       "ProcessName": "SSP_Create_SR",
  //       "ProcessVariables": {
  //           "apiUniqueReqId": "",
  //           "businessNew": "",
  //           "businessOld": "",
  //           "custDetails": {
  //               "accountNumber": null,
  //               "custId": "Ganesh332",
  //               "custName": "Ganesh522",
  //               "email": "kasarganesh99@gmail.com",
  //               "mobileNumber": "9860413109"
  //           },
  //           "industryNew": "",
  //           "industryOld": "",
  //           "needDocs": true,
  //           "needSupportedDocs": false,
  //           "profileOld": null,
  //           "sourceNew": "",
  //           "sourceOld": "",
  //           "srId": "SR20200213104933SS"
  //       },
  //       "Status": "Execution Completed",
  //       "WorkflowId": "75e5596ac95e11e9933d8e7a151d5229"
  //     }
  //   );
  // }

}
