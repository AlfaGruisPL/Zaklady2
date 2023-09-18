import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PodsumowanieInformacjeComponent } from './podsumowanie-informacje/podsumowanie-informacje.component';
import { PodsumowanieWykresComponent } from './podsumowanie-wykres/podsumowanie-wykres.component';
import { PodsumowanieTabelaComponent } from './podsumowanie-tabela/podsumowanie-tabela.component';

@Component({
  selector: 'app-podsumowanie',
  standalone: true,
  imports: [CommonModule, PodsumowanieInformacjeComponent, PodsumowanieWykresComponent, PodsumowanieTabelaComponent],
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.scss'],
})
export class PodsumowanieComponent {}
