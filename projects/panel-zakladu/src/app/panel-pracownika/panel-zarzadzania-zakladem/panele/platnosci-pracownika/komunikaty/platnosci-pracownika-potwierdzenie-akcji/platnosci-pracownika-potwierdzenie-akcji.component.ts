import {Component, Input} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-platnosci-pracownika-potwierdzenie-akcji',
  templateUrl: './platnosci-pracownika-potwierdzenie-akcji.component.html',
  styleUrls: ['./platnosci-pracownika-potwierdzenie-akcji.component.scss']
})
export class PlatnosciPracownikaPotwierdzenieAkcjiComponent {
  @Input() tresc = ""


  constructor(public modal: NgbActiveModal) {
  }
}
