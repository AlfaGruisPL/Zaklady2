import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPracownikaComponent } from './banner-pracownika.component';

describe('BannerPracownikaComponent', () => {
  let component: BannerPracownikaComponent;
  let fixture: ComponentFixture<BannerPracownikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPracownikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPracownikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
