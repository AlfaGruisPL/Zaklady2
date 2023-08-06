import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizytaOdwolaniaPoprawnieComponent } from './wizyta-odwolania-poprawnie.component';

describe('WizytaOdwolaniaPoprawnieComponent', () => {
  let component: WizytaOdwolaniaPoprawnieComponent;
  let fixture: ComponentFixture<WizytaOdwolaniaPoprawnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizytaOdwolaniaPoprawnieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizytaOdwolaniaPoprawnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
