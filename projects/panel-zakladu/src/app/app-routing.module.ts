import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetHaslaPracownikowComponent } from './panel-pracownika/poczatkowy-panel-pracownika/reset-hasla-pracownikow/reset-hasla-pracownikow.component';
import { PoczatkowyPanelPracownikaComponent } from './panel-pracownika/poczatkowy-panel-pracownika/poczatkowy-panel-pracownika.component';
import { PanelLogowaniaPracownikowComponent } from './panel-pracownika/poczatkowy-panel-pracownika/panel-logowania-pracownikow/panel-logowania-pracownikow.component';
import { PanelZarzadzaniaZaklademComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panel-zarzadzania-zakladem.component';
import { MojeKontoPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/moje-konto-pracownika/moje-konto-pracownika.component';
import { MojZakladPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/moj-zaklad-pracownika/moj-zaklad-pracownika.component';
import { UslugaSmsPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/usluga-sms-pracownika/usluga-sms-pracownika.component';
import { UslugiPracownikaComponent } from './panel-pracownika/panel-zarzadzania-zakladem/panele/uslugi/uslugi.component';
import { ZalogowanyGuard } from './straznicy/zalogowany.guard';
import { reverseLoginGuard } from './straznicy/reverse-login.guard';
import { RegisterCompleteComponent } from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/register-complete/register-complete.component';
import { RejestracjaZakladuComponent } from './panel-pracownika/poczatkowy-panel-pracownika/rejestracja-zakladu/rejestracja-zakladu.component';

const zakladDzieci: Routes = [
  {
    canActivate: [reverseLoginGuard],
    path: 'logowanie',
    component: PanelLogowaniaPracownikowComponent,
  },
  {
    canActivate: [reverseLoginGuard],
    path: 'reset',
    component: ResetHaslaPracownikowComponent,
  },
  {
    path: 'rejestracja',
    component: RejestracjaZakladuComponent,
  },
  {
    path: 'registerComplete',
    component: RegisterCompleteComponent,
  },
  {
    path: '',
    redirectTo: 'logowanie',
    pathMatch: 'full',
  },
];
const panelePracownika: Routes = [
  {
    path: 'mojeKonto',
    component: MojeKontoPracownikaComponent,
  },
  {
    path: 'zarejestrowaneWizyty',
    loadChildren: () =>
      import(
        './panel-pracownika/panel-zarzadzania-zakladem/panele/zarejestrowane-wizyty-pracownika/zarejestrowane-wizyty.module'
      ).then(k => k.ZarejestrowaneWizytyModule),
  },
  {
    path: 'registerPage',
    loadChildren: () =>
      import('./panel-pracownika/panel-zarzadzania-zakladem/panele/register-page/registerPage-router.module').then(
        k => k.RegisterPageRouterModule
      ),
  },
  {
    path: 'zarzadzaniePracownikami',
    loadChildren: () =>
      import('./panel-pracownika/panel-zarzadzania-zakladem/panele/employees/employees-router.module').then(
        k => k.routes
      ),
  },
  {
    path: 'podsumowanie',
    loadChildren: () =>
      import('./panel-pracownika/panel-zarzadzania-zakladem/panele/podsumowanie/podsumowanie-router.module').then(
        k => k.routes
      ),
  },

  {
    path: 'raporty',
    loadChildren: () =>
      import('./panel-pracownika/panel-zarzadzania-zakladem/panele/raporty/raporty-router.module').then(k => k.routes),
  },
  {
    path: 'files',
    loadChildren: () =>
      import('./panel-pracownika/panel-zarzadzania-zakladem/panele/files/files-router.module').then(k => k.routes),
  },
  {
    path: 'uslugi',
    component: UslugiPracownikaComponent,
  },
  {
    path: 'mojZaklad',
    component: MojZakladPracownikaComponent,
  },
  {
    path: 'platnosci',
    loadChildren: () =>
      import(
        './panel-pracownika/panel-zarzadzania-zakladem/panele/platnosci-pracownika/platnosciPracownika.module'
      ).then(k => k.PlatnosciPracownikaModule),
  },
  {
    path: 'sms',
    component: UslugaSmsPracownikaComponent,
  },
  {
    path: 'harmonogram',
    loadChildren: () =>
      import('./panel-pracownika/panel-zarzadzania-zakladem/panele/harmonogram-pracownika/harmonogram.module').then(
        k => k.HarmonogramModule
      ),
  },
  {
    path: 'listaKlientow',
    redirectTo: 'customers',
    pathMatch: 'full',
  },
  {
    path: 'customers',
    loadChildren: () =>
      import(
        './panel-pracownika/panel-zarzadzania-zakladem/panele/lista-klientow-pracownik/customers-router.module'
      ).then(k => k.CustomersRouterModule),
  },
  {
    path: '**',
    redirectTo: 'harmonogram',
    pathMatch: 'full',
  },
];

const routes: Routes = [
  {
    path: 'zaklad',
    component: PoczatkowyPanelPracownikaComponent,
    children: zakladDzieci,
  },
  {
    path: 'panelPracownika',
    component: PanelZarzadzaniaZaklademComponent,
    children: panelePracownika,
    canActivate: [ZalogowanyGuard],
  },
  { path: '', redirectTo: 'zaklad', pathMatch: 'full' },

  // {path: '', redirectTo: 'zaklad', pathMatch: 'full', canActivate: [IdentyfikatorGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
