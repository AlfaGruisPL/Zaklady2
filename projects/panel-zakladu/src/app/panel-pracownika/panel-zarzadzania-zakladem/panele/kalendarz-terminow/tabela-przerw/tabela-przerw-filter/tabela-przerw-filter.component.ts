import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela-przerw-filter',
  templateUrl: './tabela-przerw-filter.component.html',
  styleUrls: ['./tabela-przerw-filter.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TabelaPrzerwFilterComponent implements OnInit {
  filter = 'przerwy';
  filterTyp = 'uzytkownikaZalogowanego';

  zmianaFiltra() {}

  ngOnInit() {}
}
