import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOblugiKlientaComponent } from './panel-oblugi-klienta.component';

describe('PanelOblugiKlientaComponent', () => {
  let component: PanelOblugiKlientaComponent;
  let fixture: ComponentFixture<PanelOblugiKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelOblugiKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOblugiKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
