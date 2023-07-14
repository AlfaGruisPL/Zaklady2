import {Component, OnDestroy, OnInit} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {BledyNumery} from "../../../../enum/bledy-numery";
import {InformacjeDoPaneluPlatnosci} from "../../../../klasy/panelPracownika/platnosci/informacje-do-panelu-platnosci";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-platnosci-pracownika',
  templateUrl: './platnosci-pracownika.component.html',
  styleUrls: ['./platnosci-pracownika.component.scss']
})
export class PlatnosciPracownikaComponent implements OnInit, OnDestroy {
  public dane: InformacjeDoPaneluPlatnosci = new InformacjeDoPaneluPlatnosci()

  constructor(
    private listonosz: ListonoszService,
    private komunikaty: KomunikatyService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  private timer: any;
  private paymentId = ''
  private paymentStatus = ''

  ngOnInit() {
    this.route.queryParams.subscribe(k => {
      if (k['paymentId'] != undefined && k['paymentStatus']) {
        this.paymentId = k['paymentId'];
        this.paymentStatus = k['paymentStatus'];

        alert('Twoja płatność została zakończona, trwa przetwarzanie płatności. Proces ten może zająć kilka minut')
        this.router.navigate([], {
          queryParams: {
            'paymentId': null,
            'paymentStatus': null,
          },
          queryParamsHandling: 'merge'
        })
      }

    })
    this.pobierz()
    this.timer = setInterval(() => {
      this.pobierz()
    }, 10000)
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }

  pobierz() {
    this.listonosz.pobierz(Drzwi.informacjeDoPaneluPlatnosci).then(pobrane => {
      Object.assign(this.dane, pobrane)
    }).catch(error => {
      this.komunikaty.wyswietlenieBladNumer(BledyNumery.NiePobierajaSieDajeWPlatnosci)
    })
  }
}
