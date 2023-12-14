import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-harmonogram-dnia-aktualna-godzina",
  templateUrl: "./harmonogram-dnia-aktualna-godzina.component.html",
  styleUrls: ["./harmonogram-dnia-aktualna-godzina.component.scss"]
})
export class HarmonogramDniaAktualnaGodzinaComponent implements OnInit, OnDestroy {
  @Input() szerokosc = 1;
  @Input() lewo = 1;
  @Input() sumaCzasu = 0;
  @Input() godzinaZakonczenia = 0;
  @Input() godzinaRozpoczecia = 0;
  widocznosc = false;
  private timer: any;

  ngOnInit() {
    this.ustawKreske();
    this.timer = setInterval(() => {
      this.ustawKreske();
    }, 1000);
  }

  ustawKreske() {
    const data = new Date();
    const minuty = (data.getHours() * 60 + data.getMinutes() - this.godzinaRozpoczecia * 60) - 5;
    //  console.log(this.godzinaZakonczenia);
    this.lewo = minuty * (this.szerokosc / (this.godzinaZakonczenia * 60));

    const rozpoczecie = new Date().setHours(this.godzinaRozpoczecia);
    const zakonczenie = new Date().setHours(this.godzinaZakonczenia + this.godzinaRozpoczecia, 0, 0, 0);

    if (data.getTime() < rozpoczecie || data.getTime() > zakonczenie) {
      this.widocznosc = false;
    } else {
      this.widocznosc = true;
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
