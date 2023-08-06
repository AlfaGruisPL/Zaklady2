import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizytaJuzOdwolanaComponent } from './wizyta-juz-odwolana.component';

describe('WizytaJuzOdwolanaComponent', () => {
  let component: WizytaJuzOdwolanaComponent;
  let fixture: ComponentFixture<WizytaJuzOdwolanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizytaJuzOdwolanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizytaJuzOdwolanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
