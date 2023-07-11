import {Component, EventEmitter, Output} from '@angular/core';
import {DanePodstawoweService} from "../../../../../serwisy/dane-podstawowe.service";
import {ZarejestrujSieService} from "../../zarejestrujSie.service";

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
  public niewybranaUsluga: boolean = false;

  constructor(public danePodstawowe: DanePodstawoweService,
              public zarejestrujSie_: ZarejestrujSieService) {
  }

  public przejdzDalej() {
    this.niewybranaUsluga = false;
    const wybraneUslugi = this.danePodstawowe.danePodstawowe.uslugi.filter(usluga => {
      return usluga.wybrane
    })
    if (wybraneUslugi.length <= 0) {
      this.niewybranaUsluga = true;
      return
    }
    this.zarejestrujSie_.pobierzTerminyWizyt();
    this.wyslijKrok.emit(3);
  }

  public cofnij() {
    this.wyslijKrok.emit(1);
  }


}
