import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugiPrzypisaniPracownicyComponent } from './uslugi-przypisani-pracownicy.component';

describe('UslugiPrzypisaniPracownicyComponent', () => {
  let component: UslugiPrzypisaniPracownicyComponent;
  let fixture: ComponentFixture<UslugiPrzypisaniPracownicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslugiPrzypisaniPracownicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UslugiPrzypisaniPracownicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
