import {Component, EventEmitter, Output} from '@angular/core';
import {DanePodstawoweService} from "../../../../../serwisy/dane-podstawowe.service";

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

  constructor(public danePodstawowe: DanePodstawoweService) {
  }

  public przejdzDalej() {
    this.wyslijKrok.emit(3);
  }

  public cofnij() {
    this.wyslijKrok.emit(1);
  }
}
