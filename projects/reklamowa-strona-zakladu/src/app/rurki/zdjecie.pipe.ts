import {Pipe, PipeTransform} from '@angular/core';
import {NawigacjaService} from "../serwisy/nawigacja.service";

@Pipe({
  name: 'zdjecie'
})
export class ZdjeciePipe implements PipeTransform {
  constructor(private nav: NawigacjaService) {
  }

  transform(value: unknown, ...args: unknown[]): string {
    return value + "?random=" + this.nav.losowaLiczba;
  }

}
