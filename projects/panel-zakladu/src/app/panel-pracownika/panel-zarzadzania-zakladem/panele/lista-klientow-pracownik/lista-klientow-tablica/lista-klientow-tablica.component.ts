import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ListaKlientowService} from '../lista-klientow.service';
import {Klient} from '../../../../../klasy/listaKlientow/klient';
import {InformacjeOKliencieComponent} from '../informacje-okliencie/informacje-okliencie.component';

@Component({
  selector: 'app-lista-klientow-tablica',
  templateUrl: './lista-klientow-tablica.component.html',
  styleUrls: ['./lista-klientow-tablica.component.scss'],
})
export class ListaKlientowTablicaComponent {
  constructor(private modal: NgbModal, public lista_: ListaKlientowService) {
  }

  wyswietlInformacje(klient: Klient) {
    const okno = this.modal.open(InformacjeOKliencieComponent, {size: 'xl'}); //, backdrop: "static"
    okno.componentInstance.klient = klient;
  }

  test() {
    console.log(2);
  }

  protected readonly Number = Number;
  protected readonly Math = Math;
}
