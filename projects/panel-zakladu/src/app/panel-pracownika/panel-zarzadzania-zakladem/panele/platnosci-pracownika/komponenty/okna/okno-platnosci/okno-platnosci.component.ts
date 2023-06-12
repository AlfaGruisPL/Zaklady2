import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ListonoszService} from "../../../../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../../../../enum/drzwi";
import {ZleceniePlatnosciDto} from "../../../../../../../klasy/panelPracownika/platnosci/zleceniePlatnosciDto";

@Component({
  selector: 'app-okno-platnosci',
  templateUrl: './okno-platnosci.component.html',
  styleUrls: ['./okno-platnosci.component.scss']
})
export class OknoPlatnosciComponent {
  ZaplacNieAktywne = false
  public czasZakupu = "1miesiac"

  constructor(public activeModal: NgbActiveModal, private listonosz: ListonoszService) {
  }

  zaplac() {
    this.ZaplacNieAktywne = true
    const dane: ZleceniePlatnosciDto = {
      czas: this.czasZakupu
    }
    this.listonosz.wyslij(Drzwi.utworzeniePlatnosci, dane).then(udane => {
      window.open(udane, "_blank");
      this.activeModal.close("zaplac")
    }).catch(blad => {

    }).finally(() => {
      this.ZaplacNieAktywne = false
    })
  }

}
