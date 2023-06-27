import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ListonoszService} from "../../../../../../../serwisy/listonosz.service";

@Component({
  selector: 'app-platnosci-smsokno',
  templateUrl: './platnosci-smsokno.component.html',
  styleUrls: ['./platnosci-smsokno.component.scss']
})
export class PlatnosciSMSOknoComponent {
  constructor(public activeModal: NgbActiveModal, private listonosz: ListonoszService) {
  }
}
