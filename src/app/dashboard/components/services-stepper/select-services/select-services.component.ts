import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-services',
  templateUrl: './select-services.component.html',
  styleUrls: ['./select-services.component.css']
})
export class SelectServicesComponent implements OnInit {
  arrFinancialServiceList = [{
      id:1, 
      name: 'Create FD'
    }
  ];
  arrNonFinancialServiceList = [
    {
      id:1, 
      name: 'UPDATION OF PAN'
    },
    {
      id:2, 
      name: 'UPDATION OF DOB'
    },
    {
      id:3, 
      name: 'RE-KYC'
    },
    {
      id:4, 
      name: 'CHANGE MOBILE'
    },
    {
      id:5, 
      name: 'CHANGE EMAIL'
    }
  ];

  arrRegulatoryServiceList = [
    {
      id:1, 
      name: 'TEST 1'
    },
    {
      id:2, 
      name: 'TEST 2'
    }
  ];
  arrServiceList: any;

  constructor( private router: Router) {}

  ngOnInit() {
    console.log("this.router.url.toString()", this.router.url.toString(), this.router.url.toString().indexOf("financial"));
    if (this.router.url.toString().indexOf("financial") !== -1) {
      console.log("test");
      this.arrServiceList = this.arrFinancialServiceList;
    }
    if (this.router.url.toString().indexOf("non-financial") !== -1) {
      console.log("test 1");
      this.arrServiceList = this.arrNonFinancialServiceList;
    }
    if (this.router.url.toString().indexOf("regulatory") !== -1) {
      console.log("test 3");
      this.arrServiceList = this.arrRegulatoryServiceList;
    }
  }

  goToNext(srId){
    console.log("srId", srId);
  }

}
