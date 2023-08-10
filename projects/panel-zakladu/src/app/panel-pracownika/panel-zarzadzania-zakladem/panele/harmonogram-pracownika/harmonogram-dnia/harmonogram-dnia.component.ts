import { Component, OnInit } from '@angular/core';
import { HarmonogramService } from '../harmonogram.service';
import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-harmonogram-dnia',
  templateUrl: './harmonogram-dnia.component.html',
  styleUrls: ['./harmonogram-dnia.component.scss'],
})
export class HarmonogramDniaComponent implements OnInit {
  godzinaRozpoczecia = 99;
  godzinaZakonczenia = 0;

  constructor(
    public harmonogram_: HarmonogramService,
    private podreczneDane_: PodreczneDaneService
  ) {}

  ngOnInit() {
    this.podreczneDane_.danePodreczneObserveble.subscribe(dane => {
      if (dane != undefined) {
        this.generujDzien();
      }
    });
  }

  private generujDzien() {
    const tmp = this.podreczneDane_.danePodreczneObiekt.godzinyOtwarcia;
    console.log(tmp);
    [
      tmp.poniedzialek,
      tmp.wtorek,
      tmp.sroda,
      tmp.czwartek,
      tmp.piatek,
      tmp.sobota,
      tmp.niedziela,
    ].forEach(dzien => {
      if (dzien.czynnyDzien) {
        const rozpoczenie = Number(dzien.otwarcie.split(':')[0]);
        const zakonczenie = Number(dzien.zamkniecie.split(':')[0]);
        this.godzinaRozpoczecia =
          rozpoczenie < this.godzinaRozpoczecia
            ? rozpoczenie
            : this.godzinaRozpoczecia;
        this.godzinaZakonczenia =
          zakonczenie > this.godzinaZakonczenia
            ? zakonczenie
            : this.godzinaZakonczenia;
      }
    });

    //this.godzinaRozpoczecia -= 1;
    this.godzinaZakonczenia -= this.godzinaRozpoczecia;
    this.godzinaZakonczenia += 0.5;
  }

  public zwrocGodzine(index: number) {
    let data = new Date();
    const godzina8wmilisekundach = data.setHours(
      this.godzinaRozpoczecia,
      0,
      0,
      0
    );
    const nowaGodzina = godzina8wmilisekundach + 1800000 * index;
    data = new Date(nowaGodzina);
    let godzina: any;
    if (data.getHours() < 10) {
      godzina = '0' + data.getHours();
    } else {
      godzina = data.getHours();
    }

    let minuta: any;
    if (data.getMinutes() < 10) {
      minuta = '0' + data.getMinutes();
    } else {
      minuta = data.getMinutes();
    }
    return godzina + ':' + minuta;
  }

  protected readonly console = console;
}
