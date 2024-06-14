import { TestBed } from '@angular/core/testing';

import { loginServices } from './login-service';

describe('ServicesService', () => {
  let service: loginServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(loginServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
