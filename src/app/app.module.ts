import { BrowserModule } from '@angular/platform-browser';
import { NgModule, FactoryProvider } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AdditionOperandStrategyService } from './calculator/addition-operand-strategy.service';

// export function calculatorServiceFactory(...operands: OperandStrategy[]): CalculatorService {
//   return new CalculatorService(operands);
// }

// const CALCULATOR_PROVIDER: FactoryProvider = {
//   provide: CalculatorService,
//   useFactory: calculatorServiceFactory,
//   deps: [AdditionOperandStrategyService, SubstractionOperandStrategyService, MultiplicationOperandStrategyService]
// };

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // Deux manière d'instancier le service (celle-ci ou directement dans l'injecteur cf:SubstractionOperandStrategyService)
    AdditionOperandStrategyService,
    // CALCULATOR_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
