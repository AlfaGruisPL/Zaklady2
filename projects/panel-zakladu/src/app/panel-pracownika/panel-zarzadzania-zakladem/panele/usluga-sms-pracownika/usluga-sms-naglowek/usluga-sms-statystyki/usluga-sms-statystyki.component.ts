import {Component} from '@angular/core';
import {UslugaSmsService} from "../../uslugaSms.service";

@Component({
  selector: 'app-usluga-sms-statystyki',
  templateUrl: './usluga-sms-statystyki.component.html',
  styleUrls: ['./usluga-sms-statystyki.component.scss']
})
export class UslugaSmsStatystykiComponent {
  constructor(public service: UslugaSmsService) {
  }
}
