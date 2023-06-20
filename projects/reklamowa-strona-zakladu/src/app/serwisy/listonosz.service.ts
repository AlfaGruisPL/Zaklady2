import {Injectable} from '@angular/core';
import {ListyService} from "./listy.service";
import {Drzwi} from "../enum/drzwi";

@Injectable({
  providedIn: 'root'
})
export class ListonoszService {

  constructor(public listy: ListyService) {
  }

  pobierz(drzwi: Drzwi | string): Promise<any> {


    return new Promise((resolve, reject) => {

      this.listy.pobierz(drzwi, {}).subscribe(next => {
          resolve(next['value'])
        },
        error => {
          reject(error)
        })

    })

  }

  wyslij(drzwi: Drzwi | string, zawartosc: {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.listy.wyslij(drzwi, zawartosc, {}).subscribe(next => {
          resolve(next['value'])
        },
        error => {
          reject(error)
        })
    })
  }
}
