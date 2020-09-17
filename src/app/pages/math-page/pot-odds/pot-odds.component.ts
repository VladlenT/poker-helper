import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pot-odds',
  templateUrl: './pot-odds.component.html',
  styleUrls: ['./pot-odds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PotOddsComponent {
  bet = 0;
  pot = 0;

  get result() {
    return this.bet / (this.bet + this.pot);
  }

  constructor() {}
}
