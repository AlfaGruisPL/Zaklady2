import { Component, Inject, InjectionToken, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';
import packageInfo from '../../../../package.json';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HOST_ID } from './host';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  environment = environment;
  wersja: string = packageInfo.version;
  data_wydania: string = packageInfo.data_wydania;
  routeFragment: string | null = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private route: ActivatedRoute,
    private router: Router,
    private googleService_: GoogleAnalyticsService,
    @Optional() @Inject(HOST_ID) private host: InjectionToken<string>
  ) {}

  test() {
    console.log(this.routeFragment, 123);
  }

  ngOnInit() {
    setTimeout(() => {
      AOS.init();
    }, 20);
    this.googleService_.event('enter_name', 'user_register_form', 'Name');

    if (isPlatformBrowser(this.platformId)) {
      // Kod zostanie wykonany, jeśli strona jest renderowana po stronie klienta
      //    console.log('Rendered on the client side.');
      //  console.log(this.host);
    }

    if (isPlatformServer(this.platformId)) {
      // Kod zostanie wykonany, jeśli strona jest renderowana po stronie serwera
      //  console.log('Rendered on the server side.');
      //  console.log(this.host);
    }
  }
}
