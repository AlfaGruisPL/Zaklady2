import {Component, Input, OnInit} from '@angular/core';
import {Termin} from "../termin";

@Component({
  selector: 'app-termin',
  templateUrl: './termin.component.html',
  styleUrls: ['./termin.component.scss']
})
export class TerminComponent implements OnInit {
  @Input() godzinaRozpoczecia = 0
  @Input() termin = {poczatek: 15, poczatekMinuty: 15, koniec: 16, koniecMinuty: 40}

  terminy: Array<Termin> = []
  top = '70px';
  wysokosc = '100px'

  ngOnInit() {
    const poczatek = this.termin.poczatek
    const koniec = this.termin.koniec
    const roznica = (poczatek + (this.termin.poczatekMinuty / 60)) - 2 - this.godzinaRozpoczecia

    this.top = (roznica * 25 * 2) + 'px'
    this.wysokosc = (((koniec + (this.termin.koniecMinuty / 60)) - (poczatek + (this.termin.poczatekMinuty / 60))) * 2 * 25) + "px"
    console.log(this.wysokosc)
  }
}
