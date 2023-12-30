export class MojeKonto {
  public id = 0;
  public imie: string = '';
  public nazwisko: string = '';
  public prefiks: string = '';
  public numer_telefonu: string = '';
  public email: string = '';
  public zdjecieProfiloweId = 0;
  public adres: {
    wojewodztwo?: string;
    miasto?: string;
    ulica?: string;
    numerDomu?: string;
    numerLokalu?: string;
    kodPocztowy1?: string;
    kodPocztowy2?: string;
  };
  public wpiszNoweHaslo: string = '';
  public powtorzNoweHaslo: string = '';

  public czyHasloWpisane1: boolean = true;
  public czyHasloWpisane2: boolean = true;
  public czyHaslaWpisane: boolean = true;
  public czyHaslaTakieSame: boolean = true;

  public opcjaZmianyHasla: boolean = false;
  public description = '';
  socialMedia = {
    telegram: '',
    facebook: '',
    instagram: '',
    twitter: '',
  };

  constructor() {
    this.adres = {};
  }

  public czyHaslaWpisaneFunkcja() {
    this.czyHaslaTakieSame = true;
    this.czyHasloWpisane1 = true;
    this.czyHasloWpisane2 = true;
    this.czyHaslaWpisane = true;
    if (this.wpiszNoweHaslo.length <= 0) {
      this.czyHasloWpisane1 = false;
      this.czyHaslaWpisane = false;
    }
    if (this.powtorzNoweHaslo.length <= 0) {
      this.czyHasloWpisane2 = false;
      this.czyHaslaWpisane = false;
    }
    return this.czyHaslaWpisane;
  }

  public czyHaslaTakieSameFunkcja() {
    this.czyHaslaTakieSame = true;
    if (this.wpiszNoweHaslo == this.powtorzNoweHaslo) {
      this.czyHaslaTakieSame = true;
    } else {
      this.czyHaslaTakieSame = false;
    }
    return this.czyHaslaTakieSame;
  }
}
