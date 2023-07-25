import {Injectable} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {KalendarzPrzerwaComponent} from "./kalendarz-przerwa/kalendarz-przerwa.component";
import {
  DzienTygodnia
} from "../../../../../../reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/dzien-tygodnia";
import {Drzwi} from "../../../enum/drzwi";
import {Wizyta} from "../../../klasy/panelPracownika/wizyta";
import {GodzinyOtwarcia} from "../../../klasy/panelPracownika/mojZaklad/moj-zaklad";
import {Pracownik} from "../../../klasy/panelPracownika/pracownicy/pracownik";
import {ListonoszService} from "../../../serwisy/listonosz.service";
import {Przerwa} from "../../../klasy/panelPracownika/kalendarz/przerwa.dto";
import {DzienWolny} from "../../../klasy/panelPracownika/kalendarz/DzienWolny";

@Injectable({
  providedIn: 'root'
})
export class KalendarzKomponentService {
  public godzinaRozpoczecia = 88;
  public godzinaZakonczenia = 0
  wizyty: Array<Wizyta> = []
  godzinyOtwarcia: GodzinyOtwarcia = new GodzinyOtwarcia();
  wlasciciel = new Pracownik()
  pracownicy: Partial<Pracownik>[] = []
  wybranyPracownik = -1
  dniWolne: Array<DzienWolny> = []
  przerwyZakladu: Array<Przerwa> = []

  constructor(private modal: NgbModal, private listonosz: ListonoszService) {
  }

  public pobierzPodstawoweDane() {
    this.listonosz.pobierz(Drzwi.zarejestrowaneWizytyTerminy)
      .then((k: { godzinyOtwarcia: GodzinyOtwarcia, pracownicy: Pracownik[], wlasciciel: number, przerwyZakladu: Przerwa[] }) => {
        Object.assign(this.wlasciciel, k.wlasciciel)
        if (this.pracownicy.length == 0) {
          k.pracownicy.forEach(pracownik => {
            const pracownikObj = new Pracownik()
            Object.assign(pracownikObj, pracownik)
            this.pracownicy.push(pracownikObj)
          })
        }


        this.wybranyPracownik = this.wlasciciel.id
        Object.assign(this.godzinyOtwarcia, k.godzinyOtwarcia)
        this.ObliczGodziny()
        this.pobierzDane()
      })

    this.listonosz.pobierz(Drzwi.kalendarzTerminowDniWolneIPrzerwyZakladu).then(dane => {
      dane['przerwy'].forEach((przerwa: any) => {
        const obj = new Przerwa(przerwa)
        this.przerwyZakladu.push(obj)
      })
      dane['dniWolne'].forEach((przerwa: any) => {
        const obj = new DzienWolny(przerwa)
        this.dniWolne.push(obj)
      })

    })


  }

  public pobierzDane() {
    this.listonosz.pobierz(Drzwi.zarejestrowaneWizytyDlaPracownika + '/' + this.wybranyPracownik)
      .then((k: { wizyty: Wizyta[] }) => {
        this.wizyty = []
        k.wizyty.forEach(wizyta => {
          const wizytaObj = new Wizyta(wizyta)
          this.wizyty.push(wizytaObj)
        })


      })
  }

  public nowaPrzerwa(dzien: DzienTygodnia, index: number | undefined) {
    const okno = this.modal.open(KalendarzPrzerwaComponent)
    if (index != null) {
      const godzina = Number(this.godzina(index).split(":")[0])
      const minuta = Number(this.godzina(index).split(":")[1])
      const rozpoczecie = new Date(new Date().setHours(godzina, minuta))
      const zakonczenie = new Date(new Date().setHours(godzina, minuta + 30))
      okno.componentInstance.godzinaRozpoczecia = rozpoczecie
      okno.componentInstance.godzinaZakonczenia = zakonczenie
    } else {
      okno.componentInstance.godzinaRozpoczecia = new Date()
      okno.componentInstance.godzinaZakonczenia = new Date()
    }

  }

  przerwyZakladuNaDzien(dzien: DzienTygodnia) {

    const tablica = this.przerwyZakladu.filter((przerwa) => {
      if (przerwa.poczatek.getDate() == dzien.data.getDate()) {
        if (przerwa.poczatek.getFullYear() == dzien.data.getFullYear()) {
          if (przerwa.poczatek.getMonth() == dzien.data.getMonth()) {
            return true;
          }
        }
      }
      return false;
    });
    return tablica;
  }

  public oznaczJakoDzienWolny(dzien: DzienTygodnia) {
  }


  public nowaWizyta(dzien: DzienTygodnia, index: number) {

  }

  public godzina(index: number) {
    const data = new Date()
    data.setHours(this.godzinaRozpoczecia, 0, 0, 0);
    const k = new Date(data.getTime() + (index * 60000 * 30))
    const godzina = k.getHours() < 10 ? '0' + k.getHours() : k.getHours();
    const minuta = k.getMinutes() < 10 ? '0' + k.getMinutes() : k.getMinutes();
    return godzina + ":" + minuta
  }


  private ObliczGodziny() {
    const tmp = this.godzinyOtwarcia;
    [tmp.poniedzialek, tmp.wtorek, tmp.sroda, tmp.czwartek, tmp.piatek, tmp.sobota, tmp.niedziela].forEach(dzien => {
      if (dzien.czynnyDzien) {
        const rozpoczenie = Number(dzien.otwarcie.split(':')[0])
        const zakonczenie = Number(dzien.zamkniecie.split(':')[0])
        this.godzinaRozpoczecia = rozpoczenie < this.godzinaRozpoczecia ? rozpoczenie : this.godzinaRozpoczecia
        this.godzinaZakonczenia = zakonczenie > this.godzinaZakonczenia ? zakonczenie : this.godzinaZakonczenia

      }
    })
    //this.godzinaRozpoczecia -= 1;
    this.godzinaZakonczenia -= this.godzinaRozpoczecia
    this.godzinaZakonczenia += 0.5;
  }

}
