import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { PodsumowanieZakladuInformacjedto } from 'zakladlib';

@Component({
  selector: 'app-podsumowanie-informacje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './podsumowanie-informacje.component.html',
  styleUrls: ['./podsumowanie-informacje.component.scss'],
})
export class PodsumowanieInformacjeComponent {
  public dane: Partial<PodsumowanieZakladuInformacjedto> = {};

  constructor(private listonosz: ListonoszService) {}

  ngOnInit() {
    this.listonosz
      .pobierz(Drzwi.podsumowanieInformacje)
      .then((dane: PodsumowanieZakladuInformacjedto) => {
        Object.assign(this.dane, dane);
      })
      .catch(error => {});
  }
}
