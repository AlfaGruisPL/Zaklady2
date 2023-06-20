import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgloszeniaComponent } from './ogloszenia.component';

describe('OgloszeniaComponent', () => {
  let component: OgloszeniaComponent;
  let fixture: ComponentFixture<OgloszeniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgloszeniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgloszeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
