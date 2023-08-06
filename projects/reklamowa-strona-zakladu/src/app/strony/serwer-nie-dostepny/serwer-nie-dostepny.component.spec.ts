import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerwerNieDostepnyComponent } from './serwer-nie-dostepny.component';

describe('SerwerNieDostepnyComponent', () => {
  let component: SerwerNieDostepnyComponent;
  let fixture: ComponentFixture<SerwerNieDostepnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerwerNieDostepnyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerwerNieDostepnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
