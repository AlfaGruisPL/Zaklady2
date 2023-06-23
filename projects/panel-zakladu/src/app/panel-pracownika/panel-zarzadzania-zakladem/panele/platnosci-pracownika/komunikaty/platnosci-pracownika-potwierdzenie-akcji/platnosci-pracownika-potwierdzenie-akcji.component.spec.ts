import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnosciPracownikaPotwierdzenieAkcjiComponent } from './platnosci-pracownika-potwierdzenie-akcji.component';

describe('PlatnosciPracownikaPotwierdzenieAkcjiComponent', () => {
  let component: PlatnosciPracownikaPotwierdzenieAkcjiComponent;
  let fixture: ComponentFixture<PlatnosciPracownikaPotwierdzenieAkcjiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnosciPracownikaPotwierdzenieAkcjiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatnosciPracownikaPotwierdzenieAkcjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
