import { Injectable } from "@angular/core";
import { AdditionOperandStrategyService } from "./addition-operand-strategy.service";
import { SubstractionOperandStrategyService } from "./substraction-operand-strategy.service";
import { MultiplicationOperandStrategyService } from "./multiplication-operand-strategy.service";

@Injectable()
export class CalculatorService {

    constructor(
      private additionStrategy: AdditionOperandStrategyService,
      private substractionStrategy: SubstractionOperandStrategyService,
      private multiplicationStrategy: MultiplicationOperandStrategyService
    ) {
    }

    public compute(leftValue: number, rightValue: number, operand: string): number|null {

        // if (operand === 'addition') return leftValue + rightValue;
        if (this.additionStrategy.support(operand)) return this.additionStrategy.compute(leftValue, rightValue);
        if (this.substractionStrategy.support(operand)) return this.substractionStrategy.compute(leftValue, rightValue);
        if (this.multiplicationStrategy.support(operand)) return this.multiplicationStrategy.compute(leftValue, rightValue);

        return null;
    }
}
