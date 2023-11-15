import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Klient } from '../../../../../../klasy/listaKlientow/klient';
import { Wizyta } from '../../../../../../klasy/panelPracownika/wizyta';
import { TablePaginationComponent } from '../../../../../../komponets/table-pagination/table-pagination.component';
import { TableComponent } from '../../../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../../../komponets/table/template-id.directive';
import { CompletedVisitStatusComponent } from '../completed-visit-status/completed-visit-status.component';

@Component({
  selector: 'app-informacje-okliencie-tabela-pracownika',
  standalone: true,
  imports: [
    CommonModule,
    NgbPagination,
    TablePaginationComponent,
    TableComponent,
    NgbDropdown,
    NgbDropdownItem,
    NgbDropdownMenu,
    TemplateIdDirective,
    CompletedVisitStatusComponent,
  ],
  templateUrl: './informacje-okliencie-tabela-pracownika.component.html',
  styleUrls: ['./informacje-okliencie-tabela-pracownika.component.scss', '../informacje-okliencie.component.scss'],
})
export class InformacjeOKliencieTabelaPracownikaComponent {
  @Input() klient: Klient = new Klient({});
  public page = 1;
  public pageSize = 5;
  protected readonly eval = eval;

  sort(data: Wizyta[]) {
    return data.reverse();
  }

  wyswietlDaneDodatkowe(wizyta: Wizyta) {
    if (wizyta.uslugiTabela) {
      wizyta.uslugiTabela = false;
      return;
    }
    this.klient.wizyty.forEach(wizyta => (wizyta.uslugiTabela = false));
    wizyta.uslugiTabela = !wizyta.uslugiTabela;
  }
}
