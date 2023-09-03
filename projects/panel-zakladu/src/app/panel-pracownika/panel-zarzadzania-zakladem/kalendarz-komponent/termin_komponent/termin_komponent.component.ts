import { Component, Input, OnInit } from '@angular/core';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KalendarzZarzadzanieTerminemComponent } from '../kalendarz-zarzadzanie-terminem/kalendarz-zarzadzanie-terminem.component';

@Component({
  selector: 'app-termin-komponent',
  templateUrl: './termin_komponent.component.html',
  styleUrls: ['./termin_komponent.component.scss'],
})
export class Termin_komponentComponent implements OnInit {
  @Input() godzinaRozpoczecia = 0;
  @Input() wizyta: Wizyta = new Wizyta({});
  @Input() symulator = false;
  top = '70px';
  wysokosc = '100px';

  constructor(private modal: NgbModal) {}

  ngOnInit() {
    const poczatekGodzian = this.wizyta.poczatek.getHours();
    const poczatekMinuta = this.wizyta.poczatek.getMinutes();
    const koniecGodzian = this.wizyta.koniec.getHours();
    const koniecMinuta = this.wizyta.koniec.getMinutes();
    const roznica = poczatekGodzian + poczatekMinuta / 60 - this.godzinaRozpoczecia;
    this.top = roznica * 27.1 * 2 + 'px';
    this.wysokosc = (koniecGodzian + koniecMinuta / 60 - (poczatekGodzian + poczatekMinuta / 60)) * 2 * 27 + 'px';
  }

  zarzadzaj() {
    const okno = this.modal.open(KalendarzZarzadzanieTerminemComponent);
    okno.componentInstance.wizyta = this.wizyta;
  }
}
