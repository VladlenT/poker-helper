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
  selectedPosition = positions[0];

  hostEl = document.querySelector('mat-drawer-content');
  IMG_PATH = 'assets/img/ranges/';

  constructor() {}

  ngOnInit(): void {}

  scrollToTop(): void {
    this.hostEl.scrollTop = 0;
  }
}
