import {Injectable, OnInit} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {Powiadomienie} from "../../../../klasy/panelPracownika/powiadomienie";
import {KomunikatyService} from "../../../../serwisy/komunikaty.service";
import {TokenService} from "../../../../serwisy/token.service";

@Injectable({
  providedIn: 'root'
})
export class PowiadomieniaService implements OnInit {
  powiadomieniaZakladu: Powiadomienie[] = []
  powiadomieniaUzytkownika: Powiadomienie[] = []

  powiadomieniaPierwszyRaz = false;
  powiadomieniaPierwszyRazUzytkownika = false;


  constructor(private listonosz: ListonoszService, private komunikaty_: KomunikatyService, private token_: TokenService) {
  }

  ngOnInit() {
    this.token_.czyWlasciciel()
  }

  private powiadomieniaInteral: any;

  zatrzymajPobieraniePowiadomien() {
    clearInterval(this.powiadomieniaInteral)
  }

  async pobierzPowiadomienia() {

    await this.pobierzPowiadomieniaInterval()
    this.powiadomieniaInteral = setInterval(async () => {
      await this.pobierzPowiadomieniaInterval()
    }, 15000)
  }

  private async pobierzPowiadomieniaInterval() {
    if (this.token_.czyWlasciciel()) {
      try {
        const wynik = await this.listonosz.pobierz(Drzwi.listaPowiadomienDlaZakladu)
        if (JSON.stringify(this.powiadomieniaZakladu) != JSON.stringify(wynik)) {
          if (this.powiadomieniaPierwszyRaz) {
            this.komunikaty_.nowePowiadomienia()
          }
          this.powiadomieniaPierwszyRaz = true
          this.powiadomieniaZakladu = wynik;
        }
      } catch (error) {
        console.warn("Błąd pobierania powiadomień dla administratora ", error)
      }
    }

    try {
      const wynik = await this.listonosz.pobierz(Drzwi.listaPowiadomienDlaUzytkownika)
      if (JSON.stringify(this.powiadomieniaUzytkownika) != JSON.stringify(wynik)) {
        if (this.powiadomieniaPierwszyRazUzytkownika) {
          this.komunikaty_.nowePowiadomienia()
        }
        this.powiadomieniaPierwszyRazUzytkownika = true
        this.powiadomieniaUzytkownika = wynik;
      }
    } catch (error) {
      console.warn("Błąd pobierania powiadomień dla uzytkownika ", error)
    }
  }

  public usunPowiadomienieZakladu(powiadomienie: Powiadomienie) {
    powiadomienie.usuniete = true
    setTimeout(() => {
      this.powiadomieniaZakladu = this.powiadomieniaZakladu.filter(k => k.id != powiadomienie.id)
    }, 500)
    this.listonosz.usun(Drzwi.listaPowiadomienUsunPowiadomienie + powiadomienie.id).then(k => {

    }).catch(error => {

    })
  }

  nieOdczytanePowiadomieniaZakladu() {
    return this.powiadomieniaZakladu.filter(k => !k.odczytane)
  }

  nieUsunietePowiadomieniaZakladu() {
    return this.powiadomieniaZakladu.filter(k => !k.usuniete)
  }

  public odczytajPowiadomienieZakladu(powiadomienie: Powiadomienie) {
    powiadomienie.odczytane = true
    this.listonosz.usun(Drzwi.listaPowiadomienOdczytajPowiadomienie + powiadomienie.id).then(k => {

    }).catch(error => {

    })
  }


  public usunPowiadomienieUzytkownika(powiadomienie: Powiadomienie) {
    powiadomienie.usuniete = true
    setTimeout(() => {
      this.powiadomieniaUzytkownika = this.powiadomieniaUzytkownika.filter(k => k.id != powiadomienie.id)
    }, 500)
    this.listonosz.usun(Drzwi.listaPowiadomienUzytkownikaUsunPowiadomienie + powiadomienie.id).then(k => {

    }).catch(error => {

    })
  }

  nieOdczytanePowiadomieniaUzytkownika() {
    return this.powiadomieniaUzytkownika.filter(k => !k.odczytane)
  }

  nieUsunietePowiadomieniaUzytkownika() {
    return this.powiadomieniaUzytkownika.filter(k => !k.usuniete)
  }

  public odczytajPowiadomienieUzytkownika(powiadomienie: Powiadomienie) {
    powiadomienie.odczytane = true
    this.listonosz.usun(Drzwi.listaPowiadomienUzytkownikaOdczytajPowiadomienie + powiadomienie.id).then(k => {

    }).catch(error => {

    })
  }
}
