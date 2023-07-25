import {Pracownik} from "./pracownicy/pracownik";

export class Wizyta {
  dataPotwierdzenia = null
  email = ""
  id = 0
  imie = ""
  kodWeryfikacyjny = ""
  nazwisko = ""
  numerTelefonu = ""
  potwierdzone = true
  koniec = new Date();
  poczatek = new Date();
  cena: number | undefined;
  uslugi: string | undefined;
  uslugiTab: UslugiMini[] = []
  pracownik: Pracownik = new Pracownik();


  constructor(k: Partial<Wizyta>) {
    Object.assign(this, k)
    this.poczatek = new Date(this.poczatek)
    this.koniec = new Date(this.koniec)

    if (k.cena != undefined) {
      this.cena = k.cena
      if (k.uslugi != undefined) {
        this.uslugi = k.uslugi
        const stringUslugiTab = k.uslugi.split("/%nest%/")
        stringUslugiTab.forEach(usluga => {
          const k2 = new UslugiMini()
          k2.cena = Number(usluga.split("/%nestCena%/")[1])
          k2.nazwa = usluga.split("/%nestCena%/")[0]
          if (k2.nazwa.length > 0) {
            this.uslugiTab.push(k2)
          }
        })
      }
    }

  }
}

export class UslugiMini {
  id = 0;
  nazwa = '';
  cena = 0
}
