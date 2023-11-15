import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPrzerwFilterComponent } from './tabela-przerw-filter.component';

describe('TabelaPrzerwFilterComponent', () => {
  let component: TabelaPrzerwFilterComponent;
  let fixture: ComponentFixture<TabelaPrzerwFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaPrzerwFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaPrzerwFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
