import { TestBed } from '@angular/core/testing';

import { AppSService } from './app-s.service';

describe('AppSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSService = TestBed.get(AppSService);
    expect(service).toBeTruthy();
  });
});
