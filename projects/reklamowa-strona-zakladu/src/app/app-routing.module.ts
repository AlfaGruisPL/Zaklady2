import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnePageStronaComponent} from "./one-page-strona/one-page-strona.component";
import {IdentyfikatorGuard} from "./straznicy/identyfikator.guard";
import {PageNotFoundComponent} from "./strony/page-not-found/page-not-found.component";

const routes: Routes = [
    /*   {
           path: 'ladowanie',
           component: StronaLadowaniaComponent
       },
       {
           path: 'serwerNieDostepny',
           component: SerwerNieDostepnyComponent
       },
       {
           path: 'stronaWylaczona',
           component: StronaWylaczonaComponent
       },*/
    {
        path: 'pageNotFound',
        component: PageNotFoundComponent
    },
    {
        path: ':identyfikator',
        component: OnePageStronaComponent,
        canActivate: [IdentyfikatorGuard/*, DostepnoscStronyGuard*/]
    },
    {
        path: '',
        component: OnePageStronaComponent,
        /*  canActivate: [DostepnoscStronyGuard]*/
    }
    /* {

       path: '',
       component: OnePageStronaComponent, canActivate: [IdentyfikatorGuard]
     }*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64],
        initialNavigation: 'enabledBlocking'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
