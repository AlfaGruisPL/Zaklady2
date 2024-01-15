import { Component } from '@angular/core';
import { RegisterPageSaveButtonComponent } from '../../../register-page-save-button/register-page-save-button.component';
import { TemplateIdDirective } from '../../../../../../../komponets/table/template-id.directive';
import { TemplateSettingComponent } from '../../components/template-setting/template-setting.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { RegisterPageService } from '../../../register-page.service';

@Component({
  selector: 'app-second-template-footer',
  standalone: true,
  imports: [RegisterPageSaveButtonComponent, TemplateIdDirective, TemplateSettingComponent, UiSwitchModule],
  templateUrl: './second-template-footer.component.html',
  styleUrls: ['./second-template-footer.component.scss', './../../../register-page.component.scss'],
})
export class SecondTemplateFooterComponent {
  rPD_ = this.rP_.data.SecondTemplateData;

  constructor(public rP_: RegisterPageService) {}
}
