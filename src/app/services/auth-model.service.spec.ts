import { TestBed } from '@angular/core/testing';

import { AuthModelService } from './auth-model.service';

describe('AuthModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthModelService = TestBed.get(AuthModelService);
    expect(service).toBeTruthy();
  });
});
