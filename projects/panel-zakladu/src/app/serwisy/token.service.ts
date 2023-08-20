import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public tokenTerminWaznosci: Date = new Date();
  public tokenWartosc: string | undefined = '';
  public tokenGrupy: number[] | undefined = [];

  constructor(private cookieService: CookieService) {
  }

  czyWlasciciel() {
    return this.tokenGrupy?.find(k => k == 2) != undefined;
  }

  public stworzCookies() {
    if (this.tokenWartosc != undefined) {
      this.cookieService.put('grupy', JSON.stringify(this.tokenGrupy), {
        expires: this.tokenTerminWaznosci,
        sameSite: 'lax',
        secure: false,
      });
      this.cookieService.put('token', this.tokenWartosc, {
        expires: this.tokenTerminWaznosci,
        sameSite: 'lax',
        //todo: tu powinno być chyba true, ale na serwerze nie działa bez https
        secure: false,
      });
    }
  }

  public odczytajCookies() {
    this.tokenWartosc = this.cookieService.get('token');
    if (<string>this.cookieService.get('grupy') != undefined) {
      this.tokenGrupy = JSON.parse(<string>this.cookieService.get('grupy'));
    }
  }

  public usunCiasteczka() {
    this.tokenWartosc = '';
    this.cookieService.remove('token');
  }

  zaaktualizujToken(dane: any) {
    if (dane['endLifeTime'] != undefined) {
      this.tokenTerminWaznosci = new Date(dane['endLifeTime']);
      this.stworzCookies();
    }
  }
}
