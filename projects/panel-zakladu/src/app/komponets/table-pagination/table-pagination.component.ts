import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-pagination',
  standalone: true,
  imports: [CommonModule, NgbPagination, FormsModule],
  templateUrl: './table-pagination.component.html',
  styleUrls: ['./table-pagination.component.scss'],
})
export class TablePaginationComponent {
  savePageSize = 0;
  @Input()
  page: number = 0;
  @Input({ required: true })
  collectionSize = 0;
  @Input()
  pageSize = 10;
  @Output()
  pageSizeChange = new EventEmitter<number>();
  @Output()
  pageChange = new EventEmitter<number>();
  //domyślnie 10
  @Input()
  recordOnPage = 10;
  @Output()
  recordOnPageChange = new EventEmitter<number>();
  @Input()
  pageSizeArray = [10, 20, 50, 100];

  @Output()
  changeData = new EventEmitter();
  private this2 = this;

  ngAfterViewInit() {
    setTimeout(() => {
      this.savePageSize = this.pageSize;
    }, 1);
  }

  pageCount(): number {
    return Math.ceil(this.collectionSize / this.pageSize);
  }

  emit() {
    this.changeData.emit(this);
  }

  indexCount(index: number) {
    console.log(index, this.page, this.pageSize);
    return index + this.page * this.pageSize - this.pageSize + 1;
  }
}
