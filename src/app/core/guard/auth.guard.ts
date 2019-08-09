import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DashboardNavComponent } from 'src/app/layout/dashboard-nav/dashboard-nav.component';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isCheckRoute == false){
      this.router.navigate(['']);
      return false;
    }
    return true;

  //   if (!this.dashboardNavComponent.isCheckRoute) return true;
  //     this.router.navigate(['']);
  //  return false;
  }
}
