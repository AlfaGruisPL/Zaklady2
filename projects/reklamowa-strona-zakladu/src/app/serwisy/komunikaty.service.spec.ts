import { TestBed } from '@angular/core/testing';

import { KomunikatyService } from './komunikaty.service';

describe('KomunikatyService', () => {
  let service: KomunikatyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KomunikatyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
