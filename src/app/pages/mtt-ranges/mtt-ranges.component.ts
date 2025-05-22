import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { positions, } from 'src/app/shared/shared';
import { Position } from 'src/app/types/types';
import { environment } from 'src/environments/environment';

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
  heroPosition = new UntypedFormControl(positions[0]);
  villainPosition = new UntypedFormControl(positions[1]);

  headerData = [
    { playerTitle: 'Hero', control: this.heroPosition },
    { playerTitle: 'Villain', control: this.villainPosition },
  ];

  hostEl = document.querySelector('mat-drawer-content');
  IMG_PATH = environment.imgPath + '/mtt_ranges';
  trackBySrc = (_, img) => img.src;

  getExpr(position: Position) {
    return position === 'MP' ? 'MP|LJ' : position
  }

  get images() {
    const hp = this.heroPosition.value;
    const vp = this.villainPosition.value;


    return this.ranges[hp]
      .filter(
        (range: string) =>
          range.includes(this.selectedBetSize) &&
          (
            new RegExp(this.getExpr(vp)).test(range) ||
            new RegExp(`RFI/${this.getExpr(hp)}`).test(range)
          )
      )
      .map((range) => ({
        src: `${this.IMG_PATH}/${range}`,
        label: range,
      }));
  }

  onPositionChange(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    this.hostEl.scrollTop = 0;
  }

  ranges: Record<Position, string[]> = {
    UTG: [
      "RFI/UTG_15bb.png",
      "RFI/UTG_25bb.png",
      "RFI/UTG_40bb.png",
      "RFI/UTG_60bb.png",
      "RFI/UTG_1_15bb.png",
      "RFI/UTG_1_25bb.png",
      "RFI/UTG_1_40bb.png",
      "RFI/UTG_1_60bb.png",
      "RFI/UTG_2_15bb.png",
      "RFI/UTG_2_25bb.png",
      "RFI/UTG_2_40bb.png",
      "RFI/UTG_2_60bb.png",
      "3Bet/UTG_vs_BB_3.25x_3Bet_25bb.png",
      "3Bet/UTG_vs_BB_3.5x_3Bet_40bb.png",
      "3Bet/UTG_vs_BB_3Bet_60bb.png",
      "3Bet/UTG_vs_BB_jam_15bb.png",
      "3Bet/UTG_vs_BB_jam_25bb.png",
      "3Bet/UTG_vs_BN_2.75x_3Bet_25bb.png",
      "3Bet/UTG_vs_BN_3Bet_60bb.png",
      "3Bet/UTG_vs_BN_jam_15bb.png",
      "3Bet/UTG_vs_BN_jam_25bb.png",
      "3Bet/UTG_vs_BN_x3.25_3Bet_40bb.png",
      "3Bet/UTG_vs_MP_3Bet_60bb.png",
      "3Bet/UTG_vs_MP_jam_15bb.png",
      "3Bet/UTG_vs_MP_jam_25bb.png",
      "3Bet/UTG_vs_MP_x2.75_3Bet_25bb.png",
      "3Bet/UTG_vs_MP_x3.25_3Bet_40bb.png",
      "3Bet/UTG_vs_SB_3Bet_60bb.png",
      "3Bet/UTG_vs_SB_3x_3Bet_25bb.png",
      "3Bet/UTG_vs_SB_jam_15bb.png",
      "3Bet/UTG_vs_SB_jam_25bb.png",
      "3Bet/UTG_vs_SB_x3.3_3Bet_40bb.png",
      "3Bet/UTG_vs_UTG_3Bet_60bb.png",
      "3Bet/UTG_vs_UTG_jam_15bb.png",
      "3Bet/UTG_vs_UTG_jam_25bb.png",
      "3Bet/UTG_vs_UTG_x2.75_3Bet_25bb.png",
      "3Bet/UTG_vs_UTG_x3.25_3Bet_40bb.png",
      "Def/UTG/UTG_vs_UTG_15bb.png",
      "Def/UTG/UTG_vs_UTG_25bb.png",
      "Def/UTG/UTG_vs_UTG_40bb.png",
      "Def/UTG/UTG_vs_UTG_4Bet_25bb.png",
      "Def/UTG/UTG_vs_UTG_4Bet_40bb.png",
      "Def/UTG/UTG_vs_UTG_4Bet_60bb.png",
      "Def/UTG/UTG_vs_UTG_60bb.png",
    ],
    MP: [
      "RFI/LJ_15bb.png",
      "RFI/LJ_25bb.png",
      "RFI/LJ_40bb.png",
      "RFI/LJ_60bb.png",
      "RFI/MP_15bb.png",
      "RFI/MP_25bb.png",
      "RFI/MP_40bb.png",
      "RFI/MP_60bb.png",
      "3Bet/LJ_vs_BB_3Bet_60bb.png",
      "3Bet/LJ_vs_BB_jam_15bb.png",
      "3Bet/LJ_vs_BB_jam_25bb.png",
      "3Bet/LJ_vs_BB_x3.25_3Bet_25bb.png",
      "3Bet/LJ_vs_BB_x3.5_3Bet_40bb.png",
      "3Bet/LJ_vs_BN_2.75x_3Bet_25bb.png",
      "3Bet/LJ_vs_BN_3Bet_60bb.png",
      "3Bet/LJ_vs_BN_jam_15bb.png",
      "3Bet/LJ_vs_BN_jam_25bb.png",
      "3Bet/LJ_vs_BN_x3.25_3Bet_40bb.png",
      "3Bet/LJ_vs_MP_3Bet_60bb.png",
      "3Bet/LJ_vs_MP_jam_15bb.png",
      "3Bet/LJ_vs_MP_jam_25bb.png",
      "3Bet/LJ_vs_MP_x2.75_3Bet_25bb.png",
      "3Bet/LJ_vs_MP_x3.25_3Bet_40bb.png",
      "3Bet/LJ_vs_SB_3.3x_3Bet_40bb.png",
      "3Bet/LJ_vs_SB_3Bet_60bb.png",
      "3Bet/LJ_vs_SB_3x_3Bet_25bb.png",
      "3Bet/LJ_vs_SB_jam_15bb.png",
      "3Bet/LJ_vs_SB_jam_25bb.png",
      "Def/MP/MP_vs_LJ_15bb.png",
      "Def/MP/MP_vs_LJ_25bb.png",
      "Def/MP/MP_vs_LJ_40bb.png",
      "Def/MP/MP_vs_LJ_4Bet_25bb.png",
      "Def/MP/MP_vs_LJ_4Bet_40bb.png",
      "Def/MP/MP_vs_LJ_4Bet_60bb.png",
      "Def/MP/MP_vs_LJ_60bb.png",
      "Def/MP/MP_vs_UTG_15bb.png",
      "Def/MP/MP_vs_UTG_25bb.png",
      "Def/MP/MP_vs_UTG_40bb.png",
      "Def/MP/MP_vs_UTG_4Bet_25bb.png",
      "Def/MP/MP_vs_UTG_4Bet_40bb.png",
      "Def/MP/MP_vs_UTG_4Bet_60bb.png",
      "Def/MP/MP_vs_UTG_60bb.png",
    ],
    CO: [
      "RFI/CO_15bb.png",
      "RFI/CO_25bb.png",
      "RFI/CO_40bb.png",
      "RFI/CO_60bb.png",
      "3Bet/CO_vs_BB_3.25x_3Bet_25bb.png",
      "3Bet/CO_vs_BB_3.5x_3Bet_40bb.png",
      "3Bet/CO_vs_BB_3Bet_60bb.png",
      "3Bet/CO_vs_BB_jam_15bb.png",
      "3Bet/CO_vs_BB_jam_25bb.png",
      "3Bet/CO_vs_SB_jam_15bb.png",
      "3Bet/CO_vs_SB_jam_25bb.png",
      "3Bet/CO_vs_SB_3Bet_25bb.png",
      "3Bet/CO_vs_SB_3.3x_3Bet_40bb.png",
      "3Bet/CO_vs_SB_3Bet_60bb.png",
      "3Bet/CO_vs_BN_2.75x_3Bet_25bb.png",
      "3Bet/CO_vs_BN_3.25x_3Bet_40bb.png",
      "3Bet/CO_vs_BN_3Bet_60bb.png",
      "3Bet/CO_vs_BN_jam_15bb.png",
      "3Bet/CO_vs_BN_jam_25bb.png",
      "Def/CO/CO_vs_LJ_15bb.png",
      "Def/CO/CO_vs_LJ_25bb.png",
      "Def/CO/CO_vs_LJ_40bb.png",
      "Def/CO/CO_vs_LJ_4Bet_25bb.png",
      "Def/CO/CO_vs_LJ_4Bet_40bb.png",
      "Def/CO/CO_vs_LJ_4Bet_60bb.png",
      "Def/CO/CO_vs_LJ_60bb.png",
      "Def/CO/CO_vs_UTG_15bb.png",
      "Def/CO/CO_vs_UTG_25bb.png",
      "Def/CO/CO_vs_UTG_40bb.png",
      "Def/CO/CO_vs_UTG_4Bet_25bb.png",
      "Def/CO/CO_vs_UTG_4Bet_40bb.png",
      "Def/CO/CO_vs_UTG_4Bet_60bb.png",
      "Def/CO/CO_vs_UTG_60bb.png",
    ],
    BN: [
      "RFI/BN_15bb.png",
      "RFI/BN_25bb.png",
      "RFI/BN_40bb.png",
      "RFI/BN_60bb.png",
      "3Bet/BN_vs_BB_2.3x_vs_3.5x_3Bet_40bb.png",
      "3Bet/BN_vs_BB_3Bet_25bb.png",
      "3Bet/BN_vs_BB_3Bet_60bb.png",
      "3Bet/BN_vs_BB_jam_15bb.png",
      "3Bet/BN_vs_BB_jam_25bb.png",
      "3Bet/BN_vs_SB_2.3x_vs_3.5x_3Bet_40bb.png",
      "3Bet/BN_vs_SB_3Bet_25bb.png",
      "3Bet/BN_vs_SB_3Bet_60bb.png",
      "3Bet/BN_vs_SB_jam_15bb.png",
      "3Bet/BN_vs_SB_jam_25bb.png",
      "Def/BN/BN_vs_CO_15bb.png",
      "Def/BN/BN_vs_CO_25bb.png",
      "Def/BN/BN_vs_CO_40bb.png",
      "Def/BN/BN_vs_CO_4Bet_25bb.png",
      "Def/BN/BN_vs_CO_4Bet_40bb.png",
      "Def/BN/BN_vs_CO_4Bet_60bb.png",
      "Def/BN/BN_vs_CO_60bb.png",
      "Def/BN/BN_vs_LJ_15bb.png",
      "Def/BN/BN_vs_LJ_25bb.png",
      "Def/BN/BN_vs_LJ_40bb.png",
      "Def/BN/BN_vs_LJ_4Bet_25bb.png",
      "Def/BN/BN_vs_LJ_4Bet_40bb.png",
      "Def/BN/BN_vs_LJ_4Bet_60bb.png",
      "Def/BN/BN_vs_LJ_60bb.png",
      "Def/BN/BN_vs_UTG_15bb.png",
      "Def/BN/BN_vs_UTG_25bb.png",
      "Def/BN/BN_vs_UTG_40bb.png",
      "Def/BN/BN_vs_UTG_4Bet_25bb.png",
      "Def/BN/BN_vs_UTG_4Bet_40bb.png",
      "Def/BN/BN_vs_UTG_4Bet_60bb.png",
      "Def/BN/BN_vs_UTG_60bb.png",
    ],
    SB: [
      "RFI/SB_15bb.png",
      "RFI/SB_15bb_limp_vs_3x.png",
      "RFI/SB_15bb_limp_vs_all-in.png",
      "RFI/SB_25bb.png",
      "RFI/SB_25bb_3.5x_vs_all-in_3bet.png",
      "RFI/SB_25bb_limp_vs_3.3x.png",
      "RFI/SB_25bb_limp_vs_all-in.png",
      "RFI/SB_40bb.png",
      "RFI/SB_40bb_3.5x_vs_x2.75_3bet.png",
      "RFI/SB_40bb_limp_vs_3.5x.png",
      "RFI/SB_60bb.png",
      "RFI/SB_60bb_limp_vs_3.5x.png",
      "Def/SB/SB_vs_BN_15bb.png",
      "Def/SB/SB_vs_BN_25bb.png",
      "Def/SB/SB_vs_BN_40bb.png",
      "Def/SB/SB_vs_BN_4Bet_25bb.png",
      "Def/SB/SB_vs_BN_4Bet_40bb.png",
      "Def/SB/SB_vs_BN_4Bet_60bb.png",
      "Def/SB/SB_vs_BN_60bb.png",
      "Def/SB/SB_vs_CO_15bb.png",
      "Def/SB/SB_vs_CO_25bb.png",
      "Def/SB/SB_vs_CO_40bb.png",
      "Def/SB/SB_vs_CO_4Bet_25bb.png",
      "Def/SB/SB_vs_CO_4Bet_40bb.png",
      "Def/SB/SB_vs_CO_4Bet_60bb.png",
      "Def/SB/SB_vs_CO_60bb.png",
      "Def/SB/SB_vs_LJ_15bb.png",
      "Def/SB/SB_vs_LJ_25bb.png",
      "Def/SB/SB_vs_LJ_40bb.png",
      "Def/SB/SB_vs_LJ_4Bet_25bb.png",
      "Def/SB/SB_vs_LJ_4Bet_40bb.png",
      "Def/SB/SB_vs_LJ_4Bet_60bb.png",
      "Def/SB/SB_vs_LJ_60bb.png",
      "Def/SB/SB_vs_UTG_15bb.png",
      "Def/SB/SB_vs_UTG_25bb.png",
      "Def/SB/SB_vs_UTG_40bb.png",
      "Def/SB/SB_vs_UTG_4Bet_25bb.png",
      "Def/SB/SB_vs_UTG_4Bet_40bb.png",
      "Def/SB/SB_vs_UTG_4Bet_60bb.png",
      "Def/SB/SB_vs_UTG_60bb.png",
    ],
    BB: [
      "Def/BB/BB_vs_BN_15bb.png",
      "Def/BB/BB_vs_BN_25bb.png",
      "Def/BB/BB_vs_BN_40bb.png",
      "Def/BB/BB_vs_BN_4bet_25bb.png",
      "Def/BB/BB_vs_BN_4bet_40bb.png",
      "Def/BB/BB_vs_BN_4bet_60bb.png",
      "Def/BB/BB_vs_BN_60bb.png",
      "Def/BB/BB_vs_CO_15bb.png",
      "Def/BB/BB_vs_CO_25bb.png",
      "Def/BB/BB_vs_CO_25bb_4bet.png",
      "Def/BB/BB_vs_CO_40bb.png",
      "Def/BB/BB_vs_CO_4bet_40bb.png",
      "Def/BB/BB_vs_CO_4bet_60bb.png",
      "Def/BB/BB_vs_CO_60bb.png",
      "Def/BB/BB_vs_LJ_15bb.png",
      "Def/BB/BB_vs_LJ_25bb.png",
      "Def/BB/BB_vs_LJ_40bb.png",
      "Def/BB/BB_vs_LJ_4bet_25bb.png",
      "Def/BB/BB_vs_LJ_4bet_40bb.png",
      "Def/BB/BB_vs_LJ_4bet_60bb.png",
      "Def/BB/BB_vs_LJ_60bb.png",
      "Def/BB/BB_vs_SB_3.3x_raise_25bb.png",
      "Def/BB/BB_vs_SB_3.5x_raise_40bb.png",
      "Def/BB/BB_vs_SB_3.5x_raise_60bb.png",
      "Def/BB/BB_vs_SB_4Bet_40bb.png",
      "Def/BB/BB_vs_SB_4Bet_60bb.png",
      "Def/BB/BB_vs_SB_Limp_15bb.png",
      "Def/BB/BB_vs_SB_Limp_25bb.png",
      "Def/BB/BB_vs_SB_Limp_40bb.png",
      "Def/BB/BB_vs_SB_Limp_60bb.png",
      "Def/BB/BB_vs_SB_Limp_Push_15bb.png",
      "Def/BB/BB_vs_SB_Limp_Push_25bb.png",
      "Def/BB/BB_vs_SB_Limp_Raise_40bb.png",
      "Def/BB/BB_vs_SB_Limp_Raise_60bb.png",
      "Def/BB/BB_vs_SB_Push_15bb.png",
      "Def/BB/BB_vs_SB_Push_25bb.png",
      "Def/BB/BB_vs_UTG_15bb.png",
      "Def/BB/BB_vs_UTG_25bb.png",
      "Def/BB/BB_vs_UTG_40bb.png",
      "Def/BB/BB_vs_UTG_4bet_25bb.png",
      "Def/BB/BB_vs_UTG_4bet_40bb.png",
      "Def/BB/BB_vs_UTG_4bet_60bb.png",
      "Def/BB/BB_vs_UTG_60bb.png",
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
