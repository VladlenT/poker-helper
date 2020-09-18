import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdfComponent implements OnInit {
  @Input() showInputs = false;
  @Input() bet = 0;
  @Input() pot = 0;

  @Output() betChange = new EventEmitter<number>();
  @Output() potChange = new EventEmitter<number>();

  get mdf() {
    return this.pot / (this.bet + this.pot) || 0;
  }

  get alpha() {
    return this.bet / (this.bet + this.pot) || 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
