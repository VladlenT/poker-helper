import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { positions, ranges } from '../../shared/shared';
import { Position } from '../../types/types';

@Component({
  selector: 'app-pre-flop-page',
  templateUrl: './pre-flop-page.component.html',
  styleUrls: ['./pre-flop-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreFlopPageComponent implements OnInit {
  positions = positions;
  ranges = ranges;

  selectedPosition = positions[0];

  constructor() {}

  ngOnInit(): void {}
}
