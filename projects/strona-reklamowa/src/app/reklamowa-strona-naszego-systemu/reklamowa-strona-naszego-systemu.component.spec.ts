import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReklamowaStronaNaszegoSystemuComponent } from './reklamowa-strona-naszego-systemu.component';

describe('ReklamowaStronaNaszegoSystemuComponent', () => {
  let component: ReklamowaStronaNaszegoSystemuComponent;
  let fixture: ComponentFixture<ReklamowaStronaNaszegoSystemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReklamowaStronaNaszegoSystemuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReklamowaStronaNaszegoSystemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
