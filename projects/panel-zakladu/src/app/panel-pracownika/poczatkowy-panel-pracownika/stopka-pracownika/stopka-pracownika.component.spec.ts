import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopkaPracownikaComponent } from './stopka-pracownika.component';

describe('StopkaPracownikaComponent', () => {
  let component: StopkaPracownikaComponent;
  let fixture: ComponentFixture<StopkaPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopkaPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopkaPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
