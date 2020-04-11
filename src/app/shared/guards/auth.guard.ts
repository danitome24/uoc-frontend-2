import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('AuthGuard#canActivate called');

        if (true) {
            return true;
        }

        console.log('AuthGuard#canActivate not authorized to access page');
        this.router.navigate(['signin']);

        return false;
    }
}
