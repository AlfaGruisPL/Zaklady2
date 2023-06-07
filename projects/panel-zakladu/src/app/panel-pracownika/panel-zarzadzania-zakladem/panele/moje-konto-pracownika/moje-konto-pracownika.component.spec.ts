import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeKontoPracownikaComponent } from './moje-konto-pracownika.component';

describe('MojeKontoPracownikaComponent', () => {
  let component: MojeKontoPracownikaComponent;
  let fixture: ComponentFixture<MojeKontoPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojeKontoPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojeKontoPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
