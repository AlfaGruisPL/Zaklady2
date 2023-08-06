export class UstawieniaStronyReklamowejDto {
  stronaReklamowaPrzelacznik: boolean | undefined = false;

  constructor(zrodlo: Partial<UstawieniaStronyReklamowej> = {}) {
    this.stronaReklamowaPrzelacznik = zrodlo.stronaReklamowaPrzelacznik
  }
}

export class UstawieniaStronyReklamowej extends UstawieniaStronyReklamowejDto {

  constructor() {
    super()
  }

  wstawDane(dane: Partial<UstawieniaStronyReklamowej> | any) {
    this.stronaReklamowaPrzelacznik = dane['wlaczona']
  }
}


