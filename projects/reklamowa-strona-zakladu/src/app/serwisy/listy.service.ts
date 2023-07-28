import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Drzwi} from "../enum/drzwi";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ListyService {
  public identyfikatorWParametrze = ''
  private linkDoApi = "http://195.136.14.31:3000/";

  constructor(public api: HttpClient) {
  }

  pobierz(drzwi: Drzwi | string, opcje: {}): Observable<any> {
    var parametr = '';
    if (this.identyfikatorWParametrze.length > 0) {
      parametr = '?identyfikator=' + this.identyfikatorWParametrze
    }
    return this.api.get(this.linkDoApi + drzwi + parametr, opcje)
  }

  wyslij(drzwi: Drzwi | string, zawartosc: {}, opcje: {}): Observable<any> {
    return this.api.post(this.linkDoApi + drzwi, zawartosc, opcje)
  }
}
