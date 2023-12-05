export class MojZaklad {
  public nazwa: string = '';
  public miasto: string = '';
  public nazwaUlicy: string = '';
  public numerDomu: string = '';
  public numerLokalu: string = '';
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
  public uslugiCzyWyswietlic = false;
  public dataZalozeniayCzyWyswietlic = false;
  public mapaCzyWyswietlic = false;
  public iloscPracownikowCzyWyswietlic = false;
  public daneZakladuCzyWyswietlic = false;
  public naszKontaktCzyWyswietlic = false;

  mozliwoscPlatnosciKarta = false;
  platnosci = {
    blik: false,
    Visa: false,
    Apple_Pay: false,
    MasterCard: false,
    Google_Pay: false,
  };

  public wysokosc: string = '';
  public szerokosc: string = '';
  public nip: string = '';
  public regon: string = '';
  public email: string = '';
  public prefiksTelefonu = '';
  public numerTelefonu: string = '';
  public identyfikator = '';
}

export class dzien {
  public opening: string = '';
  public closing: string = '';
  public activeDay: boolean = true;

  public nieczynne() {
    this.activeDay = false;
  }

  public czynne() {
    this.activeDay = true;
  }
}

export class GodzinyOtwarcia {
  public sunday: dzien = new dzien();
  public monday: dzien = new dzien();
  public tuesday: dzien = new dzien();
  public wednesday: dzien = new dzien();
  public thursday: dzien = new dzien();
  public friday: dzien = new dzien();
  public saturday: dzien = new dzien();
}
