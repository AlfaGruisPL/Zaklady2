import { TestBed } from '@angular/core/testing';

import { IdentyfikatorGuard } from './identyfikator.guard';

describe('IdentyfikatorGuard', () => {
  let guard: IdentyfikatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IdentyfikatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
