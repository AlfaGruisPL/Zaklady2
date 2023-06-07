import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownicyPracownikaComponent } from './pracownicy-pracownika.component';

describe('PracownicyPracownikaComponent', () => {
  let component: PracownicyPracownikaComponent;
  let fixture: ComponentFixture<PracownicyPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracownicyPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracownicyPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
