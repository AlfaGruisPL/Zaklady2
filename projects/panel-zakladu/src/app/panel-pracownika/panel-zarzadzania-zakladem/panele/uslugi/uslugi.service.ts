import { Injectable } from '@angular/core';
import { Usluga } from '../../../../klasy/panelPracownika/usluga/usluga';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../enum/drzwi';
import { KomunikatyService } from '../../../../serwisy/komunikaty.service';
import { Pracownik } from '../../../../klasy/panelPracownika/pracownicy/pracownik';

@Injectable({
  providedIn: 'root',
})
export class UslugiService {
  public listaUslug: Array<Usluga> = [new Usluga()];
  public pracownicy: Array<Pracownik> = [];
  public ladoowanieDanych = false;

  constructor(private listonosz: ListonoszService, public komunikat: KomunikatyService) {}

  public pobieranieDanych() {
    this.ladoowanieDanych = true;
    this.listonosz
      .pobierz(Drzwi.uslugiPanel)
      .then(dane => {
        this.saveFetchDataToVariable(dane);
        // Object.assign(this.listaUslug, dane['uslugi']);
        this.pracownicy = [];
        Object.assign(this.pracownicy, dane['pracownicy']);
      })
      .finally(() => {
        this.ladoowanieDanych = false;
      });
  }

  public zapisz() {
    //usunięcie pustych usług
    this.listaUslug = this.listaUslug.filter(usluga => {
      return usluga.title.length > 0;
    });
    this.listonosz
      .wyslij(Drzwi.uslugiPanel, this.listaUslug)
      .then(dane => {
        this.saveFetchDataToVariable(dane);
        this.komunikat.modyfikacjaUdana();
      })
      .catch(k => {
        this.komunikat.modyfikacjaNieUdana();
      })
      .finally(() => {
        // this.pobieranieDanych();
      });
  }

  private saveFetchDataToVariable(data: any) {
    this.listaUslug = [];
    data['uslugi'].forEach((k: any) => {
      const k2 = new Usluga();
      Object.assign(k2, k);
      this.listaUslug.push(k);
    });
  }
}
