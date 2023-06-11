import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnosciPracownikaNaglowekComponent } from './platnosci-pracownika-naglowek.component';

describe('PlatnosciPracownikaNaglowekComponent', () => {
  let component: PlatnosciPracownikaNaglowekComponent;
  let fixture: ComponentFixture<PlatnosciPracownikaNaglowekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnosciPracownikaNaglowekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatnosciPracownikaNaglowekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
