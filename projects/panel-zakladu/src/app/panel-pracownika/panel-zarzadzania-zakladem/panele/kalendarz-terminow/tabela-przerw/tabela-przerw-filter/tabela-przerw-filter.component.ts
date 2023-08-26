import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodreczneDaneService } from '../../../../../../serwisy/podreczne-dane.service';
import { TabelaPrzerwService } from '../tabela-przerw.service';

@Component({
  selector: 'app-tabela-przerw-filter',
  templateUrl: './tabela-przerw-filter.component.html',
  styleUrls: ['./tabela-przerw-filter.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabelaPrzerwFilterComponent implements OnInit {
  constructor(public podreczne_: PodreczneDaneService, public tabelaPrzerw_: TabelaPrzerwService) {}

  ustawFilter(event: any) {
    this.tabelaPrzerw_.filterTyp.next(event.target.value);
  }

  ngOnInit() {}
}
