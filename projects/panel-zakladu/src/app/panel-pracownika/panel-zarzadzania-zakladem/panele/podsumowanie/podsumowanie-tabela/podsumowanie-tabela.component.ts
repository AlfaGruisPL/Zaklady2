import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { TabelaPrzerwFilterComponent } from '../../kalendarz-terminow/tabela-przerw/tabela-przerw-filter/tabela-przerw-filter.component';
import { TablePaginationComponent } from '../../../../../komponets/table-pagination/table-pagination.component';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';

import { PodsumowanieZakladuTabelaPracownikDto } from 'zakladlib';

@Component({
  selector: 'app-podsumowanie-tabela',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbDropdown,
    NgbDropdownItem,
    NgbDropdownMenu,
    NgbDropdownToggle,
    TabelaPrzerwFilterComponent,
    TablePaginationComponent,
  ],
  templateUrl: './podsumowanie-tabela.component.html',
  styleUrls: ['./podsumowanie-tabela.component.scss'],
})
export class PodsumowanieTabelaComponent implements OnInit {
  dane: PodsumowanieZakladuTabelaPracownikDto[] = [];

  constructor(private listonosz: ListonoszService) {}

  ngOnInit() {
    this.listonosz
      .pobierz(Drzwi.podsumowanieTabela)
      .then((dane: PodsumowanieZakladuTabelaPracownikDto[]) => {
        dane.forEach(k => this.dane.push(k));
      })
      .catch(error => {});
  }
}
