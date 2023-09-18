export class DzienTygodnia {
  dzien: number = 0;
  nazwa: string = '-----';
  data: Date = new Date();

  constructor(dzien: number, nazwa: string) {
    this.dzien = dzien;
    this.nazwa = nazwa;
    this.ustawDate();
  }

  samaData() {
    const k = this.data;
    const miesiac = k.getMonth() + 1 < 10 ? '0' + (k.getMonth() + 1) : k.getMonth() + 1;
    const dzien = k.getDate() < 10 ? '0' + k.getDate() : k.getDate();
    return dzien + '.' + miesiac + '.' + k.getFullYear();
  }

  samaDatBR() {
    const k = this.data;
    const miesiac = k.getMonth() + 1 < 10 ? '0' + (k.getMonth() + 1) : k.getMonth() + 1;
    const dzien = k.getDate() < 10 ? '0' + k.getDate() : k.getDate();
    return dzien + '<br>' + miesiac + '<br>' + k.getFullYear();
  }

  ustawDate() {
    const teraz = this.data;
    const currentDayOfWeek = teraz.getDay();
    const daysToSubtract = (currentDayOfWeek + 6) % 7;
    this.data.setDate(this.data.getDate() - daysToSubtract + this.dzien);
  }
}

export const dniTygodnia = [
  new DzienTygodnia(0, 'Poniedziałek'),
  new DzienTygodnia(1, 'Wtorek'),
  new DzienTygodnia(2, 'Środa'),
  new DzienTygodnia(3, 'Czwartek'),
  new DzienTygodnia(4, 'Piątek'),
  new DzienTygodnia(5, 'Sobota'),
  new DzienTygodnia(6, 'Niedziela'),
];
