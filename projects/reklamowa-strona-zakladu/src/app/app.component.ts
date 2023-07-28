import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import packageInfo from '../../../../package.json';
import {DanePodstawoweService} from "./serwisy/dane-podstawowe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  environment = environment
  wersja: string = packageInfo.version;
  data_wydania: string = packageInfo.data_wydania;

  constructor(public danePodreczne: DanePodstawoweService) {
  }

  ngOnInit() {
  }

  title = 'reklamowaStronaZakladu';
}
