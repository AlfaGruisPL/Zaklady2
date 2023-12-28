import { Component } from '@angular/core';
import { RegisterPageSaveButtonComponent } from "../../../register-page-save-button/register-page-save-button.component";

@Component({
  selector: 'app-second-template-footer',
  standalone: true,
  imports: [RegisterPageSaveButtonComponent],
  templateUrl: './second-template-footer.component.html',
  styleUrl: './second-template-footer.component.scss',
})
export class SecondTemplateFooterComponent {}
