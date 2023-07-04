import { Component, Input } from '@angular/core';
import { ZarejestrujSieService } from '../../../formularz-zarejestruj-sie/zarejestrujSie.service';
import { NawigacjaService } from '../../../../../serwisy/nawigacja.service';
import { Pracownik } from '../../../../../klasy/pracownik';

@Component({
  selector: 'app-informacje-ojednym-pracowniku-zdjecie-imie-nazwisko',
  templateUrl:
    './informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component.html',
  styleUrls: [
    './informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component.scss',
  ],
})
export class InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent {
  @Input() daneOPracowniku: Pracownik = new Pracownik();

  constructor(
    public zarejestrujSieSErvice: ZarejestrujSieService,
    private nawigacja: NawigacjaService
  ) {}

  wybierz() {
    this.zarejestrujSieSErvice.wyswietlanieFormualrza = true;
    this.nawigacja.przeniesDoPanelu(this.nawigacja.nav.rejestracjaFormularz);
    this.zarejestrujSieSErvice.DaneKlientaClass.wybranyPracownik =
      this.daneOPracowniku.id;
  }
}
