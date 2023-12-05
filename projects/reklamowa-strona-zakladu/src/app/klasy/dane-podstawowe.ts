export class DanePodstawowe {
  public nazwa: string = '';
  public dataZalozenia: Date = new Date();
  public iloscPracownikow: number = 0;
  public NIP: string = '';
  public REGON: string = '';
  public prefiksTelefonu: string = '';
  public numerTelefonuOgolny: string = '';
  public emailOgolny: string = '';
  public niedziela: dzien = new dzien();
  public poniedzialek: dzien = new dzien();
  public wtorek: dzien = new dzien();
  public sroda: dzien = new dzien();
  public czwartek: dzien = new dzien();
  public piatek: dzien = new dzien();
  public sobota: dzien = new dzien();
  public adres: adres = new adres();
  public uslugi: Array<usluga> = [];
  public wysokosc = 0;
  public szerokosc = 0;
  public opisZakladuWStopce = '';
  public wyswietlaneDane: wyswietlaneDane = new wyswietlaneDane();
  public listaPracownikow: any[] = [];
  public mozliwoscPlatnosciKarta = false;
  public platnosci = {
    blik: false,
    Visa: false,
    Apple_Pay: false,
    MasterCard: false,
    Google_Pay: false,
  };

  czyJakasPlatnosc() {
    for (const argumentsKey in this.platnosci) {
      // @ts-ignore
      if (this.platnosci[argumentsKey] == true) {
        return true;
      }
    }
    return false;
  }
}

export class dzien {
  public opening: string = '';
  public closing: string = '';
  public activeDay: boolean = true;
}

export class wyswietlaneDane {
  public adresCzyWyswietlic = false;
  public nipCzyWyswietlic = false;
  public regonCzyWyswietlic = false;
  public emailCzyWyswietlic = false;
  public telefonCzyWyswietlic = false;
  public godzinyCzyWyswietlic = false;
  public opisCzyWyswietlic = false;
  public dataZalozeniayCzyWyswietlic = false;
  public mapaCzyWyswietlic = false;
  public uslugiCzyWyswietlic = false;
  public iloscPracownikowCzyWyswietlic = false;
  public daneZakladuCzyWyswietlic = false;
  public naszKontaktCzyWyswietlic = false;
}

export class adres {
  public wojewodztwo: string = '';
  public miasto: string = '';
  public numerUlicy: string = '';
  public numerLokalu: string = '';
  public numerDomu: string = '';
  public powiat: string = '';
  public wies: string = '';
  public kodPocztowy: string = '';
}

export class usluga {
  public id: number = 0;
  public nazwa: string = '';
  public cena: string = '';
  public pracownicy: Array<number> = [];
  public wybrane = false;
}
