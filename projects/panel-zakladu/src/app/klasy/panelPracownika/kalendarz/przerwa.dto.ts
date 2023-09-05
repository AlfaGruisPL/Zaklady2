export class Przerwa {
  id: number = 0;
  poczatek = new Date();
  koniec = new Date();
  data: Date | string = new Date();
  pracownikId = 0;
  regularne = false;

  constructor(dane: Partial<Przerwa>) {
    // @ts-ignore
    this.data = new Date(dane.data);
    if (dane.poczatek) {
      const k = dane.poczatek.toString().split(':');

      // @ts-ignore
      this.poczatek = new Date(this.data.setHours(k[0], k[1], k[2]));
    }
    if (dane.koniec) {
      const k = dane.koniec.toString().split(':');

      // @ts-ignore
      this.koniec = new Date(this.data.setHours(k[0], k[1], k[2]));
    }
    if (dane.pracownikId) this.pracownikId = dane.pracownikId;
    if (dane.regularne) this.regularne = dane.regularne;
  }
}

export class PrzerwaDto {
  godzinaRozpoczecia = '';
  godzinaZakonczenia = '';
  dotyczy = 0;
  opis = '';
  regularne = true;
  dniTygodnia: {} = {};
  data: string | null = '';

  wpiszDane(dane: Przerwa) {
    Object.assign(this, dane);
  }
}
