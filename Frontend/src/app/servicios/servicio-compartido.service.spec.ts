import { TestBed } from '@angular/core/testing';

import { ServicioCompartidoService } from './servicio-compartido.service';

describe('ServicioCompartidoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioCompartidoService = TestBed.get(ServicioCompartidoService);
    expect(service).toBeTruthy();
  });
});
