import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoczatkowyPanelKlientaComponent } from './poczatkowy-panel-klienta.component';

describe('PoczatkowyPanelKlientaComponent', () => {
  let component: PoczatkowyPanelKlientaComponent;
  let fixture: ComponentFixture<PoczatkowyPanelKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoczatkowyPanelKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoczatkowyPanelKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
