import { Component, EventEmitter, Output } from '@angular/core';
import { DaneKlienta } from '../klasy/dane-klienta';

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
  public daneKlientaClasa = new DaneKlienta();

  public przejdzDalej() {
    this.daneKlientaClasa.czyWszystkoUzupelnioneFunkcja();
    if (this.daneKlientaClasa.czyWszystkoUzupelnione) {
      this.wyslijKrok.emit(5);
    }
  }
}
