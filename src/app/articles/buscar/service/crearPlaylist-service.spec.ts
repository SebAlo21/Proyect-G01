import { TestBed } from '@angular/core/testing';

import { crearPlayListService } from './crearPlaylist-service';

describe('PlaylistServiceService', () => {
  let service: crearPlayListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(crearPlayListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
