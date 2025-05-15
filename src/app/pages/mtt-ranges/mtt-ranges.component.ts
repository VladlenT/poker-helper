import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { positions, ranges } from 'src/app/shared/shared';

@Component({
  selector: 'app-mtt-ranges',
  templateUrl: './mtt-ranges.component.html',
  styleUrls: ['./mtt-ranges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MttRangesComponent implements OnInit {
  betSizes = ['15bb', '25bb', '40bb', '60bb']
  selectedBetSize = this.betSizes[0]

  positions = positions;
  ranges = ranges;
  heroPosition = new FormControl(positions[0]);
  villainPosition = new FormControl(positions[1]);

  headerData = [
    { playerTitle: 'Hero', control: this.heroPosition },
    { playerTitle: 'Villain', control: this.villainPosition },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
