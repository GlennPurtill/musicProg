import { TestBed } from '@angular/core/testing';

import { DataPatternsService } from './data-patterns.service';

describe('DataPatternsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataPatternsService = TestBed.get(DataPatternsService);
    expect(service).toBeTruthy();
  });
});
