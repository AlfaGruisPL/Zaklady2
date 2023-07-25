import {Injectable} from '@angular/core';
import {DaneKlienta, pracownikUslugiDTO} from './etapy/klasy/dane-klienta';
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {Termin} from "./etapy/kalendarz/termin";

@Injectable({
  providedIn: 'root',
})
export class ZarejestrujSieService {
  DaneKlientaClass: DaneKlienta = new DaneKlienta();
  wyswietlanieFormualrza = true;
  public niepobranyKalendarz: boolean = false;


  constructor(private listonosz: ListonoszService) {
  }

  pobierzTerminyWizyt() {
    this.niepobranyKalendarz = false;
    const pracownikUslugiDTO_obj = new pracownikUslugiDTO(this.DaneKlientaClass);

    this.listonosz.wyslij(Drzwi.pobierzTerminy, pracownikUslugiDTO_obj).then(
      (odpowiedz: Array<Termin>) => {
        this.DaneKlientaClass.wszystkieTerminy = []
        odpowiedz.forEach(termin_ => {
          const terminOBJ = new Termin()
          terminOBJ.poczatek = new Date(termin_.poczatek)
          terminOBJ.koniec = new Date(termin_.koniec)
          this.DaneKlientaClass.wszystkieTerminy.push(terminOBJ)
        })
      }
    ).catch(niewyslane => {
      this.niepobranyKalendarz = true;
    })
  }
}
