import { Component } from '@angular/core';
import { RegisterPageService } from '../register-page.service';

@Component({
  selector: 'app-register-page-save-button',
  standalone: true,
  imports: [],
  templateUrl: './register-page-save-button.component.html',
  styleUrl: './register-page-save-button.component.scss',
})
export class RegisterPageSaveButtonComponent {
  constructor(public registerPage_: RegisterPageService) {}
}
