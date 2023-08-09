import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaKlientowPodsumowanieComponent } from './lista-klientow-podsumowanie.component';

describe('ListaKlientowPodsumowanieComponent', () => {
  let component: ListaKlientowPodsumowanieComponent;
  let fixture: ComponentFixture<ListaKlientowPodsumowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaKlientowPodsumowanieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaKlientowPodsumowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
