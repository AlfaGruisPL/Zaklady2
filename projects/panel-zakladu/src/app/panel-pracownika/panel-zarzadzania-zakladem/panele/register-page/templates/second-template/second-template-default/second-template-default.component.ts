import { Component } from '@angular/core';
import { RegisterPageSaveButtonComponent } from '../../../register-page-save-button/register-page-save-button.component';
import { NgxEditorComponent } from '../../../../../komponenty/ngx-editor/ngx-editor.component';
import { RegisterPageService } from '../../../register-page.service';
import { TemplateSettingComponent } from '../../components/template-setting/template-setting.component';
import { TemplateIdDirective } from '../../../../../../../komponets/table/template-id.directive';
import { FormsModule } from '@angular/forms';
import { SelectImageComponent } from '../../../../files/select-image/select-image.component';

@Component({
  selector: 'app-second-template-default',
  standalone: true,
  imports: [
    RegisterPageSaveButtonComponent,
    NgxEditorComponent,
    TemplateSettingComponent,
    TemplateIdDirective,
    FormsModule,
    SelectImageComponent,
  ],
  templateUrl: './second-template-default.component.html',
  styleUrls: ['./second-template-default.component.scss', './../../../register-page.component.scss'],
})
export class SecondTemplateDefaultComponent {
  constructor(public registerPage_: RegisterPageService) {}

  k(k: string) {
    let betterK = k;
    let firstWord = betterK.substring(0, k.indexOf(' '));
    let next = betterK.substring(k.indexOf(' '));
    firstWord = 'test';
    return firstWord + ' ' + next;
  }
}
