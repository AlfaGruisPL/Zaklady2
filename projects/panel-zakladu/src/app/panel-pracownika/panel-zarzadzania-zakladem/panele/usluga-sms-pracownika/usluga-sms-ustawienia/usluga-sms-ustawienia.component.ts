import {Component} from '@angular/core';
import {UslugaSmsService} from "../uslugaSms.service";

@Component({
  selector: 'app-usluga-sms-ustawienia',
  templateUrl: './usluga-sms-ustawienia.component.html',
  styleUrls: ['./usluga-sms-ustawienia.component.scss']
})
export class UslugaSmsUstawieniaComponent {
  constructor(public service: UslugaSmsService) {
  }
}
