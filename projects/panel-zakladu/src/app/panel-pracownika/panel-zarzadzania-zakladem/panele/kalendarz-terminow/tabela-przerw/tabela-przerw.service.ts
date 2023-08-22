import { Injectable } from "@angular/core";
import { ListonoszService } from "../../../../../serwisy/listonosz.service";
import { Drzwi } from "../../../../../enum/drzwi";
import { Przerwa, WolnyDzien } from "../../../../../klasy/panelPracownika/kalendarz/przerwa.dto";

class tabelaPrzerwDane {
  przerwy: {
    dane: Przerwa[];
    limit: number;
    size: number;
  };
  dniWolne: {
    dane: WolnyDzien[];
    limit: number;
    size: number;
  };

  constructor() {
    this.przerwy = { dane: [], limit: 0, size: 0 };
    this.dniWolne = { dane: [], limit: 0, size: 0 };
  }

}

@Injectable({
  providedIn: "root"
})
export class TabelaPrzerwService {
  dane: tabelaPrzerwDane = new tabelaPrzerwDane();

  constructor(private listonosz: ListonoszService) {
  }


  getData() {
    this.listonosz.pobierz(Drzwi.tabelaPrzerwDane).then((dane: tabelaPrzerwDane) => {
      this.dane.przerwy.dane = dane.przerwy?.dane;
      this.dane.dniWolne.dane = dane.dniWolne?.dane;

    }).catch(error => {

    });
  }
}
