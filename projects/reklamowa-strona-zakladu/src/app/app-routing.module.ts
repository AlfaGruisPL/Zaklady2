import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnePageStronaComponent } from './one-page-strona/one-page-strona.component';
import { PageNotFoundComponent } from './strony/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'pageNotFound',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    component: OnePageStronaComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
