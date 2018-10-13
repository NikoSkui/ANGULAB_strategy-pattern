import { Injectable } from '@angular/core';
import { OperandStrategy } from './operand-strategy';

@Injectable()
export class AdditionOperandStrategyService extends OperandStrategy {

  private static SUPPORTED_OPERAND = ['+', 'addition'];

  support(operand: string): boolean {
    return AdditionOperandStrategyService.SUPPORTED_OPERAND.indexOf(operand) !== -1;
  }

  compute(leftValue: number, rightValue: number): number {
    return leftValue + rightValue;
  }

}
