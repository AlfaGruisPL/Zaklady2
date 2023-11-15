import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberLimit',
  standalone: true,
})
export class NumberLimitPipe implements PipeTransform {
  transform(value: number, max: number): unknown {
    if (value > max) {
      return max;
    }
    return value;
  }
}
