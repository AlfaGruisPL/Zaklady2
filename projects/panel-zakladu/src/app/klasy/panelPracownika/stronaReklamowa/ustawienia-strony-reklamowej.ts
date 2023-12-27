export class UstawieniaStronyReklamowejDto {
  stronaReklamowaPrzelacznik: boolean | undefined = false;
  data: FirstTemplate | {} = {};

  constructor(zrodlo: Partial<UstawieniaStronyReklamowej> = {}) {
    switch (zrodlo.template) {
      case 'template1':
        Object.assign(this.data, zrodlo.FirstTemplateData);
        break;
    }
    this.stronaReklamowaPrzelacznik = zrodlo.stronaReklamowaPrzelacznik;
  }
}

export class UstawieniaStronyReklamowej {
  template = '';
  stronaReklamowaPrzelacznik: boolean | undefined = false;
  FirstTemplateData = new FirstTemplate();

  wstawDane(dane: Partial<UstawieniaStronyReklamowej> | any) {
    this.stronaReklamowaPrzelacznik = dane['wlaczona'];
  }
}

export class FirstTemplate {
  opisZakladuWStopce: string = '';
  logo: string | number = '';
  banner: string | number = '';
}
