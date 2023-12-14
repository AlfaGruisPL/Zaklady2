import { Injectable } from "@angular/core";
import { ListyService } from "./listy.service";
import { Drzwi } from "../../../../panel-zakladu/src/app/enum/drzwi";
import { HttpError } from "../../../../klasy/httpError";
import {
  OdpowiedzPotwierdzajacaPoprawnosc
} from "../../../../panel-zakladu/src/app/klasy/odpowiedz-potwierdzajaca-poprawnosc";

@Injectable({
  providedIn: "root"
})
export class ListonoszService {

  constructor(private listy: ListyService) {
  }

  public dodajZaklad(zawartosc: any) {
    return new Promise((resolve, reject) => {
      const sub = this.listy.wyslij("/zaklady/dodaj", zawartosc, {}).subscribe(next => {
        console.log(next);
        sub.unsubscribe();
        resolve(next);
      }, error => {
        console.log(error);
        sub.unsubscribe();
        reject(error["error"]);
      });
    });
  }

  public wyslij(drzwi: Drzwi | string, zawartosc: any): Promise<any | HttpError> {
    let opcjeWPudelku = {};
    return new Promise((resolve, reject) => {
      this.listy.wyslij(drzwi, zawartosc, opcjeWPudelku).subscribe(
        (next: OdpowiedzPotwierdzajacaPoprawnosc<any>) => {

          resolve(next.value);
        },
        (error: HttpError) => {
          reject(error);
        }
      );
    });
  }
}
