import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wybor-uslug',
  templateUrl: './wybor-uslug.component.html',
  styleUrls: [
    './wybor-uslug.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class WyborUslugComponent {
  @Output() wyslijKrok = new EventEmitter<number>();

  public przejdzDalej() {
    this.wyslijKrok.emit(3);
  }

  public cofnij() {
    this.wyslijKrok.emit(1);
  }
}
