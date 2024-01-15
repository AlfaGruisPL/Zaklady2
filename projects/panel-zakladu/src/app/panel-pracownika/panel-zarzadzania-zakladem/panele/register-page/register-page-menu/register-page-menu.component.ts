import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageService } from '../register-page.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FirstTemplateMenuComponent } from './first-template-menu/first-template-menu.component';
import { SecondTemplateMenuComponent } from './second-template-menu/second-template-menu.component';

@Component({
  selector: 'app-register-page-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FirstTemplateMenuComponent, SecondTemplateMenuComponent],
  templateUrl: './register-page-menu.component.html',
  styleUrls: ['./register-page-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterPageMenuComponent {
  constructor(public registerPage_: RegisterPageService) {}
}
