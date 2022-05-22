import { TestBed } from '@angular/core/testing';

import { ExpercienciaService } from './experciencia.service';

describe('ExpercienciaService', () => {
  let service: ExpercienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpercienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
