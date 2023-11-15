import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TippyDirective } from '@ngneat/helipopper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PracownicyPracownikaComponent } from './pracownicy-pracownika.component';
import { CzyNaprawdeUsunacComponent } from './okienka/czy-naprawde-usunac/czy-naprawde-usunac.component';
import { DodawanieIModyfikacjaPracownikaComponent } from './okienka/dodawanie-imodyfikacja-pracownika/dodawanie-imodyfikacja-pracownika.component';
import { RureczkiModule } from '../../../../rureczki/rureczki.module';
import { MojeKontoZdjecieProfiloweComponent } from '../moje-konto-pracownika/moje-konto-zdjecie-profilowe/moje-konto-zdjecie-profilowe.component';
import { WorkersTableComponent } from './workers-table/workers-table.component';
import { WorkersTableFilterComponent } from './workers-table/workers-table-filter/workers-table-filter.component';

@NgModule({
  declarations: [PracownicyPracownikaComponent, CzyNaprawdeUsunacComponent, DodawanieIModyfikacjaPracownikaComponent],
  imports: [
    FormsModule,
    RureczkiModule,
    CommonModule,
    TippyDirective,
    NgbModule,
    MojeKontoZdjecieProfiloweComponent,
    WorkersTableComponent,
    WorkersTableFilterComponent,
  ],
  providers: [],
})
export class PracownicyModule {}
