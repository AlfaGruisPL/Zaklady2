import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {dniTygodnia, DzienTygodnia} from "./dzien-tygodnia";
import {ZarejestrujSieService} from "../../zarejestrujSie.service";

@Component({
  selector: 'app-kalendarz',
  templateUrl: './kalendarz.component.html',
  styleUrls: [
    './kalendarz.component.scss',
    '../../formularz-zarejestruj-sie.component.scss',
  ],
})
export class KalendarzComponent implements OnInit {
  @Output() wyslijKrok = new EventEmitter<number>();
  licznikPrzyciskow = 0

  public godzinaRozpoczecia = 6;
  dni = dniTygodnia
  public miesiace: string[] = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];

  constructor(private ZarejestrujSie: ZarejestrujSieService) {
  }

  public przejdzDalej() {
    this.wyslijKrok.emit(4);
  }

  public cofnij() {
    this.wyslijKrok.emit(2);
  }

  godzina(index: number) {
    const data = new Date()
    data.setUTCHours(this.godzinaRozpoczecia, 0, 0, 0);
    const k = new Date(data.getTime() + (index * 60000 * 30))
    const godzina = k.getHours() < 10 ? '0' + k.getHours() : k.getHours();
    const minuta = k.getMinutes() < 10 ? '0' + k.getMinutes() : k.getMinutes();
    return godzina + ":" + minuta
  }


  ngOnInit() {

  }


  terminyNaDzien(data: DzienTygodnia): Array<any> {
    const tablica = this.ZarejestrujSie.DaneKlientaClass.wszystkieTerminy.filter(usluga => {
      if (usluga.data.getDate() == data.data.getDate()) {
        if (usluga.data.getFullYear() == data.data.getFullYear()) {
          if (usluga.data.getMonth() == data.data.getMonth()) {
            return true
          }
        }
      }
      return false
    })
    return tablica
  }

  dataKursor = new Date()

  public miesiac() {
    return this.dataKursor.getMonth() + 1
  }

  public tydzien() {
    return Math.ceil(this.dataKursor.getDate() / 7)
  }

  WPrawo() {
    this.licznikPrzyciskow++
    this.dataKursor = new Date(this.dataKursor.getTime() + (7 * 24 * 60 * 60 * 1000))

    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor)
      k.ustawDate()
    })
  }

  WLEWO() {
    this.licznikPrzyciskow--
    this.dataKursor = new Date(this.dataKursor.getTime() - (7 * 24 * 60 * 60 * 1000))
    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor)
      k.ustawDate()
    })
  }

}
