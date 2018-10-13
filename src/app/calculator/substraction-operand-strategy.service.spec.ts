import { TestBed, inject } from '@angular/core/testing';

import { SubstractionOperandStrategyService } from './substraction-operand-strategy.service';

describe('SubstractionOperandStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubstractionOperandStrategyService]
    });
  });

  it('should be created', inject([SubstractionOperandStrategyService], (service: SubstractionOperandStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
