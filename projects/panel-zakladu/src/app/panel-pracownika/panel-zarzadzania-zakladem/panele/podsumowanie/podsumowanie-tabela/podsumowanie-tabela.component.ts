import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { TabelaPrzerwFilterComponent } from '../../zarejestrowane-wizyty-pracownika/tabela-przerw/tabela-przerw-filter/tabela-przerw-filter.component';
import { TablePaginationComponent } from '../../../../../komponets/table-pagination/table-pagination.component';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';

import { PodsumowanieZakladuTabelaPracownikDto } from 'zakladLib';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { KwotaPipe } from '../../../../../rureczki/kwota.pipe';
import { TableComponent } from '../../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../../komponets/table/template-id.directive';

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
    KwotaPipe,
    TableComponent,
    TemplateIdDirective,
  ],
  templateUrl: './podsumowanie-tabela.component.html',
  styleUrls: ['./podsumowanie-tabela.component.scss'],
})
export class PodsumowanieTabelaComponent implements OnInit {
  dane: PodsumowanieZakladuTabelaPracownikDto[] = [];

  constructor(private listonosz: ListonoszService, public danePodreczne_: PodreczneDaneService) {}

  ngOnInit() {
    const k = 1;
    let k2 = 3;
    k2 = 4;
    this.listonosz
      .pobierz(Drzwi.podsumowanieTabela)
      .then((dane: PodsumowanieZakladuTabelaPracownikDto[]) => {
        dane.forEach(k => this.dane.push(k));
      })
      .catch(error => {});
  }
}
