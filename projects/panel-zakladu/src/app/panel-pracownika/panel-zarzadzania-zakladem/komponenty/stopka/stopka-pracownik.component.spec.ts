import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StopkaPracownikComponent} from './stopka-pracownik.component';

describe('StopkaComponent', () => {
  let component: StopkaPracownikComponent;
  let fixture: ComponentFixture<StopkaPracownikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StopkaPracownikComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StopkaPracownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
