import { TestBed } from '@angular/core/testing';

import { BackendworkService } from './backendwork.service';

describe('BackendworkService', () => {
  let service: BackendworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
