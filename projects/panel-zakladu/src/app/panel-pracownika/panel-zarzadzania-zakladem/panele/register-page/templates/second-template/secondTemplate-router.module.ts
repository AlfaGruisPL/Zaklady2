import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecondTemplateDefaultComponent } from './second-template-default/second-template-default.component';
import { SecondTemplateFooterComponent } from './second-template-footer/second-template-footer.component';
import { SecondTemplateSubPagesComponent } from './second-template-sub-pages/second-template-sub-pages.component';
import { SecondTemplateRegistrationVisitsComponent } from './second-template-registration-visits/second-template-registration-visits.component';

export const routes: Route[] = [
  {
    path: 'default',
    component: SecondTemplateDefaultComponent,
  },
  {
    path: 'subpages',
    component: SecondTemplateSubPagesComponent,
  },
  {
    path: 'footer',
    component: SecondTemplateFooterComponent,
  },
  {
    path: 'registrationVisits',
    component: SecondTemplateRegistrationVisitsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondTemplateRouterModule {}
