export class NapiszNam {
  public imie: string = "";
  public nazwisko: string = "";
  public adresEmail: string = "";
  public numerTelefonu: string = "";
  public wiadomosc: string = "";

}

export class NapiszNamDto {
  public imie: string = "";
  public nazwisko: string = "";
  public adresEmail: string = "";
  public numerTelefonu: string = "";
  public wiadomosc: string = "";

  constructor(napiszNamKlasa: NapiszNam) {
    this.imie = napiszNamKlasa.imie;
    this.nazwisko = napiszNamKlasa.nazwisko;
    this.adresEmail = napiszNamKlasa.adresEmail;
    this.numerTelefonu = napiszNamKlasa.numerTelefonu;
    this.wiadomosc = napiszNamKlasa.wiadomosc;
  }
}
