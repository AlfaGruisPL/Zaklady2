import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonogramPracownikaComponent } from './harmonogram-pracownika.component';

describe('HarmonogramPracownikaComponent', () => {
  let component: HarmonogramPracownikaComponent;
  let fixture: ComponentFixture<HarmonogramPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmonogramPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmonogramPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
