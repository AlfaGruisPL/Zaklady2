import {Component, OnInit} from '@angular/core';
import {FontAwesomeService} from "../../serwisy/font-awesome.service";
import {Router} from "@angular/router";
import {PodreczneDaneService} from "../../serwisy/podreczne-dane.service";

@Component({
  selector: 'app-panel-zarzadzania-zakladem',
  templateUrl: './panel-zarzadzania-zakladem.component.html',
  styleUrls: ['./panel-zarzadzania-zakladem.component.scss']
})
export class PanelZarzadzaniaZaklademComponent implements OnInit {
  constructor(public fontAwesome: FontAwesomeService, public DanePodreczne: PodreczneDaneService,
              private Router: Router) {
  }

  ngOnInit() {
    this.DanePodreczne.pobierajaca();
  }
}
