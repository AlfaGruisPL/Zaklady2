import { Component } from '@angular/core';
import { UslugaSmsService } from '../uslugaSms.service';

@Component({
  selector: 'app-usluga-sms-ustawienia',
  templateUrl: './usluga-sms-ustawienia.component.html',
  styleUrls: ['./usluga-sms-ustawienia.component.scss', '../usluga-sms-pracownika.component.scss'],
})
export class UslugaSmsUstawieniaComponent {
  constructor(public service: UslugaSmsService) {}

  przewidywanaOplata() {
    const price = 11;
    let cena = 9;
    if (this.service.dane.smsPowiadomienia.hourBefore) cena += price;
    if (this.service.dane.smsPowiadomienia.threeHoursBefore) cena += price;
    if (this.service.dane.smsPowiadomienia.dayBefore) cena += price;
    if (this.service.dane.smsPowiadomienia.threeDaysBefore) cena += price;

    return cena;
  }

  save() {
    this.service.saveData();
  }
}
