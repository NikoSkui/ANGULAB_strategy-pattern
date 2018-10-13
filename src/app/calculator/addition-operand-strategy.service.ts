import { Injectable } from '@angular/core';
import { OperandStrategy } from './operand-strategy';

@Injectable({
  providedIn: 'root'
})
export class AdditionOperandStrategyService extends OperandStrategy {

  support(operand: string): boolean {
    throw new Error("Method not implemented.");
  }

  compute(leftValue: number, rightValue: number): number {
    throw new Error("Method not implemented.");
  }

}
