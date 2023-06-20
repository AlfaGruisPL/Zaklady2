import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {BledyNumery} from "../../../../enum/bledy-numery";
import {InformacjeDoPaneluPlatnosci} from "../../../../klasy/panelPracownika/platnosci/informacje-do-panelu-platnosci";

@Component({
  selector: 'app-platnosci-pracownika',
  templateUrl: './platnosci-pracownika.component.html',
  styleUrls: ['./platnosci-pracownika.component.scss']
})
export class PlatnosciPracownikaComponent implements OnInit, OnDestroy {
  public dane: InformacjeDoPaneluPlatnosci = new InformacjeDoPaneluPlatnosci()

  constructor(private listonosz: ListonoszService, private komunikaty: KomunikatyService) {
  }

  private timer: any;

  ngOnInit() {
    this.pobierz()
    this.timer = setInterval(() => {
      this.pobierz()
    }, 10000)
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }

  pobierz() {
    this.listonosz.pobierz(Drzwi.informacjeDoPaneluPlatnosci).then(pobrane => {
      Object.assign(this.dane, pobrane)
      console.log(this.dane)
    }).catch(error => {
      this.komunikaty.wyswietlenieBladNumer(BledyNumery.NiePobierajaSieDajeWPlatnosci)
    })
  }
}
