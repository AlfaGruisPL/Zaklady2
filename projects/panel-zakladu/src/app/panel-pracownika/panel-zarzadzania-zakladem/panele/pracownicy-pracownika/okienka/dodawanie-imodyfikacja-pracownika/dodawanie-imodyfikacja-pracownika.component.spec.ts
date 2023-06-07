import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodawanieIModyfikacjaPracownikaComponent } from './dodawanie-imodyfikacja-pracownika.component';

describe('DodawanieIModyfikacjaPracownikaComponent', () => {
  let component: DodawanieIModyfikacjaPracownikaComponent;
  let fixture: ComponentFixture<DodawanieIModyfikacjaPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodawanieIModyfikacjaPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodawanieIModyfikacjaPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
