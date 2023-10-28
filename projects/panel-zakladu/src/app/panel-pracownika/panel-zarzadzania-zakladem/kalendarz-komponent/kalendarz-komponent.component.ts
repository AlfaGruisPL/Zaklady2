import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Wizyta } from '../../../klasy/panelPracownika/wizyta';
import { ListonoszService } from '../../../serwisy/listonosz.service';
import { KalendarzKomponentService } from './kalendarz-komponent.service';
import { environment } from '../../../../environments/environment';
import { DzienWolny } from '../../../klasy/panelPracownika/kalendarz/DzienWolny';
import { DzienTygodnia } from './dzien-tygodnia';
import { VisitService } from './termin_komponent/visit.service';

@Component({
  selector: 'app-kalendarz-komponent',
  templateUrl: './kalendarz-komponent.component.html',
  styleUrls: ['./kalendarz-komponent.component.scss'],
})
export class KalendarzKomponentComponent implements OnInit, OnDestroy {
  @Output() wyslijKrok = new EventEmitter<number>();
  @Input() zarzadzanie = false;
  symulatorPracownikID = '183';
  symulatorWizytyID = '1520,1530';
  symulatorWolneTerminy: any = [];
  symulator = false;
  public godzinaRozpoczecia = 6;
  public wyswieitlanieSymulatora = false;

  protected readonly environment = environment;

  constructor(
    private listonosz: ListonoszService,
    public Kalendarz_: KalendarzKomponentService,
    private visit_: VisitService
  ) {}

  ngOnDestroy() {
    this.Kalendarz_.resetdanych();
  }

  ngOnInit() {
    if (environment.production == false) {
      setTimeout(() => {
        this.Kalendarz_.wybranyPracownik.subscribe(k => {
          this.symulatorPracownikID = k.toString();
          this.generujWizyty();
        });
      }, 1000);
    }

    this.Kalendarz_.godzinaRozpoczecia = this.godzinaRozpoczecia;

    this.Kalendarz_.pobierzPodstawoweDane();
  }

  generujWizyty() {
    if (!this.symulator) return;
    this.symulatorWolneTerminy = [];
    const dane = this.symulatorWizytyID.split(',');
    this.listonosz
      .wyslij('/stronaReklamowa/wizyty/terminyWizyt', {
        uslugiId: dane,
        pracownikId: this.symulatorPracownikID,
      })
      .then(k => {
        k.forEach((k2: any) => {
          this.symulatorWolneTerminy.push(new Wizyta(k2));
        });
      });
  }

  public czyPracuje(dzien: number) {
    switch (dzien) {
      case 0:
        return this.Kalendarz_.godzinyOtwarcia.poniedzialek.czynnyDzien;
      case 1:
        return this.Kalendarz_.godzinyOtwarcia.wtorek.czynnyDzien;
      case 2:
        return this.Kalendarz_.godzinyOtwarcia.sroda.czynnyDzien;
      case 3:
        return this.Kalendarz_.godzinyOtwarcia.czwartek.czynnyDzien;
      case 4:
        return this.Kalendarz_.godzinyOtwarcia.piatek.czynnyDzien;
      case 5:
        return this.Kalendarz_.godzinyOtwarcia.sobota.czynnyDzien;
      case 6:
        return this.Kalendarz_.godzinyOtwarcia.niedziela.czynnyDzien;
    }
    return true;
  }

  public kliknietoPole(dzien: DzienTygodnia, index: number) {
    if (this.zarzadzanie) {
      this.Kalendarz_.nowaPrzerwa(dzien, index);
    } else {
      this.Kalendarz_.nowaWizyta(dzien, index);
    }
  }

  public kolorTlaInformacje(dzien: DzienTygodnia): string {
    let wynik = '';

    if (this.czyDzisWolnyDzien(dzien, this.Kalendarz_.dniWolnePracownika) != undefined) {
      wynik += 'Dzien wolny dla pracownika<br>';
    }

    if (this.czyDzisWolnyDzien(dzien, this.Kalendarz_.dniWolneZakladu) != undefined) {
      wynik += 'Dzien wolny dla zakładu<br>';
    }
    if (!this.czyPracuje(dzien.dzien)) {
      wynik += 'Zakład zamknięty<br>';
    }
    return wynik;
  }

  public kolorTla(dzien: DzienTygodnia, index: number) {
    //sprawdzenie czy nie dzien oznaczony jako wolny
    if (
      this.czyDzisWolnyDzien(dzien, this.Kalendarz_.dniWolneZakladu) != undefined &&
      this.czyDzisWolnyDzien(dzien, this.Kalendarz_.dniWolnePracownika) != undefined
    ) {
      if (index % 2 == 0) {
        return { 'background-color': 'rgba(228,35,248,0.14)' };
      }
      return { 'background-color': 'rgba(191,29,208,0.14)' };
    }

    if (this.czyDzisWolnyDzien(dzien, this.Kalendarz_.dniWolneZakladu) != undefined) {
      if (index % 2 == 0) {
        return { 'background-color': 'rgba(255,35,35,0.14)' };
      }
      return { 'background-color': 'rgba(211,8,8,0.14)' };
    }
    if (this.czyDzisWolnyDzien(dzien, this.Kalendarz_.dniWolnePracownika) != undefined) {
      if (index % 2 == 0) {
        return { 'background-color': 'rgba(69,248,57,0.14)' };
      }
      return { 'background-color': 'rgba(67,218,58,0.14)' };
    }

    if (!this.CzyAktualne(dzien.data)) {
      if (index % 2 == 0) {
        return { 'background-color': 'rgba(229,229,229,0.14)' };
      }
      return { 'background-color': 'rgba(211,211,211,0.14)' };
    }
    if (!this.czyPracuje(dzien.dzien)) {
      if (index % 2 == 0) {
        return { 'background-color': 'rgba(180,180,180,0.21)' };
      }
      return { 'background-color': 'rgba(148,148,148,0.21)' };
    }

    return {};
  }

  czyDzisWolnyDzien(dzien: DzienTygodnia, dane: DzienWolny[] = this.Kalendarz_.dniWolneZakladu) {
    return dane.find(wolnydzien => {
      if (wolnydzien.data.getDate() == dzien.data.getDate()) {
        if (wolnydzien.data.getFullYear() == dzien.data.getFullYear()) {
          if (wolnydzien.data.getMonth() == dzien.data.getMonth()) {
            return true;
          }
        }
      }
      return false;
    });
  }

  public terminyNaDzien_clear(data: DzienTygodnia): Array<Wizyta> {
    return this.terminyNaDzien(data).filter(wizyta => this.cleanDirtyVisitFun(wizyta));
  }

  public terminyNaDzien_dirty(data: DzienTygodnia): Array<Wizyta> {
    return this.terminyNaDzien(data).filter(wizyta => !this.cleanDirtyVisitFun(wizyta));
  }

  public SymulatorWolneterminyNaDzien(data: DzienTygodnia): Array<Wizyta> {
    const tablica = this.symulatorWolneTerminy.filter((usluga: any) => {
      if (usluga.poczatek.getDate() == data.data.getDate()) {
        if (usluga.poczatek.getFullYear() == data.data.getFullYear()) {
          if (usluga.poczatek.getMonth() == data.data.getMonth()) {
            return true;
          }
        }
      }
      return false;
    });
    return tablica;
  }

  public czyToDzis(data: Date): boolean {
    if (data.getDate() == new Date().getDate()) {
      if (data.getFullYear() == new Date().getFullYear()) {
        if (data.getMonth() == new Date().getMonth()) {
          return true;
        }
      }
    }
    return false;
  }

  //* łapanie zdażeń najechanią  kursorem na wizyte
  trigger(event: any) {
    this.visit_.actualTrigeredElements = [];
    document.elementsFromPoint(event.clientX, event.clientY).forEach(element => {
      if (element.classList.contains('termin')) {
        // @ts-ignore
        this.visit_.actualTrigeredElements.push(element.dataset.visit);
      }
    });
  }

  private terminyNaDzien(data: DzienTygodnia): Array<Wizyta> {
    const tablica = this.Kalendarz_.wizyty.filter(usluga => {
      if (usluga.poczatek.getDate() == data.data.getDate()) {
        if (usluga.poczatek.getFullYear() == data.data.getFullYear()) {
          if (usluga.poczatek.getMonth() == data.data.getMonth()) {
            return true;
          }
        }
      }
      return false;
    });
    return tablica.sort((x, y) => {
      return x.poczatek.getTime() > y.poczatek.getTime() ? 1 : -1;
    });
  }

  private cleanDirtyVisitFun(wizyta: Wizyta) {
    return !wizyta.cancled() && (wizyta.completed == undefined || wizyta.completed == true);
  }

  private CzyAktualne(data: Date) {
    return !(data.setUTCHours(0, 0, 0, 0) < new Date().setUTCHours(0, 0, 0, 0));
  }
}
