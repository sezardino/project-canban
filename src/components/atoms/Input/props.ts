import { HTMLProps } from 'react';

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  helperText?: string;
}
