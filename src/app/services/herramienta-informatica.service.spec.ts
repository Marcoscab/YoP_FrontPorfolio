import { TestBed } from '@angular/core/testing';

import { HerramientaInformaticaService } from './herramienta-informatica.service';

describe('HerramientaInformaticaService', () => {
  let service: HerramientaInformaticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerramientaInformaticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
