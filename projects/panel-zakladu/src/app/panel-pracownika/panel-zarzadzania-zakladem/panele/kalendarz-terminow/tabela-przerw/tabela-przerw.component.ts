import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-przerw',
  templateUrl: './tabela-przerw.component.html',
  styleUrls: ['./tabela-przerw.component.scss'],
})
export class TabelaPrzerwComponent {
  filter = 'przerwy';
  filterTyp = 'uzytkownikaZalogowanego';

  zmianaFiltra() {}

  onSearchChange(event: any) {}
}
