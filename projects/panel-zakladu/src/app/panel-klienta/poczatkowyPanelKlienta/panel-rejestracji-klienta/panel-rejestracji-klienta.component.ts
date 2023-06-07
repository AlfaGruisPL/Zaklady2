import {Component} from '@angular/core';
import {FontAwesomeService} from "../../../serwisy/font-awesome.service";
import {Location} from "@angular/common";
import {RejestracjaKlienta} from "../../../klasy/klasyKlienta/rejestracja-klienta";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {RejestracjaKlientaDTO} from "../../../klasy/klasyKlienta/rejestracja-klienta-dto";
import {Drzwi} from "../../../enum/drzwi";


@Component({
  selector: 'app-panel-rejestracji-klienta',
  templateUrl: './panel-rejestracji-klienta.component.html',
  styleUrls: ['./panel-rejestracji-klienta.component.scss']
})
export class PanelRejestracjiKlientaComponent {
  public rejestracjaKlienta = new RejestracjaKlienta();
  public rejestracjaUdana: boolean = false;
  public rejestracjaUdanaKomunikat: boolean = true;

  constructor(public fontAwesome: FontAwesomeService,
              public location: Location,
              public listonosz: ListonoszService) {
  }

  public powrotOJedenKrok() {
    this.location.back();
  }

  public zarejestruj(): void {

    this.rejestracjaKlienta.czyWszystkieDaneSaWpisane()
    this.rejestracjaKlienta.czyDanePoprawne()
    if (this.rejestracjaKlienta.czyHaslaPuste()) return
    if (!this.rejestracjaKlienta.czyHaslaSaTakieSame()) return
    if (!this.rejestracjaKlienta.czyDwaHaslaWpisaneFunkcja()) return
    if (!this.rejestracjaKlienta.czyHaslaSpelniajaWymaganiaFunkcja()) return

    if (this.rejestracjaKlienta.czyHaslaTakieSame && this.rejestracjaKlienta.czyHaslaSpelniajaWymagania
      && this.rejestracjaKlienta.czyHaslaTakieSame && this.rejestracjaKlienta.czyDwaHaslaWpisane) {
      const daneDTO = new RejestracjaKlientaDTO(this.rejestracjaKlienta);
      this.rejestracjaKlienta.daneWTrakcieWysylania = true;
      this.rejestracjaUdanaKomunikat = true
      this.listonosz.wyslij(Drzwi.rejestracjaKlienta, daneDTO).then(udane => {
        this.rejestracjaUdana = true;
      }).catch(Nieudane => {
        this.rejestracjaKlienta.emailJuzZajestrowanyKomunikat = false
        this.rejestracjaKlienta.numerTelefonuZarejestrowanyKomunikat = false
        switch (Nieudane['error']['reasonCode']) {
          case 1:
            this.rejestracjaKlienta.emailJuzZajestrowanyKomunikat = true
            break;
          case 2:
            this.rejestracjaKlienta.numerTelefonuZarejestrowanyKomunikat = true
            break;
          default:
            this.rejestracjaUdanaKomunikat = false;
            break;
        }
        this.rejestracjaUdana = false;

      }).finally(() => {

        this.rejestracjaKlienta.daneWTrakcieWysylania = false;
      })
    }

  }

}
