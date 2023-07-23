import {Component, EventEmitter, Output} from '@angular/core';
import {ZarejestrujSieService} from '../../zarejestrujSie.service';
import {DaneKlienta} from '../klasy/dane-klienta';

@Component({
  selector: 'app-podsumowanie',
  templateUrl: './podsumowanie.component.html',
  styleUrls: ['./podsumowanie.component.scss'],
})
export class PodsumowanieComponent {
  @Output() wyslijKrok = new EventEmitter<number>();

  constructor(private rejestracja: ZarejestrujSieService) {
  }

  public przejdzDalej() {
    this.wyslijKrok.emit(1);
    this.rejestracja.DaneKlientaClass = new DaneKlienta();

  }
}
