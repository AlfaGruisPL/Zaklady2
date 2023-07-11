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

  constructor(private listonosz: ListonoszService) {
  }

  pobierzTerminyWizyt() {
    const pracownikUslugiDTO_obj: pracownikUslugiDTO = new pracownikUslugiDTO(this.DaneKlientaClass);
    this.listonosz.wyslij(Drzwi.pobierzTerminy, pracownikUslugiDTO_obj).then(
      (odpowiedz: Array<Termin>) => {
        this.DaneKlientaClass.wszystkieTerminy = []
        odpowiedz.forEach(termin_ => {
          const terminOBJ = new Termin()
          terminOBJ.koniecMinuty = termin_.koniecMinuty
          terminOBJ.koniec = termin_.koniec
          terminOBJ.poczatek = termin_.poczatek
          terminOBJ.poczatekMinuty = termin_.poczatekMinuty
          terminOBJ.data = new Date(termin_.data)
          this.DaneKlientaClass.wszystkieTerminy.push(terminOBJ)
        })
      }
    ).catch(niewyslane => {

    })
  }
}
