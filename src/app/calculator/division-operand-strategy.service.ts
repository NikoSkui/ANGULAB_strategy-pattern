import { Injectable } from '@angular/core';
import { OperandStrategy } from './operand-strategy';

@Injectable({
  providedIn: 'root'
})
export class DivisionOperandStrategyService extends OperandStrategy {

  private static SUPPORTED_OPERAND = ['/', '÷', 'division'];

  support(operand: string): boolean {
      return DivisionOperandStrategyService.SUPPORTED_OPERAND.indexOf(operand) !== -1;
  }

  compute(leftValue: number, rightValue: number): number {
      return leftValue / rightValue;
  }

}
