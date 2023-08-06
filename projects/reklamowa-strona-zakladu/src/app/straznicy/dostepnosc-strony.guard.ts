import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StraznicyService} from "./straznicy.service";

@Injectable({
    providedIn: 'root'
})
export class DostepnoscStronyGuard implements CanActivate {
    constructor(private straznicy: StraznicyService, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log('Strażnik')
        if (this.straznicy.serwerAktywny == false) {

            this.router.navigate(['serwerNieDostepny'])
            return false;
        }
        if (this.straznicy.stronaWlaczona == true) {

            return true;
        } else if (this.straznicy.stronaWlaczona == false) {
            this.router.navigate(['stronaWylaczona'])
            return false
        }
        this.router.navigate(['ladowanie'])
        return false

    }

}
