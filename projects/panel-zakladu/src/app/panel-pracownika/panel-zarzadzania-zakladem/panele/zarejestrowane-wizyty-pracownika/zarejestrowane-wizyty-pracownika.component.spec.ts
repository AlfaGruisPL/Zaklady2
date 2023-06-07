import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZarejestrowaneWizytyPracownikaComponent } from './zarejestrowane-wizyty-pracownika.component';

describe('ZarejestrowaneWizytyPracownikaComponent', () => {
  let component: ZarejestrowaneWizytyPracownikaComponent;
  let fixture: ComponentFixture<ZarejestrowaneWizytyPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZarejestrowaneWizytyPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZarejestrowaneWizytyPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
