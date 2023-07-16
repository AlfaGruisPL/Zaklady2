import {Component} from '@angular/core';
import {UslugaSmsService} from '../uslugaSms.service';

@Component({
  selector: 'app-usluga-sms-ustawienia',
  templateUrl: './usluga-sms-ustawienia.component.html',
  styleUrls: ['./usluga-sms-ustawienia.component.scss', "../usluga-sms-pracownika.component.scss"],
})
export class UslugaSmsUstawieniaComponent {
  constructor(public service: UslugaSmsService) {
  }

  przewidywanaOplata() {
    let cena = 0;
    if (this.service.dane.smsPowiadomienia.godzinaPrzed) cena += 9;
    if (this.service.dane.smsPowiadomienia.potwierdzenieRejestracji) cena += 9;
    if (this.service.dane.smsPowiadomienia.trzyGodzinyPrzed) cena += 9;
    if (this.service.dane.smsPowiadomienia.dzienPrzed) cena += 9;
    if (this.service.dane.smsPowiadomienia.trzyDniPrzed) cena += 9;

    return cena;
  }
}
