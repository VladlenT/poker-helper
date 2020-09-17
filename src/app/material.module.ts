import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

const MODULES = [MatSidenavModule, MatListModule, MatSelectModule, MatRadioModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
})
export class MaterialModule {}
