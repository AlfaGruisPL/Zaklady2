import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnosciPracownikaTabelaComponent } from './platnosci-pracownika-tabela.component';

describe('PlatnosciPracownikaTabelaComponent', () => {
  let component: PlatnosciPracownikaTabelaComponent;
  let fixture: ComponentFixture<PlatnosciPracownikaTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnosciPracownikaTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatnosciPracownikaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
