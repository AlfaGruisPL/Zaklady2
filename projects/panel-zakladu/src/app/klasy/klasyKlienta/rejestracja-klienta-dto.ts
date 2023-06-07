import {RejestracjaKlienta} from "./rejestracja-klienta";

export class RejestracjaKlientaDTO {
  public imie: string = "";
  public nazwisko: string = "";
  public numerTelefonu: string = "";
  public adresEmail: string = "";
  public haslo: string = "";

  constructor(dane: RejestracjaKlienta) {
    this.imie = dane.imie;
    this.nazwisko = dane.nazwisko;
    this.numerTelefonu = dane.prefiks + "." + dane.numerTelefonu;
    this.adresEmail = dane.adresEmail;
    this.haslo = dane.haslo1;
  }
}
