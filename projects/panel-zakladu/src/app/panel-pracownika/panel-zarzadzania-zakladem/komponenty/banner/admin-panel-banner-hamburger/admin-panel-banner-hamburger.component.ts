import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPracownikComponent } from '../../menu/menu-pracownik.component';

@Component({
  selector: 'app-admin-panel-banner-hamburger',
  standalone: true,
  imports: [CommonModule, MenuPracownikComponent],
  templateUrl: './admin-panel-banner-hamburger.component.html',
  styleUrls: ['./admin-panel-banner-hamburger.component.scss', './banner-pracownik-adaptive.component.scss'],
})
export class AdminPanelBannerHamburgerComponent {
  openHamburger = false;

  open() {
    setTimeout(() => {
      this.openHamburger = !this.openHamburger;
    });
  }

  close() {
    if (this.openHamburger) {
      this.openHamburger = false;
    }
  }
}
