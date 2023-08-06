import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrakWizytyComponent } from './brak-wizyty.component';

describe('BrakWizytyComponent', () => {
  let component: BrakWizytyComponent;
  let fixture: ComponentFixture<BrakWizytyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrakWizytyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrakWizytyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
