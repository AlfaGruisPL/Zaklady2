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

  changeLetterColor(string: string) {
    let betterK = string;
    let firstWord = betterK.split(' ')[0];
    let next = '-&-';
    for (const k of betterK.split(' ')) {
      if (next === '-&-') {
        next = '';
        continue;
      }
      next += k;
    }
    const firstWordLength = firstWord.length;
    let part1 = firstWord.substring(0, firstWordLength - 2);
    let part2 = firstWord.substring(firstWordLength - 2, firstWordLength - 1);
    let part3 = firstWord.substring(firstWordLength - 1);
    return part1 + '<span class="colorLetter">' + part2 + '</span>' + part3 + ' ' + next;
  }
}
