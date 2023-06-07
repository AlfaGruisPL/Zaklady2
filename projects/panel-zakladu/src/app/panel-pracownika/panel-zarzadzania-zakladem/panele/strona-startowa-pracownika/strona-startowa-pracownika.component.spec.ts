import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronaStartowaPracownikaComponent } from './strona-startowa-pracownika.component';

describe('StronaStartowaPracownikaComponent', () => {
  let component: StronaStartowaPracownikaComponent;
  let fixture: ComponentFixture<StronaStartowaPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronaStartowaPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StronaStartowaPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
