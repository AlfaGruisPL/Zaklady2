import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-kalendarz-godzina-kreska-komponent",
  templateUrl: "./kalendarz-godzina-kreska-komponent.component.html",
  styleUrls: ["./kalendarz-godzina-kreska-komponent.component.scss"]
})
export class KalendarzGodzinaKreskaKomponentComponent implements OnInit, OnDestroy, OnChanges {
  @Input() wysokosc = 1;
  @Input() top = 1;

  @Input() poczatek: any = [];
  @Input() koniec: any = [];
  widocznosc = false;
  private timer: any;

  ngOnInit() {

    this.timer = setInterval(() => {
      this.ustawKreske();
    }, 10000);

    // this.top = 0
    // this.wysokosc = 21 * 27
  }

  ngOnChanges(changes: SimpleChanges) {
    this.ustawKreske();
  }

  ustawKreske() {
    const data = new Date();
    const minuty = (data.getHours() * 60) + data.getMinutes() - (this.poczatek * 60);
    const sumaCzasuOdPoczatekuDoKonca = (this.koniec - this.poczatek) * 60;
    this.top = minuty * (this.wysokosc / sumaCzasuOdPoczatekuDoKonca);
    const poczatek = new Date().setHours(this.poczatek, 0);
    const koniecMinutu = (this.koniec - Math.floor(this.koniec)) * 60;
    const koniec = new Date().setHours(Math.floor(this.koniec), koniecMinutu);
    if (data.getTime() < poczatek || data.getTime() > koniec) {
      this.widocznosc = false;
    } else {
      this.widocznosc = true;
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}

