import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslugaSmsStatystykiComponent } from './usluga-sms-statystyki.component';

describe('UslugaSmsStatystykiComponent', () => {
  let component: UslugaSmsStatystykiComponent;
  let fixture: ComponentFixture<UslugaSmsStatystykiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslugaSmsStatystykiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UslugaSmsStatystykiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
