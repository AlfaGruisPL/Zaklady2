export class DzienWolny {
  data = new Date();
  pracownikId = 0;
  regularne = true;
  id = 0;
  opis = '';

  constructor(Dane: Partial<DzienWolny>) {
    Object.assign(this, Dane);
    this.data = new Date(this.data);
  }
}

export class DzienWolnyDto {
  data = new Date();
  regularne: boolean | undefined = true;

  constructor(Dane: Partial<DzienWolny>) {
    this.regularne = Dane.regularne;
    this.data = new Date(this.data);
  }
}
