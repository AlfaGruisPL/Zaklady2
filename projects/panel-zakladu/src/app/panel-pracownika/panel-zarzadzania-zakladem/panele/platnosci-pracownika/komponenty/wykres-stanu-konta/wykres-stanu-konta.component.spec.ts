import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykresStanuKontaComponent } from './wykres-stanu-konta.component';

describe('WykresStanuKontaComponent', () => {
  let component: WykresStanuKontaComponent;
  let fixture: ComponentFixture<WykresStanuKontaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykresStanuKontaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WykresStanuKontaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
