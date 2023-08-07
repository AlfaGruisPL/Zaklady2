import {Injectable} from '@angular/core';
import {Usluga} from "../../../../klasy/panelPracownika/usluga/usluga";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";

@Injectable({
  providedIn: 'root'
})
export class UslugiService {
  public listaUslug: Array<Usluga> = [new Usluga()];

  constructor(private listonosz: ListonoszService) {
  }

  public pobieranieDanych() {
    this.listonosz.pobierz(Drzwi.uslugiPanel).then((dane) => {
      this.listaUslug = [];
      Object.assign(this.listaUslug, dane['uslugi']);
    });
  }

}
