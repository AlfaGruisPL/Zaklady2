export class MojZaklad {
  public nazwa: string = "";
  public miasto: string = "";
  public nazwaUlicy: string = "";
  public numerDomu: string = "";
  public numerLokalu: string = "";
  public opisZakladu: string = "";
  public dataZalozenia?: Date;
  public kodPocztowy1: string = "";
  public kodPocztowy2: string = "";
  public wojewodztwo: string = "";
  public niedziela: dzien = new dzien();
  public poniedzialek: dzien = new dzien();
  public wtorek: dzien = new dzien();
  public sroda: dzien = new dzien();
  public czwartek: dzien = new dzien();
  public piatek: dzien = new dzien();
  public sobota: dzien = new dzien();

  public wysokosc: string = '';
  public szerokosc: string = '';
  public nip: string = "";
  public regon: string = ""
  public email: string = "";
  public numerTelefonu: string = "";


  public czyWszystkoUzupelnione: boolean = true;

  public czyWszystkieWymaganePolaUzupelnione(): boolean {
    this.czyWszystkoUzupelnione = true;
    if (this.nazwa.length <= 0) {
      this.czyWszystkoUzupelnione = false;
    }
    return this.czyWszystkoUzupelnione;
  }

  przepiszZApi() {

  }


}

export class dzien {
  public otwarcie: string = "";
  public zamkniecie: string = "";
  public nieczynnyDzien: boolean = true;


  public nieczynne() {
    this.nieczynnyDzien = false;
  }

  public czynne() {
    this.nieczynnyDzien = true;
  }


}
