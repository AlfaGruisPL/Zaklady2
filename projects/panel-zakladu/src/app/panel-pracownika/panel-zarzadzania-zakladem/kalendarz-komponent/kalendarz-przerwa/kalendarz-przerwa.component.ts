import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {KalendarzKomponentService} from "../kalendarz-komponent.service";
import {PrzerwaDto} from "../../../../klasy/panelPracownika/kalendarz/przerwa.dto";
import {PodreczneDaneService} from "../../../../serwisy/podreczne-dane.service";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";

@Component({
  selector: 'app-kalendarz-przerwa',
  templateUrl: './kalendarz-przerwa.component.html',
  styleUrls: ['./kalendarz-przerwa.component.scss']
})
export class KalendarzPrzerwaComponent implements OnInit {
  @Input() godzinaRozpoczecia = new Date()
  @Input() godzinaZakonczenia = new Date()
  wybranyPracownik = 0
  regularne = false

  constructor(
    public listonosz: ListonoszService,
    public activeModal: NgbActiveModal,
    public kalendarz_: KalendarzKomponentService,
    public danePodreczne_: PodreczneDaneService) {
  }

  ngOnInit() {
    // @ts-ignore
    this.wybranyPracownik = this.danePodreczne_.danePodreczneObiekt.zalogowanyUzytkownik?.id;
  }

  dodaj() {
    const dto = new PrzerwaDto()
    dto.poczatek = this.godzinaRozpoczecia
    dto.koniec = this.godzinaZakonczenia
    dto.regularne = this.regularne
    this.listonosz.wyslij(Drzwi.kalendarzTerminowPrzerwa, dto).then(k => {
      console.log(k);
    }).catch(k => {
      console.log(k);
    })
    this.activeModal.close('dodaj')
  }
}
