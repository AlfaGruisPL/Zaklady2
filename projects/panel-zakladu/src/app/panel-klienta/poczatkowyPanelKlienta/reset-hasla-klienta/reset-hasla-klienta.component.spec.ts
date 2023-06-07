import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetHaslaKlientaComponent } from './reset-hasla-klienta.component';

describe('ResetHaslaKlientaComponent', () => {
  let component: ResetHaslaKlientaComponent;
  let fixture: ComponentFixture<ResetHaslaKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetHaslaKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetHaslaKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
