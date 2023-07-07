import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListyService {
  public LinkDoApi: string = "http://195.136.14.31:3000";

  constructor(private http: HttpClient) {
  }

  public wyslij(drzwi: string, zawartosc: any, opcje: any): Observable<any> {
    return this.http.post(this.LinkDoApi + drzwi, zawartosc, opcje)
  }

  public pobierz(drzwi: string, opcje: any): Observable<any> {
    return this.http.get(this.LinkDoApi + drzwi, opcje)
  }

  public aktualizuj(drzwi: string, zawartosc: any, opcje: any): Observable<any> {
    return this.http.patch(this.LinkDoApi + drzwi, zawartosc, opcje)
  }

  public usun(drzwi: string, opcje: any): Observable<any> {
    return this.http.delete(this.LinkDoApi + drzwi, opcje)
  }
}
