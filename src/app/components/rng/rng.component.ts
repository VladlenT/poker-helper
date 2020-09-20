import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import random from 'lodash/random';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-rng',
  templateUrl: './rng.component.html',
  styleUrls: ['./rng.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('numberChange', [
      transition('* => *', [
        style({ opacity: '0' }),
        animate('300ms ease-out', style({ opacity: '*' })),
      ]),
    ]),
  ],
})
export class RngComponent implements OnInit {
  /** Saving timestamp to trigger animation even if new random number equals to the previous */
  timestamp: number;
  randomNumber: number;

  constructor() {}

  ngOnInit(): void {}

  generate() {
    this.randomNumber = random(1, 100);
    this.timestamp = new Date().getTime();
  }
}
