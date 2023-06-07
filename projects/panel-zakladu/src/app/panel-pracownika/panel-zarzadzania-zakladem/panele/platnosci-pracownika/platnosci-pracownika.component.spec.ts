import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnosciPracownikaComponent } from './platnosci-pracownika.component';

describe('PlatnosciPracownikaComponent', () => {
  let component: PlatnosciPracownikaComponent;
  let fixture: ComponentFixture<PlatnosciPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnosciPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatnosciPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
