import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnePageStronaComponent} from "./one-page-strona/one-page-strona.component";
import {IdentyfikatorGuard} from "./straznicy/identyfikator.guard";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent
  },
  {
    path: ':identyfikator',
    component: OnePageStronaComponent,
    canActivate: [IdentyfikatorGuard]
  },
  {

    path: '',
    component: OnePageStronaComponent, canActivate: [IdentyfikatorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
    //  useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
