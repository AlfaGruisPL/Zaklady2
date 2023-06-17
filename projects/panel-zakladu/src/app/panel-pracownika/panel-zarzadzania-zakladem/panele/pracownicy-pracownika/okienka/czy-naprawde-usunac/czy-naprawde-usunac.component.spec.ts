import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzyNaprawdeUsunacComponent } from './czy-naprawde-usunac.component';

describe('CzyNaprawdeUsunacComponent', () => {
  let component: CzyNaprawdeUsunacComponent;
  let fixture: ComponentFixture<CzyNaprawdeUsunacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzyNaprawdeUsunacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CzyNaprawdeUsunacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
