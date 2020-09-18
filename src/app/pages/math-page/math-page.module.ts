import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathPageComponent } from './math-page.component';
import { SharedModule } from '../../shared/shared.module';
import { PotOddsComponent } from './pot-odds/pot-odds.component';
import { EvComponent } from './ev/ev.component';
import { BluffValueFreqComponent } from './bluff-value-freq/bluff-value-freq.component';
import { MdfComponent } from './mdf/mdf.component';

const DECLARATIONS = [MathPageComponent, PotOddsComponent, EvComponent, BluffValueFreqComponent];

@NgModule({
  declarations: [...DECLARATIONS, MdfComponent],
  imports: [CommonModule, SharedModule],
  exports: [...DECLARATIONS],
})
export class MathPageModule {}
