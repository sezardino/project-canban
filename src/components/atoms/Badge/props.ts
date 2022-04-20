import { HTMLProps } from 'react';
import { BaseColors } from '@/common';

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  color?: BaseColors;
  isPill?: boolean;
}
