import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatnosciSMSOknoComponent } from './platnosci-smsokno.component';

describe('PlatnosciSMSOknoComponent', () => {
  let component: PlatnosciSMSOknoComponent;
  let fixture: ComponentFixture<PlatnosciSMSOknoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatnosciSMSOknoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatnosciSMSOknoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
