import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONasKontaktComponent } from './onas-kontakt.component';

describe('ONasKontaktComponent', () => {
  let component: ONasKontaktComponent;
  let fixture: ComponentFixture<ONasKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONasKontaktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONasKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
