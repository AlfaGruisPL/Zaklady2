import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BannerPracownikComponent} from './banner-pracownik.component';

describe('BannerComponent', () => {
  let component: BannerPracownikComponent;
  let fixture: ComponentFixture<BannerPracownikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerPracownikComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BannerPracownikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
