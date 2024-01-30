import { Wizyta } from '../panelPracownika/wizyta';

export class Klient {
  numer = 0;
  id = 0;
  firstName = '';
  lastName = '';
  phone = '';
  email = '';
  wizyty: Wizyta[] = [];
  wizytWZakladzie: Wizyta[] = [];
  cust_create_time: Date | undefined;
  visitCount = 0;

  constructor(klientTmp: Partial<Klient>) {
    const { wizyty, wizytWZakladzie, ...resztaPol } = klientTmp;
    klientTmp.wizyty?.forEach(wizyta => {
      this.wizyty.push(new Wizyta(wizyta));
    });
    klientTmp.wizytWZakladzie?.forEach(wizyta => {
      this.wizytWZakladzie.push(new Wizyta(wizyta));
    });
    this.wizytWZakladzie.sort((k1, k2) => (k1.poczatek.getTime() > k2.poczatek.getTime() ? -1 : 1));
    Object.assign(this, resztaPol);
  }

  dataOstatniejWizyty() {
    if (this.wizyty.length == 0) return new Date();
    this.wizyty.sort((k, k2) => {
      return k.poczatek > k2.poczatek ? 1 : -1;
    });
    return this.wizyty[0].poczatek;
  }
}
