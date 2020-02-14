import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { TokenStorage } from '../services/auth/token-storage.service';
import { EncryptionService } from '../encryption/encryption.service'
import { environment } from 'src/environments/environment';
import { Constants, AlertMessages } from '../../app.constant';
import { MatDialog } from '@angular/material';

@Injectable()
export class FilterInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private auth: AuthService,
    private tokenStorage: TokenStorage,
    private encryptionService: EncryptionService,
    private dialog: MatDialog
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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

    if (request.url.toString().indexOf('auth_init') !== -1 || request.url.toString().indexOf('auth_validate') !== -1 || request.url.toString().indexOf('auth_reinit') !== -1) {
      request = request.clone({
        setHeaders: {
          'X-AUTH-SESSIONID': this.tokenStorage.getSessionId()
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          'authentication-token': this.tokenStorage.getAccessToken()
        },
      });     
    }
    if (!request.headers.has(Constants.InterceptorSkipHeader) && request.method != "GET") {
      let encryption = this.encryptionService.encrypt((request.body), environment.aesPublicKey);
      request = request.clone({
        setHeaders: encryption.headers,
        body: encryption.rawPayload,
        responseType: 'text'
      });
    }
    else if (request.headers.has(Constants.InterceptorSkipHeader)) {
      const headers = request.headers.delete(Constants.InterceptorSkipHeader);
      request = request.clone({ headers })
    }

    return next.handle(request).pipe(
      map(
        event => {
          if (event instanceof HttpResponse) {
          console.log("Resp ",this.decryptResponse(event));
            if (this.decryptResponse(event)) {
              event = event.clone({ body: JSON.parse(this.decryptResponse(event)) });
              if (event.headers.get('ACCESS_TOKEN')) {
                this.tokenStorage.setBearerToken(
                  event.headers.get('ACCESS_TOKEN')
                );
              }
              if (
                'body' in event &&
                'login_required' in event['body'] &&
                event['body']['login_required'] === true
              ) {
                this.auth.alertToUser(AlertMessages.SESSION_EXPIRED);
                this.dialog.closeAll();
                this.tokenStorage.clear();
                // this.auth.logout(false);
                throw new Error(AlertMessages.SESSION_EXPIRED);
                // this.auth.alertToUser(AlertMessages.SESSION_EXPIRED, true, true);
                // throw new Error(AlertMessages.SESSION_EXPIRED);
              }
            } else {
              if(typeof event['body'] == "string") {
                event = event.clone({ body: JSON.parse(event['body']) });
              }
              if (
                'body' in event &&
                'login_required' in event['body'] &&
                event['body']['login_required'] === true
              ) {
                this.auth.alertToUser(AlertMessages.SESSION_EXPIRED);
                this.dialog.closeAll();
                this.tokenStorage.clear();
                // this.auth.logout(false);
                throw new Error(AlertMessages.SESSION_EXPIRED);
                // this.auth.alertToUser(AlertMessages.SESSION_EXPIRED, true, true);
                // throw new Error(AlertMessages.SESSION_EXPIRED);
              }
            }
          }

          return event;
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            let custerror = this.decryptResponse(error.error)
            if (custerror) {
              this.decryptResponse(error.error)
            }
            if (error.status === 401) {
              // redirect to the login route
              // or show a modal
              this.router.navigate(['/notfound']);
            }
          } else {
            if (
              'body' in event &&
              'login_required' in event['body'] &&
              event['body']['login_required'] === true
            ) {
              this.auth.alertToUser(AlertMessages.SESSION_EXPIRED);
              this.dialog.closeAll();
              this.tokenStorage.clear();
              // this.auth.logout(false);
              throw new Error(AlertMessages.SESSION_EXPIRED);
              // this.auth.alertToUser(AlertMessages.SESSION_EXPIRED, true, true);
              // throw new Error(AlertMessages.SESSION_EXPIRED);
            } else {
            this.auth.alertToUser(AlertMessages.SERVER_ERROR);
            }
          }
        }
      )
    );
  }

  decryptResponse(event) {
    var timestamp = event.headers.get('x-appiyo-ts')
    var randomkey = event.headers.get('x-appiyo-key')
    var responseHash = event.headers.get('x-appiyo-hash');
    if (timestamp != null) {
      let decryption = this.encryptionService.decrypt(randomkey, timestamp, responseHash, event.body, environment.aesPublicKey);
      return decryption;
    } else {
      return false;
    }

  }
}

