import {Injectable} from '@angular/core';
import {DaneKlienta} from './etapy/klasy/dane-klienta';
import {ListonoszService} from "../../../serwisy/listonosz.service";

@Injectable({
  providedIn: 'root',
})
export class ZarejestrujSieService {
  DaneKlientaClass: DaneKlienta = new DaneKlienta();
  wyswietlanieFormualrza = true;

  constructor(private listonosz: ListonoszService) {
  }

  pobierzTerminyWizyt() {

  }
}
