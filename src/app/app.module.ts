import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './pages/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RngComponent } from './components/rng/rng.component';

@NgModule({
  declarations: [AppComponent, RngComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
