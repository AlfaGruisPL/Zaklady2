import {Component, OnInit} from '@angular/core';
import {ZarejestrujSieService} from './komponenty/formularz-zarejestruj-sie/zarejestrujSie.service';
import {DanePodstawoweService} from '../serwisy/dane-podstawowe.service';

@Component({
  selector: 'app-one-page-strona',
  templateUrl: './one-page-strona.component.html',
  styleUrls: ['./one-page-strona.component.scss'],
})
export class OnePageStronaComponent implements OnInit {
  constructor(
    public zarejestrujSie: ZarejestrujSieService,
    public danePodstawowe: DanePodstawoweService
  ) {
  }

  ngOnInit() {


    this.danePodstawowe.pobieranieDanychPodstawowych();
  }
}
