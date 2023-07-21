import {Injectable} from '@angular/core';
import {ListonoszService} from "./listonosz.service";
import {Drzwi} from "../enum/drzwi";
import {KomunikatyService} from "./komunikaty.service";
import {BledyNumery} from "../enum/bledy-numery";
import {DanePodreczneClass} from "../klasy/panelPracownika/dane-podreczne";

@Injectable({
  providedIn: 'root'
})
export class PodreczneDaneService {
  public danePodreczneObiekt = new DanePodreczneClass();
  public losowaLiczba = Math.round(Math.random() * 100000000)


  wygenerujNowaLiczbeLosowaDlaZdjec() {
    this.losowaLiczba += 1
  }

  constructor(private listonosz: ListonoszService,
              private komunikaty: KomunikatyService) {
  }

  public pobierajaca() {
    this.listonosz.pobierz(Drzwi.podreczneDanePobierz).then(dane => {
      Object.assign(this.danePodreczneObiekt, dane)
    }).catch(nieudane => {
      this.komunikaty.wyswietlenieBladNumer(BledyNumery.BladWyswietlaniaDanychPodrecznych);
    })
  }
}
