import { TestBed, inject } from '@angular/core/testing';

import { RideStreamService } from './ride-stream.service';

describe('RideStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RideStreamService]
    });
  });

  it('should be created', inject([RideStreamService], (service: RideStreamService) => {
    expect(service).toBeTruthy();
  }));
});
