import {Component, OnInit} from '@angular/core';
import {FontAwesomeService} from "../../../../serwisy/font-awesome.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PodreczneDaneService} from "../../../../serwisy/podreczne-dane.service";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {PowiadomieniaService} from "./powiadomienia.service";

@Component({
  selector: 'app-banner-pracownik',
  templateUrl: './banner-pracownik.component.html',
  styleUrls: ['./banner-pracownik.component.scss']
})
export class BannerPracownikComponent implements OnInit {
  constructor(public fontAwesome: FontAwesomeService,
              private Router: Router,
              private route: ActivatedRoute,
              public DanePodreczne: PodreczneDaneService,
              public powiadomienia_: PowiadomieniaService,
              public komunikaty: KomunikatyService,
              private listonosz: ListonoszService) {
  }

  losowaLiczba = Math.round(Math.random() * 100)

  async ngOnInit() {
    await this.powiadomienia_.pobierzPowiadomienia()

  }


  public wyloguj() {
    this.listonosz.wyloguj().then(k => {
      this.komunikaty.wylogowanieUdane();
    }).catch(k => {
      this.komunikaty.wylogowanieNieUdane();
    }).finally(() => {
      const identyfikator = this.route.snapshot.paramMap.get('identyfikator');
      this.Router.navigate([identyfikator + '']);
    })

  }

  zamkniecie(event: any, popover: any) {
    var znaleziono = false;
    var tmp = event.target
    var ikonka = tmp.tagName == 'path'
    if (tmp.className == 'iloscPowiadomien') {
      ikonka = true
    }
    for (let k = 0; k < 15; k++) {
      if (tmp != undefined) {


        if (tmp.localName == 'ngb-popover-window') {
          znaleziono = true
          console.log(1)
        }
        tmp = tmp.parentElement
      }
    }
    if (!znaleziono && !ikonka) {
      popover.close()
    }
  }

  UsunWszystko() {
    this.powiadomienia_.powiadomienia.forEach(powiadomienie => {
      this.powiadomienia_.usunPowiadomienie(powiadomienie)
    })
  }

  PrzeczytajWszystko() {
    this.powiadomienia_.powiadomienia.forEach(powiadomienie => {
      this.powiadomienia_.odczytajPowiadomienie(powiadomienie)
    })
  }

}
