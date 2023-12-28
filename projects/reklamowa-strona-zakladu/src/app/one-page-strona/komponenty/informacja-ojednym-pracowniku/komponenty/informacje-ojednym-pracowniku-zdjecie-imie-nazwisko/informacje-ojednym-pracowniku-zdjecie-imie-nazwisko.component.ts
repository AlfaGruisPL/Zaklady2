import { Component, Input } from '@angular/core';
import { ZarejestrujSieService } from '../../../formularz-zarejestruj-sie/zarejestrujSie.service';
import { NawigacjaService } from '../../../../../serwisy/nawigacja.service';
import { Pracownik } from '../../../../../klasy/pracownik';
import { NawigacjaEnum } from '../../../../../enum/nawigacja.enum';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-informacje-ojednym-pracowniku-zdjecie-imie-nazwisko',
  templateUrl: './informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component.html',
  styleUrls: ['./informacje-ojednym-pracowniku-zdjecie-imie-nazwisko.component.scss'],
})
export class InformacjeOJednymPracownikuZdjecieImieNazwiskoComponent {
  @Input() daneOPracowniku: Pracownik = new Pracownik();
  env = environment;
  protected readonly environment = environment;

  constructor(public zarejestrujSieSErvice: ZarejestrujSieService, private nawigacja: NawigacjaService) {}

  wybierz() {
    this.zarejestrujSieSErvice.wyswietlanieFormualrza = true;
    this.nawigacja.przeniesDoPanelu(NawigacjaEnum.rejestracjaFormularz);
    this.zarejestrujSieSErvice.DaneKlientaClass.wybranyPracownik = this.daneOPracowniku.id;
  }
}
