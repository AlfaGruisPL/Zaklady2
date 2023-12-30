import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerModifyTable1Component } from './worker-modify-table1.component';

describe('WorkerModifyTable1Component', () => {
  let component: WorkerModifyTable1Component;
  let fixture: ComponentFixture<WorkerModifyTable1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkerModifyTable1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkerModifyTable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
