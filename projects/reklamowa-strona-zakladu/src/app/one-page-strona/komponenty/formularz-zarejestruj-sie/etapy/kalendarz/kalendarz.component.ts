import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dniTygodnia, DzienTygodnia } from './dzien-tygodnia';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';
import { DanePodstawoweService } from '../../../../../serwisy/dane-podstawowe.service';

@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: ['./kalendarz.component.scss', '../../formularz-zarejestruj-sie.component.scss'],
})
export class KalendarzComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();
  licznikPrzyciskow = 0;
  nieMoznaDalejKomunikat = false;
  public godzinaRozpoczecia = 88;
  public godzinaZakonczenia = 0;
  dni = dniTygodnia;
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
  dataKursor = new Date();
  protected readonly Math = Math;

  constructor(
    public ZarejestrujSie: ZarejestrujSieService,
    public danePodstawowe: DanePodstawoweService
  ) {}

  public czyPracuje(dzien: number) {
    switch (dzien) {
      case 0:
        return this.danePodstawowe.danePodstawowe.poniedzialek.activeDay;
      case 1:
        return this.danePodstawowe.danePodstawowe.wtorek.activeDay;
      case 2:
        return this.danePodstawowe.danePodstawowe.sroda.activeDay;
      case 3:
        return this.danePodstawowe.danePodstawowe.czwartek.activeDay;
      case 4:
        return this.danePodstawowe.danePodstawowe.piatek.activeDay;
      case 5:
        return this.danePodstawowe.danePodstawowe.sobota.activeDay;
      case 6:
        return this.danePodstawowe.danePodstawowe.niedziela.activeDay;
    }
    return true;
  }

  public przejdzDalej() {
    this.nieMoznaDalejKomunikat = false;
    if (this.ZarejestrujSie.DaneKlientaClass.wybranyTermin == undefined) {
      this.nieMoznaDalejKomunikat = true;
      return;
    }
    this.wyslijKrok.emit(4);
  }

  public cofnij() {
    this.wyslijKrok.emit(2);
  }

  godzina(index: number) {
    const data = new Date();

    //  this.godzinaZakonczenia++;
    //this.godzinaRozpoczecia--;

    data.setHours(this.godzinaRozpoczecia, 0, 0, 0);
    const k = new Date(data.getTime() + index * 60000 * 60);
    const godzina = k.getHours() < 10 ? '0' + k.getHours() : k.getHours();
    const minuta = k.getMinutes() < 10 ? '0' + k.getMinutes() : k.getMinutes();
    return godzina + ':' + minuta;
  }

  ngOnInit() {
    this.ObliczGodziny();
    this.danePodstawowe.danePodstawoweObservable.subscribe(k => {
      this.ObliczGodziny();
    });
    this.licznikPrzyciskow = 0;
    this.dataKursor = new Date();
    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }

  kolorTla(dzien: DzienTygodnia) {
    if (!this.CzyAktualne(dzien.data)) {
      return { 'background-color': 'rgba(211,211,211,0.31)' };
    }
    if (!this.czyPracuje(dzien.dzien)) {
      return { 'background-color': 'rgba(148,148,148,0.31)' };
    }
    return {};
  }

  terminyNaDzien(data: DzienTygodnia): Array<any> {
    const tablica = this.ZarejestrujSie.DaneKlientaClass.wszystkieTerminy.filter(usluga => {
      if (usluga.start.getDate() == data.data.getDate()) {
        if (usluga.start.getFullYear() == data.data.getFullYear()) {
          if (usluga.start.getMonth() == data.data.getMonth()) {
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

  WPrawo() {
    this.licznikPrzyciskow++;
    this.dataKursor = new Date(this.dataKursor.getTime() + 7 * 24 * 60 * 60 * 1000);

    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }

  WLEWO() {
    this.licznikPrzyciskow--;
    this.dataKursor = new Date(this.dataKursor.getTime() - 7 * 24 * 60 * 60 * 1000);

    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
  }

  czyDzis(dzien: DzienTygodnia) {
    if (
      dzien.data.getDate() == new Date().getDate() &&
      dzien.data.getMonth() == new Date().getMonth() &&
      dzien.data.getFullYear() == new Date().getFullYear()
    ) {
      return true;
    }
    return false;
  }

  private ObliczGodziny() {
    const tmp = this.danePodstawowe.danePodstawowe;
    [tmp.poniedzialek, tmp.wtorek, tmp.sroda, tmp.czwartek, tmp.piatek, tmp.sobota, tmp.niedziela].forEach(dzien => {
      if (dzien.activeDay) {
        const rozpoczenie = Number(dzien.opening.split(':')[0]);
        const zakonczenie = Number(dzien.closing.split(':')[0]);
        console.log(dzien);
        this.godzinaRozpoczecia = rozpoczenie < this.godzinaRozpoczecia ? rozpoczenie : this.godzinaRozpoczecia;
        this.godzinaZakonczenia = zakonczenie > this.godzinaZakonczenia ? zakonczenie : this.godzinaZakonczenia;
      }
    });
    //this.godzinaRozpoczecia -= 1;
    this.godzinaZakonczenia -= this.godzinaRozpoczecia;
    this.godzinaZakonczenia += 0.5;
  }

  private CzyAktualne(data: Date) {
    return !(data.setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0));
  }
}
