import { TestBed } from '@angular/core/testing';

import { HomePageService } from './homepage.service';

describe('HomePageService', () => {
  let service: HomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
