import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerKlientaComponent } from './banner-klienta.component';

describe('BannerKlientaComponent', () => {
  let component: BannerKlientaComponent;
  let fixture: ComponentFixture<BannerKlientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerKlientaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerKlientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
