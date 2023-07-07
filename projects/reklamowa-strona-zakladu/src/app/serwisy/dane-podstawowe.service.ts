import {Injectable} from '@angular/core';
import {ListonoszService} from './listonosz.service';
import {Drzwi} from '../enum/drzwi';
import {DanePodstawowe} from '../klasy/dane-podstawowe';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DanePodstawoweService {
  public danePodstawowe = new DanePodstawowe();
  public danePodstawoweObservable = new Subject<DanePodstawowe>();

  constructor(public listonosz: ListonoszService) {
  }

  public pobieranieDanychPodstawowych() {
    this.listonosz
      .pobierz(Drzwi.danePodstawowe)
      .then((pobrane: DanePodstawowe) => {
        Object.assign(this.danePodstawowe, pobrane);
        this.danePodstawoweObservable.next(this.danePodstawowe);
      })
      .catch((niepobrane) => {
      });
  }
}
