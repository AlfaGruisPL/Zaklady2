import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacjaOJednymPracownikuComponent } from './informacja-ojednym-pracowniku.component';

describe('InformacjaOJednymPracownikuComponent', () => {
  let component: InformacjaOJednymPracownikuComponent;
  let fixture: ComponentFixture<InformacjaOJednymPracownikuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacjaOJednymPracownikuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacjaOJednymPracownikuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
