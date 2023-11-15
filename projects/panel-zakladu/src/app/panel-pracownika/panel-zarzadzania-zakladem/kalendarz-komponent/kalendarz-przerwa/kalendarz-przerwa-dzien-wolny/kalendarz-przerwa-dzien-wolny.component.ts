import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { Udane } from '../../../../../enum/udane';
import { Bledy } from '../../../../../enum/bledy';

@Component({
  selector: 'app-kalendarz-przerwa-dzien-wolny',
  templateUrl: './kalendarz-przerwa-dzien-wolny.component.html',
  styleUrls: ['./kalendarz-przerwa-dzien-wolny.component.scss'],
})
export class KalendarzPrzerwaDzienWolnyComponent {
  @Input() data: string | null = '';
  dotyczy = null;
  regularne = false;
  coIle = 'false';
  opis = '';
  buttonDisabled = false;

  constructor(
    public activeModal: NgbActiveModal,
    public danePodreczne_: PodreczneDaneService,
    private listonosz: ListonoszService,
    public komunikat_: KomunikatyService
  ) {}

  dodaj() {
    this.buttonDisabled = true;
    const dane: any = {};
    dane.regularne = this.regularne;
    dane.coIle = this.coIle;
    dane.data = this.data;
    dane.dotyczy = this.dotyczy;
    dane.opis = this.opis;
    this.listonosz
      .wyslij(Drzwi.utworzWolnyDzien, dane)
      .then(dane => {
        this.activeModal.close();
        this.komunikat_.komunikatUdane(Udane.dzienWolnyUtworzony);
      })
      .catch(() => {
        this.komunikat_.komunikatBledu(Bledy.dzienWolnyNieUtworzony);
      })
      .finally(() => {
        this.buttonDisabled = false;
      });
  }
}
