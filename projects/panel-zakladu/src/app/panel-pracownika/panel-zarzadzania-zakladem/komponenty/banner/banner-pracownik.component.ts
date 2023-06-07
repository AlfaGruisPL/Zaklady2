import {Component} from '@angular/core';
import {FontAwesomeService} from "../../../../serwisy/font-awesome.service";
import {Router} from "@angular/router";
import {PodreczneDaneService} from "../../../../serwisy/podreczne-dane.service";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {ListonoszService} from "../../../../serwisy/listonosz.service";

@Component({
  selector: 'app-banner-pracownik',
  templateUrl: './banner-pracownik.component.html',
  styleUrls: ['./banner-pracownik.component.scss']
})
export class BannerPracownikComponent {
  constructor(public fontAwesome: FontAwesomeService,
              private Router: Router,
              public DanePodreczne: PodreczneDaneService,
              public komunikaty: KomunikatyService, private listonosz: ListonoszService) {
  }

  public wyloguj() {
    this.listonosz.wyloguj().then(k => {
      this.komunikaty.wylogowanieUdane();
    }).catch(k => {
      this.komunikaty.wylogowanieNieUdane();
    }).finally(() => {
      this.Router.navigate(['']);
    })

  }

}
