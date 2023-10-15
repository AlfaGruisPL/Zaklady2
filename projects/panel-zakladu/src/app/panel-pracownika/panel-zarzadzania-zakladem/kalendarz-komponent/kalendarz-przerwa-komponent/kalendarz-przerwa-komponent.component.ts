import { Component, Input } from '@angular/core';
import { Przerwa } from '../../../../klasy/panelPracownika/kalendarz/przerwa.dto';
import { PodreczneDaneService } from '../../../../serwisy/podreczne-dane.service';
import { Pracownik } from '../../../../klasy/panelPracownika/pracownicy/pracownik';

@Component({
  selector: 'app-kalendarz-przerwa-komponent',
  templateUrl: './kalendarz-przerwa-komponent.component.html',
  styleUrls: ['./kalendarz-przerwa-komponent.component.scss'],
})
export class KalendarzPrzerwaKomponentComponent {
  @Input() godzinaRozpoczecia = 0;

  @Input() Przerwa: Przerwa = new Przerwa({});
  @Input() zaklad: boolean = false;

  top = '70px';
  wysokosc = '100px';
  wysokoscNumber = 0;
  protected readonly Number = Number;

  constructor(private danePodreczne_: PodreczneDaneService) {}

  ngOnInit() {
    const poczatekGodzian = this.Przerwa.poczatek.getHours();
    const poczatekMinuta = this.Przerwa.poczatek.getMinutes();
    const koniecGodzian = this.Przerwa.koniec.getHours();
    const koniecMinuta = this.Przerwa.koniec.getMinutes();
    const roznica = poczatekGodzian + poczatekMinuta / 60 - this.godzinaRozpoczecia;
    this.top = roznica * 26.8 * 2 + 2 + 'px';
    this.wysokoscNumber = (koniecGodzian + koniecMinuta / 60 - (poczatekGodzian + poczatekMinuta / 60)) * 2 * 27;
    this.wysokosc = this.wysokoscNumber + 'px';
  }

  pracownik(): Pracownik | undefined {
    return this.danePodreczne_.danePodreczneObiekt.pracownicy.find(k => k.id == this.Przerwa.pracownikId);
  }
}
