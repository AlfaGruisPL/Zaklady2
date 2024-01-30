import { Component } from '@angular/core';
import { ListaKlientowPodsumowanieComponent } from '../lista-klientow-podsumowanie/lista-klientow-podsumowanie.component';
import { ListaKlientowFilterComponent } from '../lista-klientow-tablica/lista-klientow-filter/lista-klientow-filter.component';
import { ListaKlientowTablicaComponent } from '../lista-klientow-tablica/lista-klientow-tablica.component';

@Component({
  selector: 'app-customers-default',
  standalone: true,
  imports: [ListaKlientowPodsumowanieComponent, ListaKlientowFilterComponent, ListaKlientowTablicaComponent],
  templateUrl: './customers-default.component.html',
  styleUrl: './customers-default.component.scss',
})
export class CustomersDefaultComponent {}
