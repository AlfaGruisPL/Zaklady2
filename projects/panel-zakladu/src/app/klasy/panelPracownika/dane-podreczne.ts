import { GodzinyOtwarcia } from './mojZaklad/moj-zaklad';
import { Pracownik } from './pracownicy/pracownik';

export class DanePodreczneClass {
  public tytulZakladu: string = '';
  public zalogowanyUzytkownik: undefined | Pracownik = undefined;
  public godzinyOtwarcia: GodzinyOtwarcia = new GodzinyOtwarcia();
  public pracownicy: Pracownik[] = [];

  returnZalogowanyPracownik() {
    if (this.zalogowanyUzytkownik) {
      return this.zalogowanyUzytkownik;
    }
    return new Pracownik();
  }
}
