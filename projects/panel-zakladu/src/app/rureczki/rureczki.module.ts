import {NgModule} from '@angular/core';
import {ZdjeciePipe} from "./zdjecie.pipe";
import {MaxDlugoscPipe} from "./max-dlugosc.pipe";


@NgModule({
  declarations: [
    MaxDlugoscPipe,
    ZdjeciePipe

  ], exports: [
    MaxDlugoscPipe,
    ZdjeciePipe
  ]
})
export class RureczkiModule {
}
