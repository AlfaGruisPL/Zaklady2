import {Injectable} from '@angular/core';
import {ListonoszService} from "../../../../serwisy/listonosz.service";
import {Drzwi} from "../../../../enum/drzwi";
import {Powiadomienie} from "../../../../klasy/panelPracownika/powiadomienie";

@Injectable({
  providedIn: 'root'
})
export class PowiadomieniaService {
  powiadomienia: Powiadomienie[] = []

  constructor(private listonosz: ListonoszService) {
  }

  private powiadomieniaInteral: any;

  async pobierzPowiadomienia() {
    await this.pobierzPowiadomieniaInterval()
    this.powiadomieniaInteral = setInterval(async () => {
      await this.pobierzPowiadomieniaInterval()
    }, 15000)
  }

  private async pobierzPowiadomieniaInterval() {
    try {
      const wynik = await this.listonosz.pobierz(Drzwi.listaPowiadomienDlaZakladu)
      this.powiadomienia = wynik;
    } catch (error) {

    }
  }

  public usunPowiadomienie(powiadomienie: Powiadomienie) {
    powiadomienie.usuniete = true
    setTimeout(() => {
      this.powiadomienia = this.powiadomienia.filter(k => k.id != powiadomienie.id)
    }, 500)
    this.listonosz.usun(Drzwi.listaPowiadomienUsunPowiadomienie + powiadomienie.id).then(k => {

    }).catch(error => {

    })
  }

  nieOdczytanePowiadomienia() {
    return this.powiadomienia.filter(k => !k.odczytane)
  }

  nieUsunietePowiadomienia() {
    return this.powiadomienia.filter(k => !k.usuniete)
  }

  public odczytajPowiadomienie(powiadomienie: Powiadomienie) {
    powiadomienie.odczytane = true
    this.listonosz.usun(Drzwi.listaPowiadomienOdczytajPowiadomienie + powiadomienie.id).then(k => {

    }).catch(error => {

    })
  }
}
