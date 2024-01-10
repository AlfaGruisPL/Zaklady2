import { Component, EventEmitter, Output } from '@angular/core';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-wpisanie-danych',
  templateUrl: './wpisanie-danych.component.html',
  styleUrls: ['./wpisanie-danych.component.scss', '../../formularz-zarejestruj-sie.component.scss'],
})
export class WpisanieDanychComponent {
  @Output() wyslijKrok = new EventEmitter<number>();
  env = environment;
  captchaSolve = this.env.production == true ? false : true;

  constructor(public ZarejestrujSieService: ZarejestrujSieService) {}

  resolved(captchaResponse: string | null) {
    if (!captchaResponse) return;
    this.captchaSolve = true;
    this.ZarejestrujSieService.DaneKlientaClass.capcha = captchaResponse;
  }

  public przejdzDalej() {
    this.ZarejestrujSieService.DaneKlientaClass.czyWszystkoUzupelnioneFunkcja();
    if (this.ZarejestrujSieService.DaneKlientaClass?.czyWszystkoUzupelnione) {
      this.wyslijKrok.emit(5);
    }
  }

  public cofnij() {
    this.wyslijKrok.emit(3);
  }
}
