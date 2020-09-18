import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdfComponent implements OnInit {
  bet = 0;
  pot = 0;

  get result() {
    return this.pot / (this.bet + this.pot) || 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
