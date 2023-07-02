import {Component, OnDestroy, OnInit} from '@angular/core';
import {UslugaSmsService} from "./uslugaSms.service";

@Component({
  selector: 'app-usluga-sms-pracownika',
  templateUrl: './usluga-sms-pracownika.component.html',
  styleUrls: ['./usluga-sms-pracownika.component.scss']
})
export class UslugaSmsPracownikaComponent implements OnInit, OnDestroy {
  constructor(public uslugaSmsService: UslugaSmsService) {
  }

  private interal: any;

  ngOnInit() {
    this.uslugaSmsService.pobierzDane()
    this.interal = setInterval(() => {
      this.uslugaSmsService.pobierzDane()
    }, 20000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interal)
  }

}
