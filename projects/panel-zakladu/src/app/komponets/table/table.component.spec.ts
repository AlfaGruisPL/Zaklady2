import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changeData event when calling saveChange()', () => {
    spyOn(component.changeData, 'emit');
    component.saveChange();
    expect(component.changeData.emit).toHaveBeenCalled();
  });

  it('should emit changeRowsOnPage event when calling saveChange()', () => {
    spyOn(component.changeRowsOnPage, 'emit');
    component.saveChange();
    expect(component.changeRowsOnPage.emit).toHaveBeenCalledWith(component.pageSize);
  });

  it('should emit pageChange event when calling saveChange()', () => {
    spyOn(component.pageChange, 'emit');
    component.saveChange();
    expect(component.pageChange.emit).toHaveBeenCalledWith(component.page);
  });

  it('should emit searchChange event when onSearchChange() is called', () => {
    const event = { target: { value: 'search term' } };
    spyOn(component.searchChange, 'emit');
    component.onSearchChange(event);
    expect(component.searchChange.emit).toHaveBeenCalledWith(event.target.value.trim());
  });

  it('should update searchValue when onSearchChange() is called', () => {
    const event = { target: { value: 'search term' } };
    component.onSearchChange(event);
    expect(component.searchValue.value).toBe(event.target.value.trim());
  });

  it('should not emit searchChange event when onSearchChange() is called with the same searchValue', () => {
    const event = { target: { value: 'search term' } };
    component.searchValue.next(event.target.value.trim());
    spyOn(component.searchChange, 'emit');
    component.onSearchChange(event);
    expect(component.searchChange.emit).not.toHaveBeenCalled();
  });

  it('should calculate the correct emptyRow count when async is true', () => {
    component.data = [1, 2, 3, 4];
    component.page = 1;
    component.pageSize = 5;
    expect(component.emptyRowCalc()).toBe(1);
  });

  it('should calculate the correct emptyRow count when async is false', () => {
    component.data = [1, 2, 3, 4];
    component.page = 1;
    component.pageSize = 5;
    expect(component.emptyRowCalcNoAsync()).toBe(5);
  });

  it('should calculate the correct index count', () => {
    component.page = 2;
    component.pageSize = 5;
    expect(component.indexCount(0)).toBe(6);
  });

  it('should calculate the correct page count', () => {
    component.collectionSize = 15;
    component.pageSize = 5;
    expect(component.pageCount()).toBe(3);
  });
});
