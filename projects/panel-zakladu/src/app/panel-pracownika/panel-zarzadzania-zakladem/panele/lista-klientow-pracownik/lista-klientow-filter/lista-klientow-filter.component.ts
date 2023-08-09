import { Component } from '@angular/core';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { ListaKlientowService } from '../lista-klientow.service';
import { TokenService } from '../../../../../serwisy/token.service';

@Component({
  selector: 'app-lista-klientow-filter',
  templateUrl: './lista-klientow-filter.component.html',
  styleUrls: ['./lista-klientow-filter.component.scss'],
})
export class ListaKlientowFilterComponent {
  constructor(
    public podreczne_: PodreczneDaneService,
    public lista_: ListaKlientowService,
    public token_: TokenService
  ) {}
}
