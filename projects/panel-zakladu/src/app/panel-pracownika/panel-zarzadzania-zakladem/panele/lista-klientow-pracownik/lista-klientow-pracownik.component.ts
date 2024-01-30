import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListaKlientowService } from './lista-klientow.service';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { Subscription } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista-klientow-pracownik',
  standalone: true,
  templateUrl: './lista-klientow-pracownik.component.html',
  styleUrls: ['./lista-klientow-pracownik.component.scss'],
  imports: [RouterOutlet],
})
export class ListaKlientowPracownikComponent implements OnInit {
  sub: Subscription | undefined;

  constructor(
    private modal: NgbModal,
    public lista_: ListaKlientowService,
    public podreczne_: PodreczneDaneService
  ) {}

  ngOnInit() {
    this.sub = this.podreczne_.danePodreczneObserveble.subscribe(k => {
      if (k && k.zalogowanyUzytkownik) {
        this.lista_.filter = k.zalogowanyUzytkownik.id;
        this.lista_.pobierzDane();
        if (this.sub) {
          this.sub.unsubscribe();
        }
      }
    });
  }
}
