import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OknoPlatnosciComponent } from './okno-platnosci.component';

describe('OknoPlatnosciComponent', () => {
  let component: OknoPlatnosciComponent;
  let fixture: ComponentFixture<OknoPlatnosciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OknoPlatnosciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OknoPlatnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
