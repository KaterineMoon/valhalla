import { TestBed } from '@angular/core/testing';

import { ServicioEmpresaService } from './servicio-empresa.service';

describe('ServicioEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioEmpresaService = TestBed.get(ServicioEmpresaService);
    expect(service).toBeTruthy();
  });
});
