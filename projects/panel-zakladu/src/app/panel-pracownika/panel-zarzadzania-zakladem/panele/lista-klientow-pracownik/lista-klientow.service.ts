import { Injectable } from '@angular/core';
import { Klient } from '../../../../klasy/listaKlientow/klient';
import { Drzwi } from '../../../../enum/drzwi';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListaKlientowService {
  public listaKlientow: Array<Klient> = [];
  filter: number | undefined = 0;
  newCustomersInLast30Days = 0;
  customerMostVisit: Klient | undefined = undefined;
  visitsAvg = 0;
  public page = 1;
  public pageSize = 12;
  public iloscKlientow = 12;
  public ladowanieDanych = false;
  public searchValue = '';

  constructor(public podreczne_: PodreczneDaneService, private listonosz: ListonoszService) {}

  ustawFilter(event: any) {
    this.filter = event.target.value;
  }

  pobierzDane() {
    let drzwi: any;
    switch (this.filter) {
      case 0:
        drzwi = Drzwi.listaKlientowCalosc;
        break;
      case this.podreczne_.danePodreczneObiekt.zalogowanyUzytkownik?.id:
        drzwi = Drzwi.listaKlientowZalogowanegoUzytkownika;
        break;
      default:
        drzwi = Drzwi.listaKlientowUzytkownika + '/' + this.filter;
    }

    let params = new HttpParams();
    params = params.append('page', this.page);
    params = params.append('finder', this.searchValue);

    this.ladowanieDanych = true;
    this.listonosz
      .pobierz(drzwi, params)
      .then(
        (dane: {
          lista: Array<Klient>;
          size: number;
          limit: number;
          newCustomersInLast30Days: number;
          customerMostVisit: any;
          visitsAvg: number;
        }) => {
          this.listaKlientow = [];
          dane.lista.forEach(klient => {
            this.listaKlientow.push(new Klient(klient));
          });
          this.iloscKlientow = dane.size;
          this.customerMostVisit = dane.customerMostVisit;
          this.newCustomersInLast30Days = dane.newCustomersInLast30Days;
          this.pageSize = dane.limit;
          this.visitsAvg = dane.visitsAvg;
        }
      )
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.ladowanieDanych = false;
      });
  }

  onSearchChange(event: KeyboardEvent) {
    if (event.target) {
      // @ts-ignore
      this.wyszukiwarkaSub.next(event.target['value']);
    }
  }
}
