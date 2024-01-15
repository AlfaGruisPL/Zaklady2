import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DanePodstawoweService } from '../../../../../serwisy/dane-podstawowe.service';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';
import { usluga } from '../../../../../klasy/dane-podstawowe';

@Component({
  selector: 'app-wybor-uslug',
  templateUrl: './wybor-uslug.component.html',
  styleUrls: ['./wybor-uslug.component.scss', '../../formularz-zarejestruj-sie.component.scss'],
})
export class WyborUslugComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();
  public niewybranaUsluga: boolean = false;
  strona: number = 0;
  max = 14;

  constructor(public danePodstawowe: DanePodstawoweService, public zarejestrujSie_: ZarejestrujSieService) {}

  ngOnInit() {}

  uslugi() {
    return this.danePodstawowe.danePodstawowe.uslugi;
  }

  public przejdzDalej() {
    this.zarejestrujSie_.DaneKlientaClass.uslugi = this.danePodstawowe.danePodstawowe.uslugi;

    this.niewybranaUsluga = false;
    const wybraneUslugi = this.danePodstawowe.danePodstawowe.uslugi.filter(usluga => {
      return usluga.wybrane;
    });
    if (wybraneUslugi.length <= 0) {
      this.niewybranaUsluga = true;
      return;
    }
    this.zarejestrujSie_.pobierzTerminyWizyt();
    this.wyslijKrok.emit(3);
  }

  public cofnij() {
    this.wyslijKrok.emit(1);
  }

  czyWykonuje(usluga: usluga) {
    if (usluga.workers == undefined) {
      console.log('Błąd tablicy pracownikow w usludze');
    }
    return (
      usluga.workers.find(id => {
        return id == this.zarejestrujSie_.DaneKlientaClass.wybranyPracownik;
      }) != undefined
    );
  }

  ilePustych() {
    const wynik = this.uslugi().slice((this.strona - 1) * this.max, this.strona * this.max).length;

    if (wynik < 14) {
      return this.max - wynik;
    } else {
      return 0;
    }
  }
}
