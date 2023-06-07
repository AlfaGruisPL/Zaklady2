import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojZakladPracownikaComponent } from './moj-zaklad-pracownika.component';

describe('MojZakladPracownikaComponent', () => {
  let component: MojZakladPracownikaComponent;
  let fixture: ComponentFixture<MojZakladPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojZakladPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojZakladPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
