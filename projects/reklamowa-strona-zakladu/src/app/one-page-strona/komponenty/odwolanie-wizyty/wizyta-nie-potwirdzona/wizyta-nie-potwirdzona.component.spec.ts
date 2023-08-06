import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizytaNiePotwirdzonaComponent } from './wizyta-nie-potwirdzona.component';

describe('WizytaNiePotwirdzonaComponent', () => {
  let component: WizytaNiePotwirdzonaComponent;
  let fixture: ComponentFixture<WizytaNiePotwirdzonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizytaNiePotwirdzonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WizytaNiePotwirdzonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
