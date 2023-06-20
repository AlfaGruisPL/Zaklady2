import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdjecieZakladuComponent } from './zdjecie-zakladu.component';

describe('ZdjecieZakladuComponent', () => {
  let component: ZdjecieZakladuComponent;
  let fixture: ComponentFixture<ZdjecieZakladuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZdjecieZakladuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdjecieZakladuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
