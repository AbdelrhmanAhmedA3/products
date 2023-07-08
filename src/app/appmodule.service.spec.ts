import { TestBed } from '@angular/core/testing';

import { AppmoduleService } from './app.service';

describe('AppmoduleService', () => {
  let service: AppmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
