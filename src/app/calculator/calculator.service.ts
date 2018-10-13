import { Injectable, Inject } from "@angular/core";
import { AdditionOperandStrategyService } from "./addition-operand-strategy.service";
import { SubstractionOperandStrategyService } from "./substraction-operand-strategy.service";
import { MultiplicationOperandStrategyService } from "./multiplication-operand-strategy.service";
import { OperandStrategy } from "./operand-strategy";
import { DivisionOperandStrategyService } from "./division-operand-strategy.service";
import { ExponentiationOperandStrategyService } from "./exponentiation-operand-strategy.service";

@Injectable({
  providedIn: 'root',
  useFactory: (...operands: OperandStrategy[]): CalculatorService => new CalculatorService(operands),
  deps: [
    AdditionOperandStrategyService,
    SubstractionOperandStrategyService,
    MultiplicationOperandStrategyService,
    DivisionOperandStrategyService,
    ExponentiationOperandStrategyService
  ]
})

export class CalculatorService {

    constructor(@Inject(OperandStrategy) private strategies: OperandStrategy[]) {}

    public compute(leftValue: number, rightValue: number, operand: string): number|null {

        const strategy = this.strategies.find(strategy => strategy.support(operand));

        if (strategy) return strategy.compute(leftValue, rightValue);

        return null;
    }
}
