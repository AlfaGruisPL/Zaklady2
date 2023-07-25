export class WolnyDzien {
  data = new Date()
  pracownikId = 0;
}

export class Przerwa {
  poczatek = new Date()
  koniec = new Date()
  pracownikId = 0;
  regularne = true

  constructor(dane: Partial<Przerwa>) {
    if (dane.poczatek) this.poczatek = new Date(dane.poczatek)
    if (dane.koniec) this.koniec = new Date(dane.koniec)
    if (dane.pracownikId) this.pracownikId = dane.pracownikId
    if (dane.regularne) this.regularne = dane.regularne
  }
}

export class PrzerwaDto {
  poczatek = new Date()
  koniec = new Date()
  pracownikId = 0;
  regularne = true

  wpiszDane(dane: Przerwa) {
    Object.assign(this, dane)
  }
}
