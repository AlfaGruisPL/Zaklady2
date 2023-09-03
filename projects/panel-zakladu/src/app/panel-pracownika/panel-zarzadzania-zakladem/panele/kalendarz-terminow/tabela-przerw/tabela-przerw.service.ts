import { Injectable } from '@angular/core';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { Przerwa, WolnyDzien } from '../../../../../klasy/panelPracownika/kalendarz/przerwa.dto';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PrzerwyDniWolne } from '../../../../../klasy/panelPracownika/PrzerwyDniWolne';
import { KalendarzKomponentService } from '../../../kalendarz-komponent/kalendarz-komponent.service';

class tabelaPrzerwDane {
  przerwy: {
    dane: Przerwa[];
    limit: number;
    size: number;
  };
  dniWolne: {
    dane: WolnyDzien[];
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
  pageSize: BehaviorSubject<number> = new BehaviorSubject(0);
  page: BehaviorSubject<number> = new BehaviorSubject(1);
  daneSize = 0;
  pobieranieDanych = false;

  constructor(
    private listonosz: ListonoszService,
    private podreczne_: PodreczneDaneService,
    public Kalendarz_: KalendarzKomponentService
  ) {}

  serviceStart() {
    console.log('start');
    const combined = combineLatest([this.Kalendarz_.wybranyPracownik, this.filter, this.filterRegularnosci]);
    combined.subscribe(dane => {
      this.getData();
      console.log(dane);
    });
  }

  serviceStop() {}

  getData() {
    this.pobieranieDanych = true;
    let params = new HttpParams();
    params = params.append('limit', this.pageSize.value);
    params = params.append('page', this.page.value);
    params = params.append('filter', '');
    const regularne = this.filterRegularnosci.value == 'regularne';
    const przerwy = this.filter.value == 'przerwy';
    this.listonosz
      .pobierz(Drzwi.tabelaPrzerwDane + `/${regularne}/${przerwy}/${this.Kalendarz_.wybranyPracownik.value}`, params)
      .then((dane: any) => {
        this.dane = dane.dane;
        this.daneSize = dane.size;
        // this.dane.przerwy.dane = dane.przerwy?.dane;
        // this.dane.dniWolne.dane = dane.dniWolne?.dane;
      })
      .catch(error => {
        this.dane = [];
      })
      .finally(() => {
        this.pobieranieDanych = false;
      });
  }
}
