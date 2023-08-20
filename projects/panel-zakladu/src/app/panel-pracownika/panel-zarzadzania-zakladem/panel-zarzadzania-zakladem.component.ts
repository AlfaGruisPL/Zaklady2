import {Component, OnDestroy, OnInit} from '@angular/core';
import {FontAwesomeService} from '../../serwisy/font-awesome.service';
import {Router} from '@angular/router';
import {PodreczneDaneService} from '../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-panel-zarzadzania-zakladem',
  templateUrl: './panel-zarzadzania-zakladem.component.html',
  styleUrls: ['./panel-zarzadzania-zakladem.component.scss'],
})
export class PanelZarzadzaniaZaklademComponent implements OnInit, OnDestroy {
  godzina = new Date();
  private godzinaInterval: any;

  constructor(
    public fontAwesome: FontAwesomeService,
    public DanePodreczne: PodreczneDaneService,
    private Router: Router
  ) {
  }

  ngOnInit() {

    this.godzinaInterval = setInterval(() => {
      this.godzina = new Date();
    }, 1000);
    this.DanePodreczne.pobierajaca();
    this.DanePodreczne.ustawZmienneTypuUzytkownika();

    setInterval(() => {
      const elementy: HTMLCollectionOf<Element> | any = document.getElementsByClassName('BrakBialejRamkiPopOver');
      for (var k = 0; k < elementy.length; ++k) {
        elementy[k].parentElement.classList.add('BrakBialejRamkiPopOverRodzic');
      }
    }, 10);
  }

  private heightLast = 0;

  setHeight(height: number) {
    setInterval(() => {
      this.heightLast = height;
    }, 1);
    return this.heightLast;
  }

  ngOnDestroy() {
    clearInterval(this.godzinaInterval);
  }
}
