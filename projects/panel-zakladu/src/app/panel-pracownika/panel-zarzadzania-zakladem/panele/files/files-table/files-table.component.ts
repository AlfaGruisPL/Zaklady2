import { Component, ViewEncapsulation } from '@angular/core';
import { TableComponent } from '../../../../../komponets/table/table.component';
import { KwotaPipe } from '../../../../../rureczki/kwota.pipe';
import { TemplateIdDirective } from '../../../../../komponets/table/template-id.directive';
import { FilesService } from '../files.service';
import { CommonModule, DatePipe } from '@angular/common';
import { environment } from '../../../../../../environments/environment';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { FileSizePipe } from '../../../../../rureczki/file-size.pipe';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { QualityPipe } from "../../../../../rureczki/quality.pipe";

@Component({
  selector: 'app-files-table',
  standalone: true,
  imports: [
    TableComponent,
    KwotaPipe,
    TemplateIdDirective,
    DatePipe,
    UploadFileComponent,
    FileSizePipe,
    NgbPopover,
    CommonModule,
    QualityPipe,
  ],
  templateUrl: './files-table.component.html',
  styleUrl: './files-table.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FilesTableComponent {
  env = environment;
  value = '';

  constructor(public files_: FilesService, public http_: ListonoszService) {}

  deleteImage(id: number) {
    this.http_
      .usun(Drzwi.deleteImage + '/' + id)
      .then(dane => {})
      .catch(() => {})
      .finally(() => {
        this.files_.FetchDataFromDB();
      });
  }

  getDataByFilter(data: Array<any>) {
    if (this.value.length == 0) {
      return data;
    }
    return data.filter(file => {
      return file['nazwa'].toLowerCase().trim().indexOf(this.value.toLowerCase().trim()) != -1;
    });
  }

  setDataWithSearch($event: any) {
    this.value = $event;
  }
}
