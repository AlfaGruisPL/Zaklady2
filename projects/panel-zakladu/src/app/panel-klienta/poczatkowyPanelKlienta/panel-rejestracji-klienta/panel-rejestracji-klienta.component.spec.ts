import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRejestracjiKlientaComponent } from './panel-rejestracji-klienta.component';

describe('PanelRejestracjiKlientaComponent', () => {
  let component: PanelRejestracjiKlientaComponent;
  let fixture: ComponentFixture<PanelRejestracjiKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelRejestracjiKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelRejestracjiKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
