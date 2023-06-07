import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronaReprezentacyjnaPracownikaComponent } from './strona-reprezentacyjna-pracownika.component';

describe('StronaReprezentacyjnaPracownikaComponent', () => {
  let component: StronaReprezentacyjnaPracownikaComponent;
  let fixture: ComponentFixture<StronaReprezentacyjnaPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronaReprezentacyjnaPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StronaReprezentacyjnaPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
