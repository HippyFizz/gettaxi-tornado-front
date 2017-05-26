import { TestBed, inject } from '@angular/core/testing';

import { CompanyStreamService } from './company-stream.service';

describe('CompanyStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyStreamService]
    });
  });

  it('should be created', inject([CompanyStreamService], (service: CompanyStreamService) => {
    expect(service).toBeTruthy();
  }));
});
