export class Wizyta {
  dataPotwierdzenia = null
  email = ""
  id = 0
  imie = ""
  kodWeryfikacyjny = ""
  nazwisko = ""
  numerTelefonu = ""
  potwierdzone = true
  terminKoniec = new Date();
  terminPoczatek = new Date();
  cena: number | undefined;
  uslugi: string | undefined;
  uslugiTab: UslugiMini[] = []

  constructor(k: Partial<Wizyta>) {
    this.terminPoczatek = new Date(this.terminPoczatek)
    this.terminKoniec = new Date(this.terminKoniec)
    // @ts-ignore
    if (k['dataPoczatek'] != undefined) {    // @ts-ignore
      this.terminPoczatek = new Date(k['dataPoczatek'])    // @ts-ignore
      this.terminKoniec = new Date(k['dataKoniec'])
    }

    // @ts-ignore
    if (k['terminPoczatek'] != undefined) {    // @ts-ignore
      this.terminPoczatek = new Date(k['terminPoczatek'])    // @ts-ignore
      this.terminKoniec = new Date(k['terminKoniec'])
    }
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
