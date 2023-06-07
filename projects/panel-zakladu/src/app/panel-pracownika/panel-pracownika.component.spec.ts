import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPracownikaComponent } from './panel-pracownika.component';

describe('PanelPracownikaComponent', () => {
  let component: PanelPracownikaComponent;
  let fixture: ComponentFixture<PanelPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
