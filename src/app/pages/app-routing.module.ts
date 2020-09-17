import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreFlopPageComponent } from './pre-flop-page/pre-flop-page.component';
import { SharedModule } from '../shared/shared.module';

export const pages: Routes = [
  { path: 'pre-flop', component: PreFlopPageComponent, data: { title: 'Pre Flop' } },
];
const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: pages[0].path }, ...pages];

@NgModule({
  declarations: [PreFlopPageComponent],
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
