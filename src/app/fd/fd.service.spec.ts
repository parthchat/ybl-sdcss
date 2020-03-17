import { TestBed } from '@angular/core/testing';

import { FdService } from './fd.service';

describe('FdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdService = TestBed.get(FdService);
    expect(service).toBeTruthy();
  });
});
