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

  public listaPracownikow: any[] = [];
  public mozliwoscPlatnosciKarta = false;
  public platnosci = {
    blik: false,
    Visa: false,
    Apple_Pay: false,
    MasterCard: false,
    Google_Pay: false,
  };
  data = {
    banner: '',
    logo: '',
    opisZakladuWStopce: '',
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
  public address = false;
  public nip = false;
  public regon = false;
  public email = false;
  public phone = false;
  public hours = false;
  public opisCzyWyswietlic = false;
  public establishmentDate = false;
  public map = false;
  public services = false;
  public numberOfEmployees = false;
  public companyData = false;
  public ourContact = false;
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
  public title: string = '';
  public price: string = '';
  public employees: Array<number> = [];
  public wybrane = false;
}
