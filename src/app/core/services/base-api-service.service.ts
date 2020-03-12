import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/app.constant';

//const SERVER_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class BaseAPIService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  // get(endpoint, params) {
  //   if (Object.keys(params).length) {
  //     return this.http.get(`${SERVER_URL}${endpoint}/${params}`);
  //   } else {
  //     return this.http.get(`${SERVER_URL}${endpoint}`);
  //   }
  // }

  loginpost(endpoint, params, httpOptions) {
    return this.http.post(`${endpoint}`, JSON.stringify(params), httpOptions);
  }

  post(workflowId, params) {
    let SERVER_URL = this.baseUrl + `d/workflows/${workflowId}/${environment.apiVersion}/execute`;
    return this.http.post(`${SERVER_URL}`, JSON.stringify(params));
  }

  postUpload(params) {
    let SERVER_URL = this.baseUrl + 'd/drive/upload';
    const headers = new HttpHeaders().set(Constants.InterceptorSkipHeader, '');
    return this.http.post(`${SERVER_URL}`, params, { headers, reportProgress: true, observe: 'events' });
    //  return this.http.post(`${SERVER_URL}`, params, { headers });
  }

  getAuthTokenPost(params) {
    return this.http.post(`${environment.apiUrl}session/auth_init`, JSON.stringify(params));
  }

  getAuthReInitPost(params) {
    return this.http.post(`${environment.apiUrl}session/auth_reinit`, JSON.stringify(params));
  }

  validateAuthPost(params) {
    return this.http.post(`${environment.apiUrl}session/auth_validate`, JSON.stringify(params));
  }

  getImage(fileId): Observable<any> {
    return this.http.get(environment.documentUrl + fileId, { responseType: "blob" });
  }
  
  // put(endpoint, params): Observable<Object> {
  //   const body = new HttpParams().set(
  //     `processVariables`,
  //     JSON.stringify(params)
  //   );
  //   return this.http.post(`${SERVER_URL}${endpoint}/`,  JSON.stringify(params));
  // }

  getStatusCode(resp) {
    const statusCode = resp['ProcessVariables']['response'][0].statusCode;
    return statusCode;
  }

  getStatus(resp) {
    const status = resp['ProcessVariables']['response'][0].status;
    return status;
  }

  getSuccessMsg(resp) {
    const responseMsg = resp['ProcessVariables']['response'][0].message;
    return responseMsg;
  }

  getErrorCode(resp) {
    return resp['Error'];
  }

  getResponseStatus(response) {
    if (
      this.getErrorCode(response) === '0' &&
      this.getStatusCode(response) === 200 ) {
      return true;
    } else {
      return false;
    }
  }

  sr_update(workflowId:any,params:any){
    let SERVER_URL = this.baseUrl + `d/workflows/${workflowId}/${environment.apiVersion}/execute`;
    return this.http.post(`${SERVER_URL}`, JSON.stringify(params));
  }

}
