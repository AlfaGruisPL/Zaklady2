import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie';
import {HttpError} from '../../../../klasy/httpError';
import {ListonoszService} from '../serwisy/listonosz.service';
import {Router} from '@angular/router';
import {KomunikatyService} from '../serwisy/komunikaty.service';

@Injectable({
  providedIn: 'root',
})
export class StraznicyService {
  private uruchomioneSprawdzanie = false;
  private interval: any;
  private licznik = -10;

  constructor(
    private cookied: CookieService,
    private router: Router,
    private komunikaty_: KomunikatyService,
    private listonosz: ListonoszService
  ) {
  }

  zatrzymajSprawdzanie() {
    clearInterval(this.interval);
  }

  sprawdzanieZalogowania() {
    if (this.uruchomioneSprawdzanie) {
      return;
    }
    if (this.cookied.get('token') != undefined) {
      this.interval = setInterval(() => {
        if (this.cookied.get('token') != undefined) {
          this.licznik--;
          if (this.licznik < 0) {
            this.licznik = 10;
            this.listonosz
              .pobierz('/token/aktywnosc')
              .then(k => {
              })
              .catch((error: HttpError) => {
                // todo: poprawić to żeby serwer wysyłał odpowiedz konkretną kiedy znalazł token ale ten jest już nie ważny, bo tereaz różne błędy mogą to wywoływać
                if (error.status == 401) {
                  console.log('token stracił ważność na podstawie bazy danych');
                }
                //   this.wyluguj()
              });
          }
        } else {
          console.log('token stracił ważność na podstawie ciasteczek');
          //   this.wyluguj()
        }
      }, 1000);
    }
  }

  private wyluguj() {
    clearInterval(this.interval);
    this.komunikaty_.automatyczneWylogowanie();
    this.uruchomioneSprawdzanie = false;
    this.router.navigate(['']);
    this.cookied.remove('token');
  }
}
