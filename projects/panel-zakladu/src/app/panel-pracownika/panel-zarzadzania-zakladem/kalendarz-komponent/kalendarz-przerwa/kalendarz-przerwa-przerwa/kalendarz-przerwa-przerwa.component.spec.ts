import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarzPrzerwaPrzerwaComponent } from './kalendarz-przerwa-przerwa.component';

describe('KalendarzPrzerwaPrzerwaComponent', () => {
  let component: KalendarzPrzerwaPrzerwaComponent;
  let fixture: ComponentFixture<KalendarzPrzerwaPrzerwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalendarzPrzerwaPrzerwaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalendarzPrzerwaPrzerwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
