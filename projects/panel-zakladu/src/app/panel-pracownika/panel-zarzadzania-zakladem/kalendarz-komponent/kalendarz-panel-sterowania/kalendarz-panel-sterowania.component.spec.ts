import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarzPanelSterowaniaComponent } from './kalendarz-panel-sterowania.component';

describe('KalendarzPanelSterowaniaComponent', () => {
  let component: KalendarzPanelSterowaniaComponent;
  let fixture: ComponentFixture<KalendarzPanelSterowaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalendarzPanelSterowaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalendarzPanelSterowaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
