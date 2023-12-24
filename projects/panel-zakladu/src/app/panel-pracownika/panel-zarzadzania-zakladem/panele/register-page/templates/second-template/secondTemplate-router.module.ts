import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SecondTemplateDefaultComponent } from "./second-template-default/second-template-default.component";
import { SecondTemplateFooterComponent } from "./second-template-footer/second-template-footer.component";

export const routes: Route[] = [
  {
    path: "",
    component: SecondTemplateDefaultComponent
  },
  {
    path: "footer",
    component: SecondTemplateFooterComponent
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondTemplateRouterModule {
}
