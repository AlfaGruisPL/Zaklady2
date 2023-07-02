import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: [
    './kalendarz.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class KalendarzComponent {
  @Output() wyslijKrok = new EventEmitter<number>();

  public przejdzDalej() {
    this.wyslijKrok.emit(4);
  }
}
