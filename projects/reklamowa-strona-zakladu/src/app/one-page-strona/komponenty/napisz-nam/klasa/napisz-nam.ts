export class NapiszNam {
  public imie: string = '';
  public nazwisko: string = '';
  public adresEmail: string = '';
  public wiadomosc: string = '';
  public komuWyslac: string = 'Wybierz:';

  public pusteImie: boolean = false;
  public pusteNazwisko: boolean = false;
  public pustyEmail: boolean = false;
  public pustaTresc: boolean = false;
  public komuWyslacPuste: boolean = false;
  public czyWszystkoUzupelnione: boolean = true;
  touched = false;

  public czyWszystkoUzupelnioneFunkcja() {
    this.pusteImie = false;
    this.pusteNazwisko = false;
    this.pustyEmail = false;
    this.pustaTresc = false;
    this.komuWyslacPuste = false;
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
    if (this.komuWyslac == 'Wybierz:') {
      this.komuWyslacPuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    return this.czyWszystkoUzupelnione;
  }
}

export class NapiszNamDto {
  public name: string = '';
  public surname: string = '';
  public email: string = '';
  public message: string = '';
  public komuWyslac: string = '';

  constructor(napiszNamKlasa: NapiszNam) {
    this.name = napiszNamKlasa.imie;
    this.surname = napiszNamKlasa.nazwisko;
    this.email = napiszNamKlasa.adresEmail;
    this.message = napiszNamKlasa.wiadomosc;
    this.komuWyslac = napiszNamKlasa.komuWyslac;
  }
}
