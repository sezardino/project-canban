import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { LinkProps } from 'react-router-dom';
import { BaseColors, BaseSizes } from '@/common';

interface CommonButtonProps {
  size?: Extract<BaseSizes, 'xs' | 'sm' | 'md' | 'lg'>;
  variant?: 'filled' | 'outlined' | 'text';
  isFullWidth?: boolean;
  isRounded?: boolean;
  color?: BaseColors;
}

export type ButtonProps = (LinkProps | DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) &
  CommonButtonProps;
