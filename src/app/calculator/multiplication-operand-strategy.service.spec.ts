import { TestBed, inject } from '@angular/core/testing';

import { MultiplicationOperandStrategyService } from './multiplication-operand-strategy.service';

describe('MultiplicationOperandStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MultiplicationOperandStrategyService]
    });
  });

  it('should be created', inject([MultiplicationOperandStrategyService], (service: MultiplicationOperandStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
