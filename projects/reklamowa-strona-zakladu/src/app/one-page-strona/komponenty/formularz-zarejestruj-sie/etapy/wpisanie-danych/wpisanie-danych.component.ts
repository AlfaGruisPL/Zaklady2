import { Component, EventEmitter, Output } from '@angular/core';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';

@Component({
  selector: 'app-wpisanie-danych',
  templateUrl: './wpisanie-danych.component.html',
  styleUrls: [
    './wpisanie-danych.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class WpisanieDanychComponent {
  @Output() wyslijKrok = new EventEmitter<number>();

  constructor(public ZarejestrujSieService: ZarejestrujSieService) {}

  public przejdzDalej() {
    this.ZarejestrujSieService.DaneKlientaClass.czyWszystkoUzupelnioneFunkcja();
    if (this.ZarejestrujSieService.DaneKlientaClass?.czyWszystkoUzupelnione) {
      this.wyslijKrok.emit(5);
    }
  }
}
