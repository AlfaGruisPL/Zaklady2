import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { FilesService } from '../files.service';
import { RureczkiModule } from '../../../../../rureczki/rureczki.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCross, faX } from '@fortawesome/free-solid-svg-icons';

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
    FontAwesomeModule,
    NgStyle,
  ],
  templateUrl: './select-image.component.html',
  styleUrl: './select-image.component.scss',
})
export class SelectImageComponent implements OnInit {
  //styles
  @Input() height: string = '30px';

  //option
  @Input() outSideModify = false;
  @Input() imageId: number | string = 0;
  @Output() imageIdChange: EventEmitter<number> = new EventEmitter();
  env = environment;
  finder = '';
  tmp = 0;
  protected readonly faCross = faCross;
  protected readonly faX = faX;

  constructor(public files_: FilesService) {}

  ngOnInit() {}

  getData() {
    this.files_.FetchDataFromDB();
  }

  mouseInto() {
    if (this.imageId == 0) return;
    this.tmp = +this.imageId;
    this.imageId = -1;
  }

  mouseOuto() {
    if (this.imageId == 0) return;
    this.imageId = this.tmp;
  }

  changeImage(id: number, myDrop: NgbDropdown) {
    this.imageIdChange.emit(id);
    myDrop.close();
    this.imageId = id;
  }

  Finder(filesData: any): Array<any> {
    return filesData.filter((data: any) => {
      if (data.nazwa) {
        return data.nazwa.toLowerCase().includes(this.finder.toLowerCase().trim());
      }
    });
  }
}
