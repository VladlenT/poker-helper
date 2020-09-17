import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-math-page',
  templateUrl: './math-page.component.html',
  styleUrls: ['./math-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MathPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
