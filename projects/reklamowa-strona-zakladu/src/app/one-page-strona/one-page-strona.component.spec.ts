import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageStronaComponent } from './one-page-strona.component';

describe('OnePageStronaComponent', () => {
  let component: OnePageStronaComponent;
  let fixture: ComponentFixture<OnePageStronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePageStronaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePageStronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
