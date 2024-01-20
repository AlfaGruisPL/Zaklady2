import { Injectable } from '@angular/core';
import { ListyService } from './listy.service';
import { Drzwi } from '../enum/drzwi';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ListonoszService {
  constructor(public listy: ListyService, public router: Router) {}

  checkServerConnection(error: any) {
    if (error.status == 0) {
      this.router.navigate(['page500']);
    }
  }

  pobierz(drzwi: Drzwi | string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.listy.pobierz(drzwi, {}).subscribe(
        next => {
          resolve(next['value']);
        },
        error => {
          this.checkServerConnection(error);
          reject(error);
        }
      );
    });
  }

  usun(drzwi: Drzwi | string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.listy.usun(drzwi, {}).subscribe(
        next => {
          resolve(next['value']);
        },
        error => {
          //todo dać zabezpieczniee że jeżeli nie ma kontaktu z serwerem to wtedy bubu
          reject(error);
        }
      );
    });
  }

  wyslij(drzwi: Drzwi | string, zawartosc: {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.listy.wyslij(drzwi, zawartosc, {}).subscribe(
        next => {
          resolve(next['value']);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
