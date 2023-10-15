import { Component, OnInit } from '@angular/core';
import { ZarejestrujSieService } from './komponenty/formularz-zarejestruj-sie/zarejestrujSie.service';
import { DanePodstawoweService } from '../serwisy/dane-podstawowe.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-one-page-strona',
  templateUrl: './one-page-strona.component.html',
  styleUrls: ['./one-page-strona.component.scss'],
})
export class OnePageStronaComponent implements OnInit {
  env = environment;
  odwolanieWIzyty = false;
  kodOdwolania = '';

  constructor(
    public zarejestrujSie: ZarejestrujSieService,
    public danePodstawowe: DanePodstawoweService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['odwolanieWizyty'] != undefined) {
        this.kodOdwolania = params['odwolanieWizyty'];
        this.odwolanieWIzyty = true;
      } else {
        this.odwolanieWIzyty = false;
      }
      // Tutaj możesz wykonać dalsze operacje na zmiennej "odwolanie"
    });
    this.danePodstawowe.pobieranieDanychPodstawowych();
  }
}
