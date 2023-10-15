import { Component, Input, OnInit } from '@angular/core';
import { ZarejestrujSieService } from '../../../zarejestrujSie.service';
import { Termin } from '../termin';

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.scss'],
})
export class TerminComponent implements OnInit {
  @Input() godzinaRozpoczecia = 0;
  @Input() termin: Termin = new Termin();
  top = '70px';
  wysokosc = 100;

  constructor(public zarejestrujSie_: ZarejestrujSieService) {}

  ngOnInit() {
    //  if (this.zarejestrujSie_.DaneKlientaClass.wybranyTermin != undefined) {

    //this.termin = this.zarejestrujSie_.DaneKlientaClass.wybranyTermin
    //  }
    const poczatek = this.termin.poczatek.getHours();
    const koniec = this.termin.koniec.getHours();
    const roznica = poczatek + this.termin.poczatek.getMinutes() / 60 - this.godzinaRozpoczecia;

    this.top = roznica * 26.9 + 'px';
    this.wysokosc =
      (koniec + this.termin.koniec.getMinutes() / 60 - (poczatek + this.termin.poczatek.getMinutes() / 60)) * 27;
  }

  wybierzTermin() {
    if (this.wybrany()) {
      this.zarejestrujSie_.DaneKlientaClass.wybranyTermin = undefined;
    } else {
      this.zarejestrujSie_.DaneKlientaClass.wybranyTermin = this.termin;
    }
  }

  sprawdzWysokosc() {
    if (this.wysokosc < 25 && this.wybrany()) {
      return 60;
    }
    return this.wysokosc;
  }

  wybrany() {
    return JSON.stringify(this.zarejestrujSie_.DaneKlientaClass.wybranyTermin) == JSON.stringify(this.termin);
  }

  anuluj() {
    setTimeout(() => {
      this.zarejestrujSie_.DaneKlientaClass.wybranyTermin = undefined;
    }, 10);
  }

  setFontSize(element: HTMLDivElement) {
    const czcionka = element.clientHeight * 0.7;
    if (czcionka > 21) {
      return 21 + 'px';
    }
    return czcionka + 'px';
  }
}
