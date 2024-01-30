import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeService } from '../../serwisy/font-awesome.service';
import { Router } from '@angular/router';
import { PodreczneDaneService } from '../../serwisy/podreczne-dane.service';
import { he } from 'suneditor/src/lang';

@Component({
  selector: 'app-panel-zarzadzania-zakladem',
  templateUrl: './panel-zarzadzania-zakladem.component.html',
  styleUrls: ['./panel-zarzadzania-zakladem.component.scss'],
})
export class PanelZarzadzaniaZaklademComponent implements OnInit, OnDestroy {
  godzina = new Date();
  public height = 0;
  protected readonly he = he;
  private godzinaInterval: any;

  constructor(
    public fontAwesome: FontAwesomeService,
    public DanePodreczne: PodreczneDaneService,
    private Router: Router
  ) {}

  ngOnInit() {
    this.godzinaInterval = setInterval(() => {
      this.godzina = new Date();
    }, 1000);
    this.DanePodreczne.pobierajaca();
    this.DanePodreczne.ustawZmienneTypuUzytkownika();
  }

  ngOnDestroy() {
    clearInterval(this.godzinaInterval);
  }
}
