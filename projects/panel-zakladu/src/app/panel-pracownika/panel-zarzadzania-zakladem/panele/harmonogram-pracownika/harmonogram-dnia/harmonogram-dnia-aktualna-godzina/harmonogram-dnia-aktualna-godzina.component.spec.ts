import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarmonogramDniaAktualnaGodzinaComponent } from './harmonogram-dnia-aktualna-godzina.component';

describe('HarmonogramDniaAktualnaGodzinaComponent', () => {
  let component: HarmonogramDniaAktualnaGodzinaComponent;
  let fixture: ComponentFixture<HarmonogramDniaAktualnaGodzinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarmonogramDniaAktualnaGodzinaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HarmonogramDniaAktualnaGodzinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
