import { Card } from '@/common';
import { LinkProps } from 'react-router-dom';

export type CardProps = Partial<LinkProps> & Card;
