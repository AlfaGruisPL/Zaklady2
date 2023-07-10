import {dzien, MojZaklad} from './moj-zaklad';

export class MojZakladDTO {
  public nazwa: string = '';
  public miasto: string = '';
  public nazwaUlicy: string = '';
  public numerDomu: string = '';
  public numerLokalu: string = '';
  public opisZakladu: string = '';
  public dataZalozenia?: Date = new Date();
  public kodPocztowy: string = '';
  public wojewodztwo: string = '';
  public powiat: string = '';
  public wies: string = '';
  public niedziela: dzienDTO;
  public poniedzialek: dzienDTO;
  public wtorek: dzienDTO;
  public sroda: dzienDTO;
  public czwartek: dzienDTO;
  public piatek: dzienDTO;
  public sobota: dzienDTO;

  public adresCzyWyswietlic = false;
  public nipCzyWyswietlic = false;
  public regonCzyWyswietlic = false;
  public emailCzyWyswietlic = false;
  public telefonCzyWyswietlic = false;
  public opisCzyWyswietlic = false;
  public uslugiCzyWyswietlic = false;
  public dataZalozeniayCzyWyswietlic = false;
  public mapaCzyWyswietlic = false;
  public godzinyCzyWyswietlic = false;
  public iloscPracownikowCzyWyswietlic = false
  public daneZakladuCzyWyswietlic = false
  public naszKontaktCzyWyswietlic = false;
  public wysokosc: string = '';
  public szerokosc: string = '';
  public nip: string = '';
  public regon: string = '';

  public email: string = '';
  public numerTelefonu: string = '';

  constructor(mojZakladKlasa: MojZaklad) {
    this.nazwa = mojZakladKlasa.nazwa;
    this.miasto = mojZakladKlasa.miasto;
    this.nazwaUlicy = mojZakladKlasa.nazwaUlicy;
    this.numerDomu = mojZakladKlasa.numerDomu;
    this.numerLokalu = mojZakladKlasa.numerLokalu;
    this.opisZakladu = mojZakladKlasa.opisZakladu;
    this.dataZalozenia = mojZakladKlasa.dataZalozenia;
    this.kodPocztowy =
      mojZakladKlasa.kodPocztowy1 + '-' + mojZakladKlasa.kodPocztowy2;
    this.wojewodztwo = mojZakladKlasa.wojewodztwo;
    this.niedziela = new dzienDTO(mojZakladKlasa.niedziela);
    this.poniedzialek = new dzienDTO(mojZakladKlasa.poniedzialek);
    this.wtorek = new dzienDTO(mojZakladKlasa.wtorek);
    this.sroda = new dzienDTO(mojZakladKlasa.sroda);
    this.czwartek = new dzienDTO(mojZakladKlasa.czwartek);
    this.piatek = new dzienDTO(mojZakladKlasa.piatek);
    this.sobota = new dzienDTO(mojZakladKlasa.sobota);
    this.nip = mojZakladKlasa.nip;
    this.regon = mojZakladKlasa.regon;
    this.wysokosc = mojZakladKlasa.wysokosc;
    this.szerokosc = mojZakladKlasa.szerokosc;
    this.email = mojZakladKlasa.email;
    this.numerTelefonu =
      mojZakladKlasa.prefiksTelefonu + '-' + mojZakladKlasa.numerTelefonu;
    this.powiat = mojZakladKlasa.powiat;
    this.wies = mojZakladKlasa.wies;

    this.adresCzyWyswietlic = mojZakladKlasa.adresCzyWyswietlic;
    this.nipCzyWyswietlic = mojZakladKlasa.nipCzyWyswietlic;
    this.regonCzyWyswietlic = mojZakladKlasa.regonCzyWyswietlic;
    this.emailCzyWyswietlic = mojZakladKlasa.emailCzyWyswietlic;
    this.telefonCzyWyswietlic = mojZakladKlasa.telefonCzyWyswietlic;
    this.opisCzyWyswietlic = mojZakladKlasa.opisCzyWyswietlic;
    this.uslugiCzyWyswietlic = mojZakladKlasa.uslugiCzyWyswietlic;
    this.dataZalozeniayCzyWyswietlic =
      mojZakladKlasa.dataZalozeniayCzyWyswietlic;
    this.mapaCzyWyswietlic = mojZakladKlasa.mapaCzyWyswietlic;
    this.godzinyCzyWyswietlic = mojZakladKlasa.godzinyCzyWyswietlic;

    this.iloscPracownikowCzyWyswietlic = mojZakladKlasa.iloscPracownikowCzyWyswietlic;
    this.daneZakladuCzyWyswietlic = mojZakladKlasa.daneZakladuCzyWyswietlic;
    this.naszKontaktCzyWyswietlic = mojZakladKlasa.naszKontaktCzyWyswietlic;
  }
}

export class dzienDTO {
  public otwarcie: string = '';
  public zamkniecie: string = '';
  public czynnyDzien: boolean = false;

  constructor(dzienKlasa: dzien) {
    this.otwarcie = dzienKlasa.otwarcie;
    this.zamkniecie = dzienKlasa.zamkniecie;
    this.czynnyDzien = dzienKlasa.czynnyDzien;
    console.log(this);
  }
}
