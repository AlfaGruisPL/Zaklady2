import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacjeOJednymPracownikuKontaktComponent } from './informacje-ojednym-pracowniku-kontakt.component';

describe('InformacjeOJednymPracownikuKontaktComponent', () => {
  let component: InformacjeOJednymPracownikuKontaktComponent;
  let fixture: ComponentFixture<InformacjeOJednymPracownikuKontaktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacjeOJednymPracownikuKontaktComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacjeOJednymPracownikuKontaktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
