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
  public page = 1;
  public pageSize = 12;
  public iloscKlientow = 12;

  constructor(
    public podreczne_: PodreczneDaneService,
    private listonosz: ListonoszService
  ) {}

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

    this.listaKlientow = [];
    let params = new HttpParams();
    params = params.append('page', this.page);

    this.listonosz
      .pobierz(drzwi, params)
      .then((dane: { lista: Array<Klient>; size: number; limit: number }) => {
        dane.lista.forEach(klient => {
          this.listaKlientow.push(new Klient(klient));
        });
        this.iloscKlientow = dane.size;
        this.pageSize = dane.limit;
      });
  }
}
