import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const MODULES = [CommonModule, MaterialModule, FormsModule];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
