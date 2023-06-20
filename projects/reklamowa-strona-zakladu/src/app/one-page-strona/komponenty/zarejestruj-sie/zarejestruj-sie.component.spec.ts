import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarejestrujSieComponent } from './zarejestruj-sie.component';

describe('ZarejestrujSieComponent', () => {
  let component: ZarejestrujSieComponent;
  let fixture: ComponentFixture<ZarejestrujSieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZarejestrujSieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZarejestrujSieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
