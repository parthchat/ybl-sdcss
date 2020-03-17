import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AlertMessages } from '../app.constant';

@Component({
  selector: 'app-common-details',
  templateUrl: './common-details.component.html',
  styleUrls: ['./common-details.component.scss']
})
export class CommonDetailsComponent implements OnInit {
  customerDetails: Object;
  res_: any;
  details: any = [];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    if (this.customerDetails) {
      this.customerDetails = this.dataservice.customerDetails;
      console.log(this.customerDetails, 'common objct');
      this.res_ = this.customerDetails; 
      this.processVaribles();
    }
    else (!this.customerDetails)
    {
      let apiUniqueKey = new Date().getTime().toString();
      this.dataservice.cust(apiUniqueKey).subscribe(res => {
        this.res_ = res;
        console.log(this.res_, 'obj res');
        this.processVaribles();
      })
    }
  }

  // assign values for customer details
  processVaribles() {
    let cust_details = this.res_['ProcessVariables']['custDetails'];
    console.log(cust_details,'details');
    let cust_id = cust_details['custId'];
    let srType = this.res_['ProcessVariables']['srDetails']['srName'];
    let old_pan_number = this.res_['ProcessVariables']['custDetails']['mdmPan'] ? this.res_['ProcessVariables']['custDetails']['mdmPan'] : AlertMessages.NA_BANK_MSG;
    let new_pan_number = this.res_['ProcessVariables']['custDetails']['newPan'] ? this.res_['ProcessVariables']['panUpdate']['newPan'] : AlertMessages.NA_BANK_MSG;
    let custName = this.res_['ProcessVariables']['custDetails']['custName'] ? this.res_['ProcessVariables']['custDetails']['custName'] : AlertMessages.NA_BANK_MSG;
    this.details.push({ 'cust_id': cust_id, 'srType': srType, 'old_pan_number': old_pan_number, 'new_pan_number': new_pan_number,'custName': custName });

  }

}
