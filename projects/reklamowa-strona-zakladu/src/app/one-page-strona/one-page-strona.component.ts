import {Component, OnInit} from '@angular/core';
import {ZarejestrujSieService} from './komponenty/formularz-zarejestruj-sie/zarejestrujSie.service';
import {DanePodstawoweService} from '../serwisy/dane-podstawowe.service';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-one-page-strona',
    templateUrl: './one-page-strona.component.html',
    styleUrls: ['./one-page-strona.component.scss'],
})
export class OnePageStronaComponent implements OnInit {
    constructor(
        public zarejestrujSie: ZarejestrujSieService,
        public danePodstawowe: DanePodstawoweService,
        private route: ActivatedRoute
    ) {
    }

    odwolanieWIzyty = false
    kodOdwolania = ''

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['odwolanieWizyty'] != undefined) {
                this.kodOdwolania = params['odwolanieWizyty'];
                this.odwolanieWIzyty = true
            } else {
                this.odwolanieWIzyty = false
            }
            // Tutaj możesz wykonać dalsze operacje na zmiennej "odwolanie"
        });
        this.danePodstawowe.pobieranieDanychPodstawowych();
    }
}
