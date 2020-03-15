import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../services/user-store';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private userStore: UserStoreService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userStore.isLoggedIn()) {
      return true;
    }

    console.log('RoleGuard#canActivate not permissions to access page');
    this.router.navigate(['signin']);

    return false;
  }

}
