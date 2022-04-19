import { HTMLProps } from 'react';

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  isPill?: boolean;
}
