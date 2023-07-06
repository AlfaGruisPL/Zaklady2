import { Injectable } from '@angular/core';
import { DaneKlienta } from './etapy/klasy/dane-klienta';

@Injectable({
  providedIn: 'root',
})
export class ZarejestrujSieService {
  DaneKlientaClass: DaneKlienta = new DaneKlienta();
  wyswietlanieFormualrza = true;
}
