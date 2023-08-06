import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {ListyService} from "../serwisy/listy.service";
import {PodreczneDaneService} from "../serwisy/podreczne-dane.service";

@Injectable({
  providedIn: 'root'
})
export class IdentyfikatorGuard implements CanActivate {
  constructor(private router: Router, private podreczneDane_: PodreczneDaneService, private listy: ListyService) {
  }

  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    const sub = window.location.href.split('.')[0].split("//")[1];
    const id = route.paramMap.get('identyfikator');
    console.log(id)
    this.podreczneDane_.subDomainID = false
    // if (!this.podreczneDane_.zakladZnaleziony_domenowe) {
    //  }

    if (sub == "parametr" || sub == "k") {
      if (id != null && id.length > 0) {
        console.log('id', id)
        this.listy.identyfikatorWParametrze = id
        this.podreczneDane_.subDomainID = true
        await this.podreczneDane_.identyfikacjaZakladu()
        this.podreczneDane_.wartoscAutomatycznegoIdentyfikatora = id
        return true;
      } else {

        this.router.navigate(['pageNotFound'])
      }
    } else {
      await this.podreczneDane_.identyfikacjaZakladu()
      this.podreczneDane_.subDomainID = true
      return true

    }
    return false
  }

}
