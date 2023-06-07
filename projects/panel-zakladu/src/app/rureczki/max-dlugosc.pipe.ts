import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'maxDlugosc'
})
export class MaxDlugoscPipe implements PipeTransform {

  transform(value: string, dlugosc: number, znakiPo: string = '...'): unknown {
    if (value.length <= dlugosc) {
      return value;
    } else {
      return value.slice(0, dlugosc) + znakiPo
    }
  }

}
