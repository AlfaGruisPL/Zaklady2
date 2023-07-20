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

  constructor(k: Partial<Wizyta>) {
    Object.assign(this, k)
    this.terminPoczatek = new Date(this.terminPoczatek)
    this.terminKoniec = new Date(this.terminKoniec)

    // @ts-ignore
    if (k['dataPoczatek'] != undefined) {    // @ts-ignore
      this.terminPoczatek = new Date(k['dataPoczatek'])    // @ts-ignore
      this.terminKoniec = new Date(k['dataKoniec'])
    }

  }
}
