import { Component, Input } from '@angular/core';
import { Pracownik } from '../../../../../klasy/pracownik';

@Component({
  selector: 'app-informacje-ojednym-pracowniku-kontakt',
  templateUrl: './informacje-ojednym-pracowniku-kontakt.component.html',
  styleUrls: ['./informacje-ojednym-pracowniku-kontakt.component.scss'],
})
export class InformacjeOJednymPracownikuKontaktComponent {
  @Input() daneOPracowniku: Pracownik = new Pracownik();
}
