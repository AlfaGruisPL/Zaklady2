import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { TabelaPrzerwFilterComponent } from './tabela-przerw-filter/tabela-przerw-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbPagination,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { TablePaginationComponent } from '../../../../../komponets/table-pagination/table-pagination.component';
import { TabelaPrzerwService } from './tabela-przerw.service';

@Component({
  selector: 'app-tabela-przerw',
  templateUrl: './tabela-przerw.component.html',
  styleUrls: ['./tabela-przerw.component.scss'],
  standalone: true,
  imports: [
    TabelaPrzerwFilterComponent,
    FontAwesomeModule,
    NgbPagination,
    CommonModule,
    TablePaginationComponent,
    NgbDropdownMenu,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownItem,
  ],
})
export class TabelaPrzerwComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(public danePodreczne_: PodreczneDaneService, public tabelaPrzerw_: TabelaPrzerwService) {}

  ngOnInit() {
    this.tabelaPrzerw_.serviceStart();
  }

  ngAfterViewInit() {}

  getDataFormPaggination(event: TablePaginationComponent) {
    this.tabelaPrzerw_.pageSize.next(event.pageSize);
    this.tabelaPrzerw_.page.next(event.page);
    this.tabelaPrzerw_.getData();
  }

  ngOnDestroy() {
    this.tabelaPrzerw_.serviceStop();
  }

  onSearchChange(event: any) {}

  czyWolnyDzien() {
    return this.tabelaPrzerw_.filter.value != 'przerwy';
  }

  czyPrzerwa() {
    return this.tabelaPrzerw_.filter.value == 'przerwy';
  }

  usun(element: any) {
    this.tabelaPrzerw_.usun(element);
  }
}
