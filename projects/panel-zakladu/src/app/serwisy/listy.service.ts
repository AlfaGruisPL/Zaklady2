import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListyService {
  env = environment;
  public LinkDoApi: string = this.env.api;

  constructor(private http: HttpClient) {}

  public wyslij(drzwi: string, zawartosc: any, opcje: any): Observable<any> {
    return this.http.post(this.LinkDoApi + drzwi, zawartosc, opcje);
  }

  public pobierz(drzwi: string, opcje: any): Observable<any> {
    return this.http.get(this.LinkDoApi + drzwi, opcje);
  }

  public aktualizuj(drzwi: string, zawartosc: any, opcje: any): Observable<any> {
    return this.http.patch(this.LinkDoApi + drzwi, zawartosc, opcje);
  }

  public usun(drzwi: string, opcje: any): Observable<any> {
    return this.http.delete(this.LinkDoApi + drzwi, opcje);
  }
}
