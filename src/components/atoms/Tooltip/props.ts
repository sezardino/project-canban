import { HTMLProps } from 'react';

export interface TooltipProps extends HTMLProps<HTMLSpanElement> {
  position?: 'top' | 'bottom' | 'left' | 'right';
  noInteraction?: boolean;
  label: string;
}
