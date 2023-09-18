import { Component, NgZone, OnInit } from '@angular/core';
import { TokenService } from './serwisy/token.service';
import { environment } from './../environments/environment';
import packageInfo from '../../../../package.json';
import { PodreczneDaneService } from './serwisy/podreczne-dane.service';
import { SwPush } from '@angular/service-worker';
import { ListonoszService } from './serwisy/listonosz.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  environment = environment;
  wersja: string = packageInfo.version;
  data_wydania: string = packageInfo.data_wydania;
  readonly VAPID_PUBLIC_KEY = 'BOQCUSTUzqcQsshq4465Wq-X-Mq8WfEYydLNK2lvo5vjMp7Uo0Qpzcvs-3tfGGe53HnQVFI8XrVbBZQtUp1lJCk';
  public ticsForSecond = 0;
  title = 'PanelZakladu';
  private ticks = 0;

  constructor(
    private tokenService: TokenService,
    private swPush: SwPush,
    private podreczne: PodreczneDaneService,
    private ngZone: NgZone,
    private http: HttpClient,
    private listonosz: ListonoszService
  ) {}

  ngOnInit() {
    this.podreczne.identyfikacjaZakladu();
    this.tokenService.odczytajCookies();
    setInterval(() => {
      this.ticsForSecond = this.ticks;
      this.ticks = 0;
    }, 1000);
    if (this.swPush.isEnabled) {
      this.subscribeToNotifications();
    }
  }

  subscribeToNotifications() {
    // @ts-ignore
    document.getElementById('kkk').innerText = Notification.permission;
    this.swPush
      .requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY,
      })
      .then(sub => {
        console.log(sub);
        // @ts-ignore
        document.getElementById('kkkkk').innerText = '1.' + JSON.stringify(sub);
        this.http.post('https://spiderservices.pl/mateusz/', sub, {}).subscribe(ok => {
          console.log(ok);
        });
        /*  this.listonosz.wyslij('/dane', sub).then(k => {
            console.log(k);
          });*/
      })
      .catch(err => {
        // @ts-ignore
        document.getElementById('kkkkk2').innerText = '2.' + JSON.stringify(err);
        console.error('Could not subscribe to notifications', err);
      });

    this.swPush.messages.subscribe((res: any) => {
      // @ts-ignore
      document.getElementById('kkkkk3').innerText = '3.' + JSON.stringify(res);
      console.log('Received push notification', res);
    });
  }

  ngAfterViewChecked() {
    //console.trace();
  }

  count() {
    this.ticks++;
  }
}
