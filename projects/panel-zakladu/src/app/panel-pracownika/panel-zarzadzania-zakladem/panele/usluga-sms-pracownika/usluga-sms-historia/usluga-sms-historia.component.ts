import {Component} from '@angular/core';
import {UslugaSmsService} from "../uslugaSms.service";

@Component({
  selector: 'app-usluga-sms-historia',
  templateUrl: './usluga-sms-historia.component.html',
  styleUrls: ['./usluga-sms-historia.component.scss']
})

export class UslugaSmsHistoriaComponent {
  public page = 0;
  public pageSize = 7

  constructor(public service: UslugaSmsService) {


  }

  pageCount() {
    return Math.ceil(this.service.dane.historia.length / this.pageSize)
  }
}
