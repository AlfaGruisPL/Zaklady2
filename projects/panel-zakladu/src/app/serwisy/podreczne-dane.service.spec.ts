import { TestBed } from '@angular/core/testing';

import { PodreczneDaneService } from './podreczne-dane.service';

describe('PodreczneDaneService', () => {
  let service: PodreczneDaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodreczneDaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
