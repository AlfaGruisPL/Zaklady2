import { Component, Input } from '@angular/core';
import { Pracownik } from '../../../../../klasy/pracownik';
import { NawigacjaService } from '../../../../../serwisy/nawigacja.service';
import { NawigacjaEnum } from '../../../../../enum/nawigacja.enum';
import { NapiszNamService } from '../../../napisz-nam/napisz-nam.service';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitch,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-informacje-ojednym-pracowniku-kontakt',
  templateUrl: './informacje-ojednym-pracowniku-kontakt.component.html',
  styleUrls: ['./informacje-ojednym-pracowniku-kontakt.component.scss'],
})
export class InformacjeOJednymPracownikuKontaktComponent {
  @Input() daneOPracowniku: Pracownik = new Pracownik();
  protected readonly faBook = faBook;
  protected readonly faFacebook = faFacebook;
  protected readonly faInstagram = faInstagram;
  protected readonly faTwitch = faTwitch;
  protected readonly faTelegram = faTelegram;
  protected readonly faTwitter = faTwitter;
  protected readonly faWhatsapp = faWhatsapp;

  constructor(public napiszNam: NapiszNamService, private nawigacja: NawigacjaService) {}

  wybierz() {
    console.log(this.daneOPracowniku);
    this.nawigacja.przeniesDoPanelu(NawigacjaEnum.napiszNam);
    this.napiszNam.napiszNamObj.komuWyslac = this.daneOPracowniku.id.toString();
  }
}
