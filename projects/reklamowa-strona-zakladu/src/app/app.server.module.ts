import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';
import {NgxIfPlatformModule} from "ngx-if-platform";

@NgModule({
  imports: [
    AppModule,
    ServerModule, NgxIfPlatformModule,
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
