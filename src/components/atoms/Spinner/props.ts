import { BaseColors, BaseSizes } from '@/common';
import { HTMLProps } from 'react';

export interface SpinnerProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  type?: 'spin' | 'grow' | 'circle';
  color?: BaseColors;
  size?: Extract<BaseSizes, 'sm' | 'md' | 'lg' | 'xl'>;
}
