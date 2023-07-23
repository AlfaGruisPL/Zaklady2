import {usluga} from "../../../../../klasy/dane-podstawowe";
import {Termin} from "../kalendarz/termin";

export class DaneKlienta {
  public imie: string = 'Korneliia';
  public nazwisko: string = 'Mushak';
  public prefiksTelefonu: string = '+48';
  public numerTelefonu: string = '530322879';
  public email: string = 'korneliamushak@gmail.com';
  public wybranyPracownik: number | undefined = 183;
  public niewybranyPracownik: boolean = false;
  public uslugi: Array<usluga> = []; //wszystkie uslugi pobierane z api
  public kodWeryfikacja: string = '8';
  public identyfikator: string = '';
  public kodWeryfikacjaPusty: boolean = false;
  public czyWszystkoUzupelnione: boolean = true;
  public imiePuste: boolean = false;
  public nazwiskoPuste: boolean = false;
  public numerTelefonuPusty: boolean = false;
  public adresEmailPusty: boolean = false;
  public daneNieWyslane: boolean = false;
  public niepoprawnyKod: boolean = false;
  public wybranyTermin: Termin | undefined;
  public wszystkieTerminy: Array<Termin> = []

  public czyKodWerifikacjaWpisany() {
    this.kodWeryfikacjaPusty = false;
    if (this.kodWeryfikacja.length <= 0) {
      this.kodWeryfikacjaPusty = true;
    } else {
      this.kodWeryfikacjaPusty = false;
    }
    return this.kodWeryfikacjaPusty;
  }

  public czyWszystkoUzupelnioneFunkcja() {
    this.czyWszystkoUzupelnione = true;
    this.imiePuste = false;
    this.nazwiskoPuste = false;
    this.numerTelefonuPusty = false;
    this.adresEmailPusty = false;

    if (this.imie.length <= 0) {
      this.imiePuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.nazwisko.length <= 0) {
      this.nazwiskoPuste = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.numerTelefonu.length <= 0) {
      this.numerTelefonuPusty = true;
      this.czyWszystkoUzupelnione = false;
    }
    if (this.email.length <= 0) {
      this.adresEmailPusty = true;
      this.czyWszystkoUzupelnione = false;
    }
    return this.czyWszystkoUzupelnione;
  }

  public czyWybranyPracownik() {
    this.niewybranyPracownik = false;
    if (this.wybranyPracownik == undefined) {
      this.niewybranyPracownik = true;
    }
    return this.niewybranyPracownik;
  }
}

export class pracownikUslugiDTO {
  public pracownikId: number = 0;
  public uslugiId: Array<number> = [];

  constructor(pracownikUslugi: DaneKlienta) {

    pracownikUslugi.uslugi.forEach(usluga => {
      if (usluga.wybrane) {
        this.uslugiId.push(usluga.id);
      }
    })
    if (pracownikUslugi.wybranyPracownik != undefined) {
      this.pracownikId = pracownikUslugi.wybranyPracownik;
    }

  }
}

export class DaneKlientaDTO {
  public imie: string = '';
  public nazwisko: string = '';
  public numerTelefonu: string = '';
  public email: string = '';
  public poczatek: number = 0
  public koniec: number = 0
  public uslugiId: number[] = []
  public pracownikId: number | undefined = 0;

  constructor(daneKlienta: DaneKlienta) {
    this.imie = daneKlienta.imie;
    this.nazwisko = daneKlienta.nazwisko;
    this.numerTelefonu =
      daneKlienta.prefiksTelefonu + '-' + daneKlienta.numerTelefonu;
    this.email = daneKlienta.email;
    this.pracownikId = daneKlienta.wybranyPracownik
    const k = daneKlienta.wybranyTermin;
    if (k) {

      this.poczatek = new Date(k.data).setHours(k.poczatek, k.poczatekMinuty)
      this.koniec = new Date(k.data).setHours(k.koniec, k.koniecMinuty)
    }
    daneKlienta.uslugi.forEach(usluga => {
      if (usluga.wybrane) {
        this.uslugiId.push(usluga.id)
      }
    })

  }
}
