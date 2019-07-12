import { TestBed } from '@angular/core/testing';

import { MobileVerifyService } from './mobile-verify.service';

describe('MobileVerifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MobileVerifyService = TestBed.get(MobileVerifyService);
    expect(service).toBeTruthy();
  });
});
