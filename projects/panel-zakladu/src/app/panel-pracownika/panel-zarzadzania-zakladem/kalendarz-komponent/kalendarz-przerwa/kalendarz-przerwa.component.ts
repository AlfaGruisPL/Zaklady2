import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KalendarzKomponentService } from '../kalendarz-komponent.service';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-kalendarz-przerwa',
  templateUrl: './kalendarz-przerwa.component.html',
  styleUrls: ['./kalendarz-przerwa.component.scss'],
})
export class KalendarzPrzerwaComponent implements OnInit {
  @Input() godzinaRozpoczecia: any = new Date();
  @Input() godzinaZakonczenia: any = new Date();
  @Input() data = new Date();

  filter = 'przerwa';

  constructor(
    public listonosz: ListonoszService,
    public activeModal: NgbActiveModal,
    public kalendarz_: KalendarzKomponentService,
    private fb: FormBuilder,
    public danePodreczne_: PodreczneDaneService
  ) {}

  ngOnInit() {}
}
