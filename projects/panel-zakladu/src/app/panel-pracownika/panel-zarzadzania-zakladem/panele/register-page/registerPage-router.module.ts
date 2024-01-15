import { Route, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page.component';
import { NgModule } from '@angular/core';
import { StronaReprezentacyjnaUstawieniaComponent } from './strona-reprezentacyjna-ustawienia/strona-reprezentacyjna-ustawienia.component';

export const routes: Route[] = [
  {
    path: '',
    component: RegisterPageComponent,
    children: [
      {
        path: 'settings',
        component: StronaReprezentacyjnaUstawieniaComponent,
      },
      {
        path: 'firstTemplate',
        loadChildren: () => import('./templates/first-template/firstTemplate-router.module').then(k => k.routes),
      },
      {
        path: 'secondTemplate',
        loadChildren: () => import('./templates/second-template/secondTemplate-router.module').then(k => k.routes),
      },
      {
        path: '**',
        redirectTo: 'settings',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRouterModule {}
