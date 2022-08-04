import { TestBed } from '@angular/core/testing';
import { EpisodieService } from './episodie/episodie.service';

describe('EpisodieService', () => {
  let service: EpisodieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
