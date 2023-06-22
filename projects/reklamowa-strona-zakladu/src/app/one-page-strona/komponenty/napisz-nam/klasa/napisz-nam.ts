export class NapiszNam {
  public imie: string = "";
  public nazwisko: string = "";
  public adresEmail: string = "";
  public wiadomosc: string = "";

  public pusteImie: boolean = false;
  public pusteNazwisko: boolean = false;
  public pustyEmail: boolean = false;
  public pustaTresc: boolean = false;
  public czyWszystkoUzupelnione: boolean = true;


  public czyWszystkoUzupelnioneFunkcja() {
    this.pusteImie = false;
    this.pusteNazwisko = false;
    this.pustyEmail = false;
    this.pustaTresc = false;
    this.czyWszystkoUzupelnione = true;

    if (this.imie.length <= 0) {
      this.pusteImie = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.nazwisko.length <= 0) {
      this.pusteNazwisko = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.adresEmail.length <= 0) {
      this.pustyEmail = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.wiadomosc.length <= 0) {
      this.pustaTresc = true;
      this.czyWszystkoUzupelnione = false;
    }
    return this.czyWszystkoUzupelnione;

  }

}

export class NapiszNamDto {
  public imie: string = "";
  public nazwisko: string = "";
  public adresEmail: string = "";
  public wiadomosc: string = "";

  constructor(napiszNamKlasa: NapiszNam) {
    this.imie = napiszNamKlasa.imie;
    this.nazwisko = napiszNamKlasa.nazwisko;
    this.adresEmail = napiszNamKlasa.adresEmail;
    this.wiadomosc = napiszNamKlasa.wiadomosc;
  }
}

