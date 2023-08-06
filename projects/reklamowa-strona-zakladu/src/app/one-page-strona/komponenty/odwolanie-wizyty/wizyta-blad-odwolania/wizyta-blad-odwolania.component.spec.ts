import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizytaBladOdwolaniaComponent } from './wizyta-blad-odwolania.component';

describe('WizytaBladOdwolaniaComponent', () => {
  let component: WizytaBladOdwolaniaComponent;
  let fixture: ComponentFixture<WizytaBladOdwolaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizytaBladOdwolaniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizytaBladOdwolaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
