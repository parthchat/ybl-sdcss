import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Constants } from 'src/app/app.constant';
import { TokenStorage } from './token-storage.service';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isCheckRoute = false;
  loggedIn = false;
  brokerLoggedIn = false;
  brokerVerified = false;
  contractorLoggedIn = false;
  contractorVerified = false;
  isYesTeamMember = false;
  isREHMember = false;
  apiUrl: string;
  username: string;
  arrRoles: any[];
  arrAllowedRoutes: any[];

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private tokenStorage: TokenStorage,
    private common: CommonService
  ) {}

  public resetLoginDetails() {
    this.arrAllowedRoutes = [];
    this.tokenStorage.removeKey(Constants.ROUTES);
    this.tokenStorage.removeKey(Constants.PARAM_DATA);
    this.common.clearAllParamData();
    this.tokenStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  decodeUserFromToken(token) {
    return token;
  }

  alertToUser(message, logout: boolean = false, isError: boolean = false) {
    const snackbarConfig = new MatSnackBarConfig();
    snackbarConfig.duration = 5000;
    snackbarConfig.verticalPosition = 'top';
    snackbarConfig.horizontalPosition = 'right';
    if (isError) {
      snackbarConfig.panelClass = ['red-snackbar'];
    }
    if (!logout) {
      this.snackBar.open(message, '', snackbarConfig);
    }
    if (logout && this.loggedIn) {
      this.snackBar.open(message, '', snackbarConfig);
      // this.logout(false);
    }
  }
}
