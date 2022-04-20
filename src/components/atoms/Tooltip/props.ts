import { HTMLProps } from 'react';
import { BaseOrientation } from '@/common';

export interface TooltipProps extends HTMLProps<HTMLSpanElement> {
  position?: BaseOrientation;
  noInteraction?: boolean;
  label: string;
}
