import { NgModule } from '@angular/core';
import { PlatnosciPracownikaPotwierdzenieAkcjiComponent } from './komunikaty/platnosci-pracownika-potwierdzenie-akcji/platnosci-pracownika-potwierdzenie-akcji.component';
import { PlatnosciPracownikaTabelaComponent } from './komponenty/platnosci-pracownika-tabela/platnosci-pracownika-tabela.component';
import { PlatnosciPracownikaNaglowekComponent } from './komponenty/platnosci-pracownika-naglowek/platnosci-pracownika-naglowek.component';
import { OknoPlatnosciComponent } from './komponenty/okna/okno-platnosci/okno-platnosci.component';
import { PlatnosciPracownikaOplatyComponent } from './komponenty/platnosci-pracownika-oplaty/platnosci-pracownika-oplaty.component';
import { FormsModule } from '@angular/forms';
import { PlatnosciPracownikaComponent } from './platnosci-pracownika.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PlatnosciSMSOknoComponent } from './komponenty/okna/platnosci-smsokno/platnosci-smsokno.component';
import { WykresStanuKontaComponent } from './komponenty/wykres-stanu-konta/wykres-stanu-konta.component';
import { StartStopUslugaComponent } from './komponenty/okna/start-stop-usluga/start-stop-usluga.component';
import { PlatnosciRouterModule } from './platnosci-router.module';
import { SharedModule } from '../../../../shared.module';
import { CommonModule } from '@angular/common';

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
    SharedModule,
    CommonModule,
    FormsModule,
    NgbPagination,
    UiSwitchModule,
    PlatnosciRouterModule,
  ],
  providers: [],
  bootstrap: [],
})
export class PlatnosciPracownikaModule {}
