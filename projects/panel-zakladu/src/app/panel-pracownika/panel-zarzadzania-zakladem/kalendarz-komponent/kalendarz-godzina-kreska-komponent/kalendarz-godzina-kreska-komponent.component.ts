import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-kalendarz-godzina-kreska-komponent',
  templateUrl: './kalendarz-godzina-kreska-komponent.component.html',
  styleUrls: ['./kalendarz-godzina-kreska-komponent.component.scss']
})
export class KalendarzGodzinaKreskaKomponentComponent implements OnInit, OnDestroy {
  @Input() wysokosc = 1;
  @Input() top = 1;
  @Input() sumaCzasu = 0;
  @Input() poczatek: any = [];
  @Input() koniec: any = [];

  private timer: any
  widocznosc = false;

  ngOnInit() {
    this.ustawKreske()
    this.timer = setInterval(() => {
      this.ustawKreske()
    }, 10000)

    // this.top = 0
    // this.wysokosc = 21 * 27
  }

  ustawKreske() {
    const data = new Date()

    const minuty = (data.getHours() * 60) + data.getMinutes() - ((this.poczatek[0] + 2) * 60)
    this.top = minuty * (this.wysokosc / this.sumaCzasu)
    const poczatek = new Date().setHours(this.poczatek[0], this.poczatek[1])
    const koniec = new Date().setHours(this.koniec[0], this.koniec[1])
    if (data.getTime() < poczatek || data.getTime() > koniec) {
      this.widocznosc = false
    } else {
      this.widocznosc = true
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }

}

