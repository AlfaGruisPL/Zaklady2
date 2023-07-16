import {Component} from '@angular/core';
import {Termin} from "../../../../../klasy/termin";

@Component({
  selector: 'app-harmonogram-dnia',
  templateUrl: './harmonogram-dnia.component.html',
  styleUrls: ['./harmonogram-dnia.component.scss']
})
export class HarmonogramDniaComponent {
  public terminy: Array<Termin> = [{poczatek: 8, poczatekMinuta: 50, koniec: 10, koniecMinuta: 20}];


  public zwrocGodzine(index: number) {
    let data = new Date();
    const godzina8wmilisekundach = data.setHours(7, 0, 0, 0)
    const nowaGodzina = godzina8wmilisekundach + (1800000 * index)
    data = new Date(nowaGodzina)
    let godzina: any;
    if (data.getHours() < 10) {
      godzina = "0" + data.getHours()
    } else {

      godzina = data.getHours()
    }

    let minuta: any;
    if (data.getMinutes() < 10) {
      minuta = "0" + data.getMinutes()
    } else {

      minuta = data.getMinutes()
    }
    return godzina + ":" + minuta;
  }

}
