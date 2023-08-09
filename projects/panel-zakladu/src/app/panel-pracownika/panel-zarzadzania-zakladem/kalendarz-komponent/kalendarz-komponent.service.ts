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
import {DzienWolny, DzienWolnyDto} from "../../../klasy/panelPracownika/kalendarz/DzienWolny";
import {KomunikatyService} from "../../../serwisy/komunikaty.service";
import {Udane} from "../../../enum/udane";
import {
  KalendarzModyfikacjaTerminuComponent
} from "./kalendarz-modyfikacja-terminu/kalendarz-modyfikacja-terminu.component";
import {TokenService} from "../../../serwisy/token.service";

@Injectable({
  providedIn: 'root'
})
export class KalendarzKomponentService {
  public godzinaRozpoczecia = 88;
  public godzinaZakonczenia = 0
  wizyty: Array<Wizyta> = []
  godzinyOtwarcia: GodzinyOtwarcia = new GodzinyOtwarcia();
  wlasciciel = new Pracownik()
  zalogowanyUzytkownikId = 0
  pracownicy: Partial<Pracownik>[] = []
  wybranyPracownik = -1
  dniWolne: Array<DzienWolny> = []
  przerwyZakladu: Array<Przerwa> = []

  constructor(private modal: NgbModal, private token_: TokenService, private listonosz: ListonoszService, private komunikaty_: KomunikatyService) {
  }

  public pobierzPodstawoweDane() {
    this.listonosz.pobierz(Drzwi.zarejestrowaneWizytyTerminy)
      .then((k: {
        godzinyOtwarcia: GodzinyOtwarcia,
        pracownicy: Pracownik[],
        wlasciciel: number,
        zalogowanyUzytkownik: number,
        przerwyZakladu: Przerwa[]
      }) => {
        Object.assign(this.wlasciciel, k.wlasciciel)
        if (this.pracownicy.length == 0) {
          k.pracownicy.forEach(pracownik => {
            const pracownikObj = new Pracownik()
            Object.assign(pracownikObj, pracownik)
            this.pracownicy.push(pracownikObj)
          })
        }
        this.zalogowanyUzytkownikId = k.zalogowanyUzytkownik


        this.wybranyPracownik = this.zalogowanyUzytkownikId
        Object.assign(this.godzinyOtwarcia, k.godzinyOtwarcia)
        this.ObliczGodziny()
        this.pobierzDane()
      })

    this.listonosz.pobierz(Drzwi.kalendarzTerminowDniWolneIPrzerwyZakladu).then(dane => {
      this.przerwyZakladu = []
      this.dniWolne = []
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
    const dzienWolnyDTO = new DzienWolnyDto({})
    dzienWolnyDTO.data = new Date(dzien.data)
    dzienWolnyDTO.regularne = false
    this.listonosz.wyslij(Drzwi.kalendarzOznaczJakoDzienWolny, dzienWolnyDTO).then(udane => {
      this.komunikaty_.komunikatUdane(Udane.oznaczJakoDzienWolny)
    }).catch(error => {
      this.komunikaty_.modyfikacjaNieUdana()
    }).finally(() => {
      this.pobierzPodstawoweDane()
    })
  }

  oznaczJakoDzienPracy(dzien: DzienTygodnia) {
    const dzienWolnyDTO = new DzienWolnyDto({})
    dzienWolnyDTO.data = new Date(dzien.data)
    this.listonosz.wyslij(Drzwi.kalendarzOznaczJakoDzienPracy, dzienWolnyDTO).then(udane => {
      this.komunikaty_.komunikatUdane(Udane.oznaczJakoDzienPracy)
    }).catch(error => {
      this.komunikaty_.modyfikacjaNieUdana()
    }).finally(() => {
      this.pobierzPodstawoweDane()
    })
  }

  public nowaWizyta(dzien: DzienTygodnia, index: number) {
    if (this.zalogowanyUzytkownikId != this.wybranyPracownik && !this.token_.czyWlasciciel()) {
      this.komunikaty_.nieMaszUprawnienDoDodaniaWizyty()
      return
    }
    const okno = this.modal.open(KalendarzModyfikacjaTerminuComponent, {
      size: 'lg',
      backdrop: 'static'
    })
    const k = dzien.data;
    const miesiac = (k.getMonth() + 1) < 10 ? '0' + (k.getMonth() + 1) : (k.getMonth() + 1);
    const dzien2 = k.getDate() < 10 ? '0' + k.getDate() : k.getDate();
    const termin = dzien.data.getFullYear() + '-' + miesiac + "-" + dzien2

    okno.componentInstance.formualrzRejestracjiWizyty.patchValue(
      {
        termin: termin, poczatek: this.godzina(index),
        koniec: this.godzina(index + 2)
      })
    okno.closed.subscribe(k => {
      this.pobierzDane()
    })
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
