import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { positions, ranges } from '../../shared/shared';

@Component({
  selector: 'app-pre-flop-page',
  templateUrl: './pre-flop-page.component.html',
  styleUrls: ['./pre-flop-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreFlopPageComponent implements OnInit {
  positions = positions;
  ranges = ranges;
  heroPosition = positions[0];
  villainPosition = positions[1];

  headerData = [
    { playerTitle: 'Hero', position: this.heroPosition },
    { playerTitle: 'Villain', position: this.villainPosition },
  ];

  hostEl = document.querySelector('mat-drawer-content');
  IMG_PATH = 'assets/img/ranges/';

  constructor() {}

  ngOnInit(): void {}

  scrollToTop(): void {
    this.hostEl.scrollTop = 0;
  }
}
