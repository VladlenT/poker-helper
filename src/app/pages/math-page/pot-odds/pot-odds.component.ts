import { ChangeDetectionStrategy, Component } from '@angular/core';
import { formatPercent } from '@angular/common';
import { getRatioFromPercent } from '../../../shared/shared';

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
    const percent = this.bet / (this.bet + this.pot) || 0;
    const formattedPercent = formatPercent(percent, 'en');
    return `${formattedPercent} or ${getRatioFromPercent(percent)}`;
  }

  constructor() {}
}
