/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReferenceService } from './reference.service';

describe('ReferenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferenceService]
    });
  });

  it('should ...', inject([ReferenceService], (service: ReferenceService) => {
    expect(service).toBeTruthy();
  }));
});
