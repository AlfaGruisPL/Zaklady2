import { Component, OnInit } from "@angular/core";
import { HarmonogramService } from "../harmonogram.service";
import { PodreczneDaneService } from "../../../../../serwisy/podreczne-dane.service";

@Component({
  selector: "app-harmonogram-dnia",
  templateUrl: "./harmonogram-dnia.component.html",
  styleUrls: ["./harmonogram-dnia.component.scss"]
})
export class HarmonogramDniaComponent implements OnInit {
  godzinaRozpoczecia = 99;
  godzinaZakonczenia = 0;
  protected readonly console = console;

  constructor(public harmonogram_: HarmonogramService, private podreczneDane_: PodreczneDaneService) {
  }

  ngOnInit() {
    this.getDate();
  }

  getDate() {
    this.podreczneDane_.danePodreczneObserveble.subscribe(dane => {
      if (dane != undefined) {
        this.generujDzien();
      }
    });
  }

  public zwrocGodzine(index: number) {
    let data = new Date();
    const godzina8wmilisekundach = data.setHours(this.godzinaRozpoczecia, 0, 0, 0);
    const nowaGodzina = godzina8wmilisekundach + 1800000 * index;
    data = new Date(nowaGodzina);
    let godzina: any;
    if (data.getHours() < 10) {
      godzina = "0" + data.getHours();
    } else {
      godzina = data.getHours();
    }

    let minuta: any;
    if (data.getMinutes() < 10) {
      minuta = "0" + data.getMinutes();
    } else {
      minuta = data.getMinutes();
    }
    return godzina + ":" + minuta;
  }

  visitCompleted() {
    return this.harmonogram_.wizytyDzis.filter(visit => visit.completed != false);
  }

  visitNoCompleted() {
    return this.harmonogram_.wizytyDzis.filter(visit => visit.completed == false);
  }

  returnCalendarTimeTd() {
    const k = this.godzinaZakonczenia * 2;
    if (k <= 0) {
      return 10;
    }
    return k;
  }

  private generujDzien() {
    const tmp = this.podreczneDane_.danePodreczneObiekt.godzinyOtwarcia;
    [tmp.monday, tmp.tuesday, tmp.wednesday, tmp.thursday, tmp.friday, tmp.saturday, tmp.sunday].forEach(dzien => {
      if (dzien.activeDay) {
        const rozpoczenie = Number(dzien.opening.split(":")[0]);
        const zakonczenie = Number(dzien.closing.split(":")[0]);
        console.log(rozpoczenie);
        this.godzinaRozpoczecia = rozpoczenie < this.godzinaRozpoczecia ? rozpoczenie : this.godzinaRozpoczecia;
        this.godzinaZakonczenia = zakonczenie > this.godzinaZakonczenia ? zakonczenie : this.godzinaZakonczenia;
      }
    });

    //this.godzinaRozpoczecia -= 1;
    this.godzinaZakonczenia -= this.godzinaRozpoczecia;
    this.godzinaZakonczenia += 0.5;
  }
}
