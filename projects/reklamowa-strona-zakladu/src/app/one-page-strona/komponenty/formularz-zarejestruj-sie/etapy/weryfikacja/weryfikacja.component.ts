import { Component, EventEmitter, Output } from '@angular/core';
import { ZarejestrujSieService } from '../../zarejestrujSie.service';

@Component({
  selector: 'app-weryfikacja',
  templateUrl: './weryfikacja.component.html',
  styleUrls: ['./weryfikacja.component.scss', '../../formularz-zarejestruj-sie.component.scss'],
})
export class WeryfikacjaComponent {
  @Output() wyslijKrok = new EventEmitter<number>();
  public kodNieWpisany: boolean = false;
  protected readonly EventEmitter = EventEmitter;

  constructor(public ZarejestrujSieService: ZarejestrujSieService) {}

  public przejdzDalej() {
    this.kodNieWpisany = false;
    this.ZarejestrujSieService.DaneKlientaClass.niepoprawnyKod = false;
    this.ZarejestrujSieService.DaneKlientaClass.czyKodWerifikacjaWpisany();
    if (!this.ZarejestrujSieService.DaneKlientaClass.kodWeryfikacjaPusty) {
      this.wyslijKrok.emit(6);
    } else {
      this.kodNieWpisany = true;
    }
  }
}
