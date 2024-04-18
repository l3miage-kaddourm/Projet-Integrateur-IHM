import { TestBed } from '@angular/core/testing';

import { PlannerDataService } from './planner-data.service';

describe('PlannerDataService', () => {
  let service: PlannerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlannerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
