import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-rng',
  templateUrl: './rng.component.html',
  styleUrls: ['./rng.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RngComponent implements OnInit {
  randomNumber: number;

  constructor() {}

  ngOnInit(): void {}

  generate() {
    this.randomNumber = random(1, 100);
  }
}
