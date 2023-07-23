import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-harmonogram-dnia-aktualna-godzina',
  templateUrl: './harmonogram-dnia-aktualna-godzina.component.html',
  styleUrls: ['./harmonogram-dnia-aktualna-godzina.component.scss']
})
export class HarmonogramDniaAktualnaGodzinaComponent implements OnInit, OnDestroy {
  @Input() wysokosc = 1;
  @Input() lewo = 1;
  @Input() sumaCzasu = 0;
  @Input() godzinaZakonczenia = 0
  @Input() godzinaRozpoczecia = 0

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
    const minuty = (data.getHours() * 60) + data.getMinutes() - (this.godzinaRozpoczecia * 60)
    this.lewo = minuty * (this.wysokosc / (this.godzinaZakonczenia * 60)) - 10

    const rozpoczecie = new Date().setHours(this.godzinaRozpoczecia)
    const zakonczenie = new Date().setHours(this.godzinaZakonczenia)
    if (data.getTime() < rozpoczecie || data.getTime() > zakonczenie) {
      this.widocznosc = false
    } else {
      this.widocznosc = true
    }
    this.widocznosc = true
  }

  ngOnDestroy() {
    clearInterval(this.timer)
  }

}


