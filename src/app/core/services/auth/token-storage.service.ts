import { Injectable } from '@angular/core';
import { Constants } from 'src/app/app.constant';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class TokenStorage {

  constructor(private router: Router) { }

  ENCRYPTION_KEY = 'idnm@sec#pass123';

  tempToken = '';
  /**
	 * Get access token
	 * @returns {Observable<string>}
	 */
  public getAccessToken(): string {
    if (this.tempToken) {
      this.setAccessToken(this.tempToken);
      return this.tempToken;
    }
    const token: string = <string>sessionStorage.getItem(Constants.ACCESS_TOKEN);
    this.tempToken = token;
    return token;
  }

  /**
	 * Get bearer token
	 * @returns {Observable<string>}
	 */
  public getBearerToken(): string {
    const token: string = <string>sessionStorage.getItem(Constants.BEARER_TOKEN);
    return token;
  }

   /**
	 * Get session Id 
	 * @returns {Observable<string>}
	 */
  public getSessionId(): string {
    const sessionId: string = <string>sessionStorage.getItem(Constants.SESSION_ID);
    return sessionId;
  }


  /**
	 * Get sr Id 
	 * @returns {Observable<string>}
	 */
  public getSrId(): string {
    const srId: string = <string>sessionStorage.getItem(Constants.SR_ID);
    return srId;
  }

  /**
	 * Set sr token
	 * @returns {TokenStorage}
	 */
  public setSrId(srId: string): TokenStorage {
    if (srId) {
      sessionStorage.setItem(Constants.SR_ID, srId);
    }
    return this;
  }
  
  /**
	 * Set access token
	 * @returns {TokenStorage}
	 */
  public setAccessToken(token: string): TokenStorage {
    this.tempToken = token;
    sessionStorage.setItem(Constants.ACCESS_TOKEN, token);
    return this;
  }

  /**
	 * Set session id 
	 * @returns {TokenStorage}
	 */
  public setSessionId(sessionId): TokenStorage {
    sessionStorage.setItem(Constants.SESSION_ID, sessionId);
    return this;
  }

  /**
	 * Set refresh token
	 * @returns {TokenStorage}
	 */
  public setBearerToken(token: string): TokenStorage {
    if (token) {
      sessionStorage.setItem(Constants.BEARER_TOKEN, token);
    }
    return this;
  }

  public removeKey<T>(key) {
    sessionStorage.removeItem(key);
  }

  public setRouteData(key, value) {
    if (value) {
      const valueEnc = CryptoJS.AES.encrypt(JSON.stringify(value), this.ENCRYPTION_KEY).toString();
      return sessionStorage.setItem(key, valueEnc);
    }
    return null;
  }

  public setParamData(key, value) {
    if (value) {
      const valueEnc = CryptoJS.AES.encrypt(JSON.stringify(value), this.ENCRYPTION_KEY).toString();
      return sessionStorage.setItem(key, valueEnc);
    }
    return null;
  }

  public getRouteData() {
    try {
      const routeData = sessionStorage.getItem(Constants.ROUTES);
      if (routeData) {
        const bytes = CryptoJS.AES.decrypt(routeData, this.ENCRYPTION_KEY);
        const routeDataDec = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return routeDataDec;
      }
    } catch (err) {
      this.clear();
      this.router.navigate(['/login']);
    }
  }

  public getParamData() {
    try {
      const paramData = sessionStorage.getItem(Constants.PARAM_DATA);
      if (paramData) {
        const bytes = CryptoJS.AES.decrypt(paramData, this.ENCRYPTION_KEY);
        const paramDataDec = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return paramDataDec;
      }
    } catch (err) {
      this.clear();
      this.router.navigate(['/login']);
    }
  }

  public setReturnURL(returnURL: string) {
    sessionStorage.setItem(Constants.RETURN_URL, returnURL);
  }

  public getReturnURL() {
    sessionStorage.getItem(Constants.RETURN_URL);
  }
  /**
	 * Remove tokens
	 */
  public clear() {
    sessionStorage.removeItem(Constants.USER_INFO);
    sessionStorage.removeItem(Constants.ACCESS_TOKEN);
    sessionStorage.removeItem(Constants.BEARER_TOKEN);
    sessionStorage.removeItem(Constants.SESSION_ID);
    sessionStorage.removeItem(Constants.SR_ID);
    sessionStorage.clear();
    this.tempToken = null;
  }
}
