import { TestBed } from '@angular/core/testing';

import { DataWorkersService } from './data-workers.service';

describe('DataWorkersService', () => {
  let service: DataWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
