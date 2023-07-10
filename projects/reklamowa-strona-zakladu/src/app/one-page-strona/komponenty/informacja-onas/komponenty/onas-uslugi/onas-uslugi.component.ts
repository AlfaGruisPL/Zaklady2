import {Component, OnDestroy, OnInit} from '@angular/core';
import {DanePodstawoweService} from '../../../../../serwisy/dane-podstawowe.service';
import {FaIconsService} from "../../../../../serwisy/fa-icons.service";

@Component({
  selector: 'app-onas-uslugi',
  templateUrl: './onas-uslugi.component.html',
  styleUrls: [
    './onas-uslugi.component.scss',
    '../../informacja-onas.component.scss',
  ],
})
export class ONasUslugiComponent implements OnInit, OnDestroy {
  public strona = 1;
  public max = 10
  public sub1: any;

  constructor(public danePodstawowe: DanePodstawoweService,
              public faIcons: FaIconsService) {
  }

  ngOnInit() {
    this.sub1 = this.danePodstawowe.danePodstawoweObservable.subscribe(k => {
      if (k.uslugi.length < 10) {
        this.max = k.uslugi.length
      }
    })
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  dlugosc(): number {
    return this.danePodstawowe.danePodstawowe.uslugi.length;
  }
}
