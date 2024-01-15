import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize',
  standalone: true,
})
export class FileSizePipe implements PipeTransform {
  transform(value: number): string {
    if (value == null || value.toString().length == 0) return '---';
    const kiloByte = 1024; // 1 kilobajt = 1024 bajty
    const halfMB = 0.5 * 1024 * 1024; // 0,5 megabajta w kilobajtach

    if (value > halfMB) {
      const mbValue = (value / (1024 * 1024)).toFixed(2);
      return `${mbValue} MB`;
    } else {
      return `${(value / 1024).toFixed(2)} KB`;
    }
  }
}
