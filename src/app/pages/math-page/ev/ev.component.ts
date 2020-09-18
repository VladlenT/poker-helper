import { Component, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ev',
  templateUrl: './ev.component.html',
  styleUrls: ['./ev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvComponent {
  @Input() showInputs = false;
  @Input() equity = 0;
  @Input() pot = 0;
  @Input() bet = 0;

  @Output() betChange = new EventEmitter<number>();
  @Output() potChange = new EventEmitter<number>();
  @Output() equityChange = new EventEmitter<number>();

  get result() {
    const equity = this.equity / 100;
    return Math.abs(equity * (this.pot + this.bet)) - Math.abs((1 - equity) * this.bet);
  }

  constructor() {}
}
