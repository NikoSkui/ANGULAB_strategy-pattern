import { TestBed, inject } from '@angular/core/testing';

import { AdditionOperandStrategyService } from './addition-operand-strategy.service';

describe('AdditionOperandStrategyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdditionOperandStrategyService]
    });
  });

  it('should be created', inject([AdditionOperandStrategyService], (service: AdditionOperandStrategyService) => {
    expect(service).toBeTruthy();
  }));
});
