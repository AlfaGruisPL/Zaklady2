import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLogowaniaPracownikowComponent } from './panel-logowania-pracownikow.component';

describe('PanelLogowaniaPracownikowComponent', () => {
  let component: PanelLogowaniaPracownikowComponent;
  let fixture: ComponentFixture<PanelLogowaniaPracownikowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLogowaniaPracownikowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLogowaniaPracownikowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
