import { HTMLProps } from 'react';
import { BaseColors, BaseSizes, FontWeight } from '@/common';

export interface TextProps extends Omit<HTMLProps<HTMLParagraphElement>, 'size'> {
  size?: Extract<BaseSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'>;
  weight?: FontWeight;
  color?: BaseColors;
}
