import { environment } from 'projects/panel-zakladu/src/environments/environment';
import { usluga } from '../../../../../klasy/dane-podstawowe';
import { Termin } from '../kalendarz/termin';

export class DaneKlienta {
  public imie: string = '';
  public nazwisko: string = '';
  public prefiksTelefonu: string = '';
  public numerTelefonu: string = '';
  public email: string = '';
  public wybranyPracownik: number | undefined = undefined;
  public niewybranyPracownik: boolean = false;
  public uslugi: Array<usluga> = []; //wszystkie uslugi pobierane z api
  public kodWeryfikacja: string = '';
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
  public wszystkieTerminy: Array<Termin> = [];

  constructor() {
    // informacje do rejestracji
    if (!environment.production) {
      this.imie = 'Korneliia';
      this.nazwisko = 'Mushak';
      this.prefiksTelefonu = '+48';
      this.numerTelefonu = '530322879';
      this.email = 'korneliamushak@gmail.com';
      this.wybranyPracownik = 183;
      this.kodWeryfikacja = '8';
    }
  }

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
    });
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
  public poczatek: Date = new Date();
  public koniec: Date = new Date();
  public uslugiId: number[] = [];
  public pracownikId: number | undefined = 0;

  constructor(daneKlienta: DaneKlienta) {
    this.imie = daneKlienta.imie;
    this.nazwisko = daneKlienta.nazwisko;
    this.numerTelefonu =
      daneKlienta.prefiksTelefonu + '-' + daneKlienta.numerTelefonu;
    this.email = daneKlienta.email;
    this.pracownikId = daneKlienta.wybranyPracownik;
    const k = daneKlienta.wybranyTermin;
    if (k) {
      this.poczatek = k.poczatek;
      this.koniec = k.koniec;
    }
    daneKlienta.uslugi.forEach(usluga => {
      if (usluga.wybrane) {
        this.uslugiId.push(usluga.id);
      }
    });
  }
}
