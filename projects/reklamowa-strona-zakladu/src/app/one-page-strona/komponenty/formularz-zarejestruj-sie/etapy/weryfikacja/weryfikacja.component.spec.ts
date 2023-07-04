import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeryfikacjaComponent } from './weryfikacja.component';

describe('WeryfikacjaComponent', () => {
  let component: WeryfikacjaComponent;
  let fixture: ComponentFixture<WeryfikacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeryfikacjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeryfikacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
