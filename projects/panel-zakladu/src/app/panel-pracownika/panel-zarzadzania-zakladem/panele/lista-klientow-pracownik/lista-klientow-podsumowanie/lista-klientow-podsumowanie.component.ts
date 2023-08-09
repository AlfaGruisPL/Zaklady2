import { Component } from '@angular/core';
import { ListaKlientowService } from '../lista-klientow.service';
import { Klient } from '../../../../../klasy/listaKlientow/klient';

@Component({
  selector: 'app-lista-klientow-podsumowanie',
  templateUrl: './lista-klientow-podsumowanie.component.html',
  styleUrls: ['./lista-klientow-podsumowanie.component.scss'],
})
export class ListaKlientowPodsumowanieComponent {
  constructor(public lista_: ListaKlientowService) {}

  private znalezionyNajczestszyKlient: Klient | null = null;
}
