import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { KalendarzPrzerwaComponent } from './kalendarz-przerwa/kalendarz-przerwa.component';

import { Drzwi } from '../../../enum/drzwi';
import { Wizyta } from '../../../klasy/panelPracownika/wizyta';
import { GodzinyOtwarcia } from '../../../klasy/panelPracownika/mojZaklad/moj-zaklad';
import { Pracownik } from '../../../klasy/panelPracownika/pracownicy/pracownik';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { Przerwa } from '../../../klasy/panelPracownika/kalendarz/przerwa.dto';
import { DzienWolny, DzienWolnyDto } from '../../../klasy/panelPracownika/kalendarz/DzienWolny';
import { KomunikatyService } from '../../../serwisy/komunikaty.service';
import { Udane } from '../../../enum/udane';
import { KalendarzModyfikacjaTerminuComponent } from './kalendarz-modyfikacja-terminu/kalendarz-modyfikacja-terminu.component';
import { TokenService } from '../../../serwisy/token.service';
import { HttpParams } from '@angular/common/http';
import { dniTygodnia, DzienTygodnia } from './dzien-tygodnia';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KalendarzKomponentService {
  public godzinaRozpoczecia = 88;
  public godzinaZakonczenia = 0;
  wizyty: Array<Wizyta> = [];
  godzinyOtwarcia: GodzinyOtwarcia = new GodzinyOtwarcia();
  wlasciciel = new Pracownik();
  zalogowanyUzytkownikId = 0;
  pracownicy: Partial<Pracownik>[] = [];
  wybranyPracownik = new BehaviorSubject<number>(-1);
  dniWolnePracownika: Array<DzienWolny> = [];
  przerwyPracownika: Array<Przerwa> = [];
  dniWolneZakladu: Array<DzienWolny> = [];
  przerwyZakladu: Array<Przerwa> = [];
  kursor = new Date();
  loadingData = false;
  dni = dniTygodnia;
  licznikPrzyciskow = 0;
  pobieranieDanychObservable = new Subject();
  public miesiace: string[] = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ];

  constructor(
    private modal: NgbModal,
    private token_: TokenService,
    private listonosz: ListonoszService,
    private komunikaty_: KomunikatyService
  ) {}

  public pobierzPodstawoweDane() {
    this.listonosz
      .pobierz(Drzwi.zarejestrowaneWizytyTerminy)
      .then(
        (k: {
          godzinyOtwarcia: GodzinyOtwarcia;
          pracownicy: Pracownik[];
          wlasciciel: number;
          zalogowanyUzytkownik: number;
          przerwyZakladu: Przerwa[];
        }) => {
          Object.assign(this.wlasciciel, k.wlasciciel);
          if (this.pracownicy.length == 0) {
            k.pracownicy.forEach(pracownik => {
              const pracownikObj = new Pracownik();
              Object.assign(pracownikObj, pracownik);
              this.pracownicy.push(pracownikObj);
            });
          }
          this.zalogowanyUzytkownikId = k.zalogowanyUzytkownik;

          this.wybranyPracownik.next(this.zalogowanyUzytkownikId);
          Object.assign(this.godzinyOtwarcia, k.godzinyOtwarcia);
          this.ObliczGodziny();
          this.pobierzDane();
        }
      );
  }

  public pobierzDane(silent = false) {
    if (!silent) this.pobieranieDanychObservable.next(null);
    this.loadingData = true;
    let params = new HttpParams();
    params = params.append('kursor', this.kursor.getTime());
    params = params.append('dotyczy', this.wybranyPracownik.value);
    const sub1 = this.listonosz
      .pobierz(Drzwi.zarejestrowaneWizytyDlaPracownika + '/' + this.wybranyPracownik.value, params)
      .then((k: { wizyty: Wizyta[] }) => {
        this.wizyty = [];
        k.wizyty.forEach(wizyta => {
          const wizytaObj = new Wizyta(wizyta);
          this.wizyty.push(wizytaObj);
        });
      });

    const sub2 = this.listonosz.pobierz(Drzwi.kalendarzTerminowDniWolneIPrzerwyZakladu, params).then(dane => {
      this.przerwyPracownika = [];
      this.dniWolnePracownika = [];
      this.przerwyZakladu = [];
      this.dniWolneZakladu = [];
      dane['przerwy'].forEach((przerwa: any) => {
        const obj = new Przerwa(przerwa);
        this.przerwyPracownika.push(obj);
      });
      dane['dniWolne'].forEach((przerwa: any) => {
        const obj = new DzienWolny(przerwa);
        this.dniWolnePracownika.push(obj);
      });
      dane['przerwyZakladu'].forEach((przerwa: any) => {
        const obj = new Przerwa(przerwa);
        this.przerwyZakladu.push(obj);
      });
      dane['wolneDniZakladu'].forEach((przerwa: any) => {
        const obj = new DzienWolny(przerwa);
        this.dniWolneZakladu.push(obj);
      });
    });

    Promise.all([sub1, sub2]).finally(() => {
      //  setTimeout(() => {
      this.loadingData = false;
      // }, 50);
    });
  }

  public nowaPrzerwa(dzien: DzienTygodnia, index: number | undefined) {
    const okno = this.modal.open(KalendarzPrzerwaComponent);
    if (index != null) {
      const godzina = Number(this.godzina(index).split(':')[0]);
      const minuta = Number(this.godzina(index).split(':')[1]);
      const rozpoczecie = new Date(new Date().setHours(godzina, minuta));
      const zakonczenie = new Date(new Date().setHours(godzina, minuta + 30));
      okno.componentInstance.godzinaRozpoczecia = rozpoczecie;
      okno.componentInstance.godzinaZakonczenia = zakonczenie;
      okno.componentInstance.data = dzien.data;
    } else {
      okno.componentInstance.godzinaRozpoczecia = new Date();
      okno.componentInstance.godzinaZakonczenia = new Date();
      okno.componentInstance.data = new Date();
    }
    let sub = okno.closed.subscribe(k => {
      this.pobierzDane();
      if (sub) sub.unsubscribe();
    });
  }

  //resetowanie danych przy zamykaniu kalendarza w celu zresetowania kursora i panelu sterowania
  resetdanych() {
    this.licznikPrzyciskow = 0;
    this.kursor = new Date();
    this.dni.forEach(k => {
      k.data = new Date(this.kursor);
      k.ustawDate();
    });
  }

  przerwyNaDzien(dzien: DzienTygodnia, dane: Przerwa[]) {
    return dane.filter(przerwa => {
      if (przerwa.poczatek.getDate() == dzien.data.getDate()) {
        if (przerwa.poczatek.getFullYear() == dzien.data.getFullYear()) {
          if (przerwa.poczatek.getMonth() == dzien.data.getMonth()) {
            return true;
          }
        }
      }
      return false;
    });
  }

  public oznaczJakoDzienWolny(dzien: DzienTygodnia) {
    const dzienWolnyDTO = new DzienWolnyDto({});
    dzienWolnyDTO.data = new Date(dzien.data);
    dzienWolnyDTO.regularne = false;
    this.listonosz
      .wyslij(Drzwi.kalendarzOznaczJakoDzienWolny, dzienWolnyDTO)
      .then(udane => {
        this.komunikaty_.komunikatUdane(Udane.oznaczJakoDzienWolny);
      })
      .catch(error => {
        this.komunikaty_.modyfikacjaNieUdana();
      })
      .finally(() => {
        this.pobierzPodstawoweDane();
      });
  }

  oznaczJakoDzienPracy(dzien: DzienTygodnia) {
    const dzienWolnyDTO = new DzienWolnyDto({});
    dzienWolnyDTO.data = new Date(dzien.data);
    this.listonosz
      .wyslij(Drzwi.kalendarzOznaczJakoDzienPracy, dzienWolnyDTO)
      .then(udane => {
        this.komunikaty_.komunikatUdane(Udane.oznaczJakoDzienPracy);
      })
      .catch(error => {
        this.komunikaty_.modyfikacjaNieUdana();
      })
      .finally(() => {
        this.pobierzPodstawoweDane();
      });
  }

  public nowaWizyta(dzien: DzienTygodnia, index: number) {
    if (this.zalogowanyUzytkownikId != this.wybranyPracownik.value && !this.token_.czyWlasciciel()) {
      this.komunikaty_.nieMaszUprawnienDoDodaniaWizyty();
      return;
    }
    const okno = this.modal.open(KalendarzModyfikacjaTerminuComponent, {
      size: 'lg',
      //todo: tu naprawić static, chodzi o to że jak jest static i kliknie się poza to on się nie zmniejsza i blokuje klikanie na całej stronie,i chyba hcodzi o browser aniamtion module
      //  backdrop: 'static',
    });
    const k = dzien.data;
    const miesiac = k.getMonth() + 1 < 10 ? '0' + (k.getMonth() + 1) : k.getMonth() + 1;
    const dzien2 = k.getDate() < 10 ? '0' + k.getDate() : k.getDate();
    const termin = dzien.data.getFullYear() + '-' + miesiac + '-' + dzien2;

    okno.componentInstance.formualrzRejestracjiWizyty.patchValue({
      termin: termin,
      poczatek: this.godzina(index),
      koniec: this.godzina(index + 2),
    });
    okno.closed.subscribe(k => {
      this.pobierzDane();
    });
  }

  public godzina(index: number) {
    const data = new Date();
    data.setHours(this.godzinaRozpoczecia, 0, 0, 0);
    const k = new Date(data.getTime() + index * 60000 * 30);
    const godzina = k.getHours() < 10 ? '0' + k.getHours() : k.getHours();
    const minuta = k.getMinutes() < 10 ? '0' + k.getMinutes() : k.getMinutes();
    return godzina + ':' + minuta;
  }

  private ObliczGodziny() {
    const tmp = this.godzinyOtwarcia;
    [tmp.poniedzialek, tmp.wtorek, tmp.sroda, tmp.czwartek, tmp.piatek, tmp.sobota, tmp.niedziela].forEach(dzien => {
      if (dzien.czynnyDzien) {
        const rozpoczenie = Number(dzien.otwarcie.split(':')[0]);
        const zakonczenie = Number(dzien.zamkniecie.split(':')[0]);
        this.godzinaRozpoczecia = rozpoczenie < this.godzinaRozpoczecia ? rozpoczenie : this.godzinaRozpoczecia;
        this.godzinaZakonczenia = zakonczenie > this.godzinaZakonczenia ? zakonczenie : this.godzinaZakonczenia;
      }
    });
    //this.godzinaRozpoczecia -= 1;
    this.godzinaZakonczenia -= this.godzinaRozpoczecia;
    this.godzinaZakonczenia += 0.5;
  }
}
