import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodreczneDaneService } from '../../../../../../serwisy/podreczne-dane.service';
import { TabelaPrzerwService } from '../tabela-przerw.service';
import { KalendarzKomponentService } from '../../../../kalendarz-komponent/kalendarz-komponent.service';

@Component({
  selector: 'app-tabela-przerw-filter',
  templateUrl: './tabela-przerw-filter.component.html',
  styleUrls: ['./tabela-przerw-filter.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabelaPrzerwFilterComponent implements OnInit {
  constructor(
    public podreczne_: PodreczneDaneService,
    public tabelaPrzerw_: TabelaPrzerwService,
    public Kalendarz_: KalendarzKomponentService
  ) {}

  ustawFilter(event: any) {
    this.Kalendarz_.wybranyPracownik.next(event.target.value);
  }

  ngOnInit() {}
}
