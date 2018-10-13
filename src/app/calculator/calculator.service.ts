import { Injectable } from "@angular/core";
import { AdditionOperandStrategyService } from "./addition-operand-strategy.service";

@Injectable()
export class CalculatorService {

    constructor(
      private additionStrategy: AdditionOperandStrategyService
    ) {
    }

    public compute(leftValue: number, rightValue: number, operand: string): number|null {

        // if (operand === 'addition') return leftValue + rightValue;
        if (this.additionStrategy.support(operand)) return this.additionStrategy.compute(leftValue, rightValue);

        return null;
    }
}
