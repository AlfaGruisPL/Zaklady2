import {dzien, MojZaklad} from "./moj-zaklad";

export class MojZakladDTO {
  public nazwa: string = "";
  public miasto: string = "";
  public nazwaUlicy: string = "";
  public numerDomu: string = "";
  public opisZakladu: string = "";
  public dataZalozenia?: Date = new Date();
  public kodPocztowy: string = "";
  public wojewodztwo: string = "";
  public niedziela: dzienDTO;
  public poniedzialek: dzienDTO;
  public wtorek: dzienDTO;
  public sroda: dzienDTO;
  public czwartek: dzienDTO;
  public piatek: dzienDTO;
  public sobota: dzienDTO;


  public wysokosc: string = '';
  public szerokosc: string = '';
  public nip: string = "";
  public regon: string = ""

  public email: string = "";
  public numerTelefonu: string = "";

  constructor(mojZakladKlasa: MojZaklad) {
    this.nazwa = mojZakladKlasa.nazwa;
    this.miasto = mojZakladKlasa.miasto;
    this.nazwaUlicy = mojZakladKlasa.nazwaUlicy;
    this.numerDomu = mojZakladKlasa.numerDomu;
    this.opisZakladu = mojZakladKlasa.opisZakladu;
    this.dataZalozenia = mojZakladKlasa.dataZalozenia;
    this.kodPocztowy = mojZakladKlasa.kodPocztowy1 + "-" + mojZakladKlasa.kodPocztowy2;
    this.wojewodztwo = mojZakladKlasa.wojewodztwo;
    this.niedziela = new dzienDTO(mojZakladKlasa.niedziela);
    this.poniedzialek = new dzienDTO(mojZakladKlasa.poniedzialek);
    this.wtorek = new dzienDTO(mojZakladKlasa.wtorek);
    this.sroda = new dzienDTO(mojZakladKlasa.sroda);
    this.czwartek = new dzienDTO(mojZakladKlasa.czwartek);
    this.piatek = new dzienDTO(mojZakladKlasa.piatek);
    this.sobota = new dzienDTO(mojZakladKlasa.sobota);
    this.nip = mojZakladKlasa.nip
    this.regon = mojZakladKlasa.regon
    this.wysokosc = mojZakladKlasa.wysokosc
    this.szerokosc = mojZakladKlasa.szerokosc
    this.email = mojZakladKlasa.email
    this.numerTelefonu = mojZakladKlasa.numerTelefonu
  }

}

export class dzienDTO {
  public otwarcie: string = "";
  public zamkniecie: string = "";
  public nieczynnyDzien: boolean = false;

  constructor(dzienKlasa: dzien) {
    this.otwarcie = dzienKlasa.otwarcie;
    this.zamkniecie = dzienKlasa.zamkniecie;
    this.nieczynnyDzien = dzienKlasa.nieczynnyDzien;
  }
}