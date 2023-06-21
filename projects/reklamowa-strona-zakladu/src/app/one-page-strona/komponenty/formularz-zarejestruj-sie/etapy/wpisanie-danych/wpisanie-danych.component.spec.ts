import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpisanieDanychComponent } from './wpisanie-danych.component';

describe('WpisanieDanychComponent', () => {
  let component: WpisanieDanychComponent;
  let fixture: ComponentFixture<WpisanieDanychComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpisanieDanychComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WpisanieDanychComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
