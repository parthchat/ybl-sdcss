import { Injectable } from '@angular/core';
import { Observable, of as observableOf, Subject, BehaviorSubject, of } from "rxjs";
import { BaseAPIService } from 'src/app/core/services/base-api-service.service';
import { Constants } from '../../app.constant';
import { TokenStorage } from './auth/token-storage.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private requestParams: Object;
  arr: any;
  routeArray:any = [];
  queryParamsData:any = [];
  private routeUpdated = new Subject<any>();
  private queryUpdated = new Subject<any>();

  constructor(
    public baseAPIService: BaseAPIService,
    public tokenStorage: TokenStorage
  ) {
    //Checks sessionStorage for route data array
    if (this.tokenStorage.getRouteData()) {
      let localRouteData = this.tokenStorage.getRouteData();
      this.routeArray = JSON.parse(localRouteData);
    } else {
      this.tokenStorage.setRouteData(Constants.ROUTES, JSON.stringify(this.routeArray));
    }
    //Checks sessionStorage for params data array
    if (this.tokenStorage.getParamData()) {
      this.queryParamsData = JSON.parse(this.tokenStorage.getParamData());
    } else {
      this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
    }
  }

  //Returns breadcrumb array
  getBreadcrumbs() {
    this.routeUpdated.next([...this.routeArray]);
    return this.routeArray;
  }

  getRouteUpdatedListener() {
    return this.routeUpdated.asObservable();
  }

  addBreadcrumb(data) {
    //Check whether current route name exist or not
    if (this.routeArray.filter(e => e.name === data.name).length > 0) {
      //Get index of existed route
      const index = this.routeArray.map(function (route) { return route.name; }).indexOf(data.name);
      //Removes all elements after route index
      this.routeArray = this.routeArray.slice(0, index + 1);
      //Set data to sessionStorage to make it work after browser refresh
      this.tokenStorage.setRouteData(Constants.ROUTES, JSON.stringify(this.routeArray));
      //Return breadcrumb array to component
      this.getBreadcrumbs();
    } else {
      //Push current route in array
      this.routeArray.push(data);
      this.routeUpdated.next(this.routeArray);
      //Set data to sessionStorage
      this.tokenStorage.setRouteData(Constants.ROUTES, JSON.stringify(this.routeArray));
    }
  }

  getQueryUpdatedListener() {
    return this.queryUpdated.asObservable();
  }

  setQueryParams(data): Observable<any> {
    //Check whether current param name exist or not
    if (this.queryParamsData.filter(e => e.name === data.name).length > 0) {
      //Get index of existed param route
      const index = this.queryParamsData.map(function (route) { return route.name; }).indexOf(data.name);
      //Update param data by index
      this.queryParamsData[index].data = data.data;
      this.queryUpdated.next(this.queryParamsData);
      //Set data to sessionStorage
      this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
      return observableOf(true);
    } else {
      //Push current param in array
      this.queryParamsData.push(data);
      this.queryUpdated.next(this.queryParamsData);
      //Set data to sessionStorage
      this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
      return observableOf(true);
    }
  }

  //Get params data
  getQueryParams() {
    this.queryUpdated.next([...this.queryParamsData]);
    return this.queryParamsData;
  }

  getParams() {
    this.queryParamsData = this.tokenStorage.getParamData();
    if (this.queryParamsData) {
      return this.queryParamsData;
    } else {
      return [];
    }
  }

  // when logout - clear queryParamsData
  clearAllParamData() {
    this.queryParamsData = [];
    this.queryUpdated.next(this.queryParamsData);
    this.tokenStorage.setParamData(Constants.PARAM_DATA, JSON.stringify(this.queryParamsData));
  }
}
