import { Route, RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./register-page.component";
import { NgModule } from "@angular/core";

export const routes: Route[] = [
  {
    path: "",
    component: RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPageRouterModule {
}
