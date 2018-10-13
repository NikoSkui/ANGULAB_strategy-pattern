import { TestBed, inject } from '@angular/core/testing';

import { DivisionOperandStrategyService } from './division-operand-strategy.service';

describe('DivisionOperandStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DivisionOperandStrategyService]
    });
  });

  it('should be created', inject([DivisionOperandStrategyService], (service: DivisionOperandStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
