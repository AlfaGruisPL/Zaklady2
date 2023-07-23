import {Injectable} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {Wizyta} from "../../../../klasy/panelPracownika/wizyta";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HarmonogramService {
  wizytyDzis: Array<Wizyta> = []
  wizytaDzisObserveble = new BehaviorSubject<Array<Wizyta>>(this.wizytyDzis)

  constructor(private listonosz: ListonoszService) {
  }

  pobierzWizytyDzis() {
    this.listonosz.pobierz(Drzwi.wizytyDzis).then((wizyty: Array<Wizyta>) => {
      this.wizytyDzis = []
      wizyty.forEach(k => {
        const wizytaObj = new Wizyta(k)
        this.wizytyDzis.push(wizytaObj)
      })
      this.wizytaDzisObserveble.next(this.wizytyDzis)
    })
  }
}
