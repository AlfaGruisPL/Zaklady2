import { Injectable } from '@angular/core';
import { ListyService } from './listy.service';
import { Drzwi } from '../enum/drzwi';
import { OdpowiedzPotwierdzajacaPoprawnosc } from '../klasy/odpowiedz-potwierdzajaca-poprawnosc';
import { TokenService } from './token.service';
import { LogowanieZwracajaceDaneItoken } from '../klasy/logowanie-zwracajace-dane-itoken';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpError } from '../../../../klasy/httpError';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ListonoszService {
  constructor(
    private listy: ListyService,
    private token_: TokenService,
    private token: TokenService,
    private router: Router
  ) {}

  public wyloguj() {
    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc,
      });
      opcjeWPudelku = { headers: opcje };
    }
    return new Promise((resolve, reject) => {
      this.listy.pobierz(Drzwi.wylogowanie, opcjeWPudelku).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<LogowanieZwracajaceDaneItoken>) => {
          this.token.tokenWartosc = undefined;
          this.token.tokenTerminWaznosci = new Date();
          this.token.usunCiasteczka();
          resolve(next);
        },
        (error: HttpError) => {
          reject(error);
        }
      );
    });
  }

  public zaloguj(zawartosc: any): Promise<any | HttpError> {
    return new Promise((resolve, reject) => {
      this.listy.wyslij(Drzwi.logowanie, zawartosc, {}).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<LogowanieZwracajaceDaneItoken>) => {
          this.token.tokenWartosc = next.value?.token?.value;

          this.token.tokenTerminWaznosci = new Date(
            // @ts-ignore
            next.value.token.endLifeTime
          );
          this.token.tokenGrupy = next.value?.userData?.grupy.map(k => k.groupId);

          this.token.stworzCookies();
          resolve(next);
        },
        (error: HttpError) => {
          reject(error);
        }
      );
    });
  }

  public wyslij(drzwi: Drzwi | string, zawartosc: any): Promise<any | HttpError> {
    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc,
      });
      opcjeWPudelku = { headers: opcje };
    }
    return new Promise((resolve, reject) => {
      this.listy.wyslij(drzwi, zawartosc, opcjeWPudelku).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          this.token_.zaaktualizujToken(next.token);

          resolve(next.value);
        },
        (error: HttpError) => {
          reject(error);
        }
      );
    });
  }

  public usun(drzwi: Drzwi | string): Promise<any | HttpError> {
    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc,
      });
      opcjeWPudelku = { headers: opcje };
    }
    return new Promise((resolve, reject) => {
      this.listy.usun(drzwi, opcjeWPudelku).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          this.token_.zaaktualizujToken(next.token);
          resolve(next.value);
        },
        (error: HttpError) => {
          reject(error);
        }
      );
    });
  }

  public pobierz(drzwi: Drzwi | string, params: HttpParams = new HttpParams()): Promise<any | HttpError> {
    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc,
      });
      opcjeWPudelku = { headers: opcje, params };
    }

    return new Promise((resolve, reject) => {
      this.listy.pobierz(drzwi, opcjeWPudelku).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          this.token_.zaaktualizujToken(next.token);
          resolve(next.value);
        },
        (error: HttpError) => {
          this.checkError(error);
          reject(error);
        }
      );
    });
  }

  public aktualizuj(drzwi: Drzwi | string, zawartosc: any): Promise<any | HttpError> {
    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc,
      });
      opcjeWPudelku = { headers: opcje };
    }
    return new Promise((resolve, reject) => {
      this.listy.aktualizuj(drzwi, zawartosc, opcjeWPudelku).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          this.token_.zaaktualizujToken(next.token);
          resolve(next.value);
        },
        (error: HttpError) => {
          reject(error);
        }
      );
    });
  }

  private checkError(error: HttpError) {
    if (error.status == 401) {
      this.token.tokenWartosc = undefined;
      this.token.tokenTerminWaznosci = new Date();
      this.token.usunCiasteczka();
      console.error(`checkError 401 - ${error.error?.reasonCode}`);
      this.router.navigate(['./']);
    }
  }
}
