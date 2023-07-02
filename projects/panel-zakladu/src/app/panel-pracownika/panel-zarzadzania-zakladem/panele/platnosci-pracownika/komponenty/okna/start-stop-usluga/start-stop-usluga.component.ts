import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ListonoszService } from '../../../../../../../serwisy/listonosz.service';

@Component({
  selector: 'app-start-stop-usluga',
  templateUrl: './start-stop-usluga.component.html',
  styleUrls: ['./start-stop-usluga.component.scss'],
})
export class StartStopUslugaComponent {
  @Input() tryb = 'wlacz';

  constructor(
    public activeModal: NgbActiveModal,
    private listonosz: ListonoszService
  ) {}
}
