import {Component, OnInit} from '@angular/core';
import {FontAwesomeService} from "../../../serwisy/font-awesome.service";
import {Location} from "@angular/common";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Drzwi} from "../../../enum/drzwi";
import {ActivatedRoute, Router} from "@angular/router";

// @ts-ignore
import passwordValidator from "password-validator";

@Component({
  selector: 'app-reset-hasla-pracownikow',
  templateUrl: './reset-hasla-pracownikow.component.html',
  styleUrls: ['./reset-hasla-pracownikow.component.scss']
})
export class ResetHaslaPracownikowComponent implements OnInit {
  public email: string = "";
  public krokPierwszyIndex = 4;
  public krokDrugiIndex = 3;
  public krokTrzeciIndex = 2;
  public krokCzwartyIndex = 1;

  public emailPusty = false;
  public emailNieIstnieje = false;


  public kod: string = "";
  public pustyKod = false;
  public nieprawidlowyKod = false;

  public haslo1: string = "";
  public haslo2: string = "";

  public haslo1Podglad = true
  public haslo2Podglad = true

  public niewpisaneHasla = false;
  public haslaRozne = false;

  public zmianaHaslaNieudana = false;
  public haslaNieSpelniajaWymagan = false;

  public KrokAktywny = 1;

  public czasKodu = -1;

  public przycisk1Disabled = false
  public takieSameHaslo = false
  public strzalka = false

  constructor(public fontAwesome: FontAwesomeService,
              private location: Location,
              private routing: ActivatedRoute,
              private listonosz: ListonoszService,
              private Router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    document.getElementById('Resetinput1').focus();
    this.routing.queryParams.subscribe(k => {
      this.strzalka = k['strzalka']
    });
  }

  private sterownikCzasu: any;

  public wyslijEmail() {
    clearInterval(this.sterownikCzasu)
    this.emailPusty = false;
    this.emailNieIstnieje = false;
    this.kod = "";
    if (this.email.length == 0) {
      this.emailPusty = true;
      return;
    } else {
      this.emailPusty = false;
    }
    this.przycisk1Disabled = true;
    this.listonosz.wyslij(Drzwi.resetHasla, {email: this.email}).then(udane => {
      this.KrokAktywny = 2;
      this.krokPierwszyIndex = 2;
      this.czasKodu = 300;
      // @ts-ignore
      document.getElementById('Resetinput2').focus();
      this.sterownikCzasu = setInterval(() => {

        if (this.czasKodu >= 1) {
          this.czasKodu--;
        } else {
          clearInterval(this.sterownikCzasu)
        }
      }, 1000)
      this.przycisk1Disabled = false;
    }).catch(nieudane => {
      this.emailNieIstnieje = true;
      this.przycisk1Disabled = false;
    });

  }

  public wyslijKod() {
    this.pustyKod = false;
    this.nieprawidlowyKod = false;
    if (this.kod.length == 0) {
      this.pustyKod = true;
      return;
    } else {
      this.pustyKod = false;
    }
    this.listonosz.wyslij(Drzwi.resetHaslaKrok2, {kod: this.kod}).then(udane => {
      this.KrokAktywny = 3;
      this.krokPierwszyIndex = 0;
      this.krokDrugiIndex = 1;
      clearInterval(this.sterownikCzasu)
      // @ts-ignore
      // document.getElementById('Resetinput3').focus();

    }).catch(nieudane => {
      this.nieprawidlowyKod = true;
    });
  }

  public wyslijHaslo() {
    this.niewpisaneHasla = false;
    this.haslaRozne = false;
    this.zmianaHaslaNieudana = false;
    this.haslaNieSpelniajaWymagan = false;

    if (this.haslo1.length == 0 || this.haslo2.length == 0) {
      this.niewpisaneHasla = true;
      return;
    } else {
      this.niewpisaneHasla = false;
    }

    if (this.haslo1 != this.haslo2) {
      this.haslaRozne = true;
      return;
    } else {
      this.haslaRozne = false;
    }
    if (!this.walidacja()) {
      this.haslaNieSpelniajaWymagan = true;
      return;
    }
    this.takieSameHaslo = false
    this.listonosz.wyslij(Drzwi.resetHaslaKrok3, {haslo: this.haslo1, kod: this.kod}).then(udane => {
      this.KrokAktywny = 4;
      this.krokPierwszyIndex = 1;
      this.krokDrugiIndex = 2;
      this.krokTrzeciIndex = 3;
      this.krokCzwartyIndex = 4;
    }).catch(nieudane => {
      switch (nieudane['error']['reasonCode']) {
        case 3:
          this.takieSameHaslo = true
          break;
        default:
          this.zmianaHaslaNieudana = true;

      }
    })
  }

  public zakoncz() {
    if (this.Router.url.indexOf("zaklad") == -1) {
      this.Router.navigate(["rezerwacjaWizyt/logowanieKlienta"])
    } else {
      this.Router.navigate(['zaklad/logowanie'])
    }
  }

  public walidacja(): boolean {

    var schema = new passwordValidator();
    schema
      .is().min(8)
      .is().max(100)
      .has().uppercase()
      .has().lowercase()
      .has().digits(1)
      .has().not().spaces()
      .has().symbols(1)


    return <boolean>schema.validate(this.haslo1)
  }

  public powrotOJedenKrok() {
    this.location.back();
  }
}
