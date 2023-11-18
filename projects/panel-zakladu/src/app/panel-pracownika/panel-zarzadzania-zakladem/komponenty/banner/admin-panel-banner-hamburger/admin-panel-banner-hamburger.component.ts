import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPracownikComponent } from '../../menu/menu-pracownik.component';

@Component({
  selector: 'app-admin-panel-banner-hamburger',
  standalone: true,
  imports: [CommonModule, MenuPracownikComponent],
  templateUrl: './admin-panel-banner-hamburger.component.html',
  styleUrls: ['./admin-panel-banner-hamburger.component.scss', './banner-pracownik-adaptive.component.scss'],
})
export class AdminPanelBannerHamburgerComponent implements OnInit {
  openHamburger = false;

  ngOnInit() {
    const nav = document.querySelector('.hamburgerMenuDiv');
    const div = document.querySelector('body');
    div!.append(nav!);
  }

  open() {
    console.log(1);
    this.openHamburger = !this.openHamburger;
  }

  close(isburger = true) {
    if (isburger) return;
    this.openHamburger = false;
  }
}
