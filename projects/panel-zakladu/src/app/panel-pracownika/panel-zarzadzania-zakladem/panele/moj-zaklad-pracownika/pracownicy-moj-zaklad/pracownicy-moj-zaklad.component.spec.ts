import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownicyMojZakladComponent } from './pracownicy-moj-zaklad.component';

describe('PracownicyMojZakladComponent', () => {
  let component: PracownicyMojZakladComponent;
  let fixture: ComponentFixture<PracownicyMojZakladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracownicyMojZakladComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracownicyMojZakladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
