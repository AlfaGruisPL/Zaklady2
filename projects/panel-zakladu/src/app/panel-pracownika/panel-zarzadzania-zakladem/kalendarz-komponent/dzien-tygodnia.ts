export class DzienTygodnia {
  dzien: number = 0;
  nazwa: string = '-----';
  data: Date = new Date();
  nazwaAng: string;

  constructor(dzien: number, nazwa: string, nazwaAng: string) {
    this.dzien = dzien;
    this.nazwa = nazwa;
    this.nazwaAng = nazwaAng;
    this.ustawDate();
  }

  samaData() {
    const k = this.data;
    const miesiac = k.getMonth() + 1 < 10 ? '0' + (k.getMonth() + 1) : k.getMonth() + 1;
    const dzien = k.getDate() < 10 ? '0' + k.getDate() : k.getDate();
    return dzien + '.' + miesiac + '.' + k.getFullYear();
  }

  ustawDate() {
    const teraz = this.data;
    const currentDayOfWeek = teraz.getDay();
    const daysToSubtract = (currentDayOfWeek + 6) % 7;
    this.data.setDate(this.data.getDate() - daysToSubtract + this.dzien);
  }
}

export const dniTygodnia = [
  new DzienTygodnia(0, 'Poniedziałek', 'Monday'),
  new DzienTygodnia(1, 'Wtorek', 'Tuesday'),
  new DzienTygodnia(2, 'Środa', 'Wednesday'),
  new DzienTygodnia(3, 'Czwartek', 'Thursday'),
  new DzienTygodnia(4, 'Piątek', 'Friday'),
  new DzienTygodnia(5, 'Sobota', 'Saturday'),
  new DzienTygodnia(6, 'Niedziela', 'Sunday'),
];
