import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { StraznicyService } from './straznicy.service';
import { TokenService } from '../serwisy/token.service';

@Injectable({
  providedIn: 'root',
})
export class reverseLoginGuard implements CanActivate {
  count = 1;

  constructor(
    private router: Router,
    private cookies: CookieService,
    private service: StraznicyService,
    private token: TokenService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.token.tokenWartosc === undefined || this.token.tokenWartosc == '') {
      return true;
    }
    this.router.navigate(['panelPracownika']);
    return false;
  }
}
