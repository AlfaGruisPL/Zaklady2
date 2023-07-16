import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarzZarzadzanieTerminemComponent } from './kalendarz-zarzadzanie-terminem.component';

describe('KalendarzZarzadzanieTerminemComponent', () => {
  let component: KalendarzZarzadzanieTerminemComponent;
  let fixture: ComponentFixture<KalendarzZarzadzanieTerminemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalendarzZarzadzanieTerminemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalendarzZarzadzanieTerminemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
