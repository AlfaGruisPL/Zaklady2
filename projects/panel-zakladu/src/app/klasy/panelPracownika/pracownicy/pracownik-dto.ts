import { Pracownik } from './pracownik';

export class PracownikDTO {
  public imie: string = '';
  public nazwisko: string = '';
  public adresEmail: string = '';
  public numerTelefonu: string = '';
  public usunZdjecieProfilowe = false;
  public adres: {
    miasto?: string;
    ulica?: string;
    nrLokalu?: string;
    nrDomu?: string;
    wojewodztwo?: string;
    kodPocztowy?: string;
  };
  socialMedia: any;
  description: string = '';

  constructor(pracownik: Pracownik) {
    this.imie = pracownik.imie;
    this.nazwisko = pracownik.nazwisko;
    this.adresEmail = pracownik.adresEmail;
    this.numerTelefonu = pracownik.prefiksTelefonu + '-' + pracownik.numerTelefonu;
    this.adres = {};
    this.adres.miasto = pracownik.adres.miasto;
    this.adres.ulica = pracownik.adres.ulica;
    this.adres.wojewodztwo = pracownik.adres.wojewodztwo;
    this.adres.kodPocztowy = pracownik.adres.kodPocztowy1 + '-' + pracownik.adres.kodPocztowy2;
    this.adres.nrLokalu = pracownik.adres.nrLokalu;
    this.adres.nrDomu = pracownik.adres.nrDomu;
    this.socialMedia = pracownik.socialMedia;
    this.description = pracownik.description;
  }
}
