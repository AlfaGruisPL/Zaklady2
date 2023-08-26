import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-kalendarz-przerwa-dzien-wolny',
  templateUrl: './kalendarz-przerwa-dzien-wolny.component.html',
  styleUrls: ['./kalendarz-przerwa-dzien-wolny.component.scss'],
})
export class KalendarzPrzerwaDzienWolnyComponent {
  @Input() godzinaRozpoczecia = new Date();
  @Input() godzinaZakonczenia = new Date();
  dotyczy = null;
  regularne = false;

  constructor(public activeModal: NgbActiveModal, public danePodreczne_: PodreczneDaneService) {}

  dodaj() {}
}
