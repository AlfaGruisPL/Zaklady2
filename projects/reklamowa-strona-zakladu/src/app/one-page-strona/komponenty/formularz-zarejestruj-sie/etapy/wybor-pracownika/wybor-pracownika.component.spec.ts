import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyborPracownikaComponent } from './wybor-pracownika.component';

describe('WyborPracownikaComponent', () => {
  let component: WyborPracownikaComponent;
  let fixture: ComponentFixture<WyborPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyborPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyborPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
