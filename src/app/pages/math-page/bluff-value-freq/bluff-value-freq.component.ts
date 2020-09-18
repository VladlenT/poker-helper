import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { formatPercent } from '@angular/common';
import { getRatioFromPercent } from '../../../shared/shared';

@Component({
  selector: 'app-bluff-value-freq',
  templateUrl: './bluff-value-freq.component.html',
  styleUrls: ['./bluff-value-freq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BluffValueFreqComponent implements OnInit {
  @Input() showInputs = false;
  @Input() pot = 0;
  @Input() bet = 0;

  @Output() betChange = new EventEmitter<number>();
  @Output() potChange = new EventEmitter<number>();

  get bluff() {
    return this.bet / (2 * this.bet + this.pot) || 0;
  }

  get value() {
    return (this.bet + this.pot) / (this.bet * 2 + this.pot) || 0;
  }

  get bluffToValueRatio() {
    const percent = this.bet / (this.bet + this.pot) || 0;
    const formattedPercent = formatPercent(percent, 'en');

    return `${formattedPercent} or ${getRatioFromPercent(percent)}`;
  }

  constructor() {}

  ngOnInit(): void {}
}
