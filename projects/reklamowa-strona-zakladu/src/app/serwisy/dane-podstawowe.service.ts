import {Injectable} from '@angular/core';
import {ListonoszService} from './listonosz.service';
import {Drzwi} from '../enum/drzwi';
import {DanePodstawowe} from '../klasy/dane-podstawowe';
import {Subject} from 'rxjs';
import {HttpError} from "../../../../klasy/httpError";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class DanePodstawoweService {
  public danePodstawowe = new DanePodstawowe();
  public danePodstawoweObservable = new Subject<DanePodstawowe>();
  public subDomainID = false;

  constructor(public listonosz: ListonoszService, private router: Router) {
  }

  public pobieranieDanychPodstawowych() {
    this.listonosz
      .pobierz(Drzwi.danePodstawowe)
      .then((pobrane: DanePodstawowe) => {
        Object.assign(this.danePodstawowe, pobrane);
        this.danePodstawoweObservable.next(this.danePodstawowe);
        console.log(this.danePodstawowe);
      })
      .catch((niepobrane: HttpError) => {
        if (niepobrane.error?.reasonCode) {
          this.router.navigate(['pageNotFound'])

        }
      });
  }
}
