import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {KalendarzKomponentService} from "../kalendarz-komponent.service";

@Component({
  selector: 'app-kalendarz-przerwa',
  templateUrl: './kalendarz-przerwa.component.html',
  styleUrls: ['./kalendarz-przerwa.component.scss']
})
export class KalendarzPrzerwaComponent {
  @Input() godzinaRozpoczecia = new Date()
  @Input() godzinaZakonczenia = new Date()

  constructor(public activeModal: NgbActiveModal, public kalendarz_: KalendarzKomponentService) {
  }
}
