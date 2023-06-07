import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaszPanelZarzadzaniaZakladamiComponent } from './nasz-panel-zarzadzania-zakladami.component';

describe('NaszPanelZarzadzaniaZakladamiComponent', () => {
  let component: NaszPanelZarzadzaniaZakladamiComponent;
  let fixture: ComponentFixture<NaszPanelZarzadzaniaZakladamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaszPanelZarzadzaniaZakladamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaszPanelZarzadzaniaZakladamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
