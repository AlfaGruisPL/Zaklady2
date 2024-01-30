import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListaKlientowPracownikComponent } from './lista-klientow-pracownik.component';
import { InformacjeOKliencieComponent } from './informacje-okliencie/informacje-okliencie.component';
import { CustomersDefaultComponent } from './customers-default/customers-default.component';

export const routes: Route[] = [
  {
    path: '',
    component: ListaKlientowPracownikComponent,
    children: [
      {
        path: '',
        component: CustomersDefaultComponent,
      },
      {
        path: ':id/:employees',
        component: InformacjeOKliencieComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRouterModule {}
