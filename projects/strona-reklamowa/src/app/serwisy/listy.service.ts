import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListyService {
  linkDoApi: string = "http://195.136.14.31:3000"

  constructor(private http: HttpClient) {
  }

  public wyslij(drzwi: string, zawartosc: any, opcje: any): Observable<any> {
    return this.http.post(this.linkDoApi + drzwi, zawartosc, opcje
    )
  }
}
