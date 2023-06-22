import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONasAdresComponent } from './onas-adres.component';

describe('ONasAdresComponent', () => {
  let component: ONasAdresComponent;
  let fixture: ComponentFixture<ONasAdresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONasAdresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ONasAdresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
