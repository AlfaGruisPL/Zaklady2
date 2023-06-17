import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-czy-naprawde-usunac',
  templateUrl: './czy-naprawde-usunac.component.html',
  styleUrls: ['./czy-naprawde-usunac.component.scss']
})
export class CzyNaprawdeUsunacComponent {
  public czyUsunac = false;

  constructor(public activeModal: NgbActiveModal) {


  }


}
