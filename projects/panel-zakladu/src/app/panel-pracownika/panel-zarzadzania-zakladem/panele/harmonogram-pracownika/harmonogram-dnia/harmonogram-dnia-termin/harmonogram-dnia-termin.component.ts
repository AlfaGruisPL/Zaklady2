import { Component, Input, OnInit } from '@angular/core';
import { Wizyta } from '../../../../../../klasy/panelPracownika/wizyta';
import { PodreczneDaneService } from '../../../../../../serwisy/podreczne-dane.service';
import { HarmonogramService } from '../../harmonogram.service';

@Component({
  selector: 'app-harmonogram-dnia-termin',
  templateUrl: './harmonogram-dnia-termin.component.html',
  styleUrls: ['./harmonogram-dnia-termin.component.scss'],
})
export class HarmonogramDniaTerminComponent implements OnInit {
  @Input({ required: true }) wizyta: Wizyta = new Wizyta({});
  @Input({ required: true }) godzinaZakonczenia = 0;
  @Input({ required: true }) godzinaRozpoczecia = 0;
  @Input() id = 0;

  public przesuniecieWPrawo = 150;
  public szerokosc = 100;

  constructor(private podreczne_: PodreczneDaneService, public harmonogram_: HarmonogramService) {}

  ngOnInit() {
    const poczatekGodzian = this.wizyta.poczatek.getHours();
    const poczatekMinuta = this.wizyta.poczatek.getMinutes();
    const koniecGodzian = this.wizyta.koniec.getHours();
    const koniecMinuta = this.wizyta.koniec.getMinutes();
    const roznica = poczatekGodzian + poczatekMinuta / 60 - this.godzinaRozpoczecia;
    this.przesuniecieWPrawo = roznica * 45 * 2;
    this.szerokosc = (koniecGodzian + koniecMinuta / 60 - (poczatekGodzian + poczatekMinuta / 60)) * 2 * 45;
  }
}
