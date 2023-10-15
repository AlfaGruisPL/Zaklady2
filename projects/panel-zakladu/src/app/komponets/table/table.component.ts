import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateIdDirective } from './template-id.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablePaginationComponent } from '../table-pagination/table-pagination.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TablePaginationComponent, NgbPagination, ReactiveFormsModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterContentInit {
  thead: TemplateRef<any> | any;
  tbody: TemplateRef<any> | any;
  tfoot: TemplateRef<any> | any;
  @ContentChildren(TemplateIdDirective)
  templates: QueryList<TemplateIdDirective> | undefined;
  @Output() changeData = new EventEmitter();
  @Input() collectionSize = 0;
  @Input() pageSize = 5;
  @Input() loading = false;
  @Input({ required: true }) data: Array<object> = [];
  @Input() title = '';
  @Input() search = false;

  @Output() changePage = new EventEmitter();
  @Output() changeRowsOnPage = new EventEmitter();

  page = 1;

  protected readonly Math = Math;

  onSearchChange(event: any) {}

  ngAfterContentInit() {
    this.templates?.forEach((child: TemplateIdDirective) => {
      console.log(child.id);
      switch (child.id) {
        case 'thead':
          this.thead = child.template;
          break;
        case 'tbody':
          this.tbody = child.template;
          break;
        case 'tfoot':
          this.tfoot = child.template;
          break;
      }
    });
  }

  emptyRowCalc() {
    let method1 = this.pageSize - this.data.slice(0, this.pageSize).length;
    if (method1 > 0) {
      return method1;
      //  return this.data.slice(0, this.pageSize).length - this.pageSize;
    }
    return 0;
  }

  indexCount(index: number) {
    return index + this.page * this.pageSize - this.pageSize + 1;
  }

  pageCount(): number {
    return Math.ceil(this.collectionSize / this.pageSize);
  }

  saveChange() {
    setTimeout(() => {
      this.changeRowsOnPage.emit(this.pageSize);
      setTimeout(() => {
        this.changePage.emit(this.page);
        setTimeout(() => {
          this.changeData.emit();
        }, 1);
      }, 1);
    }, 1);
  }
}
