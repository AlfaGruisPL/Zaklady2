import {Injectable} from '@angular/core';
import {DaneKlienta, pracownikUslugiDTO} from './etapy/klasy/dane-klienta';
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";

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
      odpowiedz => {
        this.DaneKlientaClass.wszystkieTerminy = odpowiedz
      }
    ).catch(niewyslane => {

    })
  }
}
