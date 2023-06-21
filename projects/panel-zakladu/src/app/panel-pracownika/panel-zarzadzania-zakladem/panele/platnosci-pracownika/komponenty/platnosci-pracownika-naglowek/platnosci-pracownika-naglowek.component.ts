import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListonoszService} from '../../../../../../serwisy/listonosz.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OknoPlatnosciComponent} from '../okna/okno-platnosci/okno-platnosci.component';
import {
  InformacjeDoPaneluPlatnosci
} from '../../../../../../klasy/panelPracownika/platnosci/informacje-do-panelu-platnosci';
import {Drzwi} from "../../../../../../enum/drzwi";
import {KomunikatyService} from "../../../../../../serwisy/komunikaty.service";

@Component({
  selector: 'app-platnosci-pracownika-naglowek',
  templateUrl: './platnosci-pracownika-naglowek.component.html',
  styleUrls: ['./platnosci-pracownika-naglowek.component.scss'],
})
export class PlatnosciPracownikaNaglowekComponent {
  @Output() pobierzDane = new EventEmitter<void>();
  @Input() dane: InformacjeDoPaneluPlatnosci = new InformacjeDoPaneluPlatnosci();

  constructor(
    private modalService: NgbModal,
    private listonosz: ListonoszService,
    private komunikaty: KomunikatyService
  ) {
  }

  nowaPlatnosc() {
    const okienko = this.modalService.open(OknoPlatnosciComponent, {
      backdrop: 'static',
      size: 'lg',
    });
  }

  aktywacjaKonta() {
    this.listonosz.wyslij(Drzwi.aktywacjaKonta, {aktywnosc: true}).then(k => {
      this.komunikaty.kontoAktywowane()
    }).catch(k => {
      if (k['error']['reasonCode'] == 3) {
        this.komunikaty.kontoNieAktywowane_zabrakloPieniedzy()

      } else {
        this.komunikaty.kontoNieAktywowane()

      }
    }).finally(() => {
      this.pobierzDane.emit();
    })
  }

  wstrzymajKonto() {
    this.listonosz.wyslij(Drzwi.aktywacjaKonta, {aktywnosc: false}).then(k => {
      this.komunikaty.kontoWstrzymane()
    }).catch(k => {

      this.komunikaty.kontoNieWstrzymane()
    }).finally(() => {
      this.pobierzDane.emit();
    })
  }
}
