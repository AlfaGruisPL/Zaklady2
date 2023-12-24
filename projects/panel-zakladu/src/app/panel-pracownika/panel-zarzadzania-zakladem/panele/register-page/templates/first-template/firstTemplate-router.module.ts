import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FirstTemplateDefaultComponent } from "./first-template-default/first-template-default.component";
import { FirstTemplateFooterComponent } from "./first-template-footer/first-template-footer.component";

export const routes: Route[] = [
  {
    path: "",
    component: FirstTemplateDefaultComponent
  },
  {
    path: "footer",
    component: FirstTemplateFooterComponent
  },
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
export class FirstTemplateRouterModule {
}
