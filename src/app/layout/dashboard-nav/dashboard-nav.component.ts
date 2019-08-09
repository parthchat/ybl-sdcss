import { Component, Inject} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, mapTo } from 'rxjs/operators';
import { AuthService } from '../../core/services/auth/auth.service';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { MatDialog } from '@angular/material';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { SelectServicesComponent } from 'src/app/dashboard/components/services-stepper/select-services/select-services.component';

@Component({
  selector: 'dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.css']
})

export class DashboardNavComponent {
  isActive: Boolean = true;
  isMenuActive: Boolean = false;
  isSubMenuActive: Boolean = false;
  isShowQuestion: Boolean = true;
  online$: Observable<boolean>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
    .pipe(
    map(result => result.matches)
    );
  isMenuActiveOne: boolean = false;
  isBankNewCustomer: boolean = false;
  isBankOldCustomer: boolean = false;

  arrServiceTypes = ['Financial', 'Non Financial', 'Regulatory'];
  arrNewCustomer = ['Branch Listing', 'Account Opening'];
  constructor(
    private breakpointObserver: BreakpointObserver,
    public auth: AuthService,
    public common: CommonService,
    public dialog: MatDialog,
    public router: Router,
    @Inject(DOCUMENT) private document: Document,
    ) {
    this.online$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(true)),
      fromEvent(window, 'offline').pipe(mapTo(false))
    );
    this.networkStatus();
  }

  ngOnInit() {
    console.log("this.router.url.toString()", this.router.url.toString());
    if (this.router.url.toString() == '/') {
      this.isShowQuestion = true;
    } else {
      this.isShowQuestion = false;
    }
  }

  onNotify(event){
    this.auth.isCheckRoute = true;
    this.isShowQuestion = false;
    if(event.value == 1){
      this.isBankNewCustomer = false;
      this.isBankOldCustomer = true;
      this.router.navigate(['/services-stepper/financial']);
    } else{
      this.isBankNewCustomer = true;
      this.isBankOldCustomer = false;
      this.router.navigate(['newCust']);
    }
  }

  public networkStatus() {
    this.online$.subscribe(value => {
      if (value === false) {
        this.auth.alertToUser('You are offline', false, true);
      }
    });
  }

  getServices(id){
    console.log("id", id);
    if(id == 0){
      this.router.navigate(['/services-stepper/financial']);
    }
    if(id == 1){
      this.router.navigate(['/services-stepper/non-financial']);
    }
    if(id == 2){
      this.router.navigate(['/services-stepper/regulatory']);
    }
  }

  activeSubmenu(fromLink) {
    if(fromLink == 'clickIn'){
      this.isMenuActive = !this.isMenuActive;
      if(this.isMenuActiveOne == true && this.isMenuActive == true){
        this.isMenuActiveOne = false;
      }
    }
    else{
      this.isMenuActive = false;
    }
  }

  activeSubmenuOne(fromLink) {
    if(fromLink == 'clickIn'){
      this.isMenuActiveOne = !this.isMenuActiveOne;
      if(this.isMenuActiveOne == true && this.isMenuActive == true){
        this.isMenuActive = false;
      }
    }
  }

  activeC() {
    this.isActive = !this.isActive;
  }

  activeClosed(){
    this.isActive = !this.isActive;
  }
}
