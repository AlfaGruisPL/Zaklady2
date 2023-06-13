import {MojeKonto} from "./moje-konto";

export class MojeKontoDTO  {
  public imie: string = "";
  public nazwisko: string = "";
  public prefiks: string = "";
  public numerTelefonu: string = "";
  public email: string = "";
  public adres: {
    wojewodztwo?: string;
    miasto?: string;
    ulica?: string;
    numerDomu?: string;
    numerLokalu?: string;
    kodPocztowy?: string;
  }
  public hasloNowe: string = "";

  constructor(mojeKonto: MojeKonto) {
    this.imie = mojeKonto.imie;
    this.nazwisko = mojeKonto.nazwisko;
    this.prefiks = mojeKonto.prefiks;
    this.numerTelefonu = mojeKonto.numerTelefonu;
    this.email = mojeKonto.email;
    this.adres = {
      wojewodztwo: mojeKonto.adres?.wojewodztwo,
      miasto:mojeKonto.adres?.miasto,
      ulica: mojeKonto.adres?.ulica,
      numerDomu: mojeKonto.adres?.numerDomu,
      numerLokalu: mojeKonto.adres?.numerLokalu,
      kodPocztowy: mojeKonto.adres?.kodPocztowy2

    }






  }
}
