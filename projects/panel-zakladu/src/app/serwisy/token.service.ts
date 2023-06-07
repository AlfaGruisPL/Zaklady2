import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public tokenTerminWaznosci?: Date;
  public tokenWartosc: string | undefined = "";

  constructor(private cookieService: CookieService) {
  }

  public stworzCookies() {
    console.log(this.tokenWartosc)
    if (this.tokenWartosc != undefined) {

      this.cookieService.put('token', this.tokenWartosc, {expires: this.tokenTerminWaznosci})
    }
  }

  public odczytajCookies() {
    this.tokenWartosc = this.cookieService.get('token')
  }

  public usunCiasteczka() {
    this.tokenWartosc = "";
    this.cookieService.remove('token');
  }

}
