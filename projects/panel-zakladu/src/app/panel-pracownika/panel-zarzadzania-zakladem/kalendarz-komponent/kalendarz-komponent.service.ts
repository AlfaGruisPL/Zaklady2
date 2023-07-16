import {Injectable} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {KalendarzPrzerwaComponent} from "./kalendarz-przerwa/kalendarz-przerwa.component";
import {
  DzienTygodnia
} from "../../../../../../reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/dzien-tygodnia";

@Injectable({
  providedIn: 'root'
})
export class KalendarzKomponentService {
  public godzinaRozpoczecia = 6;

  constructor(private modal: NgbModal,) {
  }

  public nowaPrzerwa(dzien: DzienTygodnia, index: number) {
    const okno = this.modal.open(KalendarzPrzerwaComponent)
    const godzina = Number(this.godzina(index).split(":")[0])
    const minuta = Number(this.godzina(index).split(":")[1])
    const rozpoczecie = new Date(new Date().setHours(godzina, minuta))
    const zakonczenie = new Date(new Date().setHours(godzina, minuta + 30))
    okno.componentInstance.godzinaRozpoczecia = rozpoczecie
    okno.componentInstance.godzinaZakonczenia = zakonczenie
    console.log(dzien.dzien + '/ ' + index + ' / ' + this.godzina(index))
  }

  public nowaWizyta(dzien: DzienTygodnia, index: number) {

  }

  public godzina(index: number) {
    const data = new Date()
    data.setUTCHours(this.godzinaRozpoczecia, 0, 0, 0);
    const k = new Date(data.getTime() + (index * 60000 * 30))
    const godzina = k.getHours() < 10 ? '0' + k.getHours() : k.getHours();
    const minuta = k.getMinutes() < 10 ? '0' + k.getMinutes() : k.getMinutes();
    return godzina + ":" + minuta
  }
}
