import {Injectable} from '@angular/core';
import {ListyService} from "./listy.service";

@Injectable({
  providedIn: 'root'
})
export class ListonoszService {

  constructor(private listy: ListyService) {
  }

  public dodajZaklad(zawartosc: any) {
    return new Promise((resolve, reject) => {
      const sub = this.listy.wyslij("/zaklady/dodaj", zawartosc, {}).subscribe(next => {
        console.log(next)
        sub.unsubscribe();
        resolve(next)
      }, error => {
        console.log(error)
        sub.unsubscribe();
        reject(error['error'])
      })
    })
  }
}
