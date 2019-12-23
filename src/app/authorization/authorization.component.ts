import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  active_option: any = 0;

  constructor(private service : DataService) { }

  ngOnInit() {
    let apiUniqueKey = new Date().getTime().toString();
    this.service.getAuth(apiUniqueKey).subscribe(res=>{
      console.log(res,'auth options')
    })
  }
  authorization(option_val){
    this.active_option = option_val
  }
}
