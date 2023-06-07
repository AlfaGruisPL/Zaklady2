import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CennikiPracownikaComponent } from './cenniki-pracownika.component';

describe('CennikiPracownikaComponent', () => {
  let component: CennikiPracownikaComponent;
  let fixture: ComponentFixture<CennikiPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CennikiPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CennikiPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
