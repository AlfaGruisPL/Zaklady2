import { GodzinyOtwarcia } from './mojZaklad/moj-zaklad';
import { Pracownik } from './pracownicy/pracownik';

export class DanePodreczneClass {
  public tytulZakladu: string = '';
  public identyfikatorZakladu: string = '';
  public zalogowanyUzytkownik: undefined | Pracownik = undefined;
  public godzinyOtwarcia: GodzinyOtwarcia = new GodzinyOtwarcia();
  public pracownicy: Pracownik[] = [];
  identyfikatorAutomatyczny = '';

  /**
   * Domyślnie liczba aktywnych użytkowników -1 (ponieważ 1 to administartor, który nie może być zarchiwizowany)*/
  returnActiveWorkers() {
    return (
      this.pracownicy.filter(worker => {
        return worker.archived == false;
      }).length - 1
    );
  }

  returnZalogowanyPracownik() {
    if (this.zalogowanyUzytkownik) {
      return this.zalogowanyUzytkownik;
    }
    return new Pracownik();
  }
}
