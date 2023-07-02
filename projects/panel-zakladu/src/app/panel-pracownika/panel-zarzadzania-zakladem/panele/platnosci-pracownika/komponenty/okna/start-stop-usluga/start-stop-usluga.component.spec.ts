import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartStopUslugaComponent } from './start-stop-usluga.component';

describe('StartStopUslugaComponent', () => {
  let component: StartStopUslugaComponent;
  let fixture: ComponentFixture<StartStopUslugaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StartStopUslugaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StartStopUslugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
