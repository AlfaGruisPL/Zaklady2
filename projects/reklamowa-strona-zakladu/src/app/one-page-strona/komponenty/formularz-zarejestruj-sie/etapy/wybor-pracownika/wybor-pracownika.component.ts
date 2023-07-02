import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wybor-pracownika',
  templateUrl: './wybor-pracownika.component.html',
  styleUrls: [
    './wybor-pracownika.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class WyborPracownikaComponent {
  @Output() wyslijKrok = new EventEmitter<number>();
  wybranyPracownik: number | undefined;
  pracownicy = [
    { id: 1, pracownik: 'Kornelia Mushak' },
    { id: 2, pracownik: 'Mateusz Osikowski' },
  ];

  public przejdzDalej() {
    this.wyslijKrok.emit(2);
  }
}
