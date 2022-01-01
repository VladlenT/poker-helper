import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { positions, ranges } from '../../shared/shared';
import { FormControl } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pre-flop-page',
  templateUrl: './pre-flop-page.component.html',
  styleUrls: ['./pre-flop-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreFlopPageComponent implements OnInit {
  positions = positions;
  ranges = ranges;
  heroPosition = new FormControl(positions[0]);
  villainPosition = new FormControl(positions[1]);

  headerData = [
    { playerTitle: 'Hero', control: this.heroPosition },
    { playerTitle: 'Villain', control: this.villainPosition },
  ];

  IMG_PATH = environment.imgPath + '/ranges';

  hostEl = document.querySelector('mat-drawer-content');

  get images() {
    const hp = this.heroPosition.value;
    return this.ranges[hp]
      .filter((range: string) => range.includes(this.villainPosition.value))
      .map((range) => ({
        src: `${this.IMG_PATH}/${hp}/${range}`,
        label: range,
      }));
  }

  constructor() {}

  ngOnInit(): void {}

  onPositionChange(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    this.hostEl.scrollTop = 0;
  }

  trackBySrc = (_, img) => img.src;
}
