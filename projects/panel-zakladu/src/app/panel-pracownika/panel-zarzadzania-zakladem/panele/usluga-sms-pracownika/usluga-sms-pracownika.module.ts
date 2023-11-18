import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UslugaSmsPracownikaComponent } from './usluga-sms-pracownika.component';
import { UslugaSmsHistoriaComponent } from './usluga-sms-historia/usluga-sms-historia.component';
import { UslugaSmsInformacjeComponent } from './usluga-sms-informacje/usluga-sms-informacje.component';
import { UslugaSmsUstawieniaComponent } from './usluga-sms-ustawienia/usluga-sms-ustawienia.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { UslugaSmsService } from './uslugaSms.service';
import { NgbDropdown, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { TablePaginationComponent } from '../../../../komponets/table-pagination/table-pagination.component';
import { SmsHistoryTableComponent } from './sms-history-table/sms-history-table.component';

@NgModule({
  declarations: [
    UslugaSmsPracownikaComponent,
    UslugaSmsHistoriaComponent,
    UslugaSmsInformacjeComponent,
    UslugaSmsUstawieniaComponent,
  ],
  imports: [
    CommonModule,
    UiSwitchModule,
    NgbPagination,
    TablePaginationComponent,
    NgbDropdown,
    SmsHistoryTableComponent,
  ],
  providers: [UslugaSmsService],
})
export class UslugaSmsPracownikaModule {}
