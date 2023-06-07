import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejestracjaZakladuComponent } from './rejestracja-zakladu.component';

describe('RejestracjaZakladuComponent', () => {
  let component: RejestracjaZakladuComponent;
  let fixture: ComponentFixture<RejestracjaZakladuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejestracjaZakladuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejestracjaZakladuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
