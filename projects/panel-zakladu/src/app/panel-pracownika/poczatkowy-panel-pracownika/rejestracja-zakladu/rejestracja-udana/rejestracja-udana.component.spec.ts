import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejestracjaUdanaComponent } from './rejestracja-udana.component';

describe('RejestracjaUdanaComponent', () => {
  let component: RejestracjaUdanaComponent;
  let fixture: ComponentFixture<RejestracjaUdanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejestracjaUdanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejestracjaUdanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
