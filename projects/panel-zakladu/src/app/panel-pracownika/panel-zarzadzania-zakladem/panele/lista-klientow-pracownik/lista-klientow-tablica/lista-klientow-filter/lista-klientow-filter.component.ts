import { Component } from '@angular/core';
import { PodreczneDaneService } from '../../../../../../serwisy/podreczne-dane.service';
import { ListaKlientowService } from '../../lista-klientow.service';
import { TokenService } from '../../../../../../serwisy/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-klientow-filter',
  standalone: true,
  templateUrl: './lista-klientow-filter.component.html',
  styleUrls: ['./lista-klientow-filter.component.scss'],
  imports: [CommonModule],
})
export class ListaKlientowFilterComponent {
  constructor(
    public podreczne_: PodreczneDaneService,
    public lista_: ListaKlientowService,
    public token_: TokenService
  ) {}
}
