import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacjaONasComponent } from './informacja-onas.component';

describe('InformacjaONasComponent', () => {
  let component: InformacjaONasComponent;
  let fixture: ComponentFixture<InformacjaONasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacjaONasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacjaONasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
