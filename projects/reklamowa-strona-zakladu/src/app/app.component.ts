import { Component, Inject, InjectionToken, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { environment } from '../environments/environment';
import packageInfo from '../../../../package.json';
import { DanePodstawoweService } from './serwisy/dane-podstawowe.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HOST_ID } from './host';
import { StraznicyService } from './straznicy/straznicy.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

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
  k = ['1', '2', '3'];
  title = 'reklamowaStronaZakladu';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public danePodreczne: DanePodstawoweService,
    private googleService_: GoogleAnalyticsService,
    private straznicy: StraznicyService,
    @Optional() @Inject(HOST_ID) private host: InjectionToken<string>
  ) {}

  ngOnInit(): void {
    this.googleService_.event('enter_name', 'user_register_form', 'Name');
    setInterval(() => {}, 1000);
    /*  setInterval(() => {
          this.straznicy.sprawdzenieCzySerwerAktywny()
          this.straznicy.sprawdzenieCzyStronaWlaczona()
      }, 10000)
      this.straznicy.sprawdzenieCzySerwerAktywny()
      this.straznicy.sprawdzenieCzyStronaWlaczona()
*/
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
