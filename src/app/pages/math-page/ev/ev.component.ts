import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ev',
  templateUrl: './ev.component.html',
  styleUrls: ['./ev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvComponent {
  equity = 0;
  pot = 0;
  bet = 0;

  get result() {
    const equity = this.equity / 100;
    return Math.abs(equity * (this.pot + this.bet)) - Math.abs((1 - equity) * this.bet);
  }

  constructor() {}
}
