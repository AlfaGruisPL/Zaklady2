import {Component} from '@angular/core';
import {LogowanieKlienta} from "../../../klasy/klasyKlienta/logowanie-klienta";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {Router} from "@angular/router";
import {FontAwesomeService} from "../../../serwisy/font-awesome.service";

@Component({
  selector: 'app-panel-logowania-klienta',
  templateUrl: './panel-logowania-klienta.component.html',
  styleUrls: ['./panel-logowania-klienta.component.scss']
})
export class PanelLogowaniaKlientaComponent {
  public podgladWlaczWylacz: boolean = true;

  constructor(private listonosz: ListonoszService,
              public Router: Router,
              public fontAwesome: FontAwesomeService) {
  }

  public obiektLogowanieKlienta = new LogowanieKlienta();

  public logowanie() {
    this.obiektLogowanieKlienta.czyPrawidloweDane = true
    this.obiektLogowanieKlienta.czyWolnoLogowac = true;
    this.obiektLogowanieKlienta.czyKontoPotwierdzone = true;
    this.obiektLogowanieKlienta.nieznanyBlad = false;
    this.obiektLogowanieKlienta.funkcje();
    if (this.obiektLogowanieKlienta.czyDaneGotoweDoWyslaniaFunkcja()) {
      this.listonosz.wyslij(Drzwi.logowanieKlienta, {
        email: this.obiektLogowanieKlienta.email,
        haslo: this.obiektLogowanieKlienta.haslo
      }).then(prawidloweDane => {
        this.Router.navigate(["rezerwacjaWizyt/rejestracjaKlienta"]);
      }).catch(niePrawidloweDane => {
        if (niePrawidloweDane['error']['reasonCode'] == 3) {
          this.obiektLogowanieKlienta.czyWolnoLogowac = false;
        } else if (niePrawidloweDane['error']['reasonCode'] == 4) {
          this.obiektLogowanieKlienta.czyKontoPotwierdzone = false;
        } else {
          this.obiektLogowanieKlienta.nieznanyBlad = true;

        }
      })
    } else {

    }
  }
}


