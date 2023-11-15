import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaKlientowPracownikComponent } from './lista-klientow-pracownik.component';
import { ListaKlientowFilterComponent } from './lista-klientow-filter/lista-klientow-filter.component';
import { ListaKlientowPodsumowanieComponent } from './lista-klientow-podsumowanie/lista-klientow-podsumowanie.component';
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbPagination,
} from '@ng-bootstrap/ng-bootstrap';
import { ListaKlientowTablicaComponent } from './lista-klientow-tablica/lista-klientow-tablica.component';
import { TablePaginationComponent } from '../../../../komponets/table-pagination/table-pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InformacjeOKliencieTabelaPracownikaComponent } from './informacje-okliencie/informacje-okliencie-tabela-pracownika/informacje-okliencie-tabela-pracownika.component';
import { InformacjeOKliencieTabelaZakladuComponent } from './informacje-okliencie/informacje-okliencie-tabela-zakladu/informacje-okliencie-tabela-zakladu.component';
import { InformacjeOKliencieComponent } from './informacje-okliencie/informacje-okliencie.component';
import { TableComponent } from '../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../komponets/table/template-id.directive';
import { SystemActivePageActiveComponent } from '../harmonogram-pracownika/system-active-information-panel/system-active-page-active.component';
import { SystemActiveInformationPanelComponent } from '../harmonogram-pracownika/system-active-information-panel/system-active-information-panel.component';
import { InformationDivForScheduleComponent } from '../harmonogram-pracownika/harmonogram-podsumowanie-administratora/information-div-for-schedule/information-div-for-schedule.component';

@NgModule({
  declarations: [
    ListaKlientowPracownikComponent,
    ListaKlientowFilterComponent,
    ListaKlientowPodsumowanieComponent,
    ListaKlientowTablicaComponent,
    InformacjeOKliencieComponent,
  ],
  imports: [
    CommonModule,
    NgbPagination,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownToggle,
    NgbDropdown,
    TablePaginationComponent,
    FontAwesomeModule,
    InformacjeOKliencieTabelaPracownikaComponent,
    InformacjeOKliencieTabelaZakladuComponent,
    TableComponent,
    TemplateIdDirective,
    SystemActivePageActiveComponent,
    SystemActiveInformationPanelComponent,
    InformationDivForScheduleComponent,
  ],
})
export class ListaKlientowModule {}
