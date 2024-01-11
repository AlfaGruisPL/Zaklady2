import { SecondTemplate } from 'zakladLib';

export class UstawieniaStronyReklamowejDto {
  stronaReklamowaPrzelacznik: boolean | undefined = false;
  data: FirstTemplate | {} = {};
  template: string | undefined = '';

  constructor(zrodlo: Partial<UstawieniaStronyReklamowej> = {}) {
    console.log(zrodlo);
    switch (zrodlo.template) {
      case 'template1':
        Object.assign(this.data, zrodlo.FirstTemplateData);
        break;
      case 'template2':
        Object.assign(this.data, zrodlo.SecondTemplateData);
        break;
    }
    this.stronaReklamowaPrzelacznik = zrodlo.stronaReklamowaPrzelacznik;
    this.template = zrodlo.template;
  }
}

export class UstawieniaStronyReklamowej {
  template = '';
  stronaReklamowaPrzelacznik: boolean | undefined = false;
  FirstTemplateData = new FirstTemplate();
  SecondTemplateData = new SecondTemplate();

  wstawDane(dane: Partial<UstawieniaStronyReklamowej> | any) {
    this.stronaReklamowaPrzelacznik = dane['wlaczona'];
  }
}

export class FirstTemplate {
  opisZakladuWStopce: string = '';
  logo: string | number = '';
  banner: string | number = '';
}
