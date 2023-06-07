import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopkaKlientaComponent } from './stopka-klienta.component';

describe('StopkaKlientaComponent', () => {
  let component: StopkaKlientaComponent;
  let fixture: ComponentFixture<StopkaKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopkaKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopkaKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
