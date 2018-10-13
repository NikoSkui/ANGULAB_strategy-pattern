import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator/calculator.service';
import { AdditionOperandStrategyService } from './calculator/addition-operand-strategy.service';

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
    CalculatorService,
    // Deux manière d'instancier le service (celle-ci ou directement dans l'injecteur cf:SubstractionOperandStrategyService)
    AdditionOperandStrategyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
