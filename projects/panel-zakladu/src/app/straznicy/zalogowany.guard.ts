import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CookieService} from "ngx-cookie";
import {ListonoszService} from "../serwisy/listonosz.service";
import {StraznicyService} from "./straznicy.service";

@Injectable({
  providedIn: 'root'
})
export class ZalogowanyGuard implements CanActivate {
  count = 1

  constructor(private router: Router,
              private cookies: CookieService,
              private service: StraznicyService,
              private listonosz: ListonoszService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cookies.get("token") == undefined) {
      this.router.navigate([''])
      return false
    }
    this.service.sprawdzanieZalogowania()
    return true
  }

}
