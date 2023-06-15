import {Component, OnInit} from '@angular/core';
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
export class PlatnosciPracownikaComponent implements OnInit {
  public dane: InformacjeDoPaneluPlatnosci = new InformacjeDoPaneluPlatnosci()

  constructor(private listonosz: ListonoszService, private komunikaty: KomunikatyService) {
  }

  ngOnInit() {
    this.pobierz()
  }

  pobierz() {
    this.listonosz.pobierz(Drzwi.informacjeDoPaneluPlatnosci).then(pobrane => {
      Object.assign(this.dane, pobrane)
    }).catch(error => {
      this.komunikaty.wyswietlenieBladNumer(BledyNumery.NiePobierajaSieDajeWPlatnosci)
    })
  }
}
