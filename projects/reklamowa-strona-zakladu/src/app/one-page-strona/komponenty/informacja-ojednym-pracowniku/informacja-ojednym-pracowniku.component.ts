import { Component, Input } from '@angular/core';
import { Pracownik } from '../../../klasy/pracownik';

@Component({
  selector: 'app-informacja-ojednym-pracowniku',
  templateUrl: './informacja-ojednym-pracowniku.component.html',
  styleUrls: ['./informacja-ojednym-pracowniku.component.scss'],
})
export class InformacjaOJednymPracownikuComponent {
  @Input() daneOPracowniku: Pracownik = new Pracownik();
}
