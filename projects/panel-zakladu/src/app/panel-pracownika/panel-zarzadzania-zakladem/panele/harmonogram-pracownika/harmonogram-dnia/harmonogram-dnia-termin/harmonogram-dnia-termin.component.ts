import {Component, Input, OnInit} from '@angular/core';
import {Wizyta} from "../../../../../../klasy/panelPracownika/wizyta";
import {PodreczneDaneService} from "../../../../../../serwisy/podreczne-dane.service";


@Component({
  selector: 'app-harmonogram-dnia-termin',
  templateUrl: './harmonogram-dnia-termin.component.html',
  styleUrls: ['./harmonogram-dnia-termin.component.scss']
})
export class HarmonogramDniaTerminComponent implements OnInit {
  @Input() wizyta: Wizyta = new Wizyta({});
  @Input() godzinaZakonczenia = 0
  @Input() godzinaRozpoczecia = 0
  public przesuniecieWPrawo = 150
  public szerokosc = 100;

  constructor(private podreczne_: PodreczneDaneService) {
  }

  ngOnInit() {
    const poczatekGodzian = this.wizyta.terminPoczatek.getHours()
    const poczatekMinuta = this.wizyta.terminPoczatek.getMinutes()
    const koniecGodzian = this.wizyta.terminKoniec.getHours()
    const koniecMinuta = this.wizyta.terminKoniec.getMinutes()
    const roznica = (poczatekGodzian + (poczatekMinuta / 60)) - this.godzinaRozpoczecia
    this.przesuniecieWPrawo = (roznica * 45 * 2)
    this.szerokosc = (((koniecGodzian + (koniecMinuta / 60)) - (poczatekGodzian + (poczatekMinuta / 60))) * 2 * 45)

  }
}
