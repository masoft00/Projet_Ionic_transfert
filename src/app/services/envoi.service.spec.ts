import { TestBed } from '@angular/core/testing';

import { EnvoiService } from './envoi.service';

describe('EnvoiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvoiService = TestBed.get(EnvoiService);
    expect(service).toBeTruthy();
  });
});
