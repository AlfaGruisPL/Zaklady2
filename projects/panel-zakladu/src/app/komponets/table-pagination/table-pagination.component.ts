import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
export class TablePaginationComponent implements OnChanges {
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
  kback = 0;
  private this2 = this;

  ngAfterViewInit() {
    setTimeout(() => {
      this.savePageSize = this.pageSize;
    }, 1);
  }

  pageCount(): number {
    return Math.ceil(this.collectionSize / this.pageSize);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.calcEmptyCell();
  }

  calcEmptyCell() {
    console.log(this.pageSize, this.collectionSize);
    let k = this.pageSize - this.collectionSize;
    if (k < 1) {
      this.kback = 0;
    } else {
      this.kback = k;
    }
  }

  indexCount(index: number) {
    return index + this.page * this.pageSize - this.pageSize + 1;
  }

  emptyRowArray() {
    return [].constructor(this.kback);
  }
}
