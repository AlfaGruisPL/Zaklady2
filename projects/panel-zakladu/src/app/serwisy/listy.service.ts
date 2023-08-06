import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListyService {
  public LinkDoApi: string = "http://195.136.14.31:3000";

  public identyfikatorWParametrze = ''

  constructor(private http: HttpClient) {
  }

  private PrzygotwujId() {


    var parametr = '';
    if (this.identyfikatorWParametrze.length > 0) {
      parametr = '?identyfikator=' + this.identyfikatorWParametrze
    }
    return parametr
  }

  public wyslij(drzwi: string, zawartosc: any, opcje: any): Observable<any> {
    return this.http.post(this.LinkDoApi + drzwi + this.PrzygotwujId(), zawartosc, opcje)
  }

  public pobierz(drzwi: string, opcje: any): Observable<any> {
    return this.http.get(this.LinkDoApi + drzwi + this.PrzygotwujId(), opcje)
  }

  public aktualizuj(drzwi: string, zawartosc: any, opcje: any): Observable<any> {
    return this.http.patch(this.LinkDoApi + drzwi + this.PrzygotwujId(), zawartosc, opcje)
  }

  public usun(drzwi: string, opcje: any): Observable<any> {
    return this.http.delete(this.LinkDoApi + drzwi + this.PrzygotwujId(), opcje)
  }
}
