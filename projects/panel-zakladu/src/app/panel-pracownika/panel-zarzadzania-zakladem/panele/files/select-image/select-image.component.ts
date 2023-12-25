import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { NgForOf, NgIf } from '@angular/common';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { FilesService } from '../files.service';
import { RureczkiModule } from '../../../../../rureczki/rureczki.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-image',
  standalone: true,
  imports: [
    NgIf,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbDropdownItem,
    NgForOf,
    RureczkiModule,
    FormsModule,
  ],
  templateUrl: './select-image.component.html',
  styleUrl: './select-image.component.scss',
})
export class SelectImageComponent implements OnInit {
  @Input() lastImageId: number = 0;
  @Output() changeImageId: EventEmitter<number> = new EventEmitter();
  env = environment;
  finder = '';

  constructor(public files_: FilesService) {}

  ngOnInit() {
    if (this.files_.filesData.length == 0) {
      this.files_.FetchDataFromDB();
    }
  }

  changeImage(id: number, myDrop: NgbDropdown) {
    this.changeImageId.emit(id);
    myDrop.close();
    this.lastImageId = id;
  }

  Finder(filesData: any) {
    return filesData.filter((data: any) => {
      return data.nazwa.toLowerCase().includes(this.finder.toLowerCase());
    });
  }
}
