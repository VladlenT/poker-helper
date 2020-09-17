import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreFlopPageComponent } from './pre-flop-page/pre-flop-page.component';
import { SharedModule } from '../shared/shared.module';
import { MathPageComponent } from './math-page/math-page.component';
import { MathPageModule } from './math-page/math-page.module';

export const pages: Routes = [
  { path: 'pre-flop', component: PreFlopPageComponent, data: { title: 'Pre Flop' } },
  { path: 'math', component: MathPageComponent, data: { title: 'Math' } },
];
const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: pages[0].path }, ...pages];

@NgModule({
  declarations: [PreFlopPageComponent],
  imports: [RouterModule.forRoot(routes), SharedModule, MathPageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
