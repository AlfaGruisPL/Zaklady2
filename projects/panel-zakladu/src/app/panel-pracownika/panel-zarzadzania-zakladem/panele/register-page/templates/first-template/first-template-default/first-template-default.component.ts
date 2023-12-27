import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectImageComponent } from '../../../../files/select-image/select-image.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { RegisterPageService } from '../../../register-page.service';
import { PodreczneDaneService } from '../../../../../../../serwisy/podreczne-dane.service';

@Component({
  selector: 'app-first-template-default',
  standalone: true,
  imports: [CommonModule, NgxEditorModule, ReactiveFormsModule, SelectImageComponent, UiSwitchModule],
  templateUrl: './first-template-default.component.html',
  styleUrls: ['./first-template-default.component.scss', '../../../register-page.component.scss'],
})
export class FirstTemplateDefaultComponent {
  editor: any = undefined;
  protected readonly undefined = undefined;

  constructor(public registerPage_: RegisterPageService, public danePodreczne_: PodreczneDaneService) {}

  ngOnInit() {
    this.editor = new Editor();
  }
}
