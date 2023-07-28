import { TestBed } from '@angular/core/testing';

import { PowiadomieniaService } from './powiadomienia.service';

describe('PowiadomieniaService', () => {
  let service: PowiadomieniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowiadomieniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
