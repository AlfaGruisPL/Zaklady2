export class UstawieniaStronyReklamowejDto {
  stronaReklamowaPrzelacznik: boolean | undefined = false;
  opisZakladuWStopce: string | undefined = '';

  constructor(zrodlo: Partial<UstawieniaStronyReklamowej> = {}) {
    this.stronaReklamowaPrzelacznik = zrodlo.stronaReklamowaPrzelacznik;
    this.opisZakladuWStopce = zrodlo.opisZakladuWStopce;
  }
}

export class UstawieniaStronyReklamowej extends UstawieniaStronyReklamowejDto {
  constructor() {
    super();
  }

  wstawDane(dane: Partial<UstawieniaStronyReklamowej> | any) {
    this.stronaReklamowaPrzelacznik = dane['wlaczona'];
    this.opisZakladuWStopce = dane['opisZakladuWStopce'];
  }
}
