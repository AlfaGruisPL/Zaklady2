import {Component} from '@angular/core';
import {FontAwesomeService} from "../../../../serwisy/font-awesome.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../../serwisy/token.service";

@Component({
  selector: 'app-menu-pracownik',
  templateUrl: './menu-pracownik.component.html',
  styleUrls: ['./menu-pracownik.component.scss']
})
export class MenuPracownikComponent {
  constructor(public ikonki: FontAwesomeService, private router: Router, public token_: TokenService) {
  }

  /*
    public menu(k: any) {
      return true
    }*/
}
