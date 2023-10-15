import { Component, Input } from '@angular/core';
import { Klient } from '../../../../../klasy/listaKlientow/klient';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-informacje-okliencie',
  templateUrl: './informacje-okliencie.component.html',
  styleUrls: ['./informacje-okliencie.component.scss'],
})
export class InformacjeOKliencieComponent {
  @Input() klient: Klient = new Klient({});
  public page = 0;
  public pageSize = 5;

  constructor(public activeModal: NgbActiveModal) {}

  sumaOplat() {
    const wynik = this.klient.wizytWZakladzie.reduce((suma, klient) => {
      if (klient.cena) return suma + Number(klient.cena);
      else return suma;
    }, 0);
    return Math.round(wynik * 100) / 100;
  }

  pierwszaWizyta() {
    const dane = this.klient.wizytWZakladzie.sort((x, y) => (x.poczatek < y.poczatek ? -1 : 1));

    return dane[0].poczatek;
  }

  ostatniaWizyta() {
    const dane = this.klient.wizytWZakladzie.sort((x, y) => (x.poczatek > y.poczatek ? -1 : 1));

    return dane[0].poczatek;
  }
}
