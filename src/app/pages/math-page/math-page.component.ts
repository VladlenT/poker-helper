import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-math-page',
  templateUrl: './math-page.component.html',
  styleUrls: ['./math-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MathPageComponent implements OnInit {
  @Input() vertical = false;

  bet = 0;
  pot = 0;
  equity = 0;

  constructor() {}

  ngOnInit(): void {}
}
