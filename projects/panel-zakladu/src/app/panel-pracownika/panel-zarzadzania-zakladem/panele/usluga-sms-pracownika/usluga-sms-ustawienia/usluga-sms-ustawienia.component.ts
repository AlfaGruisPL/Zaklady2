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
    let cena = 9;
    if (this.service.dane.smsPowiadomienia.hourBefore) cena += 9;
    if (this.service.dane.smsPowiadomienia.threeHoursBefore) cena += 9;
    if (this.service.dane.smsPowiadomienia.dayBefore) cena += 9;
    if (this.service.dane.smsPowiadomienia.threeDaysBefore) cena += 9;

    return cena;
  }
}
