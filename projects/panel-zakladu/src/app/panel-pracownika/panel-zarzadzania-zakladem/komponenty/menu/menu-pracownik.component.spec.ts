import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuPracownikComponent} from './menu-pracownik.component';

describe('MenuComponent', () => {
  let component: MenuPracownikComponent;
  let fixture: ComponentFixture<MenuPracownikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuPracownikComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MenuPracownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
