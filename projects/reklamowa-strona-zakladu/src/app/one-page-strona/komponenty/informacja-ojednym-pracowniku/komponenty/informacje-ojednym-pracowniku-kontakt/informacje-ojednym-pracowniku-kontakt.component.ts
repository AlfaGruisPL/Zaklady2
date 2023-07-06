import { Component, Input } from '@angular/core';
import { Pracownik } from '../../../../../klasy/pracownik';
import { NawigacjaService } from '../../../../../serwisy/nawigacja.service';
import { NawigacjaEnum } from '../../../../../enum/nawigacja.enum';
import { NapiszNamService } from '../../../napisz-nam/napisz-nam.service';

@Component({
  selector: 'app-informacje-ojednym-pracowniku-kontakt',
  templateUrl: './informacje-ojednym-pracowniku-kontakt.component.html',
  styleUrls: ['./informacje-ojednym-pracowniku-kontakt.component.scss'],
})
export class InformacjeOJednymPracownikuKontaktComponent {
  @Input() daneOPracowniku: Pracownik = new Pracownik();

  constructor(
    public napiszNam: NapiszNamService,
    private nawigacja: NawigacjaService
  ) {}

  wybierz() {
    this.nawigacja.przeniesDoPanelu(NawigacjaEnum.napiszNam);
    this.napiszNam.napiszNamObj.komuWyslac = this.daneOPracowniku.id.toString();
  }
}
