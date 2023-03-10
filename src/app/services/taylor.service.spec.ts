import { TestBed } from '@angular/core/testing';

import { TaylorService } from './taylor.service';

describe('TaylorService', () => {
  let service: TaylorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaylorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
