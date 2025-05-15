import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreFlopPageComponent as PreFlopCachePageComponent } from './pre-flop-page/pre-flop-page.component';
import { SharedModule } from '../shared/shared.module';
import { MathPageComponent } from './math-page/math-page.component';
import { MathPageModule } from './math-page/math-page.module';
import { ReferencePageComponent } from './reference-page/reference-page.component';
import { MttRangesComponent } from './mtt-ranges/mtt-ranges.component';

export const pages: Routes = [
  { path: 'pre-flop-cache', component: PreFlopCachePageComponent, data: { title: 'Pre-Flop Ranges (Cash)' } },
  { path: 'mtt-ranges', component: MttRangesComponent, data: { title: 'MTT Ranges' } },
  { path: 'math', component: MathPageComponent, data: { title: 'Math' } },
  { path: 'reference', component: ReferencePageComponent, data: { title: 'Reference' } },
];
const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: pages[0].path }, ...pages];

@NgModule({
  declarations: [PreFlopCachePageComponent, ReferencePageComponent, MttRangesComponent],
  imports: [RouterModule.forRoot(routes), SharedModule, MathPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
