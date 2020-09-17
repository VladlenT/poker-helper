import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { formatNumber, formatPercent } from '@angular/common';

@Component({
  selector: 'app-bluff-value-freq',
  templateUrl: './bluff-value-freq.component.html',
  styleUrls: ['./bluff-value-freq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BluffValueFreqComponent implements OnInit {
  pot = 0;
  bet = 0;

  get bluff() {
    return this.bet / (2 * this.bet + this.pot) || 0;
  }

  get value() {
    return (this.bet + this.pot) / (this.bet * 2 + this.pot) || 0;
  }

  get bluffToValueRatio() {
    const percent = this.bet / (this.bet + this.pot) || 0;
    const formattedPercent = formatPercent(percent, 'en');
    const ratio = `${formatNumber(1 / percent, 'en')}:1`;
    return `${formattedPercent} or ${ratio}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
