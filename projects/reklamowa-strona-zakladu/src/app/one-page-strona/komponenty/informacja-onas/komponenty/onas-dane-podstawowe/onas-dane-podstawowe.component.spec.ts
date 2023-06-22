import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONasDanePodstawoweComponent } from './onas-dane-podstawowe.component';

describe('ONasDanePodstawoweComponent', () => {
  let component: ONasDanePodstawoweComponent;
  let fixture: ComponentFixture<ONasDanePodstawoweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONasDanePodstawoweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONasDanePodstawoweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
