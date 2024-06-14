import { TestBed } from '@angular/core/testing';

import { playlistService } from './playlist-service';

describe('PlaylistServiceService', () => {
  let service: playlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(playlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
