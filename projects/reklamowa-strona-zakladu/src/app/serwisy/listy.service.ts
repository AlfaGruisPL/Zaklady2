import { Inject, Injectable, InjectionToken, Optional, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drzwi } from '../enum/drzwi';
import { Observable } from 'rxjs';
import { HOST_ID } from '../host';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListyService {
  public identyfikatorWParametrze = '';
  env = environment;
  private linkDoApi = this.env.api;

  constructor(
    public api: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(HOST_ID) private host: InjectionToken<string>
  ) {}

  pobierz(drzwi: Drzwi | string, opcje: {}): Observable<any> {
    var parametr = '';
    if (isPlatformBrowser(this.platformId)) {
      if (this.identyfikatorWParametrze.length > 0) {
        parametr = '?identyfikator=' + this.identyfikatorWParametrze;
      }
    }
    // if (isPlatformServer(this.platformId)) {
    //    this.linkDoApi = 'localhost:3000/'
    // }
    //parametr = '?identyfikator=' + this.host.toString().split('.')[0]
    //  }
    //}

    return this.api.get(this.linkDoApi + drzwi + parametr, opcje);
  }

  wyslij(drzwi: Drzwi | string, zawartosc: {}, opcje: {}): Observable<any> {
    return this.api.post(this.linkDoApi + drzwi, zawartosc, opcje);
  }

  usun(drzwi: Drzwi | string, opcje: {}): Observable<any> {
    return this.api.delete(this.linkDoApi + drzwi, opcje);
  }
}
