import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnosciPracownikaOplatyComponent } from './platnosci-pracownika-oplaty.component';

describe('PlatnosciPracownikaOplatyComponent', () => {
  let component: PlatnosciPracownikaOplatyComponent;
  let fixture: ComponentFixture<PlatnosciPracownikaOplatyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnosciPracownikaOplatyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatnosciPracownikaOplatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
