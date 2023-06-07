import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKlientowPracownikComponent } from './lista-klientow-pracownik.component';

describe('ListaKlientowPracownikComponent', () => {
  let component: ListaKlientowPracownikComponent;
  let fixture: ComponentFixture<ListaKlientowPracownikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaKlientowPracownikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaKlientowPracownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
