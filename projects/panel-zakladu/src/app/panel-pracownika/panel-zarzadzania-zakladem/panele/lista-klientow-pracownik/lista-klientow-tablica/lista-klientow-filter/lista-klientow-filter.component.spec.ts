import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKlientowFilterComponent } from './lista-klientow-filter.component';

describe('ListaKlientowFilterComponent', () => {
  let component: ListaKlientowFilterComponent;
  let fixture: ComponentFixture<ListaKlientowFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaKlientowFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaKlientowFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
