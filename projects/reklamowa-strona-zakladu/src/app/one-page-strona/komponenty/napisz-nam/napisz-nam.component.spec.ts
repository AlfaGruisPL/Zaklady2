import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NapiszNamComponent } from './napisz-nam.component';

describe('NapiszNamComponent', () => {
  let component: NapiszNamComponent;
  let fixture: ComponentFixture<NapiszNamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NapiszNamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NapiszNamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
