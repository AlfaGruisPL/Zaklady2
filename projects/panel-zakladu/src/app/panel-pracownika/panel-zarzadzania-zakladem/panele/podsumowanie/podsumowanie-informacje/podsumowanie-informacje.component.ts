import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { PodsumowanieZakladuInformacjedto } from 'zakladlib';
import { PodsumowanieTabelaComponent } from '../podsumowanie-tabela/podsumowanie-tabela.component';
import { KwotaPipe } from '../../../../../rureczki/kwota.pipe';

@Component({
  selector: 'app-podsumowanie-informacje',
  standalone: true,
  imports: [CommonModule, KwotaPipe],
  templateUrl: './podsumowanie-informacje.component.html',
  styleUrls: ['./podsumowanie-informacje.component.scss'],
})
export class PodsumowanieInformacjeComponent {
  public dane: Partial<PodsumowanieZakladuInformacjedto> = {};
  @Input() tableComponent: PodsumowanieTabelaComponent | undefined;

  constructor(private listonosz: ListonoszService) {}

  ngOnInit() {
    console.log(this.tableComponent?.dane);
    this.listonosz
      .pobierz(Drzwi.podsumowanieInformacje)
      .then((dane: PodsumowanieZakladuInformacjedto) => {
        Object.assign(this.dane, dane);
      })
      .catch(error => {});
  }

  sumaWMiesiacu() {
    return this.tableComponent?.dane.reduce((suma, pracownik) => suma + pracownik.wizytyOstatniMiesiac.suma, 0);
  }

  sumaWMiesiacuPoprzednim() {
    return this.tableComponent?.dane.reduce((suma, pracownik) => suma + pracownik.wizytyPoprzedniMiesiac.suma, 0);
  }

  sumaWMiesiacuKwota() {
    return this.tableComponent?.dane.reduce((suma, pracownik) => suma + pracownik.wizytyOstatniMiesiac.kwota, 0);
  }

  sumaWMiesiacuPoprzednimKwota() {
    return this.tableComponent?.dane.reduce((suma, pracownik) => suma + pracownik.wizytyPoprzedniMiesiac.kwota, 0);
  }
}
