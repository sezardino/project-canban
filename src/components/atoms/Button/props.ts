import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { LinkProps } from 'react-router-dom';
import { BaseColors, BaseSizes } from '@/common';

interface CommonButtonProps {
  size?: Extract<BaseSizes, 'sm' | 'md' | 'lg'>;
  isLink?: boolean;
  hasPadding?: boolean;
  isFullWidth?: boolean;
  isRounded?: boolean;
  isOutlined?: boolean;
  color?: BaseColors;
}

export type ButtonProps = (LinkProps | DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) &
  CommonButtonProps;
