import { Injectable } from '@angular/core';
import { OperandStrategy } from './operand-strategy';

@Injectable({
  providedIn: 'root'
})
export class MultiplicationOperandStrategyService extends OperandStrategy {

  private static SUPPORTED_OPERAND = ['*', 'x', 'multiplication'];

  support(operand: string): boolean {
    return MultiplicationOperandStrategyService.SUPPORTED_OPERAND.indexOf(operand) !== -1;
  }

  compute(leftValue: number, rightValue: number): number {
    return leftValue * rightValue;
  }

}
