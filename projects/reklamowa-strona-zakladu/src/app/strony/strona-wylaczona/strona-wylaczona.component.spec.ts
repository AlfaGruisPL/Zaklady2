import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronaWylaczonaComponent } from './strona-wylaczona.component';

describe('StronaWylaczonaComponent', () => {
  let component: StronaWylaczonaComponent;
  let fixture: ComponentFixture<StronaWylaczonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronaWylaczonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StronaWylaczonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
