/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComidaService } from './Comida.service';

describe('Service: Comida', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComidaService]
    });
  });

  it('should ...', inject([ComidaService], (service: ComidaService) => {
    expect(service).toBeTruthy();
  }));
});
