export class HarmonogramDaneDlaAdministratora {
  konto = 0;
  zarezerwowaneWizyty = '';
  subskrypcjaDo: Date = new Date();
  wizytyWTymTygodniu = 0;
  wizytyWTymMiesiacu = 0;
  zrealizowaneWizyty = 0;
  wizytyDzis = 0;

  constructor(dane: Partial<HarmonogramDaneDlaAdministratora>) {
    Object.assign(this, dane);
  }

  timeToEndSub() {
    const time = new Date(this.subskrypcjaDo).getTime() - new Date().getTime();
    const calculatedTime = time / (60 * 1000 * 1000);
    return Math.round(calculatedTime * 10) / 10;
  }
}
