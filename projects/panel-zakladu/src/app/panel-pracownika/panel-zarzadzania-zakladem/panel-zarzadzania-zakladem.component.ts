import {Component, OnDestroy, OnInit} from '@angular/core';
import {FontAwesomeService} from "../../serwisy/font-awesome.service";
import {Router} from "@angular/router";
import {PodreczneDaneService} from "../../serwisy/podreczne-dane.service";

@Component({
  selector: 'app-panel-zarzadzania-zakladem',
  templateUrl: './panel-zarzadzania-zakladem.component.html',
  styleUrls: ['./panel-zarzadzania-zakladem.component.scss']
})
export class PanelZarzadzaniaZaklademComponent implements OnInit, OnDestroy {
  godzina = new Date()
  private godzinaInterval: any;

  constructor(public fontAwesome: FontAwesomeService, public DanePodreczne: PodreczneDaneService,
              private Router: Router) {
  }

  ngOnInit() {
    this.godzinaInterval = setInterval(() => {
      this.godzina = new Date()
    }, 1000)
    this.DanePodreczne.pobierajaca();
    this.DanePodreczne.ustawZmienneTypuUzytkownika()


    setInterval(() => {
      const elementy = document.getElementsByClassName('BrakBialejRamkiPopOver')
      for (var k = 0; k < elementy.length; ++k) {
        // @ts-ignore
        elementy[k].parentElement.classList.add("BrakBialejRamkiPopOverRodzic");


      }
    }, 10)
  }

  ngOnDestroy() {
    clearInterval(this.godzinaInterval)
  }
}
