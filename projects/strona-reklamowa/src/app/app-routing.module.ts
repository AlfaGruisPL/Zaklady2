import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  ReklamowaStronaNaszegoSystemuComponent
} from "./reklamowa-strona-naszego-systemu/reklamowa-strona-naszego-systemu.component";
import { RejestracjaZakladuComponent } from "./rejestracja-zakladu/rejestracja-zakladu.component";
import { RegisterCompleteComponent } from "./rejestracja-zakladu/register-complete/register-complete.component";

const routes: Routes = [
  { path: "OferySystemowRejestracjiWizyt", component: ReklamowaStronaNaszegoSystemuComponent },
  { path: "register", component: RejestracjaZakladuComponent },
  { path: "registerCompleate", component: RegisterCompleteComponent },
  { path: "", redirectTo: "register", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
