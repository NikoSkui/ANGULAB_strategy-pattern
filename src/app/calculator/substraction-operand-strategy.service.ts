import { Injectable } from '@angular/core';
import { OperandStrategy } from './operand-strategy';

@Injectable({
  providedIn: 'root'
})
export class SubstractionOperandStrategyService extends OperandStrategy {

  private static SUPPORTED_OPERAND = ['-', 'substraction'];

  support(operand: string): boolean {
    return SubstractionOperandStrategyService.SUPPORTED_OPERAND.indexOf(operand) !== -1;
  }

  compute(leftValue: number, rightValue: number): number {
    return leftValue - rightValue;
  }


}
