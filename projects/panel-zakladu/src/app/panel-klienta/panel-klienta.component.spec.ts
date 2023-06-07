import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelKlientaComponent } from './panel-klienta.component';

describe('PanelKlientaComponent', () => {
  let component: PanelKlientaComponent;
  let fixture: ComponentFixture<PanelKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
