import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalendarzPrzerwaDzienWolnyComponent } from './kalendarz-przerwa-dzien-wolny.component';

describe('KalendarzPrzerwaDzienWolnyComponent', () => {
  let component: KalendarzPrzerwaDzienWolnyComponent;
  let fixture: ComponentFixture<KalendarzPrzerwaDzienWolnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalendarzPrzerwaDzienWolnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalendarzPrzerwaDzienWolnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
