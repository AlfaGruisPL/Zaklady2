import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrzalkaComponent } from './strzalka.component';

describe('StrzalkaComponent', () => {
  let component: StrzalkaComponent;
  let fixture: ComponentFixture<StrzalkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrzalkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrzalkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
