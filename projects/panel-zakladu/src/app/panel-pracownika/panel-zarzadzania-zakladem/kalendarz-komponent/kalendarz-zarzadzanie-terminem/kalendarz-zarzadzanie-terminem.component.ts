import { Component, Input } from '@angular/core';
import { Wizyta } from '../../../../klasy/panelPracownika/wizyta';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kalendarz-zarzadzanie-terminem',
  templateUrl: './kalendarz-zarzadzanie-terminem.component.html',
  styleUrls: ['./kalendarz-zarzadzanie-terminem.component.scss'],
})
export class KalendarzZarzadzanieTerminemComponent {
  @Input() wizyta: Wizyta = new Wizyta({});

  constructor(public activeModal: NgbActiveModal) {}
}
