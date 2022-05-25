import { TestBed } from '@angular/core/testing';

import { LenguajeProgramacionService } from './lenguaje-programacion.service';

describe('LenguajeProgramacionService', () => {
  let service: LenguajeProgramacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguajeProgramacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
