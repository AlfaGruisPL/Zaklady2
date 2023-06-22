import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONasUslugiComponent } from './onas-uslugi.component';

describe('ONasUslugiComponent', () => {
  let component: ONasUslugiComponent;
  let fixture: ComponentFixture<ONasUslugiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONasUslugiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONasUslugiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
