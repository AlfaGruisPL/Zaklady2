export class LogowanieKlienta {
  public email: string = "";
  public haslo: string = "";
  public czyEmailWpisany: boolean = true;
  public czyHasloWpisane: boolean = true;
  public czyWszystkieDaneWpisane: boolean = true;
  public czyDaneGotoweDoWyslania: boolean = true;
  public czyKontoPotwierdzone = true;

  public czyPrawidloweDane: boolean = true;
  public czyWolnoLogowac = true;
  public nieznanyBlad = false

  public czyHasloWpisaneFunkcja() {
    this.czyHasloWpisane = true;
    if (this.haslo.length <= 0) {
      this.czyHasloWpisane = false;
      this.czyWszystkieDaneWpisane = false;
    } else {
      this.czyHasloWpisane = true;
      //this.czyWszystkieDaneWpisane = true;
    }
    return this.czyHasloWpisane;
  }

  public czyEmailWpisanyFunkcja() {
    this.czyEmailWpisany = true;

    if (this.email.length <= 0) {
      this.czyEmailWpisany = false;
      this.czyWszystkieDaneWpisane = false;
    } else {
      this.czyEmailWpisany = true;
      //this.czyWszystkieDaneWpisane = true;
    }
    return this.czyEmailWpisany;
  }


  public czyDaneGotoweDoWyslaniaFunkcja(): boolean {
    this.czyDaneGotoweDoWyslania = true;
    if (!this.czyHasloWpisane || !this.czyEmailWpisany) {
      this.czyDaneGotoweDoWyslania = false;
    } else {
      this.czyDaneGotoweDoWyslania = true;
    }
    return this.czyDaneGotoweDoWyslania;
  }

  public funkcje() {
    this.czyWszystkieDaneWpisane = true;
    this.czyHasloWpisaneFunkcja();
    this.czyEmailWpisanyFunkcja();

  }


}
