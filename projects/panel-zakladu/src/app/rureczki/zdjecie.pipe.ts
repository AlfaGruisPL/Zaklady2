import {Pipe, PipeTransform} from '@angular/core';
import {PodreczneDaneService} from "../serwisy/podreczne-dane.service";

@Pipe({
  name: 'zdjecie'
})
export class ZdjeciePipe implements PipeTransform {
  constructor(private dane: PodreczneDaneService) {
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "?random=" + this.dane.losowaLiczba;
  }

}
