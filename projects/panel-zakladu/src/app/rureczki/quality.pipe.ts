import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'quality',
})
export class QualityPipe implements PipeTransform {
  constructor() {}

  transform(value: unknown, quality: number, isFirst: boolean = true): unknown {
    if (isFirst) {
      return value + '?quality=' + quality;
    }
    return value + '&quality=' + quality;
  }
}
