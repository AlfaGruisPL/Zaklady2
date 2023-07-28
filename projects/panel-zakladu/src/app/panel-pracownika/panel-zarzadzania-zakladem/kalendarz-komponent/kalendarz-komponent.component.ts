import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  dniTygodnia,
  DzienTygodnia,
} from '../../../../../../reklamowa-strona-zakladu/src/app/one-page-strona/komponenty/formularz-zarejestruj-sie/etapy/kalendarz/dzien-tygodnia';
import {Wizyta} from '../../../klasy/panelPracownika/wizyta';
import {ListonoszService} from '../../../serwisy/listonosz.service';
import {KalendarzKomponentService} from './kalendarz-komponent.service';

@Component({
  selector: 'app-kalendarz-komponent',
  templateUrl: './kalendarz-komponent.component.html',
  styleUrls: ['./kalendarz-komponent.component.scss'],
})
export class KalendarzKomponentComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();
  @Input() zarzadzanie = false;
  symulatorPracownikID = '183';
  symulatorWizytyID = '1497,1498,1499';
  symulatorWolneTerminy: any = []
  symulator = false
  licznikPrzyciskow = 0;
  public godzinaRozpoczecia = 6;
  dni = dniTygodnia;
  dataKursor = new Date();
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
    private listonosz: ListonoszService,
    public Kalendarz_: KalendarzKomponentService
  ) {
  }

  ngOnInit() {
    this.Kalendarz_.godzinaRozpoczecia = this.godzinaRozpoczecia;
    if (this.symulatorPracownikID.length > 0) {
      this.generujWizyty()
    }
    this.Kalendarz_.pobierzPodstawoweDane()

  }

  generujWizyty() {
    this.symulatorWolneTerminy = []
    const dane = this.symulatorWizytyID.split(',')
    this.listonosz
      .wyslij('/stronaReklamowa/wizyty/terminyWizyt', {
        uslugiId: dane,
        pracownikId: this.symulatorPracownikID,
      })
      .then((k) => {

        k.forEach((k2: any) => {
          this.symulatorWolneTerminy.push(new Wizyta(k2))
        })
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
    const k = this.czyDzisWolnyDzien(dzien)
    if (k != undefined) {
      return "Dzien wolny dla zakładu"
    }
    if (!this.czyPracuje(dzien.dzien)) {
      return "Zakład zamknięty"
    }
    return ""


  }

  public kolorTla(dzien: DzienTygodnia, index: number) {
    //sprawdzenie czy nie dzien oznaczony jako wolny
    if (this.czyDzisWolnyDzien(dzien) != undefined) {
      if (index % 2 == 0) {
        return {'background-color': 'rgba(255,35,35,0.31)'};
      }
      return {'background-color': 'rgba(211,8,8,0.31)'};
    }

    if (!this.CzyAktualne(dzien.data)) {
      if (index % 2 == 0) {
        return {'background-color': 'rgba(229,229,229,0.31)'};
      }
      return {'background-color': 'rgba(211,211,211,0.31)'};
    }
    if (!this.czyPracuje(dzien.dzien)) {
      if (index % 2 == 0) {
        return {'background-color': 'rgba(180,180,180,0.31)'};
      }
      return {'background-color': 'rgba(148,148,148,0.31)'};
    }

    return {};
  }

  czyDzisWolnyDzien(dzien: DzienTygodnia) {
    return this.Kalendarz_.dniWolne.find(wolnydzien => {
      if (wolnydzien.data.getDate() == dzien.data.getDate()) {
        if (wolnydzien.data.getFullYear() == dzien.data.getFullYear()) {
          if (wolnydzien.data.getMonth() == dzien.data.getMonth()) {
            return true;
          }
        }
      }
      return false
    })

  }

  public terminyNaDzien(data: DzienTygodnia): Array<Wizyta> {

    const tablica = this.Kalendarz_.wizyty.filter((usluga) => {
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

  public SymulatorWolneterminyNaDzien(data: DzienTygodnia): Array<Wizyta> {

    const tablica = this.symulatorWolneTerminy.filter((usluga: any) => {
      if (usluga.poczatek.getDate() == data.data.getDate()) {
        console.log('.')
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

  public miesiac() {
    return this.dataKursor.getMonth() + 1;
  }

  public tydzien() {
    return Math.ceil(this.dataKursor.getDate() / 7);
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


  public WPrawo() {
    this.licznikPrzyciskow++;
    this.dataKursor = new Date(
      this.dataKursor.getTime() + 7 * 24 * 60 * 60 * 1000
    );

    this.dni.forEach((k) => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }

  public teraz() {
    this.licznikPrzyciskow = 0;
    this.dataKursor = new Date(

    );
    this.dni.forEach((k) => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }

  public WLEWO() {
    this.licznikPrzyciskow--;
    this.dataKursor = new Date(
      this.dataKursor.getTime() - 7 * 24 * 60 * 60 * 1000
    );
    this.dni.forEach((k) => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }

  private CzyAktualne(data: Date) {
    return !(data.setUTCHours(0, 0, 0, 0) < new Date().setUTCHours(0, 0, 0, 0));
  }
}
