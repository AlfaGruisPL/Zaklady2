import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONasGodzinyOtwarciaComponent } from './onas-godziny-otwarcia.component';

describe('ONasGodzinyOtwarciaComponent', () => {
  let component: ONasGodzinyOtwarciaComponent;
  let fixture: ComponentFixture<ONasGodzinyOtwarciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONasGodzinyOtwarciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONasGodzinyOtwarciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
