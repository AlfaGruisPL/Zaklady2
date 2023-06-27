import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugaSmsUstawieniaComponent } from './usluga-sms-ustawienia.component';

describe('UslugaSmsUstawieniaComponent', () => {
  let component: UslugaSmsUstawieniaComponent;
  let fixture: ComponentFixture<UslugaSmsUstawieniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslugaSmsUstawieniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UslugaSmsUstawieniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
