import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KalendarzTerminowComponent } from './kalendarz-terminow.component';

const routes: Routes = [
  {
    path: '',
    component: KalendarzTerminowComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class KalendarzTerminowRoutingModule {}
