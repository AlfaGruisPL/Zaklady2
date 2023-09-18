import { Component } from '@angular/core';
import { NawigacjaService } from '../../../serwisy/nawigacja.service';
import { ZarejestrujSieService } from '../formularz-zarejestruj-sie/zarejestrujSie.service';

@Component({
  selector: 'app-zarejestruj-sie',
  templateUrl: './zarejestruj-sie.component.html',
  styleUrls: ['./zarejestruj-sie.component.scss'],
})
export class ZarejestrujSieComponent {
  constructor(
    public nawigacja: NawigacjaService,
    private rejestracja: ZarejestrujSieService // private googleService_: GoogleAnalyticsService
  ) {}

  public pokazFormularzRejestracji() {
    //  this.googleService_.event('klikniecie', 'user_register', 'przyciskZarejestrujSie');
    this.nawigacja.przeniesDoPanelu(this.nawigacja.nav.rejestracjaFormularz);
    this.rejestracja.wyswietlanieFormualrza = true;
  }
}
