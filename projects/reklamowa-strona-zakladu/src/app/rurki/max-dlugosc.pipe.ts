import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxDlugosc',
  standalone: true,
})
export class MaxDlugoscPipe implements PipeTransform {
  transform(value: string | undefined, dlugosc: number, znakiPo: string = '...'): unknown {
    if (!value) return '';
    if (value.length <= dlugosc) {
      return value;
    } else {
      return value.slice(0, dlugosc) + znakiPo;
    }
  }
}
