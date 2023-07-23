import {Wizyta} from "../panelPracownika/wizyta";

export class Klient {
  numer = 0
  imie = ''
  nazwisko = ''
  numerTelefonu = ''
  email = ''
  wizyty: Wizyta[] = []

  constructor(klientTmp: Partial<Klient>) {
    const {wizyty, ...resztaPol} = klientTmp;
    klientTmp.wizyty?.forEach(wizyta => {
      this.wizyty.push(new Wizyta(wizyta))
    })
    Object.assign(this, resztaPol);
  }
}
