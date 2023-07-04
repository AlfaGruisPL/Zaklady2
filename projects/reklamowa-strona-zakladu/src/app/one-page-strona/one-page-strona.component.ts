import { Component } from '@angular/core';
import { ZarejestrujSieService } from './komponenty/formularz-zarejestruj-sie/zarejestrujSie.service';

@Component({
  selector: 'app-one-page-strona',
  templateUrl: './one-page-strona.component.html',
  styleUrls: ['./one-page-strona.component.scss'],
})
export class OnePageStronaComponent {
  constructor(public zarejestrujSie: ZarejestrujSieService) {}
}
