export class DzienTygodnia {
  dzien: number = 0;
  nazwa: string = '-----';
  data: Date = new Date();

  samaData() {
    const k = this.data;
    const miesiac = k.getMonth() + 1 < 10 ? '0' + (k.getMonth() + 1) : k.getMonth() + 1;
    const dzien = k.getDate() < 10 ? '0' + k.getDate() : k.getDate();
    return dzien + '.' + miesiac + '.' + k.getFullYear();
  }

  ustawDate() {
    const teraz = this.data;
    const dzienDzis = teraz.getDate() - teraz.getDay() - (6 - teraz.getDay());
    this.data = new Date(teraz.setDate(dzienDzis - (teraz.getDay() - 1) + this.dzien));
  }

  constructor(dzien: number, nazwa: string) {
    this.dzien = dzien;
    this.nazwa = nazwa;
    this.ustawDate();
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
