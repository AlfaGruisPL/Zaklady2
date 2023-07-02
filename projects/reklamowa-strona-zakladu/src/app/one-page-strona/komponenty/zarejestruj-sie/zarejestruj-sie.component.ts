import { Component } from '@angular/core';
import { NawigacjaService } from '../../../serwisy/nawigacja.service';

@Component({
  selector: 'app-zarejestruj-sie',
  templateUrl: './zarejestruj-sie.component.html',
  styleUrls: ['./zarejestruj-sie.component.scss'],
})
export class ZarejestrujSieComponent {
  public pokazFormularz: boolean = true; //ma być false

  constructor(public nawigacja: NawigacjaService) {}

  public pokazFormularzRejestracji() {
    this.nawigacja.przeniesDoPanelu(this.nawigacja.nav.rejestracjaFormularz);
    this.pokazFormularz = true;
  }
}
