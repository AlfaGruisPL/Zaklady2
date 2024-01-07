import { Pracownik } from './pracownik';

export class PracownikDTO {
  public firstname: string = '';
  public lastname: string = '';
  public email: string = '';
  public phoneNumber: string = '';
  public workDay: any;
  profilImageId = 0;
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
    this.profilImageId = pracownik.profilImageId;
    this.firstname = pracownik.firstname;
    this.lastname = pracownik.lastname;
    this.email = pracownik.email;
    this.phoneNumber = pracownik.prefiksPhoneNumber + '-' + pracownik.phoneNumber;
    this.adres = {};
    this.adres.miasto = pracownik.adres.miasto;
    this.adres.ulica = pracownik.adres.ulica;
    this.adres.wojewodztwo = pracownik.adres.wojewodztwo;
    this.adres.kodPocztowy = pracownik.adres.kodPocztowy1 + '-' + pracownik.adres.kodPocztowy2;
    this.adres.nrLokalu = pracownik.adres.nrLokalu;
    this.adres.nrDomu = pracownik.adres.nrDomu;
    this.socialMedia = pracownik.socialMedia;
    this.description = pracownik.description;
    this.workDay = pracownik.workDay;
  }
}
