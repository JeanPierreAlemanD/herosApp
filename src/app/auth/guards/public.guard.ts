import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, filter, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })

export class PublicGuard implements CanActivate {


    constructor(
        private authService: AuthService,
        private router: Router
    ) { }


    private checkAuthStatus(): Observable<boolean> | boolean {
        return this.authService.checkAuthentication()
            .pipe(
                tap(isAuthenticated => console.log('Public-guard--> ', isAuthenticated)),
                tap(isAuthenticated => {
                    if (isAuthenticated) {
                        console.log('Public-!!isAuthenticated 1--> ', isAuthenticated)
                        this.router.navigate(['./'])
                    }
                }),
                map(isAuthenticated => !isAuthenticated)
            )
    }


    canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {

        return this.checkAuthStatus()
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.checkAuthStatus()
    }



}