import { Component, Input } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { KalendarzKomponentService } from '../../kalendarz-komponent.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { PrzerwaDto } from '../../../../../klasy/panelPracownika/kalendarz/przerwa.dto';
import { Drzwi } from '../../../../../enum/drzwi';

@Component({
  selector: 'app-kalendarz-przerwa-przerwa',
  templateUrl: './kalendarz-przerwa-przerwa.component.html',
  styleUrls: ['./kalendarz-przerwa-przerwa.component.scss'],
})
export class KalendarzPrzerwaPrzerwaComponent {
  @Input() godzinaRozpoczecia = new Date();
  @Input() godzinaZakonczenia = new Date();
  wybranyPracownik = 0;
  regularne = false;
  formularz: any;
  dotyczy = 0;
  filter = 'przerwa';

  constructor(
    public listonosz: ListonoszService,
    public activeModal: NgbActiveModal,
    public kalendarz_: KalendarzKomponentService,
    private fb: FormBuilder,
    public danePodreczne_: PodreczneDaneService
  ) {
    this.formularz = this.fb.group({
      godzinaRozpoczecia: ['', Validators.required],
      godzinaZakonczenia: ['', Validators.required],
      dataPoczatek: ['', Validators.required],
      dataKoniec: ['', Validators.required],
      data: ['', Validators.required],
    });
  }

  ngOnInit() {
    // @ts-ignore
    this.wybranyPracownik = this.danePodreczne_.danePodreczneObiekt.zalogowanyUzytkownik?.id;
    this.dotyczy = this.kalendarz_.zalogowanyUzytkownikId;
  }

  dodaj() {
    const dto = new PrzerwaDto();
    dto.poczatek = this.godzinaRozpoczecia;
    dto.koniec = this.godzinaZakonczenia;
    dto.regularne = this.regularne;
    this.listonosz
      .wyslij(Drzwi.kalendarzTerminowPrzerwa, dto)
      .then(k => {
        console.log(k);
      })
      .catch(k => {
        console.log(k);
      });
    this.activeModal.close('dodaj');
  }
}
