import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaPrzerwFilterComponent } from './tabela-przerw/tabela-przerw-filter/tabela-przerw-filter.component';
import { KalendarzTerminowComponent } from './kalendarz-terminow.component';
import { TabelaPrzerwComponent } from './tabela-przerw/tabela-przerw.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KalendarzTerminowRoutingModule } from './kalendarz-terminow-routing.module';
import { KalendarzKomponentModule } from '../../kalendarz-komponent/kalendarz-komponent.module';

@NgModule({
  declarations: [TabelaPrzerwFilterComponent, KalendarzTerminowComponent, TabelaPrzerwComponent],
  imports: [CommonModule, NgbPagination, FontAwesomeModule, KalendarzTerminowRoutingModule, KalendarzKomponentModule],
})
export class KalendarzTerminowModule {}
