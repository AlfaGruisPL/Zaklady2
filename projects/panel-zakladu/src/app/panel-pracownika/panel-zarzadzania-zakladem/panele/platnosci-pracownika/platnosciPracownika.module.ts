import { NgModule } from '@angular/core';
import { PlatnosciPracownikaPotwierdzenieAkcjiComponent } from './komunikaty/platnosci-pracownika-potwierdzenie-akcji/platnosci-pracownika-potwierdzenie-akcji.component';
import { PlatnosciPracownikaTabelaComponent } from './komponenty/platnosci-pracownika-tabela/platnosci-pracownika-tabela.component';
import { PlatnosciPracownikaNaglowekComponent } from './komponenty/platnosci-pracownika-naglowek/platnosci-pracownika-naglowek.component';
import { OknoPlatnosciComponent } from './komponenty/okna/okno-platnosci/okno-platnosci.component';
import { PlatnosciPracownikaOplatyComponent } from './komponenty/platnosci-pracownika-oplaty/platnosci-pracownika-oplaty.component';
import { FormsModule } from '@angular/forms';
import { PlatnosciPracownikaComponent } from './platnosci-pracownika.component';
import { NgbDropdown, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PlatnosciSMSOknoComponent } from './komponenty/okna/platnosci-smsokno/platnosci-smsokno.component';
import { WykresStanuKontaComponent } from './komponenty/wykres-stanu-konta/wykres-stanu-konta.component';
import { StartStopUslugaComponent } from './komponenty/okna/start-stop-usluga/start-stop-usluga.component';
import { PlatnosciRouterModule } from './platnosci-router.module';
import { CommonModule } from '@angular/common';
import { TablePaginationComponent } from '../../../../komponets/table-pagination/table-pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from '../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../komponets/table/template-id.directive';

@NgModule({
  declarations: [
    PlatnosciPracownikaPotwierdzenieAkcjiComponent,
    PlatnosciPracownikaTabelaComponent,
    PlatnosciPracownikaNaglowekComponent,
    PlatnosciPracownikaComponent,
    OknoPlatnosciComponent,
    PlatnosciPracownikaOplatyComponent,
    PlatnosciSMSOknoComponent,
    WykresStanuKontaComponent,
    StartStopUslugaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbPagination,
    UiSwitchModule,
    PlatnosciRouterModule,
    TablePaginationComponent,
    FontAwesomeModule,
    TableComponent,
    NgbDropdown,
    TemplateIdDirective,
  ],
  providers: [],
  bootstrap: [],
})
export class PlatnosciPracownikaModule {}
