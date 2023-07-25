import {GodzinyOtwarcia} from "./mojZaklad/moj-zaklad";
import {Pracownik} from "./pracownicy/pracownik";

export class DanePodreczneClass {
  public tytulZakladu: string = "";
  public zalogowanyUzytkownik: undefined | Pracownik = undefined
  public godzinyOtwarcia: GodzinyOtwarcia = new GodzinyOtwarcia()
}
