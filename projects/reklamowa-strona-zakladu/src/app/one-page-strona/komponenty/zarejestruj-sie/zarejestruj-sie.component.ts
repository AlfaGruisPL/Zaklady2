import { Component } from '@angular/core';
import { NawigacjaService } from '../../../serwisy/nawigacja.service';
import { ZarejestrujSieService } from '../formularz-zarejestruj-sie/zarejestrujSie.service';
import { AnimationService } from '../../../serwisy/animation.service';

@Component({
  selector: 'app-zarejestruj-sie',
  templateUrl: './zarejestruj-sie.component.html',
  styleUrls: ['./zarejestruj-sie.component.scss'],
})
export class ZarejestrujSieComponent {
  constructor(
    public nawigacja: NawigacjaService,
    public animation_: AnimationService,
    private rejestracja: ZarejestrujSieService // private googleService_: GoogleAnalyticsService
  ) {}

  public pokazFormularzRejestracji() {
    //  this.googleService_.event('klikniecie', 'user_register', 'przyciskZarejestrujSie');
    this.rejestracja.wyswietlanieFormualrza = true;
    this.nawigacja.przeniesDoPanelu(this.nawigacja.nav.rejestracjaFormularz);
  }
}
