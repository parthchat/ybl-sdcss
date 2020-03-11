import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accept-reject',
  templateUrl: './accept-reject.component.html',
  styleUrls: ['./accept-reject.component.css']
})
export class AcceptRejectComponent implements OnInit {

  constructor(private router: Router, private service: DataService, private route: ActivatedRoute) { }

  showval:boolean;
  srId = this.service.srId;

  ngOnInit() {
    if(this.service.accptRejct) {
      this.showval = true;
      return;
    }

    if(this.service.accptRejct===false) {
      this.showval = false;
      return;
    } else {
      this.router.navigate(['404']);
    }
  }

}
