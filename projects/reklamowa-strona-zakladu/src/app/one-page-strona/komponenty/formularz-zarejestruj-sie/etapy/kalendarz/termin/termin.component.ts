import {Component, Input, OnInit} from '@angular/core';
import {ZarejestrujSieService} from "../../../zarejestrujSie.service";
import {Termin} from "../termin";

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.scss']
})
export class TerminComponent implements OnInit {
  @Input() godzinaRozpoczecia = 0
  @Input() termin: Termin = new Termin()

  constructor(public zarejestrujSie_: ZarejestrujSieService) {
  }

  top = '70px';
  wysokosc = '100px'

  ngOnInit() {
    //  if (this.zarejestrujSie_.DaneKlientaClass.wybranyTermin != undefined) {

    //this.termin = this.zarejestrujSie_.DaneKlientaClass.wybranyTermin
    //  }
    const poczatek = this.termin.poczatek
    const koniec = this.termin.koniec
    const roznica = (poczatek + (this.termin.poczatekMinuty / 60)) - this.godzinaRozpoczecia

    this.top = (roznica * 26.9 * 2) + 'px'
    this.wysokosc = (((koniec + (this.termin.koniecMinuty / 60)) - (poczatek + (this.termin.poczatekMinuty / 60))) * 2 * 27) + "px"

  }

  wybierzTermin() {
    this.zarejestrujSie_.DaneKlientaClass.wybranyTermin = this.termin;
    console.log(this.termin)
  }

  wybrany() {
    return JSON.stringify(this.zarejestrujSie_.DaneKlientaClass.wybranyTermin) == JSON.stringify(this.termin)
  }

  anuluj() {
    setTimeout(() => {
      this.zarejestrujSie_.DaneKlientaClass.wybranyTermin = undefined;
    }, 10)
  }
}
