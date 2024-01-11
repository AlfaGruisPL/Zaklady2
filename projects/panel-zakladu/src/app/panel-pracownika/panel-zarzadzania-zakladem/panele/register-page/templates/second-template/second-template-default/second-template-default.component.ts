import { Component } from '@angular/core';
import { RegisterPageSaveButtonComponent } from '../../../register-page-save-button/register-page-save-button.component';
import { NgxEditorComponent } from '../../../../../komponenty/ngx-editor/ngx-editor.component';
import { RegisterPageService } from '../../../register-page.service';

@Component({
  selector: 'app-second-template-default',
  standalone: true,
  imports: [RegisterPageSaveButtonComponent, NgxEditorComponent],
  templateUrl: './second-template-default.component.html',
  styleUrl: './second-template-default.component.scss',
})
export class SecondTemplateDefaultComponent {
  constructor(public registerPage_: RegisterPageService) {}
}
