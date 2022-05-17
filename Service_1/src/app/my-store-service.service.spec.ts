import { TestBed } from '@angular/core/testing';

import { MyStoreServiceService } from './my-store-service.service';

describe('MyStoreServiceService', () => {
  let service: MyStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
