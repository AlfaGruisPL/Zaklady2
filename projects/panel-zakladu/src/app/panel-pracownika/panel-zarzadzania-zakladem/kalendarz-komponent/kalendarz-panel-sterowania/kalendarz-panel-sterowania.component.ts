import { Component } from '@angular/core';
import { ListonoszService } from '../../../../serwisy/listonosz.service';
import { KalendarzKomponentService } from '../kalendarz-komponent.service';
import { dniTygodnia } from '../dzien-tygodnia';

@Component({
  selector: 'app-kalendarz-panel-sterowania',
  templateUrl: './kalendarz-panel-sterowania.component.html',
  styleUrls: ['./kalendarz-panel-sterowania.component.scss'],
})
export class KalendarzPanelSterowaniaComponent {
  licznikPrzyciskow = 0;
  dataKursor = new Date();
  dni = dniTygodnia;

  constructor(private listonosz: ListonoszService, public Kalendarz_: KalendarzKomponentService) {}

  public WPrawo() {
    this.licznikPrzyciskow++;
    this.dataKursor = new Date(this.dataKursor.getTime() + 7 * 24 * 60 * 60 * 1000);

    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
    this.Kalendarz_.kursor = this.dataKursor;
    this.Kalendarz_.pobierzDane();
  }

  public teraz() {
    this.licznikPrzyciskow = 0;
    this.dataKursor = new Date();
    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
    this.Kalendarz_.kursor = this.dataKursor;
    this.Kalendarz_.pobierzDane();
  }

  public WLEWO() {
    this.licznikPrzyciskow--;
    this.dataKursor = new Date(this.dataKursor.getTime() - 7 * 24 * 60 * 60 * 1000);
    this.dni.forEach(k => {
      k.data = new Date(this.dataKursor);
      k.ustawDate();
    });
    this.Kalendarz_.kursor = this.dataKursor;
    this.Kalendarz_.pobierzDane();
  }

  public miesiac() {
    return this.dataKursor.getMonth() + 1;
  }

  public tydzien() {
    return Math.ceil(this.dataKursor.getDate() / 7);
  }
}
