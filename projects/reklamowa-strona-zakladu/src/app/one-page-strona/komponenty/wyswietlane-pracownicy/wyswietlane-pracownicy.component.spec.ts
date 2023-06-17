import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyswietlanePracownicyComponent } from './wyswietlane-pracownicy.component';

describe('WyswietlanePracownicyComponent', () => {
  let component: WyswietlanePracownicyComponent;
  let fixture: ComponentFixture<WyswietlanePracownicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyswietlanePracownicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyswietlanePracownicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
