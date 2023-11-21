import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenService } from '../../../../../serwisy/token.service';
import { FontAwesomeService } from '../../../../../serwisy/font-awesome.service';
import { HamburgerMenuComponent } from '../../hamburger-menu/hamburger-menu.component';
import { FooterMenuPanelComponent } from '../footer-menu-panel/footer-menu-panel.component';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard, faFontAwesomeFlag, faIdBadge, faIdCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer-nav-buttons',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule,
    HamburgerMenuComponent,
    FooterMenuPanelComponent,
    RouterLinkActive,
  ],
  templateUrl: './footer-nav-buttons.component.html',
  styleUrls: ['./footer-nav-buttons.component.scss'],
})
export class FooterNavButtonsComponent {
  public menuArray = [
    { title: 'Harmonogram na dziś', icon: faFlag, router: 'harmonogram', admin: false },
    { title: 'Kalendarz', icon: faIdCard, router: 'zarejestrowaneWizyty', admin: false },
    { title: 'Podsumowanie', icon: faFontAwesomeFlag, router: 'podsumowanie', admin: false },
    { title: ' Lista klientów', icon: faIdBadge, router: 'listaKlientow', admin: false },
    { title: 'Płatności', icon: faCreditCard, router: 'platnosci', admin: false },
  ];

  constructor(public token_: TokenService, public ikonki: FontAwesomeService) {}
}
