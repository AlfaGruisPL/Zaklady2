import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kwota',
  standalone: true,
})
export class KwotaPipe implements PipeTransform {
  transform(value: number | undefined): unknown {
    if (value == undefined) return 0;
    return Math.round(value * 100) / 100;
  }
}
