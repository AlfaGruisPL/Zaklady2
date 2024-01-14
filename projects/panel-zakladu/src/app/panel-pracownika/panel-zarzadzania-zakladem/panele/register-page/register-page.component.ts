import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StronaReprezentacyjnaUstawieniaComponent } from './strona-reprezentacyjna-ustawienia/strona-reprezentacyjna-ustawienia.component';
import { RegisterPageMenuComponent } from './register-page-menu/register-page-menu.component';
import { RegisterPageService } from './register-page.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StronaReprezentacyjnaUstawieniaComponent, RegisterPageMenuComponent],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  constructor(private registerPage_: RegisterPageService) {}

  ngOnInit() {
    this.registerPage_.fetchData();
  }
}
