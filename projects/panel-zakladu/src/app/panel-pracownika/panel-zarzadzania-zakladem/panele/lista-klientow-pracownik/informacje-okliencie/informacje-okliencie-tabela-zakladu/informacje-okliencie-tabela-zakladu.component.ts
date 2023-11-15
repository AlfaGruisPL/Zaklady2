import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Klient } from '../../../../../../klasy/listaKlientow/klient';
import { Wizyta } from '../../../../../../klasy/panelPracownika/wizyta';
import { TablePaginationComponent } from '../../../../../../komponets/table-pagination/table-pagination.component';
import { TableComponent } from '../../../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../../../komponets/table/template-id.directive';
import { CompletedVisitStatusComponent } from '../completed-visit-status/completed-visit-status.component';

@Component({
  selector: 'app-informacje-okliencie-tabela-zakladu',
  standalone: true,
  imports: [
    CommonModule,
    NgbPagination,
    TablePaginationComponent,
    TableComponent,
    TemplateIdDirective,
    CompletedVisitStatusComponent,
  ],
  templateUrl: './informacje-okliencie-tabela-zakladu.component.html',
  styleUrls: ['./informacje-okliencie-tabela-zakladu.component.scss', '../informacje-okliencie.component.scss'],
})
export class InformacjeOKliencieTabelaZakladuComponent {
  @Input() klient: Klient = new Klient({});
  public page = 0;
  public pageSize = 5;

  wyswietlDaneDodatkowe(wizyta: Wizyta) {
    if (wizyta.uslugiTabela) {
      wizyta.uslugiTabela = false;
      return;
    }
    this.klient.wizytWZakladzie.forEach(wizyta => (wizyta.uslugiTabela = false));
    wizyta.uslugiTabela = !wizyta.uslugiTabela;
  }
}
