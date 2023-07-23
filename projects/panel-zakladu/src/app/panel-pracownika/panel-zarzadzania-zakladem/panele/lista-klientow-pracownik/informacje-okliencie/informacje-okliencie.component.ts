import {Component, Input} from '@angular/core';
import {Klient} from "../../../../../klasy/listaKlientow/klient";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-informacje-okliencie',
  templateUrl: './informacje-okliencie.component.html',
  styleUrls: ['./informacje-okliencie.component.scss']
})
export class InformacjeOKliencieComponent {
  @Input() klient: Klient = new Klient({})
  public page = 0
  public pageSize = 5;

  constructor(public activeModal: NgbActiveModal) {
  }
}
