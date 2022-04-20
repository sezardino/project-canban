import { BaseSizes } from '@/common';
import { HTMLProps } from 'react';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  label?: string;
  size?: Extract<BaseSizes, 'sm' | 'md' | 'lg'>;
  helperText?: string;
}
