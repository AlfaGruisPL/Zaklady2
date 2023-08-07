import {Component, OnDestroy, OnInit} from '@angular/core';
import {HarmonogramService} from "./harmonogram.service";
import {PodreczneDaneService} from "../../../../serwisy/podreczne-dane.service";
import {TokenService} from "../../../../serwisy/token.service";

@Component({
  selector: 'app-harmonogram-pracownika',
  templateUrl: './harmonogram-pracownika.component.html',
  styleUrls: ['./harmonogram-pracownika.component.scss']
})
export class HarmonogramPracownikaComponent implements OnInit, OnDestroy {
  constructor(private harmonogram_: HarmonogramService, public podreczneDane_: PodreczneDaneService, public token_: TokenService) {
  }

  private interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.harmonogram_.pobierzWizytyDzis()
    }, 60 * 1000)
    this.harmonogram_.pobierzWizytyDzis()
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }
}
