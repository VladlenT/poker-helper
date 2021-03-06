import { Position } from '../types/types';
import { formatNumber } from '@angular/common';

export const positions: Position[] = ['UTG', 'MP', 'CO', 'BN', 'SB', 'BB'];

export const ranges: Record<Position, string[]> = {
  BB: [
    'BB_vs_UTG-RFI.png',
    'BB_vs_UTG-4Bet.png',
    'BB_vs_MP-RFI.png',
    'BB_vs_MP-4Bet.png',
    'BB_vs_CO-RFI.png',
    'BB_vs_CO-4Bet.png',
    'BB_vs_BN_RFI.png',
    'BB_vs_BN-4Bet.png',
    'BB_vs_SB-RFI.png',
    'BB_vs_SB-Limp.png',
    'BB_vs_SB-Limp-Raise.png',
    'BB_vs_SB-4Bet.png',
  ],
  BN: [
    'BN_RFI.png',
    'BN_vs_UTG-RFI.png',
    'BN_vs_UTG-4Bet.png',
    'BN_vs_MP-RFI.png',
    'BN_vs_MP-4Bet.png',
    'BN_vs_CO-RFI.png',
    'BN_vs_CO-4Bet.png',
    'BN_vs_SB_3-Bet.png',
    'BN_vs_BB_3-bet.png',
  ],
  CO: [
    'CO_RFI.png',
    'CO_vs_UTG-RFI.png',
    'CO_vs_UTG-4Bet.png',
    'CO_vs_MP-RFI.png',
    'CO_vs_MP-4Bet.png',
    'CO_vs_BN-3Bet.png',
    'CO_vs_SB-3bet.png',
    'CO_vs_BB-3bet.png',
  ],
  MP: [
    'MP_RFI.png',
    'MP_vs_UTG-RFI.png',
    'MP_vs_UTG-4Bet.png',
    'MP_vs_CO-3Bet.png',
    'MP_vs_BN-3Bet.png',
    'MP_vs_SB-3Bet.png',
    'MP_vs_BB-3Bet.png',
  ],
  SB: [
    'SB_RFI.png',
    'SB_vs_UTG-RFI.png',
    'SB_vs_UTG-4Bet.png',
    'SB_vs_MP-RFI.png',
    'SB_vs_MP-4BET.png',
    'SB_vs_CO-RFI.png',
    'SB_vs_CO-4Bet.png',
    'SB_vs_BN-RFI.png',
    'SB_vs_BN-4Bet.png',
    'SB_Limp_vs_BB_3.5x_Iso-Raise.png',
    'SB_3xBet_vs_BB-3Bet.png',
  ],
  UTG: [
    'UTG_RFI.png',
    'UTG_vs_MP-3Bet.png',
    'UTG_vs_CO-3bet.png',
    'UTG_vs_BN-3Bet.png',
    'UTG_vs_SB-3bet.png',
    'UTG_vs_BB-3Bet.png',
  ],
};

export const getRatioFromPercent = (percent: number) => `${formatNumber(1 / percent, 'en')}:1`;
