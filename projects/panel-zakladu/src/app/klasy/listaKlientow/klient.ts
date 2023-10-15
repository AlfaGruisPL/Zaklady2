import { Wizyta } from '../panelPracownika/wizyta';

export class Klient {
  numer = 0;
  firstName = '';
  lastName = '';
  phone = '';
  email = '';
  wizyty: Wizyta[] = [];
  wizytWZakladzie: Wizyta[] = [];

  constructor(klientTmp: Partial<Klient>) {
    const { wizyty, wizytWZakladzie, ...resztaPol } = klientTmp;
    klientTmp.wizyty?.forEach(wizyta => {
      this.wizyty.push(new Wizyta(wizyta));
    });
    klientTmp.wizytWZakladzie?.forEach(wizyta => {
      this.wizytWZakladzie.push(new Wizyta(wizyta));
    });
    Object.assign(this, resztaPol);
  }

  dataOstatniejWizyty() {
    this.wizyty.sort((k, k2) => {
      return k.poczatek > k2.poczatek ? 1 : -1;
    });
    return this.wizyty[0].poczatek;
  }
}
