import {Component, OnDestroy, OnInit} from '@angular/core';
import {HarmonogramService} from "./harmonogram.service";

@Component({
  selector: 'app-harmonogram-pracownika',
  templateUrl: './harmonogram-pracownika.component.html',
  styleUrls: ['./harmonogram-pracownika.component.scss']
})
export class HarmonogramPracownikaComponent implements OnInit, OnDestroy {
  constructor(private harmonogram_: HarmonogramService) {
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
