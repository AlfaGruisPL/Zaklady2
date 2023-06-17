import { TestBed } from '@angular/core/testing';

import { ListonoszService } from './listonosz.service';

describe('ListonoszService', () => {
  let service: ListonoszService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListonoszService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
