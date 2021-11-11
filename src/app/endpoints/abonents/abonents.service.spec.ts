import { TestBed } from '@angular/core/testing';

import { AbonentsService } from './abonents.service';

describe('AbonentsService', () => {
  let service: AbonentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
