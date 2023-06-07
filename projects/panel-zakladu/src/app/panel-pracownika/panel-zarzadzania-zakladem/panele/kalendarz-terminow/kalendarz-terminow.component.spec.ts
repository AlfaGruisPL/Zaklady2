import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarzTerminowComponent } from './kalendarz-terminow.component';

describe('KalendarzTerminowComponent', () => {
  let component: KalendarzTerminowComponent;
  let fixture: ComponentFixture<KalendarzTerminowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalendarzTerminowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalendarzTerminowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
