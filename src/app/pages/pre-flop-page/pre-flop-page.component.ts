import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { positions } from '../../shared/shared';
import { Position } from '../../types/types';

@Component({
  selector: 'app-pre-flop-page',
  templateUrl: './pre-flop-page.component.html',
  styleUrls: ['./pre-flop-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreFlopPageComponent implements OnInit {
  positions = positions;

  constructor() {}

  ngOnInit(): void {}
}
