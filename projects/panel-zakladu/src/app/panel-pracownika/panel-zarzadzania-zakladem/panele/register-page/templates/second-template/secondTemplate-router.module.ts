import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

export const routes: Route[] = [
  {},
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondTemplateRouterModule {
}
