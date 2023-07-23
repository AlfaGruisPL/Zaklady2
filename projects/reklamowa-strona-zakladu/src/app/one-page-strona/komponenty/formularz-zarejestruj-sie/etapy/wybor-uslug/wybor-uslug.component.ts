import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DanePodstawoweService} from "../../../../../serwisy/dane-podstawowe.service";
import {ZarejestrujSieService} from "../../zarejestrujSie.service";
import {usluga} from "../../../../../klasy/dane-podstawowe";

@Component({
  selector: 'app-wybor-uslug',
  templateUrl: './wybor-uslug.component.html',
  styleUrls: [
    './wybor-uslug.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class WyborUslugComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();
  public niewybranaUsluga: boolean = false;

  constructor(public danePodstawowe: DanePodstawoweService,
              public zarejestrujSie_: ZarejestrujSieService) {
  }

  ngOnInit() {
    this.danePodstawowe.danePodstawowe.uslugi.forEach(usluga => usluga.wybrane = false)
  }

  uslugi() {
    return this.danePodstawowe.danePodstawowe.uslugi
  }

  public przejdzDalej() {
    this.zarejestrujSie_.DaneKlientaClass.uslugi = this.danePodstawowe.danePodstawowe.uslugi;

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

  czyWykonuje(usluga: usluga) {
    if (usluga.pracownicy == undefined) {
      console.log("Błąd tablicy pracownikow w usludze")
    }
    return usluga.pracownicy.find(id => {
      return id == this.zarejestrujSie_.DaneKlientaClass.wybranyPracownik
    }) != undefined
  }


}
