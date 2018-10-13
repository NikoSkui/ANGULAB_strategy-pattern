import { TestBed, inject } from '@angular/core/testing';

import { ExponentiationOperandStrategyService } from './exponentiation-operand-strategy.service';

describe('ExponentiationOperandStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExponentiationOperandStrategyService]
    });
  });

  it('should be created', inject([ExponentiationOperandStrategyService], (service: ExponentiationOperandStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
