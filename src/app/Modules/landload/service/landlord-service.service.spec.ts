import { TestBed } from '@angular/core/testing';

import { LandlordServiceService } from './landlord-service.service';

describe('LandlordServiceService', () => {
  let service: LandlordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandlordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
