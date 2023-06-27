import {Component, OnInit} from '@angular/core';
import {UslugaSmsService} from "./uslugaSms.service";

@Component({
  selector: 'app-usluga-sms-pracownika',
  templateUrl: './usluga-sms-pracownika.component.html',
  styleUrls: ['./usluga-sms-pracownika.component.scss']
})
export class UslugaSmsPracownikaComponent implements OnInit {
  constructor(public uslugaSmsService: UslugaSmsService) {
  }

  ngOnInit() {
    this.uslugaSmsService.pobierzDane()
  }

}
