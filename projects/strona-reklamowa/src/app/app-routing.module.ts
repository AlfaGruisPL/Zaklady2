import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {
  ReklamowaStronaNaszegoSystemuComponent
} from "./reklamowa-strona-naszego-systemu/reklamowa-strona-naszego-systemu.component";

const routes: Routes = [
  {path: 'OferySystemowRejestracjiWizyt', component: ReklamowaStronaNaszegoSystemuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
