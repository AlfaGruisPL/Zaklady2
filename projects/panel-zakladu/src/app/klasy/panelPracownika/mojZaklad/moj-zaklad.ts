export class MojZaklad {
  public nazwa: string = '';
  public miasto: string = '';
  public nazwaUlicy: string = '';
  public numerDomu: string = '';
  public numerLokalu: string = '';
  public opisZakladu: string = '';
  public dataZalozenia?: Date;
  public kodPocztowy1: string = '';
  public kodPocztowy2: string = '';
  public wojewodztwo: string = '';
  public powiat: string = '';
  public wies: string = '';
  public niedziela: dzien = new dzien();
  public poniedzialek: dzien = new dzien();
  public wtorek: dzien = new dzien();
  public sroda: dzien = new dzien();
  public czwartek: dzien = new dzien();
  public piatek: dzien = new dzien();
  public sobota: dzien = new dzien();
  public iloscPracownikow = 0;
  public adresCzyWyswietlic = false;
  public nipCzyWyswietlic = false;
  public regonCzyWyswietlic = false;
  public emailCzyWyswietlic = false;
  public telefonCzyWyswietlic = false;
  public godzinyCzyWyswietlic = false;
  public opisCzyWyswietlic = false;
  public uslugiCzyWyswietlic = false;
  public dataZalozeniayCzyWyswietlic = false;
  public mapaCzyWyswietlic = false;
  public iloscPracownikowCzyWyswietlic = false
  public daneZakladuCzyWyswietlic = false
  public naszKontaktCzyWyswietlic = false;

  public wysokosc: string = '';
  public szerokosc: string = '';
  public nip: string = '';
  public regon: string = '';
  public email: string = '';
  public prefiksTelefonu = '';
  public numerTelefonu: string = '';
}

export class dzien {
  public otwarcie: string = '';
  public zamkniecie: string = '';
  public czynnyDzien: boolean = true;

  public nieczynne() {
    this.czynnyDzien = false;
  }

  public czynne() {
    this.czynnyDzien = true;
  }
}

export class GodzinyOtwarcia {
  public niedziela: dzien = new dzien();
  public poniedzialek: dzien = new dzien();
  public wtorek: dzien = new dzien();
  public sroda: dzien = new dzien();
  public czwartek: dzien = new dzien();
  public piatek: dzien = new dzien();
  public sobota: dzien = new dzien();
}
