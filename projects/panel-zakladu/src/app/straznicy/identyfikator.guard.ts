import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { ListyService } from '../serwisy/listy.service';
import { PodreczneDaneService } from '../serwisy/podreczne-dane.service';

@Injectable({
  providedIn: 'root',
})
export class IdentyfikatorGuard implements CanActivate {
  constructor(
    private router: Router,
    private podreczneDane_: PodreczneDaneService,
    private listy: ListyService
  ) {}

  // @ts-ignore
  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree
  > {
    await this.podreczneDane_.identyfikacjaZakladu();
    this.podreczneDane_.subDomainID = true;
    return true;
  }
}
