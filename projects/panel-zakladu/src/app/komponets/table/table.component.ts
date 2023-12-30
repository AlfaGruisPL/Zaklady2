import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateIdDirective } from './template-id.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablePaginationComponent } from '../table-pagination/table-pagination.component';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, skip } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TablePaginationComponent, NgbPagination, ReactiveFormsModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

/**
 * Uniwersalna tabela oparta na templete zawierająca pagginacje i możliwość operowania na danych synchronicznych i asynchronicznych

 * **TemplateId-zmienna na nazwę template**
 * @templates  **thead** - Nagłówek tabeli
 * @templates  **tbody** - Zawartość tabeli
 * @templates  **tfoot** - Stopka tabeli
 * @templates  **tsubTableHead** - nagłówek sub tabeli
 * @templates  **tsubTableBody** - zawartość sub tabeli
 * @Inputs **title** - tytuł tabeli
 * @Outputs **changeData** - EventEmiter oznaczający wymóg pobrania nowych danych
 * @Outputs **changePage**  - EventEmiter oznaczający zmianę strony
 * @Outputs  **changeRowsOnPage** -EventEmiter - wysyłający ilość stron jakie mają zostać pobrane z bazy danych
 * @Outputs  **serachChange** -EventEmiter - wywoływany przez wpsianie treści do wyszukiwarki, zabezpieczony przed zbyt wieloma zmianami w czasie
 * @Inputs **collectionSize**  - suma wszystkich elementów jakie są lub mogą być dostępne
 * @Inputs **pageSize** - ilość elementów na pojedyńczej stronie (domyślnie 5)
 * @Inputs **loading**  -
 * @Inputs paggiantionMaxElementArray - Dostępne opcje do wyboru w formie tablicy dotyczące ilości wyświetlanych elementów na stronie.
 *
 * @Inputs **paggiantion**  - czy ma być włączona opcja przewiajnia (domyślnie true)
 * @Inputs **data** - dane
 * @Inputs **title** - tytuł tabeli
 * @Inputs **search** -- włącznik wyszukiwarki
 * @Inputs **async** - włącznik asynchroniczność (zmienia działanie paggination)
 * @Inputs **subTableOpenVariable** - zmienna określająca
 */
export class TableComponent implements AfterContentInit {
  thead: TemplateRef<any> | any;
  tbody: TemplateRef<any> | any;
  tfoot: TemplateRef<any> | any;
  subTableHead: TemplateRef<any> | any;
  subTableBody: TemplateRef<any> | any;
  searchValue = new BehaviorSubject('');
  @ContentChildren(TemplateIdDirective)
  templates: QueryList<TemplateIdDirective> | undefined;
  @Output() changeData = new EventEmitter();
  @Input() collectionSize = 0;
  @Input() pageSize = 5;
  @Input() loading = false;
  @Input({ required: true }) data: Array<any> = [];
  @Input() title = '';
  @Input() search = false;
  @Input() paggiantion = true;
  @Input() displaySum = false;
  @Input()  paggiantionMaxElementArray = [5, 10, 15, 20]
  @Input() async = true;
  //test
  @Input() subTableOpenVariable = 'open';
  @Input() subTableVariable = 'probyPlatnosci';
  @Input() page = 1;
  @Output() pageChange = new EventEmitter();
  @Output() changeRowsOnPage = new EventEmitter();
  @Output() searchChange = new EventEmitter();
  protected readonly Math = Math;

  constructor() {
    this.searchValue.pipe(skip(1), debounceTime(300)).subscribe(term => {
      this.searchChange.emit(this.searchValue.value);
    });
  }

  onSearchChange(event: any) {
    if (this.searchValue.value.trim() == event.target.value.trim()) return;
    this.searchValue.next(event.target.value.trim());
  }

  ngAfterContentInit() {
    this.templates?.forEach((child: TemplateIdDirective) => {
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
        case 'subTableHead':
          this.subTableHead = child.template;
          break;
        case 'subTableBody':
          this.subTableBody = child.template;
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
        this.pageChange.emit(this.page);
        setTimeout(() => {
          this.changeData.emit();
        }, 1);
      }, 1);
    }, 1);
  }

  emptyRowCalcNoAsync() {
    let method1 = this.pageSize - this.data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize).length;
    if (method1 >= 0) {
      return method1;
      //  return this.data.slice(0, this.pageSize).length - this.pageSize;
    }
    return this.pageSize;
  }

  calcEmptyCells(cells: HTMLCollectionOf<HTMLTableCellElement>) {
    const array = Array.from(cells).filter(cell => {
      return !cell.classList.contains('NotInMobile');
    });

    return array.length;
  }
}
