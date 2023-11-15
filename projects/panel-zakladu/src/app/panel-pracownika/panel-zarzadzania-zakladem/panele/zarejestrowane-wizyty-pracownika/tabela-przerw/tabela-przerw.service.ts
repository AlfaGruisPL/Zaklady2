import { Injectable } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { Przerwa } from '../../../../../klasy/panelPracownika/kalendarz/przerwa.dto';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PrzerwyDniWolne } from '../../../../../klasy/panelPracownika/PrzerwyDniWolne';
import { KalendarzKomponentService } from '../../../kalendarz-komponent/kalendarz-komponent.service';
import { DzienWolny } from '../../../../../klasy/panelPracownika/kalendarz/DzienWolny';
import { KomunikatyService } from '../../../../../serwisy/komunikaty.service';
import { Udane } from '../../../../../enum/udane';
import { Bledy } from '../../../../../enum/bledy';

class tabelaPrzerwDane {
  przerwy: {
    dane: Przerwa[];
    limit: number;
    size: number;
  };
  dniWolne: {
    dane: DzienWolny[];
    limit: number;
    size: number;
  };

  constructor() {
    this.przerwy = { dane: [], limit: 0, size: 0 };
    this.dniWolne = { dane: [], limit: 0, size: 0 };
  }
}

@Injectable({
  providedIn: 'root',
})
export class TabelaPrzerwService {
  dane: PrzerwyDniWolne[] = [];
  filter = new BehaviorSubject('przerwy');
  ///filterTyp: BehaviorSubject<number> = new BehaviorSubject(0);
  filterRegularnosci = new BehaviorSubject('regularne');
  pageSize = 10;
  page = 1;
  daneSize = 0;
  pobieranieDanych = false;
  sub1: Subscription | undefined;

  constructor(
    private listonosz: ListonoszService,
    private podreczne_: PodreczneDaneService,
    private komuniakty_: KomunikatyService,
    public Kalendarz_: KalendarzKomponentService
  ) {}

  //tudo tu dodać chaange detection, liczyć ile jest th i potem tak ustawiać
  serviceStart() {
    const combined = combineLatest([this.Kalendarz_.wybranyPracownik, this.filter, this.filterRegularnosci]);
    combined.subscribe(dane => {
      this.page = 1;

      this.getData();
    });
    this.sub1 = this.Kalendarz_.pobieranieDanychObservable.subscribe(() => {
      this.page = 1;
      this.getData();
    });
  }

  serviceStop() {
    this.sub1?.unsubscribe();
  }

  getData() {
    this.pobieranieDanych = true;
    let params = new HttpParams();
    params = params.append('limit', this.pageSize);
    params = params.append('page', this.page);
    params = params.append('filter', '');
    const regularne = this.filterRegularnosci.value == 'regularne';
    const przerwy = this.filter.value == 'przerwy';
    this.listonosz
      .pobierz(Drzwi.tabelaPrzerwDane + `/${regularne}/${przerwy}/${this.Kalendarz_.wybranyPracownik.value}`, params)
      .then((dane: any) => {
        this.daneSize = dane.size;
        this.dane = dane.dane;
      })
      .catch(error => {
        this.dane = [];
      })
      .finally(() => {
        this.pobieranieDanych = false;
      });
  }

  usun(element: DzienWolny | Przerwa) {
    let drzwi = '';
    if (this.filterRegularnosci.value == 'regularne') {
      if (this.filter.value == 'przerwy') {
        drzwi = Drzwi.usunPrzerweRegularna;
        console.log(element.id, 'regularne', 'przerwy');
      } else {
        console.log(element.id, 'regularne', 'dniWolne');
        drzwi = Drzwi.usunWolnyDzienRegularny;
      }
    } else {
      if (this.filter.value == 'przerwy') {
        drzwi = Drzwi.usunPrzerweNieRegularna;
        console.log(element.id, 'nieregularne', 'przerwy');
      } else {
        console.log(element.id, 'nieregularne', 'dniWolne');
        drzwi = Drzwi.usunWolnyDzienNieRegularny;
      }
    }
    this.listonosz
      .usun(drzwi + '/' + element.id)
      .then(udane => {
        if (this.filter.value == 'przerwy') {
          this.komuniakty_.komunikatUdane(Udane.usuwaniePrzerwy);
        } else {
          this.komuniakty_.komunikatUdane(Udane.usuwanieDniaWolnego);
        }
      })
      .catch(error => {
        this.komuniakty_.komunikatBledu(Bledy.bladUsuwania);
      })
      .finally(() => {
        this.getData();
        this.Kalendarz_.pobierzDane(true);
      });
  }
}
