import { TestBed, inject } from '@angular/core/testing';

import { UserStreamService } from './user-stream.service';

describe('UserStreamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStreamService]
    });
  });

  it('should be created', inject([UserStreamService], (service: UserStreamService) => {
    expect(service).toBeTruthy();
  }));
});
