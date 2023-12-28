import { Component, OnInit } from '@angular/core';
import { FilesTableComponent } from './files-table/files-table.component';
import { FilesService } from './files.service';
import { SelectImageComponent } from './select-image/select-image.component';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [FilesTableComponent, SelectImageComponent],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss',
})
export class FilesComponent implements OnInit {
  constructor(private files_: FilesService) {}

  ngOnInit() {
    this.files_.FetchDataFromDB();
  }
}
