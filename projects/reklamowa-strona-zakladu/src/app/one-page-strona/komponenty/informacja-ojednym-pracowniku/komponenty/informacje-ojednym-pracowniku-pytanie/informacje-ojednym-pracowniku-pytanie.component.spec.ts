import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacjeOJednymPracownikuPytanieComponent } from './informacje-ojednym-pracowniku-pytanie.component';

describe('InformacjeOJednymPracownikuPytanieComponent', () => {
  let component: InformacjeOJednymPracownikuPytanieComponent;
  let fixture: ComponentFixture<InformacjeOJednymPracownikuPytanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacjeOJednymPracownikuPytanieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacjeOJednymPracownikuPytanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
