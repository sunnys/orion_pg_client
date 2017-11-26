import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Logger } from '../logger.service';
import { AuthenticationService } from './authentication.service';
import { Angular2TokenService } from 'angular2-token';
const log = new Logger('AuthenticationGuard');

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private tokenAuthService: Angular2TokenService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    if (this.authenticationService.isAuthenticated()) {
      log.debug(this.tokenAuthService.userSignedIn());
    // if (this.tokenAuthService.userSignedIn()) {
      return true;
    }
    this.authenticationService.redirectUrl = url;
    log.debug('Not authenticated, redirecting...');
    this.router.navigate(['/login'], { replaceUrl: true });
    return false;
  }

}
