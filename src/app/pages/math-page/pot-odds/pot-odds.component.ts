import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { formatPercent } from '@angular/common';
import { getRatioFromPercent } from '../../../shared/shared';

@Component({
  selector: 'app-pot-odds',
  templateUrl: './pot-odds.component.html',
  styleUrls: ['./pot-odds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PotOddsComponent {
  @Input() showInputs = false;
  @Input() pot = 0;
  @Input() bet = 0;

  @Output() betChange = new EventEmitter<number>();
  @Output() potChange = new EventEmitter<number>();

  get result() {
    const percent = this.bet / (this.bet + this.pot) || 0;
    const formattedPercent = formatPercent(percent, 'en');
    return `${formattedPercent} or ${getRatioFromPercent(percent)}`;
  }

  constructor() {}
}
