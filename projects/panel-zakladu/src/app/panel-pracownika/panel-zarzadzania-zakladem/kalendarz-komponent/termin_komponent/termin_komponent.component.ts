import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KalendarzZarzadzanieTerminemComponent } from '../kalendarz-zarzadzanie-terminem/kalendarz-zarzadzanie-terminem.component';
import { VisitService } from './visit.service';

@Component({
  selector: 'app-termin-komponent',
  templateUrl: './termin_komponent.component.html',
  styleUrls: ['./termin_komponent.component.scss'],
})
export class Termin_komponentComponent implements OnInit {
  @Input() godzinaRozpoczecia = 0;
  @Input() wizyta: Wizyta = new Wizyta({});
  @Input() symulator = false;
  @Input() idIndex = 0;

  top = '70px';
  wysokosc = '100px';
  id = Math.random() * 10000000 + 'k' + Math.random();

  constructor(private modal: NgbModal, private cdr: ChangeDetectorRef, public visit_: VisitService) {}

  ngOnInit() {
    const poczatekGodzian = this.wizyta.poczatek.getHours();
    const poczatekMinuta = this.wizyta.poczatek.getMinutes();
    const koniecGodzian = this.wizyta.koniec.getHours();
    const koniecMinuta = this.wizyta.koniec.getMinutes();
    const roznica = poczatekGodzian + poczatekMinuta / 60 - this.godzinaRozpoczecia;
    this.top = roznica * 26.9 * 2 + 'px';
    this.wysokosc = (koniecGodzian + koniecMinuta / 60 - (poczatekGodzian + poczatekMinuta / 60)) * 2 * 27 + 'px';
  }

  zarzadzaj(event: MouseEvent) {
    // @ts-ignore
    const findConfirmDisconfirmDIv = event.target?.closest('.confirmDisconfirmDiv');
    if (findConfirmDisconfirmDIv) return;
    const okno = this.modal.open(KalendarzZarzadzanieTerminemComponent);
    okno.componentInstance.wizyta = this.wizyta;
    console.log(this.wizyta);
  }

  disablePopover2() {
    return document.body.clientWidth;
  }

  disablePopover() {
    if (document.body.clientWidth < 900) return true;
    return false;
  }
}
