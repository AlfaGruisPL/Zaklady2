import passwordValidator from "password-validator";
import * as EmailValidator from 'email-validator';

export class RejestracjaKlienta {
  public imie: string = "";
  public nazwisko: string = "";
  public numerTelefonu: string = "";
  public prefiks: string = "+48";
  public adresEmail: string = "";
  public rodo: boolean = false;
  public regulamin: boolean = false;

  public imiePuste: boolean = false;
  public nazwiskoPuste: boolean = false;
  public numerTelefonuPuste: boolean = false;
  public adresEmailPuste: boolean = false;
  public rodoPuste: boolean = false;
  public regulaminPusty: boolean = false;

  public imiePoprawne: boolean = true;
  public nazwiskoPoprawne: boolean = true;
  public numerTelefonuPoprawne: boolean = true;
  public adresEmailPoprawne: boolean = true;


  public haslo1: string = "";
  public haslo2: string = "";
  public haslo1puste: boolean = false;
  public haslo2puste: boolean = false;
  public czyHaslaTakieSame: boolean = true;
  public czyWszystkieDaneWpisane: boolean = true;
  public czyHaslaSpelniajaWymagania: boolean = true;
  public emailJuzZajestrowanyKomunikat: boolean = false;
  public numerTelefonuZarejestrowanyKomunikat: boolean = false;


  public podgladWlaczJeden: boolean = false;
  public podgladWlaczDwa: boolean = false;


  public czyDwaHaslaWpisane: boolean = true;

  public daneWTrakcieWysylania = false;

  public czyWszystkieDaneSaWpisane(): boolean {
    this.czyHaslaSpelniajaWymagania = true;
    this.czyWszystkieDaneWpisane = true;
    this.imiePuste = false;
    this.nazwiskoPuste = false;
    this.numerTelefonuPuste = false;
    this.adresEmailPuste = false;
    this.rodoPuste = false;
    this.regulaminPusty = false;
    this.czyHaslaTakieSame = true;

    if (this.imie.length <= 0) {
      this.imiePuste = true;
      this.czyWszystkieDaneWpisane = false;
    }


    if (this.nazwisko.length <= 0) {
      this.nazwiskoPuste = true;
      this.czyWszystkieDaneWpisane = false;
    }
    if (this.numerTelefonu.length <= 0) {
      this.numerTelefonuPuste = true;
      this.czyWszystkieDaneWpisane = false;
    }
    if (this.adresEmail.length <= 0) {
      this.adresEmailPuste = true;
      this.czyWszystkieDaneWpisane = false;
    }

    if (!this.rodo) {
      this.rodoPuste = true;
      this.czyWszystkieDaneWpisane = false;
    }
    if (!this.regulamin) {
      this.regulaminPusty = true;
      this.czyWszystkieDaneWpisane = false;
    }
    return this.czyWszystkieDaneWpisane;
  }

  public czyDanePoprawne(): boolean {
    const czyOkej = true;
    this.adresEmailPoprawne = EmailValidator.validate(this.adresEmail);
    const regex = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/gi;
    this.imiePoprawne = regex.test(this.imie)
    const regex2 = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/gi;
    this.nazwiskoPoprawne = regex2.test(this.nazwisko)
    const regex3 = /^[0-9]+$/gi;
    this.numerTelefonuPoprawne = regex3.test(this.numerTelefonu)
    if (this.numerTelefonu.length != 9) {
      this.numerTelefonuPoprawne = false;
    }
    return czyOkej;

  }


  public czyHaslaSaTakieSame() {
    this.czyDwaHaslaWpisane = true;
    this.czyHaslaTakieSame = true;
    if (this.haslo1 != this.haslo2) {
      this.czyHaslaTakieSame = false;
      this.czyDwaHaslaWpisane = true;
      this.czyHaslaSpelniajaWymagania = true;
    } else {

    }
    return this.czyHaslaTakieSame;
  }

  public czyHaslaSpelniajaWymaganiaFunkcja(): boolean {
    this.czyHaslaSpelniajaWymagania = true;
    if (!this.walidacja()) {
      this.czyHaslaSpelniajaWymagania = false;
      this.czyDwaHaslaWpisane = true;
      this.czyHaslaTakieSame = true;
    }
    return this.czyHaslaSpelniajaWymagania;
  }

  public walidacja(): boolean {

    var schema = new passwordValidator();
    schema
      .is().min(8)
      .is().max(100)
      .has().uppercase()
      .has().lowercase()
      .has().digits(1)
      .has().not().spaces()
      .has().symbols(1)


    return <boolean>schema.validate(this.haslo1)
  }

  public czyHaslaPuste(): boolean {
    this.haslo1puste = false;
    this.haslo2puste = false;
    if (this.haslo1.length <= 0) {
      this.haslo1puste = true;
    }
    if (this.haslo2.length <= 0) {
      this.haslo2puste = true;
    }
    return this.haslo1puste || this.haslo2puste

  }

  public czyDwaHaslaWpisaneFunkcja() {
    this.czyHaslaSpelniajaWymagania = true;
    this.czyHaslaTakieSame = true;
    this.czyDwaHaslaWpisane = true;
    if (this.haslo1.length <= 0 || this.haslo2.length <= 0) {
      this.czyDwaHaslaWpisane = false;
    } else {
      this.czyDwaHaslaWpisane = true;
    }
    return this.czyDwaHaslaWpisane;
  }
}
