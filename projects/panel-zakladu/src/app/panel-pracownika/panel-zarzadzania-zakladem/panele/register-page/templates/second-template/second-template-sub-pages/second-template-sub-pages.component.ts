import { Component } from '@angular/core';
import { NgxEditorComponent } from '../../../../../komponenty/ngx-editor/ngx-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPageSaveButtonComponent } from '../../../register-page-save-button/register-page-save-button.component';
import { SelectImageComponent } from '../../../../files/select-image/select-image.component';
import { TemplateIdDirective } from '../../../../../../../komponets/table/template-id.directive';
import { TemplateSettingComponent } from '../../components/template-setting/template-setting.component';
import { RegisterPageService } from '../../../register-page.service';

@Component({
  selector: 'app-second-template-sub-pages',
  standalone: true,
  imports: [
    NgxEditorComponent,
    ReactiveFormsModule,
    RegisterPageSaveButtonComponent,
    SelectImageComponent,
    TemplateIdDirective,
    TemplateSettingComponent,
    FormsModule,
  ],
  templateUrl: './second-template-sub-pages.component.html',
  styleUrls: ['./second-template-sub-pages.component.scss', './../../../register-page.component.scss'],
})
export class SecondTemplateSubPagesComponent {
  constructor(public registerPage_: RegisterPageService) {}
}
