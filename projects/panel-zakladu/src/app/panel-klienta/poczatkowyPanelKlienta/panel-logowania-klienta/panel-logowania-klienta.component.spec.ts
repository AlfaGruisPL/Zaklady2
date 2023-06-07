import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelLogowaniaKlientaComponent } from './panel-logowania-klienta.component';

describe('PanelLogowaniaKlientaComponent', () => {
  let component: PanelLogowaniaKlientaComponent;
  let fixture: ComponentFixture<PanelLogowaniaKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelLogowaniaKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelLogowaniaKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
