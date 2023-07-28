import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public tokenTerminWaznosci?: Date;
  public tokenWartosc: string | undefined = "";
  public tokenGrupy: number[] | undefined = []

  constructor(private cookieService: CookieService) {
  }

  public stworzCookies() {
    console.log(this.tokenWartosc)
    if (this.tokenWartosc != undefined) {
      this.cookieService.put('grupy', JSON.stringify(this.tokenGrupy), {expires: this.tokenTerminWaznosci})
      this.cookieService.put('token', this.tokenWartosc, {expires: this.tokenTerminWaznosci})
    }
  }

  public odczytajCookies() {
    this.tokenWartosc = this.cookieService.get('token')
    if (<string>this.cookieService.get('grupy') != undefined) {
      this.tokenGrupy = JSON.parse(<string>this.cookieService.get('grupy'))
    }

  }

  public usunCiasteczka() {
    this.tokenWartosc = "";
    this.cookieService.remove('token');
  }

}
