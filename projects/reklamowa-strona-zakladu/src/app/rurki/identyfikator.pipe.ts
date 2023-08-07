import {Pipe, PipeTransform} from '@angular/core';
import {ListyService} from "../serwisy/listy.service";

@Pipe({
  name: 'identyfikator'
})
export class IdentyfikatorPipe implements PipeTransform {
  constructor(private listy: ListyService) {
  }

  transform(value: string, ...args: unknown[]): string {
    if (this.listy.identyfikatorWParametrze == '') {
      return value
    } else {
      return value + '&identyfikator=' + this.listy.identyfikatorWParametrze;

    }
  }

}
