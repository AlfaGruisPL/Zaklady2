import {Injectable} from '@angular/core';
import {ListyService} from "./listy.service";
import {Drzwi} from "../enum/drzwi";
import {OdpowiedzPotwierdzajacaPoprawnosc} from "../klasy/odpowiedz-potwierdzajaca-poprawnosc";
import {TokenService} from "./token.service";
import {LogowanieZwracajaceDaneItoken} from "../klasy/logowanie-zwracajace-dane-itoken";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ListonoszService {

  constructor(private listy: ListyService,
              private token: TokenService) {
  }

  public wyloguj() {
    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc
      });
      opcjeWPudelku = {headers: opcje};
    }
    return new Promise((resolve, reject) => {
      this.listy.pobierz(Drzwi.wylogowanie, opcjeWPudelku).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<LogowanieZwracajaceDaneItoken>) => {
          this.token.tokenWartosc = undefined;
          this.token.tokenTerminWaznosci = undefined;
          this.token.usunCiasteczka();
          resolve(next)
        },
        error => {
          reject(error)
        })
    })
  }

  public zaloguj(zawartosc: any) {
    return new Promise((resolve, reject) => {
      this.listy.wyslij(Drzwi.logowanie, zawartosc, {}).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<LogowanieZwracajaceDaneItoken>) => {
          this.token.tokenWartosc = next.value?.token?.value;
          this.token.tokenTerminWaznosci = next.value?.token?.endLifeTime;
          this.token.tokenGrupy = next.value?.userData?.grupy.map(k => k.groupId)

          this.token.stworzCookies();
          resolve(next)
        },
        error => {
          reject(error)
        })
    })
  }

  public wyslij(drzwi: Drzwi | string, zawartosc: any): Promise<OdpowiedzPotwierdzajacaPoprawnosc<any> | any> {

    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc
      });
      opcjeWPudelku = {headers: opcje};
    }
    return new Promise((resolve, reject) => {
      this.listy.wyslij(drzwi, zawartosc, opcjeWPudelku).subscribe((next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          resolve(next.value)
        },
        error => {
          reject(error)
        })
    });

  }


  public usun(drzwi: Drzwi | string): Promise<OdpowiedzPotwierdzajacaPoprawnosc<any> | any> {

    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc
      });
      opcjeWPudelku = {headers: opcje};
    }
    return new Promise((resolve, reject) => {
      this.listy.usun(drzwi, opcjeWPudelku).subscribe((next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          resolve(next.value)
        },
        error => {
          reject(error)
        })
    });

  }


  public pobierz(drzwi: Drzwi | string): Promise<OdpowiedzPotwierdzajacaPoprawnosc<any> | any> {

    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc
      });
      opcjeWPudelku = {headers: opcje};
    }

    return new Promise((resolve, reject) => {
      this.listy.pobierz(drzwi, opcjeWPudelku).subscribe((next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          resolve(next.value)
        },
        error => {
          reject(error)
        })
    });

  }

  public aktualizuj(drzwi: Drzwi | string, zawartosc: any): Promise<OdpowiedzPotwierdzajacaPoprawnosc<any> | any> {
    let opcjeWPudelku = {};
    if (this.token.tokenWartosc != undefined) {
      const opcje = new HttpHeaders({
        token: this.token.tokenWartosc
      });
      opcjeWPudelku = {headers: opcje};
    }
    return new Promise((resolve, reject) => {
      this.listy.aktualizuj(drzwi, zawartosc, opcjeWPudelku).subscribe((next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {
          resolve(next.value)
        },
        error => {
          reject(error)
        })
    });
  }

}
