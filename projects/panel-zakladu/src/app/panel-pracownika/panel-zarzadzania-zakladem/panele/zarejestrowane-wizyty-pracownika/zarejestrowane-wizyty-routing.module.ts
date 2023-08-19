import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZarejestrowaneWizytyPracownikaComponent } from './zarejestrowane-wizyty-pracownika.component';

const routes: Routes = [
  {
    path: '',
    component: ZarejestrowaneWizytyPracownikaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ZarejestrowaneWizytyRoutingModule {}
