import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetHaslaPracownikowComponent } from './reset-hasla-pracownikow.component';

describe('ResetHaslaPracownikowComponent', () => {
  let component: ResetHaslaPracownikowComponent;
  let fixture: ComponentFixture<ResetHaslaPracownikowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetHaslaPracownikowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetHaslaPracownikowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
