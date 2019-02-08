import { TestBed } from '@angular/core/testing';

import { BotModelService } from './bot-model.service';

describe('BotModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BotModelService = TestBed.get(BotModelService);
    expect(service).toBeTruthy();
  });
});
