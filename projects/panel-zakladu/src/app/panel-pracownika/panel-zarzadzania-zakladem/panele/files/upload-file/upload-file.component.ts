import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RureczkiModule } from '../../../../../rureczki/rureczki.module';
import { ListonoszService } from '../../../../../serwisy/listonosz.service';
import { Drzwi } from '../../../../../enum/drzwi';
import { FilesService } from '../files.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule, RureczkiModule, FontAwesomeModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
})
export class UploadFileComponent {
  status: 'initial' | 'uploading' | 'success' | 'fail' = 'initial'; // Variable to store file status
  file: File | null = null; // Variable to store file
  protected readonly Math = Math;
  protected readonly faGear = faGear;

  constructor(private http_: ListonoszService, private files_: FilesService) {}

  onChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.status = 'initial';
      this.file = file;
    }
  }

  onUpload(element: HTMLInputElement) {
    if (this.file) {
      const formData = new FormData();

      formData.append('file', this.file, this.file.name);
      this.status = 'uploading';
      this.http_
        .wyslij(Drzwi.sendImage, formData)
        .then(data => {
          this.status = 'success';
          this.file = null;
          element.value = '';
        })
        .catch(error => {
          this.status = 'fail';
        })
        .finally(() => {
          this.files_.FetchDataFromDB();
        });
    }
  }
}
