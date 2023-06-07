import { TestBed } from '@angular/core/testing';

import { ListyService } from './listy.service';

describe('ListyService', () => {
  let service: ListyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
