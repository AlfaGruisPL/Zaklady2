import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoczatkowyPanelPracownikaComponent } from './poczatkowy-panel-pracownika.component';

describe('PoczatkowyPanelPracownikaComponent', () => {
  let component: PoczatkowyPanelPracownikaComponent;
  let fixture: ComponentFixture<PoczatkowyPanelPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoczatkowyPanelPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoczatkowyPanelPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
