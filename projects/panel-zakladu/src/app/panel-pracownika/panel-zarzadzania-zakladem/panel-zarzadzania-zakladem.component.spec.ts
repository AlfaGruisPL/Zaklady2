import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelZarzadzaniaZaklademComponent } from './panel-zarzadzania-zakladem.component';

describe('PanelZarzadzaniaZaklademComponent', () => {
  let component: PanelZarzadzaniaZaklademComponent;
  let fixture: ComponentFixture<PanelZarzadzaniaZaklademComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelZarzadzaniaZaklademComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelZarzadzaniaZaklademComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
