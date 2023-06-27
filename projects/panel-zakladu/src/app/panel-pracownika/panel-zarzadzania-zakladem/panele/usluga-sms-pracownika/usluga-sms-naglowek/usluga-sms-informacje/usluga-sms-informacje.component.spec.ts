import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugaSmsInformacjeComponent } from './usluga-sms-informacje.component';

describe('UslugaSmsInformacjeComponent', () => {
  let component: UslugaSmsInformacjeComponent;
  let fixture: ComponentFixture<UslugaSmsInformacjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslugaSmsInformacjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UslugaSmsInformacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
