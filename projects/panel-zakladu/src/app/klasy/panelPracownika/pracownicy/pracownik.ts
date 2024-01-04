export class Pracownik {
  public id: number = 0;
  public imie: string = '';
  public nazwisko: string = '';
  public adresEmail: string = '';
  public numerTelefonu: string = '';
  public prefiksTelefonu: string = '';
  public potwierdzony = false;
  public adres: {
    miasto: string;
    ulica: string;
    nrLokalu: string;
    nrDomu: string;
    wojewodztwo: string;
    kodPocztowy1: string;
    kodPocztowy2: string;
  };
  public ilosKlientow: number = 0;

  public archived = true;
  public urlop: boolean = false;

  public imiePuste: boolean = false;
  public nazwiskoPuste: boolean = false;
  public adresEmailPuste: boolean = false;
  public numerTelefonuPuste: boolean = false;
  public prefiksTelefonuPuste: boolean = false;
  public miastoPuste: boolean = false;
  public ulicaPuste: boolean = false;
  public nrDomuPuste: boolean = false;
  public wojewodztwoPuste: boolean = false;
  public kodPocztowy1Puste: boolean = false;
  public kodPocztowy2Puste: boolean = false;
  public czyWszystkoWpisane: boolean = true;
  public zdjecieProfiloweId = 0;
  public description = '';
  public workDay = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  };
  private socialMedia_ = {
    telegram: '',
    facebook: '',
    instagram: '',
    twitter: '',
  };

  constructor() {
    this.adres = {
      miasto: '',
      ulica: '',
      nrLokalu: '',
      nrDomu: '',
      wojewodztwo: '',
      kodPocztowy1: '',
      kodPocztowy2: '',
    };
  }

  get socialMedia() {
    if (this.socialMedia_ != null) {
      return this.socialMedia_;
    }
    return {
      telegram: '',
      facebook: '',
      instagram: '',
      twitter: '',
    };
  }

  set socialMedia(k) {
    this.socialMedia_ = k;
  }

  public czyWszystkoWpisaneFunkcja() {
    this.imiePuste = false;
    this.nazwiskoPuste = false;
    this.adresEmailPuste = false;
    this.numerTelefonuPuste = false;
    this.prefiksTelefonuPuste = false;
    this.miastoPuste = false;
    this.ulicaPuste = false;
    this.nrDomuPuste = false;
    this.wojewodztwoPuste = false;
    this.kodPocztowy1Puste = false;
    this.kodPocztowy2Puste = false;
    this.czyWszystkoWpisane = true;
    if (this.imie.length <= 0) {
      this.imiePuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.nazwisko.length <= 0) {
      this.nazwiskoPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adresEmail.length <= 0) {
      this.adresEmailPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.numerTelefonu.length <= 0) {
      this.numerTelefonuPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.prefiksTelefonu.length <= 0) {
      this.prefiksTelefonuPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.miasto.length <= 0) {
      this.miastoPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.ulica.length <= 0) {
      this.ulicaPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.wojewodztwo.length <= 0) {
      this.wojewodztwoPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.nrDomu.length <= 0) {
      this.nrDomuPuste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.kodPocztowy1.length <= 0) {
      this.kodPocztowy1Puste = true;
      this.czyWszystkoWpisane = false;
    }
    if (this.adres.kodPocztowy2.length <= 0) {
      this.kodPocztowy2Puste = true;
      this.czyWszystkoWpisane = false;
    }
    return this.czyWszystkoWpisane;
  }
}
