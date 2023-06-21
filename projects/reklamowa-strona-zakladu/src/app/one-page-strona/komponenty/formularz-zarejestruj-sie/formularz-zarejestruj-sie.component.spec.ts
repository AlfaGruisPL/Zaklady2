import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularzZarejestrujSieComponent } from './formularz-zarejestruj-sie.component';

describe('FormularzZarejestrujSieComponent', () => {
  let component: FormularzZarejestrujSieComponent;
  let fixture: ComponentFixture<FormularzZarejestrujSieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularzZarejestrujSieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularzZarejestrujSieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
