import {Component, OnInit} from '@angular/core';
import {TokenService} from "./serwisy/token.service";
import {environment} from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  environment = environment

  constructor(private tokenService: TokenService
  ) {
  }

  ngOnInit() {

    this.tokenService.odczytajCookies();
  }

  title = 'PanelZakladu';
}
