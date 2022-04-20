import { HTMLProps } from 'react';
import { BaseColors } from '@/common';

type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  type?: HeadingLevels;
  styledAs?: HeadingLevels;
  color?: BaseColors;
}
