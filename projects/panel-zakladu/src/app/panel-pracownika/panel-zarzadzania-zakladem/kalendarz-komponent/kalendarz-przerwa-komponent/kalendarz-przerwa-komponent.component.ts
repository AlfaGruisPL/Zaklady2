import {Component, Input} from '@angular/core';
import {Przerwa} from "../../../../klasy/panelPracownika/kalendarz/przerwa.dto";

@Component({
  selector: 'app-kalendarz-przerwa-komponent',
  templateUrl: './kalendarz-przerwa-komponent.component.html',
  styleUrls: ['./kalendarz-przerwa-komponent.component.scss']
})
export class KalendarzPrzerwaKomponentComponent {
  @Input() godzinaRozpoczecia = 0

  @Input() Przerwa: Przerwa = new Przerwa({})

  top = '70px';
  wysokosc = '100px'

  ngOnInit() {
    const poczatekGodzian = this.Przerwa.poczatek.getHours()
    const poczatekMinuta = this.Przerwa.poczatek.getMinutes()
    const koniecGodzian = this.Przerwa.koniec.getHours()
    console.log(1);
    const koniecMinuta = this.Przerwa.koniec.getMinutes()
    const roznica = (poczatekGodzian + (poczatekMinuta / 60)) - this.godzinaRozpoczecia
    this.top = (roznica * 26.9 * 2) + 'px'
    this.wysokosc = (((koniecGodzian + (koniecMinuta / 60)) - (poczatekGodzian + (poczatekMinuta / 60))) * 2 * 27) + "px"
  }
}
