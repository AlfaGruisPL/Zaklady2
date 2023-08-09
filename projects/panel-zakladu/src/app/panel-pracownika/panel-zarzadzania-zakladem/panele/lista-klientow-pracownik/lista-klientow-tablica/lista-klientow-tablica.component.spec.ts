import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKlientowTablicaComponent } from './lista-klientow-tablica.component';

describe('ListaKlientowTablicaComponent', () => {
  let component: ListaKlientowTablicaComponent;
  let fixture: ComponentFixture<ListaKlientowTablicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaKlientowTablicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaKlientowTablicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
