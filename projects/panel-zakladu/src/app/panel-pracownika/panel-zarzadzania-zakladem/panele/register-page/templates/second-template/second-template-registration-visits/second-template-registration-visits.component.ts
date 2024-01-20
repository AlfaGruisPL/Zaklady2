import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateIdDirective } from '../../../../../../../komponets/table/template-id.directive';
import { TemplateSettingComponent } from '../../components/template-setting/template-setting.component';
import { RegisterPageService } from '../../../register-page.service';
import { RegisterPageSaveButtonComponent } from '../../../register-page-save-button/register-page-save-button.component';
import { NgxEditorComponent } from '../../../../../komponenty/ngx-editor/ngx-editor.component';

@Component({
  selector: 'app-second-template-registration-visits',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TemplateIdDirective,
    TemplateSettingComponent,
    RegisterPageSaveButtonComponent,
    FormsModule,
    NgxEditorComponent,
  ],
  templateUrl: './second-template-registration-visits.component.html',
  styleUrls: ['./second-template-registration-visits.component.scss', './../../../register-page.component.scss'],
})
export class SecondTemplateRegistrationVisitsComponent {
  rPDS_ = this.rP_.data.SecondTemplateData;
  rPDRS_ = this.rP_.data.SecondTemplateData.registration.steps;

  constructor(public rP_: RegisterPageService) {}
}
