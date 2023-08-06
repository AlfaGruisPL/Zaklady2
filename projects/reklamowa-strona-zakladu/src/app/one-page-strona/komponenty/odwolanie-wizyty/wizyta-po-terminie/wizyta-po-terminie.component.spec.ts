import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizytaPoTerminieComponent } from './wizyta-po-terminie.component';

describe('WizytaPoTerminieComponent', () => {
  let component: WizytaPoTerminieComponent;
  let fixture: ComponentFixture<WizytaPoTerminieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizytaPoTerminieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizytaPoTerminieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
