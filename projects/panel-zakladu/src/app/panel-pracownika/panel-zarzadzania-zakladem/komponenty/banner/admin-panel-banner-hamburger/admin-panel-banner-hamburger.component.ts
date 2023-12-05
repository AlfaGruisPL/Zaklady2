import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPracownikComponent } from '../../menu/menu-pracownik.component';
import { HamburgerMenuComponent } from '../../hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-admin-panel-banner-hamburger',
  standalone: true,
  imports: [CommonModule, MenuPracownikComponent, HamburgerMenuComponent],
  templateUrl: './admin-panel-banner-hamburger.component.html',
  styleUrls: ['./admin-panel-banner-hamburger.component.scss', './banner-pracownik-adaptive.component.scss'],
})
export class AdminPanelBannerHamburgerComponent implements OnInit {
  ngOnInit() {
    /*  const nav = document.querySelector('.hamburgerMenuDiv');
      const div = document.querySelector('body');
      div!.append(nav!);*/
  }
}
