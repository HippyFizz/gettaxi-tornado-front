import { TestBed, inject } from '@angular/core/testing';

import { ServeSocketService } from './serve-socket.service';

describe('ServeSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServeSocketService]
    });
  });

  it('should be created', inject([ServeSocketService], (service: ServeSocketService) => {
    expect(service).toBeTruthy();
  }));
});
