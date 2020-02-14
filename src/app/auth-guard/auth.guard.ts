import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorage } from '../core/services/auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private tokenStorage: TokenStorage){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.tokenStorage.getAccessToken() || !this.tokenStorage.getSessionId()){
      console.log("IN Auth Guard ...");
      // this.tokenstorage.clear();
      this.router.navigate(['error']);
      return false;
    }
    return true;
    }
}
