import { Pracownik } from './pracownicy/pracownik';

export class Wizyta {
  dataPotwierdzenia = null;
  email = '';
  id = 0;
  imie = '';
  kodWeryfikacyjny = '';
  nazwisko = '';
  numerTelefonu = '';
  potwierdzone = true;
  dataUtworzenia = new Date();
  koniec = new Date();
  poczatek = new Date();
  cena: number | undefined;
  uslugi: string | undefined;
  uslugiTab: UslugiMini[] = [];
  pracownik: Pracownik = new Pracownik();
  dataOdwolania: Date = new Date();
  kodOdwolania: string = '';
  tryb: string = '';

  constructor(k: Partial<Wizyta>) {
    Object.assign(this, k);
    this.poczatek = new Date(this.poczatek);
    this.koniec = new Date(this.koniec);
    if (k.uslugi != undefined) {
      this.uslugi = k.uslugi;
      const stringUslugiTab = k.uslugi.split('/%nest%/');
      stringUslugiTab.forEach(usluga => {
        const k2 = new UslugiMini();
        k2.cena = Number(usluga.split('/%nestCena%/')[1]);
        k2.nazwa = usluga.split('/%nestCena%/')[0];
        if (k2.nazwa.length > 0) {
          this.uslugiTab.push(k2);
        }
      });
    }

    if (k.cena != undefined) {
      this.cena = k.cena;
    }
  }
}

export class UslugiMini {
  id = 0;
  nazwa = '';
  cena = 0;
}
