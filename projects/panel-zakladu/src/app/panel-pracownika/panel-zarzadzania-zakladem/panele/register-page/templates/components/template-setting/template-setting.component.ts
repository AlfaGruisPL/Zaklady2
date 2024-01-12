import { AfterContentInit, Component, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { NgxEditorComponent } from '../../../../../komponenty/ngx-editor/ngx-editor.component';
import { RegisterPageSaveButtonComponent } from '../../../register-page-save-button/register-page-save-button.component';
import { TemplateIdDirective } from '../../../../../../../komponets/table/template-id.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-template-setting',
  standalone: true,
  imports: [NgxEditorComponent, RegisterPageSaveButtonComponent, NgTemplateOutlet],
  templateUrl: './template-setting.component.html',
  styleUrl: './template-setting.component.scss',
})
export class TemplateSettingComponent implements AfterContentInit {
  @ContentChildren(TemplateIdDirective)
  templates: QueryList<TemplateIdDirective> | undefined;
  setting: TemplateRef<any> | any;
  label: TemplateRef<any> | any;

  ngAfterContentInit() {
    this.templates?.forEach((child: TemplateIdDirective) => {
      switch (child.id) {
        case 'setting':
          this.setting = child.template;
          break;
        case 'label':
          this.label = child.template;
          break;
      }
    });
  }
}
