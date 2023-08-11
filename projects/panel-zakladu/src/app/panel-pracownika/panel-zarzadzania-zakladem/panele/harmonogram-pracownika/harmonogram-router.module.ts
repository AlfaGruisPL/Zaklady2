import { RouterModule, Routes } from '@angular/router';
import { HarmonogramPracownikaComponent } from './harmonogram-pracownika.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: HarmonogramPracownikaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarmonogramRoutingModule {}
