import { NgModule } from '@angular/core';
import { ZdjeciePipe } from './zdjecie.pipe';
import { MaxDlugoscPipe } from './max-dlugosc.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [MaxDlugoscPipe, ZdjeciePipe, SafePipe],
  exports: [MaxDlugoscPipe, ZdjeciePipe, SafePipe],
})
export class RureczkiModule {}
