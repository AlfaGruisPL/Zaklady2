import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportyPracownikaComponent } from './raporty-pracownika.component';

describe('RaportyPracownikaComponent', () => {
  let component: RaportyPracownikaComponent;
  let fixture: ComponentFixture<RaportyPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportyPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaportyPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
