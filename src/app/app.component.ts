import { Component } from '@angular/core';
import { pages } from './pages/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pages = pages;
}
