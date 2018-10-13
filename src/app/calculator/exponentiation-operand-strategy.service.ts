import { Injectable } from '@angular/core';
import { OperandStrategy } from './operand-strategy';

@Injectable({
  providedIn: 'root'
})
export class ExponentiationOperandStrategyService extends OperandStrategy {

  private static SUPPORTED_OPERAND = ['^', 'exponentiation'];

  support(operand: string): boolean {
      return ExponentiationOperandStrategyService.SUPPORTED_OPERAND.indexOf(operand) !== -1;
  }

  compute(leftValue: number, rightValue: number): number {
      return Math.pow(leftValue, rightValue);
  }

}
