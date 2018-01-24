import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, Route, CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private router: Router) { }

    private isLogged = false;

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLogin();
    }

    canLoad(route: Route) {
        return this.checkLogin();
    }

    private checkLogin() {
        if (this.isLogged) {
            return true;
        }
        this.router.navigate(['/unauthorized']);
        return false;
    }
}
