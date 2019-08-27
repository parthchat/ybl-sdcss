import { TestBed } from '@angular/core/testing';

import { OtpPageService } from './otp-page.service';

describe('OtpPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtpPageService = TestBed.get(OtpPageService);
    expect(service).toBeTruthy();
  });
});
