import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { LinkProps } from 'react-router-dom';

interface CommonButtonProps {
  isLink?: boolean;
  isFullWidth?: boolean;
  isRounded?: boolean;
  isOutlined?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export type ButtonProps = (LinkProps | DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) &
  CommonButtonProps;
