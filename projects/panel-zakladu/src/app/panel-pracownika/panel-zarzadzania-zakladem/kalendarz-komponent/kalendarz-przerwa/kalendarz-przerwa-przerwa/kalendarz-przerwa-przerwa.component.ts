import { Component, Input } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KalendarzKomponentService } from '../../kalendarz-komponent.service';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { PrzerwaDto } from '../../../../../klasy/panelPracownika/kalendarz/przerwa.dto';
import { Drzwi } from '../../../../../enum/drzwi';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { Udane } from '../../../../../enum/udane';
import { Bledy } from '../../../../../enum/bledy';

@Component({
  selector: 'app-kalendarz-przerwa-przerwa',
  templateUrl: './kalendarz-przerwa-przerwa.component.html',
  styleUrls: ['./kalendarz-przerwa-przerwa.component.scss'],
})
export class KalendarzPrzerwaPrzerwaComponent {
  @Input() godzinaRozpoczecia = new Date();
  @Input() godzinaZakonczenia = new Date();
  dataPoczatek: undefined | string = undefined;
  dataKoniec: undefined | string = undefined;
  wybranyPracownik = 0;
  regularne = false;
  formularz: any;
  dotyczy = null;
  filter = 'przerwa';
  dniTygodnia = {
    poniedzialek: false,
    wtorek: false,
    sroda: false,
    czwartek: false,
    piatek: false,
    sobota: false,
    niedziela: false,
  };
  protected readonly undefined = undefined;

  constructor(
    public listonosz: ListonoszService,
    public activeModal: NgbActiveModal,
    public kalendarz_: KalendarzKomponentService,
    private komunikaty_: KomunikatyService,
    public danePodreczne_: PodreczneDaneService
  ) {}

  ngOnInit() {}

  dodaj() {
    const dto = new PrzerwaDto();
    dto.poczatek = this.godzinaRozpoczecia;
    dto.koniec = this.godzinaZakonczenia;
    dto.regularne = this.regularne;
    dto.dniTygodnia = this.dniTygodnia;
    this.listonosz
      .wyslij(Drzwi.kalendarzTerminowPrzerwa, dto)
      .then(k => {
        this.komunikaty_.komunikatUdane(Udane.przerwaZostalaDodana);
      })
      .catch(k => {
        this.komunikaty_.komunikatBledu(Bledy.przerwaNieZostalaDodana);
        console.log(k);
      });
    this.activeModal.close('dodaj');
  }
}
