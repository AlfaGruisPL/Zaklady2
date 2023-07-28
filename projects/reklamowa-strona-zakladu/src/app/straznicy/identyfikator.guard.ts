import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DanePodstawoweService} from "../serwisy/dane-podstawowe.service";
import {ListyService} from "../serwisy/listy.service";

@Injectable({
  providedIn: 'root'
})
export class IdentyfikatorGuard implements CanActivate {
  constructor(private router: Router, private danePodstawowe: DanePodstawoweService, private listy: ListyService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const sub = window.location.href.split('.')[0].split("//")[1];
    const id = route.paramMap.get('identyfikator');
    this.danePodstawowe.subDomainID = false
    if (sub == "parametr" || sub == "k") {
      if (id != null && id.length > 0) {
        this.listy.identyfikatorWParametrze = id
        this.danePodstawowe.subDomainID = true
        return true;
      } else {
        this.router.navigate(['pageNotFound'])
      }
    } else {
      return true
    }
    this.router.navigate(['pageNotFound'])
    return false
  }

}
