import { TestBed } from '@angular/core/testing';

import { RecurringServiceService } from './recurring-service.service';

describe('RecurringServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecurringServiceService = TestBed.get(RecurringServiceService);
    expect(service).toBeTruthy();
  });
});
