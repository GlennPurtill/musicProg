import { TestBed } from '@angular/core/testing';

import { DrumsoundsService } from './drumsounds.service';

describe('DrumsoundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrumsoundsService = TestBed.get(DrumsoundsService);
    expect(service).toBeTruthy();
  });
});
