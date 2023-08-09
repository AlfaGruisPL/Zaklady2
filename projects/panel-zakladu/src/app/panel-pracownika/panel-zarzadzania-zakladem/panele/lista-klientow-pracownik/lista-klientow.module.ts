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

@NgModule({
  declarations: [
    ListaKlientowPracownikComponent,
    ListaKlientowFilterComponent,
    ListaKlientowPodsumowanieComponent,
    ListaKlientowTablicaComponent,
  ],
  imports: [
    CommonModule,
    NgbPagination,
    NgbDropdownMenu,
    NgbDropdownItem,
    NgbDropdownToggle,
    NgbDropdown,
  ],
})
export class ListaKlientowModule {}
