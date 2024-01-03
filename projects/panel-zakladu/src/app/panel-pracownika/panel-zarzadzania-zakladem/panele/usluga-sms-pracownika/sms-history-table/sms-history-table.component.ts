import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UslugaSmsService } from '../uslugaSms.service';
import { TableComponent } from '../../../../../komponets/table/table.component';
import { TemplateIdDirective } from '../../../../../komponets/table/template-id.directive';

@Component({
  selector: 'app-sms-history-table',
  standalone: true,
  imports: [CommonModule, TableComponent, TemplateIdDirective],
  templateUrl: './sms-history-table.component.html',
  styleUrls: ['./sms-history-table.component.scss'],
})
export class SmsHistoryTableComponent {
  protected readonly Math = Math;

  constructor(public lista_: UslugaSmsService) {}
}
