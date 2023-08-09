import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaKlientowService } from './lista-klientow.service';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-lista-klientow-pracownik',
  templateUrl: './lista-klientow-pracownik.component.html',
  styleUrls: ['./lista-klientow-pracownik.component.scss'],
})
export class ListaKlientowPracownikComponent implements OnInit {
  constructor(
    private modal: NgbModal,
    public lista_: ListaKlientowService,
    public podreczne_: PodreczneDaneService
  ) {}

  ngOnInit() {
    const sub = this.podreczne_.danePodreczneObserveble.subscribe(k => {
      if (k && k.zalogowanyUzytkownik) {
        this.lista_.filter = k.zalogowanyUzytkownik.id;
        this.lista_.pobierzDane();
        sub.unsubscribe();
      }
    });
  }
}
