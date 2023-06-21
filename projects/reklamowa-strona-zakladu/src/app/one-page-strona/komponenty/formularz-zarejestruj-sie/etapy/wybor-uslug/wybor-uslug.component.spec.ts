import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyborUslugComponent } from './wybor-uslug.component';

describe('WyborUslugComponent', () => {
  let component: WyborUslugComponent;
  let fixture: ComponentFixture<WyborUslugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyborUslugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyborUslugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
