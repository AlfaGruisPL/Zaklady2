import { Component } from '@angular/core';
import { RegisterPageSaveButtonComponent } from "../../../register-page-save-button/register-page-save-button.component";

@Component({
  selector: 'app-second-template-default',
  standalone: true,
  imports: [RegisterPageSaveButtonComponent],
  templateUrl: './second-template-default.component.html',
  styleUrl: './second-template-default.component.scss',
})
export class SecondTemplateDefaultComponent {}
