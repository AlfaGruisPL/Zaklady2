import { Component, Input, OnInit } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { BledyNumery } from '../../../../../enum/bledy-numery';

@Component({
  selector: 'app-pracownicy-moj-zaklad',
  templateUrl: './pracownicy-moj-zaklad.component.html',
  styleUrls: ['./pracownicy-moj-zaklad.component.scss'],
})
export class PracownicyMojZakladComponent implements OnInit {
  public pracownicy: {
    widocznoscOgolna?: boolean;
    listaPracownikow?: [
      {
        id: number;
        firstname: string;
        lastname: string;
        widocznosc: boolean;
      }
    ];
  } = {};
  @Input() czyWidoczne: boolean = false;

  constructor(private listonosz: ListonoszService, private komunikaty: KomunikatyService) {}

  ngOnInit() {
    this.pobieranie();
  }

  public pobieranie() {
    this.listonosz
      .pobierz(Drzwi.pobierzPracownikowMojZaklad)
      .then(pobrane => {
        Object.assign(this.pracownicy, pobrane);
      })
      .catch(niepobrane => {
        this.komunikaty.wyswietlenieBladNumer(BledyNumery.NiePobierajaSiePracownicyMojZaklad);
      });
  }

  public wyslij() {
    this.listonosz
      .wyslij(Drzwi.aktualizujPracownikowMojZaklad, this.pracownicy)
      .then(udane => {})
      .catch(nieAktualizowano => {
        this.komunikaty.wyswietlenieBladNumer(BledyNumery.NieAktualizujaSiePracownicyMojZaklad);
      })
      .finally(() => {
        this.pobieranie();
      });
  }
}
