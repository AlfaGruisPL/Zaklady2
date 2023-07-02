import { Component } from '@angular/core';

@Component({
  selector: 'app-formularz-zarejestruj-sie',
  templateUrl: './formularz-zarejestruj-sie.component.html',
  styleUrls: ['./formularz-zarejestruj-sie.component.scss'],
})
export class FormularzZarejestrujSieComponent {
  public krok: number = 4;

  ustawKrok(nowyKrok: number) {
    this.krok = nowyKrok;
  }
}
