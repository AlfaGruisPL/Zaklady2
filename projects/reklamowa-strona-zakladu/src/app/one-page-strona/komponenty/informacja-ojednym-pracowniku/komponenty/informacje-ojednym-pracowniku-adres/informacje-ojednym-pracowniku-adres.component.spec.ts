import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacjeOJednymPracownikuAdresComponent } from './informacje-ojednym-pracowniku-adres.component';

describe('InformacjeOJednymPracownikuAdresComponent', () => {
  let component: InformacjeOJednymPracownikuAdresComponent;
  let fixture: ComponentFixture<InformacjeOJednymPracownikuAdresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacjeOJednymPracownikuAdresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacjeOJednymPracownikuAdresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
