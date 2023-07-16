import {Component} from '@angular/core';
import {UslugaSmsService} from "../../uslugaSms.service";

@Component({
  selector: 'app-usluga-sms-informacje',
  templateUrl: './usluga-sms-informacje.component.html',
  styleUrls: ['./usluga-sms-informacje.component.scss', "../usluga-sms-pracownika.component.scss"]
})
export class UslugaSmsInformacjeComponent {
  constructor(public service: UslugaSmsService) {
  }
}
