import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacjeOJednymPracownikuOpisComponent } from './informacje-ojednym-pracowniku-opis.component';

describe('InformacjeOJednymPracownikuOpisComponent', () => {
  let component: InformacjeOJednymPracownikuOpisComponent;
  let fixture: ComponentFixture<InformacjeOJednymPracownikuOpisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacjeOJednymPracownikuOpisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacjeOJednymPracownikuOpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
