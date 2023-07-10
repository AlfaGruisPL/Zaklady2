import {Component} from '@angular/core';

import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {RejestracjaZakladu, RejestracjaZakladuDTO} from "../../../klasy/rejestracja-zakladu";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {Location} from "@angular/common";
import {FontAwesomeService} from "../../../serwisy/font-awesome.service";

@Component({
  selector: 'app-rejestracja-zakladu',
  templateUrl: './rejestracja-zakladu.component.html',
  styleUrls: ['./rejestracja-zakladu.component.scss']
})
export class RejestracjaZakladuComponent {
  public daneRejestracji = new RejestracjaZakladu();
  public podgladWlaczJeden: boolean = true;
  public podgladWlaczDwa: boolean = true;
  public rejestracjaUdana = false;
  public czyMiasto = 0

  constructor(
    public fontAwesome: FontAwesomeService,
    private listonosz: ListonoszService,
    private komunikat: ToastrService,
    private Router: Router,
    private location: Location
  ) {
  }

  public zarejestruj() {
    this.daneRejestracji.hasloSpelniaWymagania = true
    this.daneRejestracji.czyHaslaTakieSame_ = true
    var czyHaslaTakieSame = this.daneRejestracji.czyHaslaTakieSame();
    var czyDaneDobre = this.daneRejestracji.czyWszystkiePolaUzupelnione();
    var czywalidacjadobra = this.daneRejestracji.czyDanePoprawne()
    if (!czyDaneDobre || !czyHaslaTakieSame) {
      return
    }
    if (!this.daneRejestracji.walidacjaHasla()) {
      return
    }
    if (czyDaneDobre && czyHaslaTakieSame && czywalidacjadobra && this.daneRejestracji.hasloSpelniaWymagania) {

      this.daneRejestracji.emailWykorzystany = false;
      this.daneRejestracji.nmumerTelefonuWykorzystany = false;
      this.daneRejestracji.rejestracjaUdana = true;
      const daneDTO = new RejestracjaZakladuDTO(this.daneRejestracji);
      this.daneRejestracji.przyciskAktywny = false
      this.listonosz.wyslij(Drzwi.dodajZaklad, daneDTO).then(k => {
        this.rejestracjaUdana = true;
      }).catch(error => {

        switch (error['error']['reasonCode']) {
          case 1:
          case 2:
            this.daneRejestracji.emailWykorzystany = true;
            break;

          case 3:
            this.daneRejestracji.nmumerTelefonuWykorzystany = true;
            break;

          default:
            this.daneRejestracji.rejestracjaUdana = false;
            break;
        }

      }).finally(() => {
        this.daneRejestracji.przyciskAktywny = true
      })
    }
  }

  public powrotOJedenKrok() {
    this.location.back();
  }
}
