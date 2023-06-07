import {Component, OnInit} from '@angular/core';
import {TokenService} from "./serwisy/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private tokenService: TokenService
  ) {
  }

  ngOnInit() {

    this.tokenService.odczytajCookies();
  }

  title = 'PanelZakladu';
}
